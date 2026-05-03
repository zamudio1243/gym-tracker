import { paraglideMiddleware } from "./paraglide/server";
import { NextResponse } from "next/server";

export async function proxy(request: Request) {
  return paraglideMiddleware(request, ({ request: localizedRequest, locale }) => {
    const requestHeaders = new Headers(localizedRequest.headers);

    requestHeaders.set("x-paraglide-locale", locale);
    requestHeaders.set("x-paraglide-request-url", request.url);

    return NextResponse.rewrite(localizedRequest.url, {
      request: {
        headers: requestHeaders,
      },
    });
  });
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
