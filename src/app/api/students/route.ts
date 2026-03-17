import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { generateAdmissionNumber } from "@/lib/generateAdmissionNumber";

// GET students list
export async function GET() {
  const students = await prisma.student.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(students);
}

// CREATE student
export async function POST(req: Request) {
  const body = await req.json();

  const admissionNumber = await generateAdmissionNumber();

  const branchId = "branch_001"; // ✅ TEMP FIX

  const student = await prisma.student.create({
    data: {
      firstName: body.firstName,
      lastName: body.lastName,
      gender: body.gender,
      dateOfBirth: new Date(body.dateOfBirth),
      admissionNumber,

      branchId, // ✅ REQUIRED
    },
  });

  await prisma.studentAcademic.create({
    data: {
      studentId: student.id,
      classId: body.classId,
      sectionId: body.sectionId,
      academicYearId: body.academicYearId,

      branchId, // ✅ ADD HERE ALSO (IMPORTANT)
    },
  });

  return NextResponse.json(student);
}