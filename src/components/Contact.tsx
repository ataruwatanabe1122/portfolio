export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-3xl bg-gray-900 px-8 py-16 md:py-20 text-center">
          <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-4">Contact</p>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">お気軽にご連絡ください</h2>
          <p className="text-gray-400 text-sm mb-10 max-w-md mx-auto leading-relaxed">
            お仕事の依頼やご相談は、メールにてお気軽にどうぞ。
          </p>
          <a
            href="mailto:ataru.watanabe1122@gmail.com"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 bg-white px-7 py-3.5 rounded-full hover:bg-gray-100 transition-colors"
          >
            メールを送る
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
