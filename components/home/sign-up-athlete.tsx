"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { LoginForm } from "./forms/login.form";
import { ArrowLeft, Bolt } from "lucide-react";
import { SignUpForm } from "./forms/sign-up.form";

export function SignUpAthlete() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-hidden shadow-2xl ">
      <header className="flex items-center justify-between p-6 pb-2 z-10">
        <Button
          variant="link"
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
        >
          <Link href="/welcome/">
            <ArrowLeft className="w-6 h-6 dark:text-white" />
          </Link>
        </Button>
        <div className="flex items-center gap-2">
          <Bolt className="text-primary w-6 h-6" />
          <span className="text-sm font-bold tracking-widest uppercase dark:text-white opacity-90">
            Titan Protocol
          </span>
        </div>
        <div className="w-10"></div>
      </header>

      <main className="flex-1 flex px-6 pb-12 w-full flex-col items-center justify-center gap-2">
        {/* TEXTO HERO  */}
        <div className="mt-8 mb-auto">
          <div className="mb-10 text-left">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight dark:text-white mb-2">
              Create Athlete <br />
              Account.
            </h1>
            <p className="text-slate-500 dark:text-text-secondary text-base font-medium">
              Join the Titan Protocol ecosystem to track your metrics and
              dominate your performance.
            </p>
          </div>
          {/* EL FORMULARIO */}
          <SignUpForm />
        </div>

        {/* FOOTER */}
        <div className="mt-8 text-center">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-100 bg-primary/3 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
        </div>
      </main>
    </div>
  );
}
