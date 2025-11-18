import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Clear existing data
    await prisma.registration.deleteMany();
    await prisma.course.deleteMany();
    await prisma.instructor.deleteMany();

    // Create Instructors
    const instructor1 = await prisma.instructor.create({
      data: {
        name: "Dr. Sarah Kim",
        title: "Professor of Surgery, Seoul National University Hospital",
        intro: "Dr. Kim is a board-certified surgeon with over 20 years of experience in minimally invasive surgery.",
      },
    });

    const instructor2 = await prisma.instructor.create({
      data: {
        name: "Dr. James Park",
        title: "Chief of Surgical Services, Asan Medical Center",
        intro: "Dr. Park specializes in advanced laparoscopic techniques and robotic surgery.",
      },
    });

    // Create Courses
    const course1 = await prisma.course.create({
      data: {
        title: "Advanced Laparoscopic Techniques",
        description: "Master advanced laparoscopic procedures with hands-on practice.",
        level: "Advanced",
        date: new Date("2025-06-15T09:00:00"),
        location: "Seoul Surgical Training Center",
        capacity: 20,
        status: "open",
        instructorId: instructor1.id,
      },
    });

    const course2 = await prisma.course.create({
      data: {
        title: "Fundamentals of Surgical Skills",
        description: "Build a strong foundation in essential surgical techniques.",
        level: "Beginner",
        date: new Date("2025-05-20T09:00:00"),
        location: "Asan Medical Center Education Hall",
        capacity: 15,
        status: "open",
        instructorId: instructor2.id,
      },
    });

    const course3 = await prisma.course.create({
      data: {
        title: "Robotic Surgery Masterclass",
        description: "Explore the latest in robotic-assisted surgery.",
        level: "Intermediate",
        date: new Date("2025-07-10T09:00:00"),
        location: "Samsung Medical Center Robotics Lab",
        capacity: 12,
        status: "waitlist",
        instructorId: instructor2.id,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Database seeded successfully",
      data: {
        instructors: [instructor1, instructor2],
        courses: [course1, course2, course3],
      },
    });
  } catch (error) {
    console.error("Seed error:", error);
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}
