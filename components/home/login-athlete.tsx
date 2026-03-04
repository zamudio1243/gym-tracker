"use client";

import { LoginForm } from "./forms/login.form";

export function LoginAthlete() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <h1 className="text-2xl font-bold text-foreground">Welcome back,</h1>
      <h1 className="text-2xl font-bold text-primary">Athlete!</h1>

      <LoginForm />
    </div>
  );
}
