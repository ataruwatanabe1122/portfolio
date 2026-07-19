export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-brown-100">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-sm bg-forest-900" />
          <span className="text-brown-600">ATARU.DEV — Watanabe Ataru</span>
        </div>
        <span className="text-brown-400">© {new Date().getFullYear()} All rights reserved.</span>
      </div>
    </footer>
  );
}
