import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  const isERPRoute = req.nextUrl.pathname.startsWith("/erp");
  const isLoginPage = req.nextUrl.pathname === "/login";

  // 🚫 Block ERP if not logged in
  if (!token && isERPRoute) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // 🔁 Prevent going back to login after login
  if (token && isLoginPage) {
    return NextResponse.redirect(new URL("/erp/dashboard", req.url));
  }

  return NextResponse.next();
}

/* Protect ALL ERP routes */
export const config = {
  matcher: ["/erp/:path*"],
};