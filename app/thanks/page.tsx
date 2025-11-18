import PageContainer from "@/components/PageContainer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function ThanksPage({
  searchParams,
}: {
  searchParams: { courseId?: string };
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-muted/30 to-background flex items-center">
      <PageContainer>
        <div className="max-w-2xl mx-auto text-center py-12">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-xl">
              <span className="text-5xl">✓</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">신청이 완료되었습니다!</h1>
            <p className="text-xl text-muted-foreground">
              핸즈온 강의 참가 신청해주셔서 감사합니다
            </p>
          </div>

          <Card className="border-0 shadow-xl rounded-2xl overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>
            <CardHeader className="bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="flex items-center justify-center gap-3">
                <span className="text-2xl">📋</span>
                <CardTitle className="text-2xl">다음 단계</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 text-left pt-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground flex items-center justify-center font-bold shadow-lg">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">확인 이메일</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    24시간 내에 핸즈온 강의 상세 정보와 결제 안내가 포함된 확인 이메일을 받으실 수 있습니다.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground flex items-center justify-center font-bold shadow-lg">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">사전 준비 자료</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    핸즈온 강의 약 1주일 전, 사전 준비 자료와 최종 안내 사항을 보내드립니다.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground flex items-center justify-center font-bold shadow-lg">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">핸즈온 강의 당일</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    15분 일찍 도착해주세요. 의료인 신분증과 확인 이메일에 명시된 준비물을 지참해주시기 바랍니다.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button className="w-full sm:w-auto btn-primary rounded-xl px-8">
                핸즈온 강의 보기 →
              </Button>
            </Link>
            <Link href="/story">
              <Button variant="outline" className="w-full sm:w-auto rounded-xl px-8">
                핸닥 스토리 보기
              </Button>
            </Link>
          </div>

          <div className="mt-8 p-6 rounded-xl bg-muted/30 text-sm text-muted-foreground">
            <p className="leading-relaxed">
              이메일이 보이지 않는다면 스팸 폴더를 확인해주세요. 긴급한 문의사항은{" "}
              <Link href="/faq" className="underline font-medium hover:text-primary">
                자주 묻는 질문
              </Link>
              을 참조해주세요.
            </p>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
