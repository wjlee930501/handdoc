import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container-content flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center space-x-2 font-bold text-xl tracking-tight text-primary hover:text-primary/80 transition-colors"
        >
          <span className="text-primary">Hand</span>
          <span className="text-accent">Doc</span>
        </Link>

        <nav className="flex items-center gap-1">
          <Link
            href="/"
            className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-secondary/50 rounded-md transition-all"
          >
            핸즈온
          </Link>
          <Link
            href="/story"
            className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-secondary/50 rounded-md transition-all"
          >
            핸닥 스토리
          </Link>
          <Link
            href="/faq"
            className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-secondary/50 rounded-md transition-all"
          >
            FAQ
          </Link>
          <Link
            href="/policy"
            className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-secondary/50 rounded-md transition-all"
          >
            이용약관
          </Link>
        </nav>
      </div>
    </header>
  );
}
