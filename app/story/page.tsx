import PageContainer from "@/components/PageContainer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default async function StoryPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative gradient-hero border-gradient overflow-hidden">
        <PageContainer>
          <div className="section-padding text-center max-w-5xl mx-auto relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-primary/20 mb-8 animate-scale-in shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">
                외과 전문의를 위한 프리미엄 술기 교육
              </span>
            </div>

            {/* Main heading */}
            <h1 className="heading-hero mb-6 text-foreground animate-fade-in">
              임상 현장에서 바로 적용 가능한
              <br />
              <span className="gradient-text">실전 외과 술기</span>를 마스터하세요
            </h1>

            {/* Subheading */}
            <p className="text-lead max-w-3xl mx-auto mb-10">
              20년 이상의 임상 경험을 보유한 전문의 강사진과 함께하는 소규모 집중 핸즈온 강의.
              <br />
              이론이 아닌 실습 중심의 교육으로 당신의 술기 역량을 한 단계 높여드립니다.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/">
                <Button className="btn-primary w-full sm:w-auto">
                  프로그램 둘러보기
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </Link>
              <Link href="/faq">
                <Button className="btn-secondary w-full sm:w-auto">
                  자세히 알아보기
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center animate-fade-in stagger-1">
                <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <span className="text-3xl font-bold gradient-text">20+</span>
                </div>
                <div className="text-sm font-medium text-foreground">년 평균 임상 경력</div>
              </div>
              <div className="text-center border-x border-border/50 animate-fade-in stagger-2">
                <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <span className="text-3xl font-bold gradient-text">8:1</span>
                </div>
                <div className="text-sm font-medium text-foreground">수강생 대비 강사 비율</div>
              </div>
              <div className="text-center animate-fade-in stagger-3">
                <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <span className="text-3xl font-bold gradient-text">100%</span>
                </div>
                <div className="text-sm font-medium text-foreground">실습 중심 교육</div>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Why HandDoc Section */}
      <section className="section-padding bg-white">
        <PageContainer>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="heading-section mb-4">
              HandDoc이 다른 이유
            </h2>
            <p className="text-lead">
              단순한 이론 강의가 아닌, 실제 임상에서 즉시 활용 가능한 술기를 배웁니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <Card className="card-premium p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="heading-card mb-4">검증된 강사진</h3>
              <p className="text-body">
                대학병원 교수 및 20년 이상 경력의 전문의가 직접 지도합니다.
                각 분야 최고 전문가의 노하우를 그대로 전수받으세요.
              </p>
            </Card>

            {/* Feature 2 */}
            <Card className="card-premium p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-accent/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="heading-card mb-4">소규모 실습 중심</h3>
              <p className="text-body">
                정원 8-15명의 소규모 핸즈온 강의로 1:1 피드백을 보장합니다.
                실제 수술 장비와 시뮬레이터를 활용한 집중 실습 교육.
              </p>
            </Card>

            {/* Feature 3 */}
            <Card className="card-premium p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="heading-card mb-4">근거 기반 커리큘럼</h3>
              <p className="text-body">
                최신 가이드라인과 문헌을 바탕으로 설계된 체계적 교육과정.
                임상 현장의 실제 케이스를 기반으로 한 실용적 접근.
              </p>
            </Card>
          </div>
        </PageContainer>
      </section>

      {/* How It Works Section */}
      <section className="section-padding gradient-section">
        <PageContainer>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="heading-section mb-4">
              핸즈온 강의 진행 프로세스
            </h2>
            <p className="text-lead">
              체계적인 3단계 학습 과정으로 확실한 술기 향상을 경험하세요
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="relative">
              <div className="card-premium p-8">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg mb-6">
                  1
                </div>
                <h3 className="heading-card mb-3">이론 강의</h3>
                <p className="text-body">
                  해부학적 지식과 술기의 핵심 원리를 30분 집중 강의로 학습합니다.
                </p>
              </div>
              {/* Arrow */}
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-8 text-primary/30">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="card-highlight p-8">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground font-bold text-lg mb-6">
                  2
                </div>
                <h3 className="heading-card mb-3">실습 훈련</h3>
                <p className="text-body">
                  실제 수술 장비와 시뮬레이터를 이용해 4시간 집중 실습. 강사의 1:1 피드백 제공.
                </p>
              </div>
              {/* Arrow */}
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-8 text-primary/30">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Step 3 */}
            <div className="card-premium p-8">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg mb-6">
                3
              </div>
              <h3 className="heading-card mb-3">역량 평가</h3>
              <p className="text-body">
                실습 내용을 바탕으로 개인별 피드백과 향후 학습 방향을 제시합니다.
              </p>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Instructors Section */}
      <section className="section-padding bg-white">
        <PageContainer>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="heading-section mb-4">
              경험과 열정을 갖춘 강사진
            </h2>
            <p className="text-lead">
              대학병원 교수진과 20년 이상 경력의 전문의가 여러분을 지도합니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="card-premium p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="heading-card mb-2">임상 최전선의 전문가</h3>
                  <p className="text-body">
                    현역에서 활발히 진료 중인 전문의들이 최신 술기와 트렌드를 실시간으로 전달합니다.
                  </p>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>대학병원 교수 및 부교수</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>평균 20년 이상의 임상 경력</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>관련 분야 SCI 논문 다수 게재</span>
                </li>
              </ul>
            </Card>

            <Card className="card-premium p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="heading-card mb-2">교육에 대한 열정</h3>
                  <p className="text-body">
                    후배 의사들의 성장을 진심으로 돕고자 하는 강사들의 헌신적인 지도를 경험하세요.
                  </p>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>의과대학 교육 경험 풍부</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>1:1 맞춤형 피드백 제공</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>강의 후 멘토링 가능</span>
                </li>
              </ul>
            </Card>
          </div>
        </PageContainer>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding gradient-hero border-gradient">
        <PageContainer>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-section mb-6">
              지금 바로 시작하세요
            </h2>
            <p className="text-lead mb-10">
              한정된 인원으로 진행되는 프리미엄 핸즈온 강의입니다.
              <br />
              조기 마감될 수 있으니 서둘러 신청하세요.
            </p>
            <Link href="/">
              <Button className="btn-primary">
                프로그램 신청하기
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </Link>
          </div>
        </PageContainer>
      </section>
    </div>
  );
}
