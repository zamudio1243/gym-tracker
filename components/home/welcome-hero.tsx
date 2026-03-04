"use client";

import { Dumbbell, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function WelcomeHero() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 h-full w-full">
        {/* Overlay Gradient */}
        <div className="absolute inset-0 z-10 bg-linear-to-t from-background via-background/90 to-background/50" />

        {/* Hero Image - Puedes reemplazar con tu propia imagen */}
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&auto=format&fit=crop")`,
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-20 flex h-screen flex-col justify-between p-6">
        {/* Top Section: Logo */}
        <div className="flex flex-col items-center pt-8">
          <div className="mb-2 flex items-center justify-center gap-2">
            <Dumbbell className="h-10 w-10 text-primary" strokeWidth={2.5} />
            <p className="text-lg font-bold uppercase tracking-widest text-foreground">
              Titan Protocol
            </p>
          </div>
        </div>

        {/* Bottom Section: Text & Actions */}
        <div className="mx-auto w-full max-w-md pb-8 animate-fade-in-up">
          {/* Hero Text */}
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
              Desbloquea tu <br />
              <span className="text-primary">Verdadero potencial</span>
            </h1>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4">
            {/* Primary Action */}
            <Button
              size="lg"
              className="group w-full overflow-hidden shadow-[0_0_20px_-5px] shadow-primary/50"
            >
              <span className="flex items-center gap-2 text-lg font-bold tracking-wide">
                Empieza ahora
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>

            {/* Secondary Action */}
            <Button variant="secondary" size="lg" className="w-full">
              Soy un Coach
            </Button>

            {/* Login Link */}
            <div className="mt-4 flex justify-center text-sm text-muted-foreground">
              <p>
                Ya estas registrado{" "}
                <Link
                  href="/auth/login"
                  className="ml-1 font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  Log in
                </Link>
              </p>
            </div>
          </div>

          {/* Legal/Footer Links */}
          <div className="mt-8 flex justify-center gap-4 text-xs text-muted-foreground/70">
            <a
              href="#"
              className="transition-colors hover:text-muted-foreground"
            >
              Politica de priva
            </a>
            <span>•</span>
            <a
              href="#"
              className="transition-colors hover:text-muted-foreground"
            >
              Terminos de servicio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
