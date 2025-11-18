import "dotenv/config";
import { PrismaClient } from "../lib/generated/prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Starting seed...");

  // Clear existing data (optional, for development)
  await prisma.registration.deleteMany();
  await prisma.course.deleteMany();
  await prisma.instructor.deleteMany();

  // Create Instructors
  const instructor1 = await prisma.instructor.upsert({
    where: { id: "instructor-1" },
    update: {},
    create: {
      id: "instructor-1",
      name: "김승현 교수",
      title: "서울대학교병원 외과 교수, 외과 전문의",
      intro:
        "서울대학교 의과대학을 졸업하고 동 대학원에서 박사학위를 취득했습니다. 대한외과학회 정회원이며, 복강경 수술 분야에서 20년 이상의 임상 경험을 보유하고 있습니다. SCI 논문 50편 이상 게재, 대한복강경외과학회 이사를 역임하고 있습니다.",
      profileImage: null,
    },
  });

  const instructor2 = await prisma.instructor.upsert({
    where: { id: "instructor-2" },
    update: {},
    create: {
      id: "instructor-2",
      name: "박정민 교수",
      title: "서울아산병원 외과 부교수, 외과 전문의",
      intro:
        "연세대학교 의과대학 졸업 후 서울아산병원에서 전공의 과정을 마쳤습니다. Johns Hopkins Hospital에서 연수를 마치고 귀국하여 현재 복강경 및 로봇 수술 전문가로 활동 중입니다. 대한외과학회 학술위원, 국제 학술지 편집위원으로 활동하고 있습니다.",
      profileImage: null,
    },
  });

  const instructor3 = await prisma.instructor.upsert({
    where: { id: "instructor-3" },
    update: {},
    create: {
      id: "instructor-3",
      name: "이현우 교수",
      title: "삼성서울병원 외과 교수, 외과 전문의",
      intro:
        "가톨릭대학교 의과대학 졸업 후 삼성서울병원에서 외과 전문의를 취득했습니다. 미국 Cleveland Clinic에서 최소침습수술 fellowship을 마쳤으며, 현재 삼성서울병원 외과 교수로 재직 중입니다. 대한내시경복강경외과학회 교육이사를 맡고 있습니다.",
      profileImage: null,
    },
  });

  console.log("Created instructors:", instructor1.name, instructor2.name, instructor3.name);

  // Create Courses
  const course1 = await prisma.course.upsert({
    where: { id: "course-1" },
    update: {},
    create: {
      id: "course-1",
      title: "복강경 기본 술기 마스터 과정",
      description:
        "복강경 수술의 기초부터 심화까지 체계적으로 학습하는 집중 과정입니다. 트로카 삽입, 카메라 조작, 기본 봉합술 등 핵심 술기를 실습 중심으로 익히며, 시뮬레이터와 실제 장비를 활용한 hands-on training을 제공합니다. 외과 레지던트 및 전임의를 대상으로 합니다.",
      level: "Beginner",
      date: new Date("2025-06-15T09:00:00"),
      location: "서울대학교병원 임상의학연구소 Skills Lab",
      capacity: 12,
      status: "open",
      visibility: true,
      instructorId: instructor1.id,
    },
  });

  const course2 = await prisma.course.upsert({
    where: { id: "course-2" },
    update: {},
    create: {
      id: "course-2",
      title: "로봇 수술 시스템 운용 실전 과정",
      description:
        "da Vinci 수술 로봇 시스템의 기본 조작법부터 실전 술기까지 배우는 심화 과정입니다. 콘솔 조작, 인스트루먼트 교환, 복강 내 봉합 및 문합 등을 시뮬레이터로 충분히 연습한 후, 동물 모델을 이용한 실습으로 마무리합니다. 로봇 수술 경험이 있는 전문의를 대상으로 합니다.",
      level: "Advanced",
      date: new Date("2025-05-20T09:00:00"),
      location: "서울아산병원 로봇수술센터",
      capacity: 8,
      status: "open",
      visibility: true,
      instructorId: instructor2.id,
    },
  });

  const course3 = await prisma.course.upsert({
    where: { id: "course-3" },
    update: {},
    create: {
      id: "course-3",
      title: "내시경 지혈술 및 응급 시술 과정",
      description:
        "위장관 출혈 환자에 대한 내시경 지혈술과 응급 상황 대처법을 집중적으로 교육합니다. 클립, 밴드 결찰, 아르곤 플라즈마 응고술 등 다양한 지혈 기법을 모형을 통해 실습하고, 실제 증례를 바탕으로 의사결정 과정을 토론합니다. 내과 및 외과 전공의, 전임의 대상입니다.",
      level: "Intermediate",
      date: new Date("2025-07-10T09:00:00"),
      location: "삼성서울병원 내시경센터",
      capacity: 15,
      status: "waitlist",
      visibility: true,
      instructorId: instructor3.id,
    },
  });

  const course4 = await prisma.course.upsert({
    where: { id: "course-4" },
    update: {},
    create: {
      id: "course-4",
      title: "고난도 봉합술 집중 트레이닝",
      description:
        "복강경 환경에서의 고난도 봉합 및 매듭법을 집중 훈련하는 과정입니다. 다양한 각도와 깊이에서의 봉합 연습, 체강 내 매듭, 연속 봉합법 등을 반복 실습합니다. 박스 트레이너와 VR 시뮬레이터를 병행하여 충분한 연습 기회를 제공합니다.",
      level: "Intermediate",
      date: new Date("2025-06-25T09:00:00"),
      location: "서울대학교병원 임상의학연구소 Skills Lab",
      capacity: 10,
      status: "open",
      visibility: true,
      instructorId: instructor1.id,
    },
  });

  const course5 = await prisma.course.upsert({
    where: { id: "course-5" },
    update: {},
    create: {
      id: "course-5",
      title: "단일공 복강경 수술 마스터 클래스",
      description:
        "단일공 복강경 수술(Single Incision Laparoscopic Surgery)의 원리와 실제 술기를 배우는 고급 과정입니다. 포트 삽입, 특수 인스트루먼트 활용, 삼각 구도 확보 등 단일공 수술의 핵심 기법을 익히고, 실습을 통해 난이도를 극복하는 방법을 습득합니다.",
      level: "Advanced",
      date: new Date("2025-08-05T09:00:00"),
      location: "서울아산병원 외과 Skills Lab",
      capacity: 10,
      status: "open",
      visibility: true,
      instructorId: instructor2.id,
    },
  });

  console.log(
    "Created courses:",
    course1.title,
    course2.title,
    course3.title,
    course4.title,
    course5.title
  );

  console.log("Seed completed successfully!");
}

main()
  .catch((e) => {
    console.error("Error during seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
