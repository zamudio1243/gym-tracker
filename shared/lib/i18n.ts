import { headers } from "next/headers";
import { localizeHref, getLocale } from "@/paraglide/runtime";

export function localizePath(path: string) {
  return localizeHref(path, { locale: getLocale() });
}

export async function getLocalizedPath(path: string) {
  const requestHeaders = await headers();
  const requestUrl = requestHeaders.get("x-paraglide-request-url");

  if (!requestUrl) {
    return localizePath(path);
  }

  const url = new URL(requestUrl);
  return localizeHref(path, { locale: getLocale() ?? url.pathname.split("/")[1] });
}
