"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import PageContainer from "@/components/PageContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function ApplyPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    hospital: "",
    position: "",
    experienceLevel: "",
    memo: "",
    consent1: false,
    consent2: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "이름을 입력해주세요";
    if (!formData.phone.trim()) newErrors.phone = "연락처를 입력해주세요";
    if (!formData.email.trim()) {
      newErrors.email = "이메일을 입력해주세요";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "올바른 이메일 형식이 아닙니다";
    }
    if (!formData.hospital.trim()) newErrors.hospital = "소속을 입력해주세요";
    if (!formData.position.trim()) newErrors.position = "직위를 입력해주세요";
    if (!formData.experienceLevel) newErrors.experienceLevel = "경험 수준을 선택해주세요";
    if (!formData.consent1) newErrors.consent1 = "환불 규정에 동의해주세요";
    if (!formData.consent2) newErrors.consent2 = "개인정보 처리방침에 동의해주세요";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    if (!validateForm()) {
      setSubmitError("입력 항목을 다시 확인해주세요");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/registrations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          courseId: params.id,
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          hospital: formData.hospital,
          position: formData.position,
          experienceLevel: formData.experienceLevel,
          memo: formData.memo || null,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setSubmitError(data.error || "신청 처리 중 오류가 발생했습니다");
        setIsSubmitting(false);
        return;
      }

      // Redirect to thanks page
      router.push(`/thanks?courseId=${params.id}`);
    } catch (error) {
      setSubmitError("오류가 발생했습니다. 다시 시도해주세요.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted/30 to-background">
      <PageContainer>
        <div className="max-w-3xl mx-auto py-12">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border">
              <span className="text-sm font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                핸즈온 강의 참가 신청
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">핸즈온 강의 신청</h1>
            <p className="text-muted-foreground text-lg">
              핸즈온 강의 참가를 위해 아래 양식을 작성해주세요
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <Card className="border-0 shadow-xl rounded-2xl overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>
              <CardHeader className="bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📝</span>
                  <div>
                    <CardTitle className="text-2xl">신청자 정보</CardTitle>
                    <CardDescription className="mt-2">필수 항목은 *로 표시됩니다</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 pt-8">
                {submitError && (
                  <Alert variant="destructive" className="rounded-xl">
                    <AlertDescription>{submitError}</AlertDescription>
                  </Alert>
                )}

                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base font-medium">
                    이름 <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`rounded-xl ${errors.name ? "border-destructive focus-visible:ring-destructive" : ""}`}
                    placeholder="홍길동"
                  />
                  {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-base font-medium">
                    연락처 <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`rounded-xl ${errors.phone ? "border-destructive focus-visible:ring-destructive" : ""}`}
                    placeholder="010-1234-5678"
                  />
                  {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone}</p>}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base font-medium">
                    이메일 <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`rounded-xl ${errors.email ? "border-destructive focus-visible:ring-destructive" : ""}`}
                    placeholder="example@hospital.com"
                  />
                  {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
                </div>

                {/* Hospital */}
                <div className="space-y-2">
                  <Label htmlFor="hospital" className="text-base font-medium">
                    소속 병원/기관 <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="hospital"
                    value={formData.hospital}
                    onChange={(e) => setFormData({ ...formData, hospital: e.target.value })}
                    className={`rounded-xl ${errors.hospital ? "border-destructive focus-visible:ring-destructive" : ""}`}
                    placeholder="예: 서울대학교병원"
                  />
                  {errors.hospital && <p className="text-sm text-destructive mt-1">{errors.hospital}</p>}
                </div>

                {/* Position */}
                <div className="space-y-2">
                  <Label htmlFor="position" className="text-base font-medium">
                    직위/직급 <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="position"
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    className={`rounded-xl ${errors.position ? "border-destructive focus-visible:ring-destructive" : ""}`}
                    placeholder="예: 레지던트, 펠로우, 전문의"
                  />
                  {errors.position && <p className="text-sm text-destructive mt-1">{errors.position}</p>}
                </div>

                {/* Experience Level */}
                <div className="space-y-2">
                  <Label htmlFor="experienceLevel" className="text-base font-medium">
                    술기 경험 수준 <span className="text-destructive">*</span>
                  </Label>
                  <select
                    id="experienceLevel"
                    value={formData.experienceLevel}
                    onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                    className={`flex h-11 w-full rounded-xl border border-input bg-background px-4 py-2 text-base ${
                      errors.experienceLevel ? "border-destructive" : ""
                    }`}
                  >
                    <option value="">경험 수준 선택</option>
                    <option value="beginner">입문 - 기초 술기 학습 단계</option>
                    <option value="intermediate">중급 - 기본 술기 숙련 단계</option>
                    <option value="advanced">고급 - 심화 술기 익숙 단계</option>
                  </select>
                  {errors.experienceLevel && (
                    <p className="text-sm text-destructive mt-1">{errors.experienceLevel}</p>
                  )}
                </div>

                {/* Memo */}
                <div className="space-y-2">
                  <Label htmlFor="memo" className="text-base font-medium">
                    추가 의견 <span className="text-muted-foreground text-sm">(선택사항)</span>
                  </Label>
                  <Textarea
                    id="memo"
                    value={formData.memo}
                    onChange={(e) => setFormData({ ...formData, memo: e.target.value })}
                    rows={4}
                    className="rounded-xl"
                    placeholder="질문이나 특별한 요구사항이 있으신가요?"
                  />
                </div>

                {/* Privacy Policy Consent */}
                <div className="space-y-4 pt-6 border-t">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                      <input
                        type="checkbox"
                        id="consent2"
                        checked={formData.consent2}
                        onChange={(e) => setFormData({ ...formData, consent2: e.target.checked })}
                        className="mt-1 w-4 h-4 accent-primary"
                      />
                      <Label htmlFor="consent2" className="font-normal leading-relaxed cursor-pointer">
                        <a href="/policy" target="_blank" className="underline font-medium hover:text-primary">
                          개인정보 처리방침
                        </a>
                        에 동의합니다 <span className="text-destructive">*</span>
                      </Label>
                    </div>
                    {errors.consent2 && <p className="text-sm text-destructive pl-4">{errors.consent2}</p>}
                  </div>
                </div>

                {/* Refund Policy Agreement - Prominent Red Section */}
                <div className="mt-8 rounded-2xl border-2 border-red-500 bg-red-50 overflow-hidden">
                  <div className="bg-red-500 px-6 py-3">
                    <h3 className="text-white font-bold text-lg flex items-center gap-2">
                      환불 규정 안내 (필수 확인)
                    </h3>
                  </div>
                  <div className="px-6 py-5 space-y-4">
                    <p className="text-red-800 font-semibold text-base">
                      본 핸즈온 강의의 환불 규정을 반드시 확인하시고 동의해주세요.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-red-200">
                        <span className="text-green-600 font-bold text-lg mt-0.5">1.</span>
                        <div>
                          <p className="font-bold text-gray-900">강의 시작 72시간 전까지 취소 시</p>
                          <p className="text-green-700 font-semibold">전액 환불</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-red-200">
                        <span className="text-orange-600 font-bold text-lg mt-0.5">2.</span>
                        <div>
                          <p className="font-bold text-gray-900">강의 시작 72시간 전 ~ 24시간 전 취소 시</p>
                          <p className="text-orange-600 font-semibold">결제 금액의 50%만 환불</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-red-200">
                        <span className="text-red-600 font-bold text-lg mt-0.5">3.</span>
                        <div>
                          <p className="font-bold text-gray-900">강의 시작 24시간 이내 취소 시</p>
                          <p className="text-red-600 font-bold">환불 불가</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-red-700 text-sm leading-relaxed">
                      * 환불 기준 시점은 강의 시작 시각 기준입니다.<br />
                      * 환불 요청은 이메일로 접수해주세요.<br />
                      * 상세 약관은{" "}
                      <a href="/policy" target="_blank" className="underline font-bold hover:text-red-900">
                        이용약관 페이지
                      </a>
                      에서 확인하실 수 있습니다.
                    </p>
                    <div className="border-t border-red-200 pt-4">
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-red-100 hover:bg-red-200 transition-colors">
                        <input
                          type="checkbox"
                          id="consent1"
                          checked={formData.consent1}
                          onChange={(e) => setFormData({ ...formData, consent1: e.target.checked })}
                          className="w-5 h-5 accent-red-600 cursor-pointer"
                        />
                        <Label htmlFor="consent1" className="font-bold text-red-800 text-base cursor-pointer leading-relaxed">
                          위 환불 규정을 확인하였으며, 이에 동의합니다. <span className="text-red-600">*</span>
                        </Label>
                      </div>
                      {errors.consent1 && <p className="text-sm text-red-600 font-semibold pl-4 mt-2">{errors.consent1}</p>}
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className={`w-full rounded-xl py-6 text-base mt-8 transition-all ${
                    formData.consent1
                      ? "btn-primary"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed hover:bg-gray-300"
                  }`}
                  disabled={isSubmitting || !formData.consent1}
                >
                  {isSubmitting
                    ? "결제 진행 중..."
                    : formData.consent1
                      ? "결제하기"
                      : "환불 규정에 동의해주세요"}
                </Button>
              </CardContent>
            </Card>
          </form>
        </div>
      </PageContainer>
    </div>
  );
}
