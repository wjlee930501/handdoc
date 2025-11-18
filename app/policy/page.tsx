import PageContainer from "@/components/PageContainer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-muted/30 to-background">
      <PageContainer>
        <div className="max-w-4xl mx-auto py-12">
          <div className="text-center mb-12">
            <h1 className="section-title">정책 안내</h1>
            <p className="section-subtitle">
              핸즈온 강의 참가 전 꼭 확인해주세요
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>
              <CardHeader className="bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">💳</span>
                  <CardTitle className="text-2xl">취소 및 환불 정책</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground pt-6">
                <div className="space-y-2">
                  <p className="flex items-start gap-3">
                    <span className="font-bold text-foreground min-w-[120px]">전액 환불:</span>
                    <span>핸즈온 강의 30일 전까지 취소 시 전액 환불됩니다.</span>
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="flex items-start gap-3">
                    <span className="font-bold text-foreground min-w-[120px]">50% 환불:</span>
                    <span>핸즈온 강의 14-29일 전 취소 시 50% 환불됩니다.</span>
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="flex items-start gap-3">
                    <span className="font-bold text-foreground min-w-[120px]">환불 불가:</span>
                    <span>핸즈온 강의 14일 이내 취소 시 환불이 불가합니다.</span>
                  </p>
                </div>
                <div className="space-y-2 pt-2 border-t">
                  <p className="flex items-start gap-3">
                    <span className="font-bold text-foreground min-w-[120px]">참가자 양도:</span>
                    <span>핸즈온 강의 7일 전까지 무료로 다른 참가자에게 양도 가능합니다.</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>
              <CardHeader className="bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🔒</span>
                  <CardTitle className="text-2xl">개인정보 처리방침</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground pt-6 leading-relaxed">
                <p>
                  HandDoc은 귀하의 개인정보 보호를 최우선으로 합니다. 개인정보는 오직 핸즈온 강의 등록 및 운영 목적으로만 수집됩니다.
                </p>
                <div className="space-y-2">
                  <p>
                    <span className="font-bold text-foreground">수집하는 정보:</span> 이름, 이메일, 연락처, 소속 병원 및 직위
                  </p>
                </div>
                <div className="space-y-2">
                  <p>
                    <span className="font-bold text-foreground">이용 목적:</span> 핸즈온 강의 운영, 참가자 소통, 교육 프로그램 개선
                  </p>
                </div>
                <div className="space-y-2">
                  <p>
                    <span className="font-bold text-foreground">정보 보안:</span> 개인정보 보호를 위한 적절한 보안 조치를 시행합니다
                  </p>
                </div>
                <div className="space-y-2">
                  <p>
                    <span className="font-bold text-foreground">제3자 제공:</span> 마케팅 목적으로 개인정보를 제3자에게 판매하거나 공유하지 않습니다
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>
              <CardHeader className="bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📋</span>
                  <CardTitle className="text-2xl">행동 규범</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground pt-6">
                <p className="leading-relaxed">
                  모든 참가자는 핸즈온 강의 기간 동안 전문가로서의 품위를 유지해야 합니다:
                </p>
                <ul className="list-none space-y-3 pl-4">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>강사와 동료 참가자에 대한 존중</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>시간 엄수 및 충실한 준비</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>모든 논의에서 환자 기밀 유지</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>안전 수칙 및 장비 사용 지침 준수</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>사전 허가 없이 사진 촬영 또는 녹화 금지</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
