
import { prisma } from "@/lib/prisma"

export async function generateAdmissionNumber() {

  const branch = await prisma.branch.findFirst()

  if (!branch) {
    throw new Error("Branch not configured")
  }

  const year = new Date().getFullYear()

  const counterKey = `student_${year}`

  const counter = await prisma.counter.upsert({
    where: { key: counterKey },
    update: { value: { increment: 1 } },
    create: {
      key: counterKey,
      value: 1
    }
  })

  const runningNumber = String(counter.value).padStart(4, "0")

  return `${branch.code}-${year}-${runningNumber}`

}