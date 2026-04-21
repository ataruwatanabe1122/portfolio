"use client";

import { useState } from "react";
import { projects, type Phase } from "@/data/profile";

const allPhases: Phase[] = ["要件定義", "基本設計", "詳細設計", "実装", "単体テスト", "結合テスト", "保守・運用"];

function PhaseBar({ phases }: { phases: Phase[] }) {
  return (
    <div className="flex flex-wrap gap-1.5 mt-4">
      {allPhases.map((phase) => (
        <span
          key={phase}
          className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
            phases.includes(phase)
              ? "bg-gray-900 text-white border-gray-900"
              : "bg-transparent text-gray-300 border-gray-200"
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
        <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-3">Projects</p>
        <h2 className="text-3xl md:text-4xl font-light text-gray-900">プロジェクト実績</h2>
      </div>

      <div className="space-y-6">
        {projects.map((project, i) => (
          <article
            key={project.id}
            className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-sm transition-shadow"
          >
            {/* Header */}
            <button
              className="w-full text-left p-6 md:p-8"
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className="text-xs font-medium text-gray-400 tracking-wide">
                      {project.period}
                    </span>
                    <span className="text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full border border-gray-100">
                      {project.duration}
                    </span>
                  </div>
                  <h3 className="text-base md:text-lg font-medium text-gray-900 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">{project.role}</p>
                </div>
                <span
                  className={`text-gray-400 text-lg shrink-0 transition-transform duration-200 ${
                    expanded === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </div>

              {/* Tech tags preview */}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {project.techStack.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-gray-600 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 5 && (
                  <span className="text-xs text-gray-400 px-2.5 py-1">
                    +{project.techStack.length - 5}
                  </span>
                )}
              </div>
            </button>

            {/* Expanded content */}
            {expanded === i && (
              <div className="px-6 md:px-8 pb-8 border-t border-gray-50">
                <div className="pt-6 grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3">
                      概要
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">{project.overview}</p>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3">
                        チーム規模
                      </p>
                      <p className="text-sm text-gray-700">{project.teamSize}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3">
                        使用ツール
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="text-xs text-gray-500 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-full"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2">
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
