"use client";

import { skillCategories } from "@/data/profile";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Skills() {
  const { ref: headingRef, revealClass: headingReveal } = useScrollReveal();
  const { ref: gridRef, revealClass: gridReveal } = useScrollReveal(150);

  return (
    <section id="skills" className="relative bg-brown-warm overflow-hidden">
      <div className="py-24 px-6 max-w-5xl mx-auto">
        <div ref={headingRef} className={`mb-16 text-center ${headingReveal}`}>
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-8 h-px bg-brown-200" />
            <span className="text-xs font-semibold tracking-widest text-brown-300">02</span>
            <span className="w-8 h-px bg-brown-200" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display italic text-brown-950">Skills</h2>
        </div>

        <div ref={gridRef} className={`grid md:grid-cols-2 lg:grid-cols-3 gap-5 ${gridReveal}`}>
          {skillCategories.map((category, i) => (
            <div
              key={category.label}
              className="relative z-[1] rounded-xl p-5 bg-white border border-brown-100 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg group"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="h-0.5 w-8 rounded-full mb-4 bg-forest-900 transition-all duration-300 group-hover:w-12" />
              <p className="text-xs font-bold tracking-widest uppercase mb-4 text-brown-800">
                {category.label}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded font-medium bg-forest-100 border border-forest-150 text-forest-900"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
