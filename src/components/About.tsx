"use client";

import { profile } from "@/data/profile";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="relative bg-brown-950 overflow-hidden">
      <div
        ref={ref}
        className="py-24 px-6 max-w-5xl mx-auto opacity-0 translate-y-10 transition-all duration-700 ease-out"
      >
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-semibold tracking-widest text-brown-300">01</span>
            <span className="w-6 h-px bg-brown-700" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display italic text-white">About</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-4 text-brown-400">
              About Us
            </p>
            <p className="text-sm leading-relaxed whitespace-pre-line text-brown-200 border-l-2 border-forest-700 pl-4">
              {profile.summary}
            </p>
          </div>
          <div className="space-y-7">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-4 text-brown-400">
                Certifications
              </p>
              <ul className="space-y-2">
                {profile.certifications.map((c) => (
                  <li key={c} className="text-sm flex gap-2 items-start text-brown-200">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-sm shrink-0 bg-brown-300" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-3 text-brown-400">
                Location
              </p>
              <p className="text-sm text-brown-200">東武東上線 成増駅</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
