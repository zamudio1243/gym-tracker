"use server";

import { auth } from "@/shared/server/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { localizeHref, toLocale } from "@/paraglide/runtime";
import { signUpSchema } from "../schemes/sign-up.scheme";
import { loginSchema } from "../schemes/login.scheme";

async function redirectWithCurrentLocale(path: string) {
  const requestHeaders = await headers();
  const requestUrl = requestHeaders.get("x-paraglide-request-url");

  if (!requestUrl) {
    redirect(path);
  }

  const locale = toLocale(requestHeaders.get("x-paraglide-locale"));
  redirect(localizeHref(path, { locale }));
}

export async function signInAction(input: unknown) {
  const { email, password } = loginSchema.parse(input);
  await auth.api.signInEmail({
    body: {
      email,
      password,
    },
  });
  await redirectWithCurrentLocale("/dashboard");
}

export async function signOutAction() {
  await auth.api.signOut({
    headers: await headers(),
  });
  await redirectWithCurrentLocale("/");
}

export async function signUpAction(input: unknown) {
  const { name, email, password } = signUpSchema.parse(input);

  await auth.api.signUpEmail({
    body: {
      name,
      email,
      password,
    },
  });
  await redirectWithCurrentLocale("/dashboard");
}
