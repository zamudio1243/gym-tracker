"use server";

import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { SignUpActionState, signUpFormSchema } from "./schemas/sign-up.schema";

export async function signUpAction(
  _prev: SignUpActionState,
  formData: FormData,
): Promise<SignUpActionState> {
  const form = Object.fromEntries(formData);
  const validationResult = signUpFormSchema.safeParse(form);
  if (!validationResult.success) {
    return {
      form,
      errors: validationResult.error.flatten().fieldErrors,
    };
  }

  await auth.api.signUpEmail({
    body: {
      email: validationResult.data.email,
      password: validationResult.data.password,
      name: validationResult.data.name,
    },
  });

  redirect("/");
}
