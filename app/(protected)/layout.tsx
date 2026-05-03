import { getServerSession } from "@/shared/server/session";
import { redirect } from "next/navigation";
import { SiteHeader } from "@/components/dashboard/components/header/site-header";
import { localizePath } from "@/shared/lib/i18n";
import { m } from "@/paraglide/messages";

export const metadata = {
  title: m.dashboard_title({}),
};

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  if (!session) {
    redirect(localizePath("/login"));
  }

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="container mt-10">{children}</main>
    </div>
  );
}
