import { headers } from "next/headers";
import { auth } from "@/shared/server/auth";

export async function getServerSession() {
  return auth.api.getSession({
    headers: await headers(),
  });
}

export async function getServerUser() {
  const session = await getServerSession();
  return session?.user;
}
