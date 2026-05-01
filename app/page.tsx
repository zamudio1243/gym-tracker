import { WelcomeHero } from "@/components/home/pages/welcome-hero";
import { auth } from "@/shared/server/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (session) {
    redirect("/dashboard");
  }

  return <WelcomeHero />;
}
