"use client";

import { useForm } from "@tanstack/react-form";
import { loginSchema, LoginSchema } from "../schemes/login.scheme";
import { Field, FieldError, FieldLabel } from "@/shared/ui/field";
import { Input } from "@/shared/ui/input";
import { PasswordInput } from "@/shared/ui/password-input";
import Link from "next/link";
import { Button } from "@/shared/ui/button";
import { ArrowRight } from "lucide-react";
import { signInAction } from "../actions/auth.actions";
import { m } from "@/paraglide/messages";
import { localizeHref } from "@/paraglide/runtime";

export function LoginForm() {
  const form = useForm({
    defaultValues: {
      password: "",
      email: "",
    } satisfies LoginSchema,
    validators: {
      onSubmit: loginSchema,
    },
    onSubmit: async ({ value }) => {
      await signInAction(value);
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
    >
      <form.Field name="email">
        {(field) => {
          const isInvalid =
            field.state.meta.isTouched && !field.state.meta.isValid;
          return (
            <Field data-invalid={isInvalid}>
              <FieldLabel htmlFor={field.name}>{m.form_email_label({})}</FieldLabel>
              <Input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                aria-invalid={isInvalid}
                placeholder=""
                autoComplete="off"
              />
              {isInvalid && <FieldError errors={field.state.meta.errors} />}
            </Field>
          );
        }}
      </form.Field>
      <form.Field name="password">
        {(field) => {
          const isInvalid =
            field.state.meta.isTouched && !field.state.meta.isValid;
          return (
            <Field data-invalid={isInvalid}>
              <FieldLabel htmlFor={field.name}>{m.form_password_label({})}</FieldLabel>
              <PasswordInput
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                aria-invalid={isInvalid}
                autoComplete="current-password"
              />
              {isInvalid && <FieldError errors={field.state.meta.errors} />}
              <Button variant="link" size="xs" asChild className="right-0">
                <Link href={localizeHref("/auth/forgot-password")}>{m.form_forgot_password({})}</Link>
              </Button>
            </Field>
          );
        }}
      </form.Field>
      <Button className="bg-primary text-primary-foreground mt-3" type="submit">
        {m.form_login_submit({})}
        <ArrowRight className="ml-2" />
      </Button>
    </form>
  );
}
