import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { courseId, name, phone, email, hospital, position, experienceLevel, memo } = body;

    // Validate required fields
    if (!courseId || !name || !phone || !email || !hospital || !position || !experienceLevel) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Find the course
    const course = await prisma.course.findUnique({
      where: { id: courseId },
      include: {
        _count: {
          select: { registrations: true },
        },
      },
    });

    if (!course) {
      return NextResponse.json(
        { error: "Course not found" },
        { status: 404 }
      );
    }

    // Determine status based on capacity
    const currentCount = course._count.registrations;
    const status = currentCount >= course.capacity ? "wait" : "applied";

    // Create registration
    const registration = await prisma.registration.create({
      data: {
        courseId,
        name,
        phone,
        email,
        hospital,
        position,
        experienceLevel,
        memo: memo || null,
        status,
      },
    });

    return NextResponse.json({
      success: true,
      registration,
      message: status === "wait"
        ? "You have been added to the waitlist"
        : "Registration successful",
    });
  } catch (error) {
    console.error("Error creating registration:", error);
    return NextResponse.json(
      { error: "Failed to create registration" },
      { status: 500 }
    );
  }
}
