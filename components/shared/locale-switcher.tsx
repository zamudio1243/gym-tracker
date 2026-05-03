"use client";

import { m } from "@/paraglide/messages";
import { getLocale, locales, setLocale } from "@/paraglide/runtime";
import { Button } from "@/shared/ui/button";

export function LocaleSwitcher() {
  const currentLocale = getLocale();

  return (
    <div className="flex items-center gap-1 rounded-full border border-border/60 bg-card/60 p-1">
      {locales.map((locale) => {
        const isActive = locale === currentLocale;

        return (
          <Button
            key={locale}
            type="button"
            variant={isActive ? "default" : "ghost"}
            size="sm"
            aria-label={m.nav_switch_language()}
            onClick={() => setLocale(locale)}
            className="h-8 rounded-full px-3"
          >
            {locale === "es" ? m.nav_language_es() : m.nav_language_en()}
          </Button>
        );
      })}
    </div>
  );
}
