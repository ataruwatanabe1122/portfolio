import Image from "next/image";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 max-w-5xl mx-auto overflow-hidden">

      {/* Paw print decoration */}
      <div className="absolute bottom-0 right-0 w-28 md:w-36 opacity-[7%] pointer-events-none select-none" aria-hidden>
        <Image src="/nikukyu.png" alt="" width={144} height={332} className="w-full h-auto" />
      </div>

      <div className="mb-16">
        <div className="flex items-center gap-3 mb-5">
          <span className="text-xs font-semibold tracking-widest text-brown-300">01</span>
          <span className="w-6 h-px bg-brown-100" />
        </div>
        <h2 className="text-4xl md:text-5xl font-display italic text-brown-950">About</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-xs font-bold tracking-widest uppercase mb-4 text-brown-600">
            About Us
          </p>
          <p className="text-sm leading-relaxed whitespace-pre-line text-brown-800">
            {profile.summary}
          </p>
        </div>
        <div className="space-y-7">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-4 text-brown-600">
              Certifications
            </p>
            <ul className="space-y-2">
              {profile.certifications.map((c) => (
                <li key={c} className="text-sm flex gap-2 items-start text-brown-800">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-sm shrink-0 bg-brown-400" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-3 text-brown-600">
              Location
            </p>
            <p className="text-sm text-brown-800">東武東上線 成増駅</p>
          </div>
        </div>
      </div>
    </section>
  );
}
