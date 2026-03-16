import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(req: Request) {

  const { classes, sections } = await req.json()

  for (const className of classes) {

    const newClass = await prisma.class.create({
      data: { name: className }
    })

    for (const sec of sections) {

      await prisma.section.create({
        data: {
          name: sec,
          classId: newClass.id
        }
      })

    }

  }

  return NextResponse.json({
    message: "Classes & Sections created"
  })

}