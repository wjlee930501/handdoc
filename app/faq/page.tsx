import PageContainer from "@/components/PageContainer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQPage() {
  const faqs = [
    {
      question: "누가 HandDoc 핸즈온 강의에 참가할 수 있나요?",
      answer:
        "핸즈온 강의는 외과 술기 향상에 관심있는 레지던트, 펠로우, 전문의 등 의료 전문가를 대상으로 합니다. 일부 핸즈온 강의는 경험 수준에 따른 사전 요건이 있을 수 있습니다.",
    },
    {
      question: "핸즈온 강의에 무엇을 가져가야 하나요?",
      answer:
        "유효한 의료인 신분증, 편안한 복장, 필기도구를 가져오세요. 모든 수술 장비와 재료는 제공됩니다. 특정 핸즈온 강의의 경우 추가 준비물이 있을 수 있으며, 등록 시 안내드립니다.",
    },
    {
      question: "핸즈온 강의에 자리가 있는지 어떻게 알 수 있나요?",
      answer:
        "핸즈온 강의 상세 페이지에서 실시간 잔여 좌석을 확인할 수 있습니다. 핸즈온 강의가 만석인 경우 대기자 명단에 등록하시면 자리가 생길 때 알림을 받으실 수 있습니다.",
    },
    {
      question: "등록을 취소해야 하는 경우 어떻게 하나요?",
      answer:
        "자세한 내용은 취소 및 환불 정책 페이지를 참조해주세요. 일반적으로 일찍 취소할수록 더 많은 환불을 받으실 수 있습니다. 다른 적격 전문가에게 자리를 양도하실 수도 있습니다.",
    },
    {
      question: "수료증을 받을 수 있나요?",
      answer:
        "네, 핸즈온 강의 전체를 이수한 모든 참가자에게 수료증이 발급됩니다. 일부 핸즈온 강의는 평점도 제공할 수 있으며, 이는 핸즈온 강의 설명에 명시됩니다.",
    },
    {
      question: "핸즈온 강의 시간은 어떻게 되나요?",
      answer:
        "대부분의 핸즈온 강의는 오전 9시에 시작하여 오후 5-6시에 종료됩니다. 점심 식사와 휴식 시간이 포함되어 있습니다. 정확한 일정은 핸즈온 강의마다 다르며 등록 확인서에 명시됩니다.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted/30 to-background">
      <PageContainer>
        <div className="max-w-3xl mx-auto py-12">
          <div className="text-center mb-12">
            <h1 className="section-title">자주 묻는 질문</h1>
            <p className="section-subtitle">
              핸즈온 강의에 대한 궁금증을 해결해드립니다
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-0 shadow-lg rounded-2xl px-6 bg-white overflow-hidden"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6 text-lg hover:text-primary transition-colors">
                  <div className="flex items-start gap-3">
                    <span className="text-primary mt-1">Q.</span>
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 pl-8 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 p-8 gradient-bg rounded-2xl border shadow-lg">
            <div className="flex items-start gap-4">
              <span className="text-3xl">💬</span>
              <div>
                <h2 className="font-bold text-xl mb-3">추가 문의사항이 있으신가요?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  원하는 답변을 찾지 못하셨다면, 핸즈온 강의 신청서의 추가 의견란을 통해 문의하시거나
                  핸즈온 강의 담당자에게 직접 연락해주세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
