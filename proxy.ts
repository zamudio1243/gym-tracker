import { paraglideMiddleware } from "./paraglide/server";
import { NextResponse } from "next/server";

export async function proxy(request: Request) {
  return paraglideMiddleware(request, ({ locale }) => {
    const response = NextResponse.next();
    response.headers.set("x-paraglide-locale", locale);
    response.headers.set("x-paraglide-request-url", request.url);
    return response;
  });
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
