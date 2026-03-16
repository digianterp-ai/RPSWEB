import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {

  const classes = await prisma.class.findMany({
    orderBy: { name: "asc" }
  })

  return NextResponse.json(classes)

}

export async function POST(req: Request) {

  const body = await req.json()

  const cls = await prisma.class.create({
    data: {
      name: body.name
    }
  })

  return NextResponse.json(cls)

}