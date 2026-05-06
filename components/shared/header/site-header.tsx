import { getServerUser } from "@/shared/server/session";
import { NavUser } from "./nav-user";
import { NavUserCompact } from "./nav-user-compact";
import { SidebarTriggerButton } from "./sidebar-trigger-button";
import { m } from "@/paraglide/messages";

export async function SiteHeader() {
  const user = await getServerUser();
  if (!user) {
    return null;
  }

  const userProps = {
    name: user.name,
    email: user.email,
    avatar: user.image || "",
  };

  return (
    <header className="border-b border-border/60 bg-background/95 backdrop-blur">
      <div className="pl-2 container flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <SidebarTriggerButton />
          <h1 className="text-lg font-semibold tracking-tight text-foreground">
            {m.site_name({})}
          </h1>
        </div>
        {/* Full user button visible on desktop (sidebar already has it, but kept for collapsed state) */}
        <div className="hidden md:flex items-center gap-3">
          <NavUser user={userProps} />
        </div>
        {/* Compact avatar-only button on mobile — bottom nav handles navigation */}
        <div className="flex md:hidden items-center">
          <NavUserCompact user={userProps} />
        </div>
      </div>
    </header>
  );
}
