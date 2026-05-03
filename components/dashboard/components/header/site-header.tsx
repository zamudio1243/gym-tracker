import { getServerUser } from "@/shared/server/session";
import { UserHeader } from "./user-header";

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
            Flexshare
          </h1>
        </div>
        <UserHeader
          user={{
            name: user.name,
            email: user.email,
            avatar: user.image || "",
          }}
        />
      </div>
    </header>
  );
}
