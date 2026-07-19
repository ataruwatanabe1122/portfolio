"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Contact() {
  const { ref, revealClass } = useScrollReveal();
  const bubbleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = bubbleRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("animate-bubble-in"), 350);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-24 px-6 bg-brown-950 relative z-10 rounded-t-3xl [box-shadow:0_-16px_24px_rgba(61,43,31,0.11)]">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto ${revealClass}`}
      >
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-8 h-px bg-brown-700" />
            <span className="text-xs font-semibold tracking-widest text-brown-300">04</span>
            <span className="w-8 h-px bg-brown-700" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display italic text-white">Contact</h2>
        </div>

        <div className="rounded-2xl flex items-end gap-0">

          {/* テキスト・CTA — speech bubble pointing right toward dog */}
          <div className="flex-1 py-12 px-8 md:px-10 self-center min-w-0">
            <div className="relative">
              {/* Bubble body */}
              <div ref={bubbleRef} className="relative z-[2] rounded-2xl bg-brown-50 border border-brown-200 px-6 py-5 opacity-0">
                <p className="text-sm font-light leading-relaxed mb-6 text-brown-700">
                  お仕事のご依頼やご相談は、お気軽にメールにてお問い合わせください！
                  <span className="text-xs font-mono text-brown-400 block">
                    ataru.watanabe1122@gmail.com
                  </span>
                </p>
                <a
                  href="mailto:ataru.watanabe1122@gmail.com"
                  className="inline-flex items-center gap-3 text-sm font-semibold px-7 py-3.5 rounded bg-forest-900 text-white transition-all hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg mb-4"
                >
                  メールを送る
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
              {/* Tail — pointing right toward dog */}
              <div className="absolute right-[-8px] top-1/2 -translate-y-1/2 z-[1] w-4 h-4 bg-brown-50 border-r border-b border-brown-200 rotate-[-45deg]" />
            </div>
          </div>

          {/* Smiling dog — bottom-aligned, pulled close */}
          <div className="hidden md:block w-48 lg:w-60 shrink-0 -mb-1">
            <Image
              src="/siba-smile.png"
              alt=""
              width={240}
              height={240}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
