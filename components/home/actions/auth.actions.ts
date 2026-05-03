"use server";

import { auth } from "@/shared/server/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { signUpSchema } from "../schemes/sign-up.scheme";
import { loginSchema } from "../schemes/login.scheme";

export async function signInAction(input: unknown) {
  const { email, password } = loginSchema.parse(input);
  await auth.api.signInEmail({
    body: {
      email,
      password,
    },
  });
  redirect("/dashboard");
}

export async function signOutAction() {
  await auth.api.signOut({
    headers: await headers(),
  });
  redirect("/");
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
  redirect("/dashboard");
}
