"use client";

import { useEffect, useRef } from "react";
import { profile } from "@/data/profile";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    setTimeout(() => {
      el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 100);
  }, []);

  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-16 max-w-5xl mx-auto">
      <div className="py-24 md:py-32">
        <p className="text-xs tracking-[0.3em] text-gray-400 mb-6 uppercase">Frontend Engineer</p>
        <h1 ref={titleRef} className="text-5xl md:text-7xl font-light text-gray-900 leading-tight mb-8">
          Watanabe
          <br />
          <span className="font-semibold">Ataru</span>
        </h1>
        <p className="text-base md:text-lg text-gray-500 max-w-xl leading-relaxed mb-12">
          フロントエンドを主軸に、設計・プロセス改善・チームビルディングまで幅広く担う
          <br className="hidden md:block" />
          エンジニア / スクラムマスター
        </p>

        <div className="flex flex-wrap gap-3 mb-16">
          {profile.certifications.map((cert) => (
            <span
              key={cert}
              className="text-xs px-3 py-1.5 border border-gray-200 text-gray-500 rounded-full"
            >
              {cert}
            </span>
          ))}
        </div>

        <div className="flex gap-6">
          <button
            onClick={() => handleScroll("#projects")}
            className="text-sm font-medium text-white bg-gray-900 px-6 py-3 rounded-full hover:bg-gray-700 transition-colors"
          >
            実績を見る
          </button>
          <button
            onClick={() => handleScroll("#contact")}
            className="text-sm font-medium text-gray-700 border border-gray-300 px-6 py-3 rounded-full hover:border-gray-500 transition-colors"
          >
            お問い合わせ
          </button>
        </div>
      </div>

      <div className="pb-16 grid md:grid-cols-2 gap-12 border-t border-gray-100 pt-12">
        <div>
          <h2 className="text-xs tracking-widest text-gray-400 uppercase mb-4">About</h2>
          <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
            {profile.summary}
          </p>
        </div>
        <div className="space-y-6">
          <div>
            <p className="text-xs tracking-widest text-gray-400 uppercase mb-3">Certifications</p>
            <ul className="space-y-2">
              {profile.certifications.map((c) => (
                <li key={c} className="text-sm text-gray-700 flex gap-2 items-start">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-400 shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-widest text-gray-400 uppercase mb-3">Location</p>
            <p className="text-sm text-gray-700">東武東上線 成増駅</p>
          </div>
        </div>
      </div>
    </section>
  );
}
