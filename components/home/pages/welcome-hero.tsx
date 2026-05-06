import { Dumbbell, ArrowRight } from "lucide-react";
import { Button } from "@/shared/ui/button";
import Link from "next/link";
import { m } from "@/paraglide/messages";
import { localizePath } from "@/shared/lib/i18n";

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
              {m.site_name({})}
            </p>
          </div>
        </div>

        {/* Bottom Section: Text & Actions */}
        <div className="mx-auto w-full max-w-md pb-8 animate-fade-in-up">
          {/* Hero Text */}
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
              {m.welcome_heading_prefix({})} <br />
              <span className="text-primary">{m.welcome_heading_highlight({})}</span>
            </h1>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4">
            {/* Primary Action */}
            <Button
              size="lg"
              className="group w-full overflow-hidden shadow-[0_0_20px_-5px] shadow-primary/50"
              asChild
            >
              <Link
                href={localizePath("/sign-up")}
                className="flex items-center gap-2 text-lg font-bold tracking-wide"
              >
                {m.welcome_cta({})}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            {/* Login Link */}
            <div className="mt-4 flex justify-center text-sm text-muted-foreground">
              <p>
                {m.welcome_registered({})}{" "}
                <Button variant="link" asChild className="text-primary">
                  <Link href={localizePath("/login")}>{m.welcome_login({})}</Link>
                </Button>
              </p>
            </div>
          </div>

          {/* Legal/Footer Links - add real routes when ready */}
        </div>
      </div>
    </div>
  );
}
