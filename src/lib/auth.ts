import { Role } from "@prisma/client"
import jwt from "jsonwebtoken"
import { cookies } from "next/headers"

type TokenPayload = {
  id: string
  role: Role
}

export async function getCurrentUser(): Promise<TokenPayload | null> {

  const cookieStore = await cookies()
  const token = cookieStore.get("token")?.value

  if (!token) return null

  try {

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as TokenPayload

    return decoded

  } catch {

    return null

  }

}