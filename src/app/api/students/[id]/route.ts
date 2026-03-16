import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {

  const student = await prisma.student.findUnique({
    where: { id: params.id }
  })

  if (!student) {
    return NextResponse.json(
      { error: "Student not found" },
      { status: 404 }
    )
  }

  return NextResponse.json(student)

}