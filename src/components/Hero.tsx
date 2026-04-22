"use client";

import { useEffect, useRef } from "react";
import { profile } from "@/data/profile";
import DogIllustration from "./DogIllustration";

export default function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    setTimeout(() => {
      el.classList.remove("opacity-0", "translate-y-7");
    }, 100);
  }, []);

  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">

      {/* Background concentric circles */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden>
        <div className="absolute circle-sm rounded-full border border-brown-100" />
        <div className="absolute circle-md rounded-full border border-brown-100" />
        <div className="absolute circle-lg rounded-full border border-brown-100" />
      </div>

      {/* Accent dots */}
      <div className="absolute top-1/4 right-16 md:right-28 w-3 h-3 rounded-full pointer-events-none bg-brown-200 opacity-60" aria-hidden />
      <div className="absolute bottom-1/3 left-10 md:left-20 w-2 h-2 rounded-full pointer-events-none bg-brown-300 opacity-55" aria-hidden />
      <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 rounded-full pointer-events-none bg-brown-300 opacity-40" aria-hidden />

      <div
        ref={wrapRef}
        className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto pt-24 pb-20 opacity-0 translate-y-7 transition-all duration-1000 ease-out"
      >

        {/* Dog illustration — main visual */}
        <div className="relative mb-10">
          <div className="w-52 h-52 md:w-64 md:h-64 rounded-full flex items-end justify-center dog-circle-bg border-2 border-brown-300 shadow-hero">
            <DogIllustration className="w-44 h-44 md:w-56 md:h-56" />
          </div>
          {/* Green badge — emphasis */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.22em] uppercase whitespace-nowrap bg-forest-900 text-white shadow-badge">
            Frontend Engineer
          </div>
        </div>

        {/* Name with decorative lines */}
        <div className="flex items-center gap-4 mt-4 mb-8">
          <span className="w-10 h-px bg-brown-300" />
          <p className="text-xs font-semibold tracking-[0.28em] uppercase text-brown-700">
            Watanabe Ataru
          </p>
          <span className="w-10 h-px bg-brown-300" />
        </div>

        {/* Main headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.18] mb-9 text-brown-950">
          フロントエンドを軸に
          <br />
          {/* Green — emphasis only */}
          <strong className="font-bold text-forest-900">
            設計・プロセス・チーム
          </strong>
          <br />
          すべてに関わる
          <br />
          エンジニア
        </h1>

        {/* Certifications — brown toned */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {profile.certifications.map((cert) => (
            <span
              key={cert}
              className="text-xs px-3.5 py-1.5 rounded-full font-medium bg-brown-50 border border-brown-150 text-brown-700"
            >
              {cert}
            </span>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-3 justify-center">
          {/* Primary — green emphasis */}
          <button
            onClick={() => scrollTo("#projects")}
            className="text-sm font-semibold text-white px-8 py-3.5 rounded-full bg-forest-900 transition-all hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5"
          >
            実績を見る
          </button>
          {/* Secondary — brown */}
          <button
            onClick={() => scrollTo("#contact")}
            className="text-sm font-semibold px-8 py-3.5 rounded-full border-2 border-brown-300 text-brown-800 bg-transparent transition-all hover:-translate-y-0.5"
          >
            お問い合わせ
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-[38%]">
        <span className="text-[10px] tracking-[0.25em] uppercase text-brown-700">Scroll</span>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
          <path d="M4 6.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brown-700" />
        </svg>
      </div>
    </section>
  );
}
