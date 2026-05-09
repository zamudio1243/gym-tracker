import { PageHeader } from "@/components/shared/page-header";
import { m } from "@/paraglide/messages";

export function ForgeNew() {
  return (
    <div className="space-y-6 p-4 sm:p-6">
      <PageHeader
        title={m.forge_new_title({})}
        description={m.forge_new_description({})}
      />
    </div>
  );
}
