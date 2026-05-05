import Link from "next/link";
import { navItems } from "./nav-items";

export function MobileBottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t bg-background md:hidden">
      <ul className="grid h-16 grid-cols-4">
        {navItems.map((item) => {
          return (
            <li
              key={item.title}
              className="flex h-full items-center justify-center"
            >
              <Link
                href={item.url}
                className="flex h-full flex-col items-center justify-center gap-1 text-xs text-muted-foreground"
              >
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
