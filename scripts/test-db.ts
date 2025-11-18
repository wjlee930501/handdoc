import { prisma } from "../lib/prisma";

async function main() {
  console.log("Testing database connection...");

  // Create an instructor
  const instructor = await prisma.instructor.create({
    data: {
      name: "Dr. Kim",
      title: "Senior Surgeon",
      intro: "Specialized in minimally invasive surgery",
    },
  });
  console.log("Created instructor:", instructor);

  // Create a course
  const course = await prisma.course.create({
    data: {
      title: "Advanced Surgical Techniques",
      description: "Learn advanced surgical procedures",
      level: "Advanced",
      date: new Date("2025-12-01"),
      location: "Seoul Medical Center",
      capacity: 20,
      instructorId: instructor.id,
    },
  });
  console.log("Created course:", course);

  console.log("Database test successful!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
