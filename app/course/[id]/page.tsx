import PageContainer from "@/components/PageContainer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Course {
  id: string;
  title: string;
  description: string;
  level: string;
  date: string;
  location: string;
  capacity: number;
  status: string;
  instructor: {
    id: string;
    name: string;
    title: string;
    intro: string;
    profileImage: string | null;
  };
  _count: {
    registrations: number;
  };
}

async function getCourse(id: string): Promise<Course | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL || "http://localhost:3000"}/api/courses/${id}`,
      { cache: "no-store" }
    );
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error("Error fetching course:", error);
    return null;
  }
}

function getStatusBadge(status: string) {
  const variants: Record<string, { variant: "default" | "secondary" | "destructive" | "outline"; label: string }> = {
    open: { variant: "default", label: "신청 가능" },
    waitlist: { variant: "secondary", label: "대기 가능" },
    closed: { variant: "outline", label: "신청 마감" },
  };

  const config = variants[status] || variants.open;
  return <Badge variant={config.variant} className="text-sm font-medium px-4 py-1">{config.label}</Badge>;
}

function getLevelBadge(level: string) {
  const colors: Record<string, string> = {
    Beginner: "bg-green-100 text-green-700 border-green-200",
    Intermediate: "bg-blue-100 text-blue-700 border-blue-200",
    Advanced: "bg-purple-100 text-purple-700 border-purple-200",
  };

  const labels: Record<string, string> = {
    Beginner: "입문",
    Intermediate: "중급",
    Advanced: "고급",
  };

  return (
    <Badge variant="outline" className={`${colors[level] || colors.Beginner} font-medium px-4 py-1`}>
      {labels[level] || level}
    </Badge>
  );
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const course = await getCourse(id);

  if (!course) {
    notFound();
  }

  const isOpen = course.status === "open";
  const isClosed = course.status === "closed";
  const spotsLeft = course.capacity - course._count.registrations;

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted/30 to-background">
      {/* Breadcrumb */}
      <div className="border-b bg-white/50 backdrop-blur-sm">
        <PageContainer>
          <div className="py-4 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">핸즈온</Link>
            {" / "}
            <span className="text-foreground">{course.title}</span>
          </div>
        </PageContainer>
      </div>

      <PageContainer>
        <div className="max-w-6xl mx-auto py-8">
          {/* Course Header */}
          <div className="mb-8 bg-gradient-to-br from-primary/10 via-accent/10 to-background rounded-2xl p-8 border shadow-sm">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
                <div className="flex flex-wrap gap-3">
                  {getStatusBadge(course.status)}
                  {getLevelBadge(course.level)}
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-6">
              {/* Description */}
              <Card className="border-0 shadow-lg rounded-2xl">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📖</span>
                    <CardTitle className="text-2xl">핸즈온 강의 소개</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-base">{course.description}</p>
                </CardContent>
              </Card>

              {/* Curriculum */}
              <Card className="border-0 shadow-lg rounded-2xl">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📚</span>
                    <CardTitle className="text-2xl">커리큘럼</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    자세한 커리큘럼은 등록 후 제공됩니다.
                    핸즈온 강의에서는 핵심 술기와 실습 세션을 다룹니다.
                  </p>
                </CardContent>
              </Card>

              {/* Instructor */}
              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>
                <CardHeader className="bg-gradient-to-br from-primary/5 to-accent/5">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">👨‍⚕️</span>
                    <CardTitle className="text-2xl">강사 소개</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-20 h-20 rounded-2xl avatar-gradient-1 flex items-center justify-center text-white text-3xl font-bold flex-shrink-0 shadow-md">
                      {course.instructor.name.charAt(0)}
                    </div>
                    <div className="space-y-3 flex-1">
                      <div>
                        <p className="font-bold text-xl text-primary mb-1">{course.instructor.name}</p>
                        <p className="text-muted-foreground font-medium text-sm">{course.instructor.title}</p>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground pt-2 border-t">
                        {course.instructor.intro}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Workshop Details */}
              <Card className="border-0 shadow-lg rounded-2xl sticky top-24">
                <CardHeader className="bg-gradient-to-br from-primary/5 to-accent/5">
                  <CardTitle className="text-xl">상세 정보</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5 pt-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <span className="text-xl">📅</span>
                      <span>일정</span>
                    </div>
                    <p className="text-muted-foreground pl-7">{new Date(course.date).toLocaleDateString("ko-KR", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <span className="text-xl">📍</span>
                      <span>장소</span>
                    </div>
                    <p className="text-muted-foreground pl-7">{course.location}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <span className="text-xl">👥</span>
                      <span>정원</span>
                    </div>
                    <p className="text-muted-foreground pl-7">
                      {spotsLeft > 0
                        ? (
                          <>
                            <span className="text-primary font-bold text-lg">{spotsLeft}</span>
                            <span className="text-muted-foreground">명 남음 / {course.capacity}명</span>
                          </>
                        )
                        : <span className="text-destructive font-medium">만석 ({course.capacity}명)</span>}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Registration Button */}
              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>
                <CardContent className="pt-6">
                  {isClosed ? (
                    <Button className="w-full rounded-xl py-6 text-base" disabled>
                      신청 마감
                    </Button>
                  ) : (
                    <Link href={`/apply/${course.id}`} className="block">
                      <Button className="w-full btn-primary rounded-xl py-6 text-base">
                        {isOpen ? "지금 신청하기 →" : "대기 신청하기 →"}
                      </Button>
                    </Link>
                  )}
                  <p className="text-xs text-center text-muted-foreground mt-4 leading-relaxed">
                    신청서 작성이 필요합니다
                  </p>
                </CardContent>
              </Card>

              {/* Back to List */}
              <Link href="/">
                <Button variant="outline" className="w-full rounded-xl">
                  ← 목록으로 돌아가기
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
