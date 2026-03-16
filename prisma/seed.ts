import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()

async function seedAdmin() {

  const email = "superadmin@rpsdeori.org"
  const password = "admin123"

  const existing = await prisma.user.findUnique({
    where: { email }
  })

  if (existing) {
    console.log("⚠ Super Admin already exists")
    return
  }

  const hashed = await bcrypt.hash(password, 10)

  await prisma.user.create({
    data: {
      name: "Super Admin",
      email,
      password: hashed,
      role: "SUPER_ADMIN"
    }
  })

  console.log("✅ Super Admin created")
}

async function main() {
  await seedAdmin()
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })