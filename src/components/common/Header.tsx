"use client";

import { useState, useEffect, } from "react";
import { useRouter } from "next/navigation"

const navItems = [
  { label: "About",    href: "#about" },
  { label: "Skills",   href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact" },
  { label: "Practice",  href: "/practice" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMenuOpen(false);
    if(href.startsWith('#')) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-canvas/95 backdrop-blur-md border-b border-brown-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-sm bg-forest-900" />
          <span className="text-sm font-bold tracking-widest text-brown-950">
            ATARU.DEV
          </span>
        </div>

        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className="text-sm tracking-wide font-medium text-brown-700 transition-colors group relative"
            >
              <span className="group-hover:text-forest-900 transition-colors">{item.label}</span>
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-forest-900 group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </nav>

        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block w-5 h-0.5 bg-brown-950 transition-all duration-300 ${
                i === 1 && menuOpen ? "opacity-0" : ""
              } ${
                i === 0 && menuOpen ? "rotate-45 translate-y-2" : ""
              } ${
                i === 2 && menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          ))}
        </button>
      </div>

      {menuOpen && (
        <div className="bg-canvas/98 backdrop-blur-md border-t border-brown-100">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className="block w-full text-left px-6 py-4 text-sm font-medium text-brown-950 transition-colors hover:text-forest-900"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
