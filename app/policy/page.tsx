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
            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden border-2 border-red-300">
              <div className="h-2 bg-gradient-to-r from-red-500 to-red-600"></div>
              <CardHeader className="bg-red-50">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">💳</span>
                  <CardTitle className="text-2xl text-red-800">취소 및 환불 정책</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-5 pt-6">
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <p className="text-red-800 font-bold text-base mb-1">
                    아래 환불 규정은 모든 핸즈온 강의에 공통 적용됩니다.
                  </p>
                  <p className="text-red-700 text-sm">
                    강의 신청 시 본 환불 규정에 동의하셔야 결제가 가능합니다.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-green-50 border border-green-200">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-base">강의 시작 72시간 전까지 취소 시</p>
                      <p className="text-green-700 font-bold text-lg">전액 환불</p>
                      <p className="text-gray-600 text-sm mt-1">결제하신 금액의 100%를 환불해 드립니다.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-orange-50 border border-orange-200">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-base">강의 시작 72시간 전 ~ 24시간 전 취소 시</p>
                      <p className="text-orange-600 font-bold text-lg">결제 금액의 50%만 환불</p>
                      <p className="text-gray-600 text-sm mt-1">강의 시작까지 72시간~24시간이 남은 시점에서의 취소는 결제 금액의 50%만 환불됩니다.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-red-50 border border-red-300">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-base">강의 시작 24시간 이내 취소 시</p>
                      <p className="text-red-600 font-bold text-lg">환불 불가</p>
                      <p className="text-gray-600 text-sm mt-1">강의 시작까지 24시간 미만이 남은 시점에서는 환불이 불가합니다.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-3 border-t border-red-200">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/30">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">+</span>
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-base">참가자 양도</p>
                      <p className="text-muted-foreground">핸즈온 강의 7일 전까지 무료로 다른 참가자에게 양도 가능합니다.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-100 rounded-xl p-4 text-sm text-gray-600 space-y-1">
                  <p>* 환불 기준 시점은 강의 시작 시각 기준입니다.</p>
                  <p>* 환불 요청은 이메일로 접수해주세요.</p>
                  <p>* 환불 처리에는 영업일 기준 3~5일이 소요될 수 있습니다.</p>
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
