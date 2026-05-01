"use server";

import { auth } from "@/shared/server/auth";
import { redirect } from "next/navigation";
import { signUpSchema } from "../schemes/sign-up.scheme";
import { loginSchema } from "../schemes/login.scheme";

export async function signInAction(input: unknown) {
  try {
    const { email, password } = loginSchema.parse(input);
    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });
    redirect("/dashboard");
  } catch (error) {
    console.error("Error signing in:", error);
    throw error;
  }
}

export async function signOutAction() {
  try {
    await auth.api.signOut();
    redirect("/");
  } catch (error) {
    console.error("Error signing out:", error);
    throw error;
  }
}

export async function signUpAction(input: unknown) {
  try {
    const { name, email, password } = signUpSchema.parse(input);

    await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
      },
    });
    redirect("/dashboard");
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
}
