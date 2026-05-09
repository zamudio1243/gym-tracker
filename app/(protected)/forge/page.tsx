import { Forge } from "@/components/forge/forge";
import { m } from "@/paraglide/messages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: m.forge_title({}),
};

export default function ForgePage() {
  return <Forge />;
}
