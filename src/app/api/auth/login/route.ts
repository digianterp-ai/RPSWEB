import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { systemSetup } from "@/server/setup/systemSetup";

export async function POST(req: Request) {
  try {
    /* -------------------------------- */
    /* Ensure system initial data       */
    /* -------------------------------- */

    await systemSetup();

    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: "Email and password required" },
        { status: 400 },
      );
    }

    /* -------------------------------- */
    /* Find user                        */
    /* -------------------------------- */

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 },
      );
    }

    /* -------------------------------- */
    /* Verify password                  */
    /* -------------------------------- */

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return NextResponse.json(
        { success: false, error: "Invalid password" },
        { status: 401 },
      );
    }

    /* -------------------------------- */
    /* Create JWT token                 */
    /* -------------------------------- */

    const token = jwt.sign(
      {
        id: user.id,
        role: user.role,
      },
      process.env.JWT_SECRET!,
      {
        expiresIn: "1d",
      },
    );

    /* -------------------------------- */
    /* Create response                  */
    /* -------------------------------- */

    const response = NextResponse.json({
      success: true,
      message: "Login successful",
      redirect: "/erp/dashboard",
    });

    /* -------------------------------- */
    /* Set authentication cookie        */
    /* -------------------------------- */

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24, // 1 day
    });

    return response;
  } catch (error) {
    console.error("Login Error:", error);

    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 },
    );
  }
}
