import { getServerSession } from "@/shared/server/session";
import { redirect } from "next/navigation";
import { SiteHeader } from "@/components/dashboard/components/header/site-header";

export const metadata = {
  title: "Dashboard",
};

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="container mt-10">{children}</main>
    </div>
  );
}
