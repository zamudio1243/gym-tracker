import { Forge } from "@/components/forge/forge";
import { m } from "@/paraglide/messages";

export const metadata = {
  title: m.forge_title({}),
};

export default function ForgePage() {
  return <Forge />;
}
