import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-semibold tracking-widest text-brown-300">04</span>
            <span className="w-6 h-px bg-brown-100" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display italic text-brown-950">Contact</h2>
        </div>

        <div className="rounded-2xl overflow-hidden bg-dark-warm flex items-end gap-0">

          {/* テキスト・CTA — speech bubble pointing right toward dog */}
          <div className="flex-1 py-12 px-8 md:px-10 self-center min-w-0">
            <div className="relative">
              {/* Bubble body */}
              <div className="relative z-[2] rounded-2xl bg-brown-50 border border-brown-200 px-6 py-5">
                <p className="text-sm font-light leading-relaxed mb-6 text-brown-700">
                  お仕事のご依頼やご相談は、メールにてお問い合わせください！
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
