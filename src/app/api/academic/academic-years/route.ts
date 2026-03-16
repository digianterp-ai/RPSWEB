import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {

  const years = await prisma.academicYear.findMany({
    orderBy: { startDate: "desc" }
  })

  return NextResponse.json(years)

}

export async function POST(req: Request) {

  const body = await req.json()

  const year = await prisma.academicYear.create({
    data: {
      name: body.name,
      startDate: new Date(body.startDate),
      endDate: new Date(body.endDate)
    }
  })

  return NextResponse.json(year)

}