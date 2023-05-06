import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import isLogged from "./pages/api/auth/is_logged";

export async function middleware(request: NextRequest) {
  if (await isLogged()) {
    return NextResponse.redirect(new URL("/chat", request.url));
  } else {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: "/",
};
