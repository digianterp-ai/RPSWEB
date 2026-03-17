import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const { classes, sections } = await req.json();

  const branchId = "branch_001"; // ✅ TEMP FIX

  for (const className of classes) {
    const newClass = await prisma.class.create({
      data: {
        name: className,
        branchId, // ✅ FIX
      },
    });

    for (const sec of sections) {
      await prisma.section.create({
        data: {
          name: sec,
          classId: newClass.id,
          branchId, // ✅ FIX
        },
      });
    }
  }

  return NextResponse.json({
    message: "Classes & Sections created",
  });
}