import DogIllustration from "./DogIllustration";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-semibold tracking-widest text-brown-300">04</span>
            <span className="w-6 h-px bg-brown-100" />
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-brown-950">Contact</h2>
        </div>

        <div className="relative rounded-2xl px-8 md:px-14 py-14 md:py-16 overflow-hidden flex flex-col md:flex-row md:items-center gap-10 bg-dark-warm">
          {/* 右の犬イラスト */}
          <div className="absolute bottom-0 right-6 md:right-14 pointer-events-none opacity-15">
            <DogIllustration className="w-36 h-36 md:w-48 md:h-48" />
          </div>

          {/* テキスト */}
          <div className="relative flex-1">
            <p className="text-sm font-light leading-relaxed mb-8 max-w-sm text-brown-300">
              お仕事のご依頼やご相談は、
              <br />
              メールにてお気軽にどうぞ。
            </p>
            {/* Green button — CTA emphasis */}
            <a
              href="mailto:ataru.watanabe1122@gmail.com"
              className="inline-flex items-center gap-3 text-sm font-semibold px-7 py-3.5 rounded bg-forest-900 text-white transition-all hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg"
            >
              メールを送る
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* メールアドレス表示 */}
          <div className="relative hidden md:block">
            <p className="text-sm font-mono tracking-wide text-brown-600">
              ataru.watanabe1122
              <br />
              @gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
