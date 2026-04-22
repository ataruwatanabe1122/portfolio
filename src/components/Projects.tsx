"use client";

import { useState } from "react";
import { projects, type Phase } from "@/data/profile";

const allPhases: Phase[] = ["要件定義", "基本設計", "詳細設計", "実装", "単体テスト", "結合テスト", "保守・運用"];

function PhaseBar({ phases }: { phases: Phase[] }) {
  return (
    <div className="flex flex-wrap gap-1.5 mt-3">
      {allPhases.map((phase) => (
        <span
          key={phase}
          className={`text-xs px-2.5 py-1 rounded font-medium transition-colors border ${
            phases.includes(phase)
              ? "bg-forest-900 text-white border-forest-900"
              : "bg-transparent text-brown-300 border-brown-100"
          }`}
        >
          {phase}
        </span>
      ))}
    </div>
  );
}

export default function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-5">
          <span className="text-xs font-semibold tracking-widest text-brown-300">03</span>
          <span className="w-6 h-px bg-brown-100" />
        </div>
        <h2 className="text-4xl md:text-5xl font-light text-brown-950">Projects</h2>
      </div>

      <div className="space-y-4">
        {projects.map((project, i) => (
          <article
            key={project.id}
            className={`rounded-xl overflow-hidden transition-all duration-300 border ${
              expanded === i ? "border-brown-300 shadow-card" : "border-brown-100"
            }`}
          >
            <button
              className={`w-full text-left p-6 md:p-7 transition-colors ${
                expanded === i ? "bg-brown-warm" : "bg-transparent"
              }`}
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className="text-xs font-medium tracking-wide text-brown-600">
                      {project.period}
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded font-semibold bg-brown-75 text-brown-700">
                      {project.duration}
                    </span>
                  </div>
                  <h3 className="text-base md:text-lg font-semibold leading-snug mb-1 text-brown-950">
                    {project.title}
                  </h3>
                  <p className="text-xs text-brown-600">{project.role}</p>
                </div>
                <span
                  className={`w-7 h-7 rounded flex items-center justify-center text-base font-bold shrink-0 transition-all duration-300 ${
                    expanded === i
                      ? "bg-brown-800 text-white rotate-45"
                      : "bg-brown-75 text-brown-700"
                  }`}
                >
                  +
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-4">
                {project.techStack.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded font-medium bg-forest-100 border border-forest-150 text-forest-900"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 5 && (
                  <span className="text-xs px-2 py-1 text-brown-400">
                    +{project.techStack.length - 5}
                  </span>
                )}
              </div>
            </button>

            {expanded === i && (
              <div className="px-6 md:px-7 pb-7 border-t border-brown-100">
                <div className="pt-6 grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase mb-3 text-brown-600">
                      概要
                    </p>
                    <p className="text-sm leading-relaxed text-brown-800">
                      {project.overview}
                    </p>
                  </div>
                  <div className="space-y-5">
                    <div>
                      <p className="text-xs font-bold tracking-widest uppercase mb-2 text-brown-600">
                        チーム規模
                      </p>
                      <p className="text-sm text-brown-800">{project.teamSize}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest uppercase mb-2 text-brown-600">
                        使用ツール
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="text-xs px-2.5 py-1 rounded bg-brown-50 border border-brown-100 text-brown-700"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest uppercase mb-1 text-brown-600">
                        担当工程
                      </p>
                      <PhaseBar phases={project.phases} />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
