import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-gradient-section mt-auto">
      <div className="container-content">
        {/* Main footer content */}
        <div className="grid md:grid-cols-4 gap-12 py-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold text-primary">Hand</span>
              <span className="text-xl font-bold text-accent">Doc</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              외과 전문의를 위한 프리미엄 술기 교육 플랫폼. <br />
              최고의 강사진과 함께 당신의 임상 역량을 한 단계 높이세요.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-foreground">프로그램</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  전체 핸즈온 강의
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  자주 묻는 질문
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-foreground">지원</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/policy" className="text-muted-foreground hover:text-primary transition-colors">
                  정책 안내
                </Link>
              </li>
              <li>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  문의: 핸즈온 강의 신청서의<br />추가 의견란을 이용해주세요
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/40 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} HandDoc. 의료 전문가를 위한 실전 술기 교육.
            </p>
            <p className="text-xs text-muted-foreground">
              Professional Surgical Skills Training
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
