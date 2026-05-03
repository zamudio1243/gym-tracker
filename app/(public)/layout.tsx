import { getServerSession } from "@/shared/server/session";
import { localizePath } from "@/shared/lib/i18n";
import { redirect } from "next/navigation";

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  if (session) {
    redirect(localizePath("/dashboard"));
  }

  return children;
}
