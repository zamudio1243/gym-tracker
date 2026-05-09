import { getServerSession } from "@/shared/server/session";
import { redirect } from "next/navigation";
import { SiteHeader } from "@/components/shared/header/site-header";
import { DesktopSidebar } from "@/components/shared/sidebar/desktop-sidebar";
import { localizePath } from "@/shared/lib/i18n";
import { SidebarInset, SidebarProvider } from "@/shared/ui/sidebar";
import { MobileBottomNav } from "@/components/shared/sidebar/mobile-navbar";

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
        <main className="container pb-24 md:pb-10">{children}</main>
      </SidebarInset>
      <MobileBottomNav />
    </SidebarProvider>
  );
}
