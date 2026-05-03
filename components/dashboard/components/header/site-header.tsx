import { getServerUser } from "@/shared/server/session";
import { UserHeader } from "./user-header";

export async function SiteHeader() {
  const user = await getServerUser();
  if (!user) {
    return null;
  }

  return (
    <header className="border-b">
      <div className="container flex h-16 items-center ">
        <h1 className="text-lg font-semibold tracking-tight">Flexshare</h1>
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
