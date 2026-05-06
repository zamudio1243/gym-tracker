"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getNavItems } from "./nav-items";
import { cn } from "@/shared/lib/utils";

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t bg-background/95 backdrop-blur md:hidden">
      <ul className="grid h-16 grid-cols-4">
        {getNavItems().map((item) => {
          const isActive = pathname === item.url || pathname.startsWith(item.url + "/");
          return (
            <li key={item.title} className="flex h-full items-center justify-center">
              <Link
                href={item.url}
                className={cn(
                  "flex h-full w-full flex-col items-center justify-center gap-1 text-xs transition-colors",
                  isActive
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <span
                  className={cn(
                    "flex items-center justify-center rounded-full p-1 transition-colors",
                    isActive && "bg-primary/10",
                  )}
                >
                  {item.icon}
                </span>
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
