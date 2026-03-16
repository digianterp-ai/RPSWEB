import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"

export async function systemSetup() {

  /* -------------------------------- */
  /* Ensure Branch Exists             */
  /* -------------------------------- */

  let branch = await prisma.branch.findFirst()

  if (!branch) {

    branch = await prisma.branch.create({
      data: {
        name: "Royal Public School Deori",
        code: "RPSD",
        address: "Deori",
        phone: "+91 79873 14617"
      }
    })

    console.log("Default branch created")

  }

  /* -------------------------------- */
  /* Ensure Academic Year Exists      */
  /* -------------------------------- */

  const year = await prisma.academicYear.findFirst({
    where: { isActive: true }
  })

  if (!year) {

    await prisma.academicYear.create({
      data: {
        name: "2025-2026",
        startDate: new Date("2025-04-01"),
        endDate: new Date("2026-03-31"),
        isActive: true,

        // ✅ REQUIRED FIELD
        branchId: branch.id
      }
    })

    console.log("Academic year created")

  }

  /* -------------------------------- */
  /* Ensure Super Admin Exists        */
  /* -------------------------------- */

  const admin = await prisma.user.findFirst({
    where: { role: "SUPER_ADMIN" }
  })

  if (!admin) {

    const hashed = await bcrypt.hash("admin123", 10)

    await prisma.user.create({
      data: {
        name: "Super Admin",
        email: "superadmin@rpsdeori.org",
        password: hashed,
        role: "SUPER_ADMIN"
      }
    })

    console.log("Super admin created")

  }

}