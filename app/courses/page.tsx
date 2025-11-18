import PageContainer from "@/components/PageContainer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

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
    name: string;
    title: string;
  };
  _count: {
    registrations: number;
  };
}

async function getCourses(): Promise<Course[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL || "http://localhost:3000"}/api/courses`, {
      cache: "no-store",
    });
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
}

function getStatusConfig(status: string) {
  const config: Record<string, { className: string; label: string; icon: string }> = {
    open: {
      className: "badge-success",
      label: "모집 중",
      icon: "✓",
    },
    waitlist: {
      className: "badge-warning",
      label: "대기 등록",
      icon: "⏱",
    },
    closed: {
      className: "badge-primary opacity-60",
      label: "마감",
      icon: "✕",
    },
  };

  return config[status] || config.open;
}

function getLevelConfig(level: string) {
  const config: Record<string, { className: string; label: string }> = {
    Beginner: { className: "badge-success", label: "입문" },
    Intermediate: { className: "badge-accent", label: "중급" },
    Advanced: { className: "badge-primary", label: "고급" },
  };

  return config[level] || config.Beginner;
}

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero border-gradient">
        <PageContainer>
          <div className="section-padding-sm text-center max-w-4xl mx-auto">
            <h1 className="heading-hero mb-6">
              전문 술기 교육 프로그램
            </h1>
            <p className="text-lead mb-8">
              대한민국 최고 수준의 외과 전문의 강사진이 직접 진행하는
              <br className="hidden md:block" />
              소규모 집중 핸즈온 강의에 참여하세요
            </p>

            {/* Quick stats */}
            <div className="flex justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>소규모 정원 (8-15명)</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>전일 집중 교육</span>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Courses Section */}
      <section className="section-padding bg-white">
        <PageContainer>
          {courses.length === 0 ? (
            <Card className="card-premium max-w-2xl mx-auto">
              <CardContent className="py-16 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-muted flex items-center justify-center">
                  <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="heading-card mb-3">현재 모집 중인 핸즈온 강의가 없습니다</h3>
                <p className="text-body mb-6">
                  곧 새로운 핸즈온 강의가 공개될 예정입니다.
                  <br />
                  조금만 기다려주세요!
                </p>
                <Link href="/faq">
                  <Button className="btn-secondary">
                    FAQ 보기
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course, index) => {
                  const statusConfig = getStatusConfig(course.status);
                  const levelConfig = getLevelConfig(course.level);
                  const spotsLeft = course.capacity - course._count.registrations;
                  const isLowCapacity = spotsLeft <= 3 && spotsLeft > 0;
                  const thumbClass = `course-thumb-${(index % 5) + 1}`;

                  return (
                    <Card key={course.id} className="card-interactive flex flex-col overflow-hidden animate-fade-in">
                      {/* Course Thumbnail */}
                      <div className={`h-48 ${thumbClass} flex items-center justify-center relative overflow-hidden group`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative z-10 text-center p-6">
                          <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                            <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                          </div>
                          <div className="text-white font-semibold text-lg drop-shadow-lg line-clamp-2">
                            {course.title}
                          </div>
                        </div>
                      </div>

                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <CardTitle className="text-xl flex-1 leading-snug">
                            {course.title}
                          </CardTitle>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          <span className={statusConfig.className}>
                            {statusConfig.icon} {statusConfig.label}
                          </span>
                          <span className={levelConfig.className}>
                            {levelConfig.label}
                          </span>
                          {isLowCapacity && (
                            <span className="badge-warning">
                              🔥 {spotsLeft}석 남음
                            </span>
                          )}
                        </div>
                      </CardHeader>

                      <CardContent className="flex-1 pb-4">
                        <p className="text-sm text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                          {course.description}
                        </p>

                        <div className="space-y-3 text-sm">
                          {/* Instructor */}
                          <div className="flex items-start gap-3">
                            <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white font-semibold avatar-gradient-${(index % 3) + 1}`}>
                              {course.instructor.name.charAt(0)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-foreground truncate">{course.instructor.name}</p>
                              <p className="text-xs text-muted-foreground truncate">{course.instructor.title}</p>
                            </div>
                          </div>

                          {/* Date */}
                          <div className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="text-muted-foreground">
                              {new Date(course.date).toLocaleDateString('ko-KR', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                weekday: 'short'
                              })}
                            </span>
                          </div>

                          {/* Location */}
                          <div className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="text-muted-foreground truncate">{course.location}</span>
                          </div>

                          {/* Capacity */}
                          <div className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span className="text-muted-foreground">
                              <strong className="text-primary font-semibold">{course._count.registrations}</strong>
                              <span className="text-muted-foreground/70">/{course.capacity}명</span>
                            </span>
                          </div>
                        </div>
                      </CardContent>

                      <CardFooter className="bg-secondary/30 pt-4">
                        <Link href={`/courses/${course.id}`} className="w-full">
                          <Button className="btn-secondary w-full">
                            상세 정보 보기
                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}
        </PageContainer>
      </section>
    </div>
  );
}
