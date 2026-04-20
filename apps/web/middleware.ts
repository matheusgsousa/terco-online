import { NextResponse, type NextRequest } from "next/server";

const dayToPath: Record<number, string> = {
  0: "/gloriosos",
  1: "/gozosos",
  2: "/dolorosos",
  3: "/gloriosos",
  4: "/luminosos",
  5: "/dolorosos",
  6: "/gozosos",
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname !== "/") {
    return NextResponse.next();
  }

  const day = new Date().getDay();
  const redirectPath = dayToPath[day] ?? "/";

  const url = request.nextUrl.clone();
  url.pathname = redirectPath;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/"],
};
