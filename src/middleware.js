import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export default async function middleware(req) {
  const token = await getToken({ req, secret: "secret" });
  const path = req.nextUrl.pathname;
  const url = req.nextUrl.clone();

  // Define public and protected routes
  const publicPaths = [
    "/",
    "/products"
  ];

  const protectedRoutes = [
    "/payment-delivery",
    "/profile",
  ];

  // Check if the user is authenticated
  const isAuthenticated = !!token;

  // Handle redirect for authenticated users with 'next' parameter
  if (isAuthenticated) {
    const next = req.nextUrl.searchParams.get("next");
    if (next) {
      return NextResponse.redirect(new URL(next, req.url));
    }
  }

  // Redirect authenticated users away from public routes
  // if (!isAuthenticated && protectedRoutes.includes(path)) {
  //     return NextResponse.redirect(new URL("/", req.url));
  // }

  const isProtectedRoute = protectedRoutes.some((route) => path.startsWith(route));

  // // Require authentication for protected routes
  if (!isAuthenticated && isProtectedRoute) {
    return NextResponse.redirect(
      new URL(`/?loginpopup=true&next=${encodeURI(req.nextUrl.pathname)}`, req.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/payment-delivery",
    "/profile",
  ],
};