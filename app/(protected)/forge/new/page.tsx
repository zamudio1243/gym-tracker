import { ForgeNew } from "@/components/forge/forge-new";
import { m } from "@/paraglide/messages";

export const metadata = {
  title: m.forge_new_title({}),
};

export default function ForgeNewPage() {
  return <ForgeNew />;
}
