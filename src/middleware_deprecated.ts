// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import isLogged from "./pages/api/auth/is_logged";

// export async function middleware(request: NextRequest) {
//   const userAuth = await isLogged();
//   if (
//     request.nextUrl.pathname.startsWith("/chat") ||
//     (request.nextUrl.pathname.startsWith("/settings") && !userAuth)
//   ) {
//     console.log(userAuth);
//     return NextResponse.redirect(new URL("/login", request.url));
//   }
// }
