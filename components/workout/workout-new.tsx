import { PageHeader } from "@/components/shared/page-header";
import { m } from "@/paraglide/messages";
import { Library } from "./components/library/library";

interface ForgeNewProps {
  search?: string;
}

export function ForgeNew({ search }: ForgeNewProps) {
  return (
    <div className="space-y-6 p-4 sm:p-6">
      <PageHeader
        title={m.workout_new_title({})}
        description={m.workout_new_description({})}
      />
      <Library search={search} />
    </div>
  );
}
