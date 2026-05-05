import { getServerUser } from "@/shared/server/session";
import { NavUser } from "./nav-user";
import { m } from "@/paraglide/messages";

export async function SiteHeader() {
  const user = await getServerUser();
  if (!user) {
    return null;
  }

  return (
    <header className="border-b border-border/60 bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-4">
        <div>
          <h1 className="text-lg font-semibold tracking-tight text-foreground">
            {m.site_name({})}
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <NavUser
            user={{
              name: user.name,
              email: user.email,
              avatar: user.image || "",
            }}
          />
        </div>
      </div>
    </header>
  );
}
