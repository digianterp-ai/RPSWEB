import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const body = await req.json();

  const cls = await prisma.class.create({
    data: {
      name: body.name,
      branchId: "branch_001", // ✅ FIX
    },
  });

  return NextResponse.json(cls);
}