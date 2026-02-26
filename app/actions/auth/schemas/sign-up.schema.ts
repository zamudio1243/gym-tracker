import { z } from "zod";

export const signUpFormSchema = z.object({
  email: z.email({ message: "Please enter a valid email." }).trim(),
  password: z
    .string()
    .min(8, { message: "Be at least 8 characters long" })
    .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
    .regex(/[0-9]/, { message: "Contain at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Contain at least one special character.",
    })
    .trim(),
  name: z
    .string()
    .min(2, { message: "Be at least 2 characters long" })
    .max(50, { message: "Be at most 50 characters long" })
    .regex(/^[a-zA-Z\s]+$/, {
      message: "Contain only letters and spaces.",
    })
    .trim(),
});

export type SignUpActionState = {
  form?: {
    email?: string;
    password?: string;
    name?: string;
  };
  errors?: {
    email?: string[];
    password?: string[];
    name?: string[];
  };
};
