import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const body = await req.json();

  const section = await prisma.section.create({
    data: {
      name: body.name,

      branchId: "branch_001", // ✅ REQUIRED

      class: {
        connect: { id: body.classId }, // ✅ FIX RELATION
      },
    },
  });

  return NextResponse.json(section);
}