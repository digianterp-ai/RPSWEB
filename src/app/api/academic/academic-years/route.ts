import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const body = await req.json();

  const year = await prisma.academicYear.create({
    data: {
      name: body.name,
      startDate: new Date(body.startDate),
      endDate: new Date(body.endDate),
      branchId: "branch_001", // ✅ ADD THIS LINE (MANDATORY)
    },
  });

  return NextResponse.json(year);
}