"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { profile } from "@/data/profile";

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    setTimeout(() => {
      el.classList.remove("opacity-0", "translate-y-6");
    }, 150);
  }, []);

  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen overflow-hidden bg-canvas">

      {/* Global background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden>
        <div className="w-[600px] h-[600px] rounded-full bg-forest-100 opacity-15 blur-3xl" />
      </div>

      {/* ── Main content column ── */}
      <div
        ref={contentRef}
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-16 opacity-0 translate-y-6 transition-all duration-1000 ease-out"
      >

        {/* ① Headline */}
        <div className="z-[5] w-full max-w-xs sm:max-w-sm mb-3 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-5 h-px bg-brown-300" />
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-brown-600">
              Watanabe Ataru
            </span>
            <span className="w-5 h-px bg-brown-300" />
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-light leading-[1.35] text-brown-950">
            <strong className="font-bold text-forest-900">プロジェクト全体</strong>
            を意識し
            <br />
            チームを推進する
            <br />
            <span className="inline-flex items-center gap-2">
              フロントエンドエンジニア
            </span>
          </h1>
        </div>

        {/* ② Dog — rings + float animation */}
        <div className="relative flex items-center justify-center w-full py-4 pointer-events-none">
          {/* Pulsing rings */}
          <div className="absolute w-[290px] h-[290px] md:w-[370px] md:h-[370px] rounded-full border border-brown-200 animate-ring-pulse" />
          <div className="absolute w-[370px] h-[370px] md:w-[470px] md:h-[470px] rounded-full border border-brown-100 animate-ring-pulse [animation-delay:0.9s]" />
          <div className="absolute w-[450px] h-[450px] md:w-[570px] md:h-[570px] rounded-full border border-brown-100 animate-ring-pulse [animation-delay:1.8s]" />
          {/* Glow */}
          <div className="absolute w-56 h-56 rounded-full bg-forest-100 opacity-40 blur-2xl" />
          {/* Dog image */}
          <div className="relative z-[2] w-[52vw] max-w-[260px] md:max-w-[340px] animate-float">
            <Image
              src="/hero-siba.png"
              alt=""
              width={260}
              height={260}
              className="w-full h-auto mix-blend-multiply"
              priority
            />
          </div>
        </div>

        {/* ③ Certifications — below dog */}
        <div className="flex flex-wrap gap-2 justify-center mt-4 mb-6">
          {profile.certifications.map((cert) => (
            <span
              key={cert}
              className="text-xs px-3.5 py-1.5 rounded-full font-medium bg-brown-50 border border-brown-150 text-brown-700"
            >
              {cert}
            </span>
          ))}
        </div>

        {/* ④ CTAs — below certs */}
        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => scrollTo("#projects")}
            className="text-sm font-semibold text-white px-8 py-3.5 rounded-full bg-forest-900 transition-all hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5"
          >
            実績を見る
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="text-sm font-semibold px-8 py-3.5 rounded-full border-2 border-brown-300 text-brown-800 bg-transparent transition-all hover:-translate-y-0.5"
          >
            お問い合わせ
          </button>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-[38%] z-10">
        <span className="text-[10px] tracking-[0.25em] uppercase text-brown-700">Scroll</span>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
          <path d="M4 6.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brown-700" />
        </svg>
      </div>
    </section>
  );
}
