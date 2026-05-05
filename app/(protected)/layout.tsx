import { getServerSession } from "@/shared/server/session";
import { redirect } from "next/navigation";
import { SiteHeader } from "@/components/shared/header/site-header";
import { DesktopSidebar } from "@/components/shared/sidebar/desktop-sidebar";
import { localizePath } from "@/shared/lib/i18n";
import { m } from "@/paraglide/messages";
import { SidebarInset, SidebarProvider } from "@/shared/ui/sidebar";

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
    <SidebarProvider>
      <DesktopSidebar />
      <SidebarInset>
        <SiteHeader />
        <main className="container mt-10">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
