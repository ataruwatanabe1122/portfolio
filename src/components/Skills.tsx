import { skillCategories } from "@/data/profile";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="mb-16">
        <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-3">Skills</p>
        <h2 className="text-3xl md:text-4xl font-light text-gray-900">技術スキル</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <div key={category.label} className="border border-gray-100 rounded-2xl p-6 hover:shadow-sm transition-shadow">
            <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">
              {category.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm text-gray-700 bg-gray-50 px-3 py-1 rounded-full border border-gray-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
