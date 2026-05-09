import { Dumbbell, Plus } from "lucide-react";
import { PageHeader } from "@/components/shared/header/page-header";
import { Button } from "@/shared/ui/button";
import { m } from "@/paraglide/messages";

export function Forge() {
  return (
    <div className="space-y-6 p-4 sm:p-6">
      <PageHeader
        title={m.forge_title({})}
        description={m.forge_description({})}
        action={
          <Button>
            <Plus className="size-4" />
            {m.forge_create_workout({})}
          </Button>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {/* Empty state — workouts */}
        <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border/60 bg-muted/20 p-10 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
            <Dumbbell className="size-5 text-muted-foreground" />
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium">{m.forge_empty_title({})}</p>
            <p className="text-xs text-muted-foreground max-w-[18rem]">
              {m.forge_empty_description({})}
            </p>
          </div>
          <Button variant="outline" size="sm">
            <Plus className="size-3.5" />
            {m.forge_create_workout({})}
          </Button>
        </div>

        {/* Quick-create exercise card */}
        <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border/60 bg-muted/20 p-10 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
            <Plus className="size-5 text-muted-foreground" />
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium">{m.forge_create_exercise({})}</p>
          </div>
          <Button variant="outline" size="sm">
            <Plus className="size-3.5" />
            {m.forge_create_exercise({})}
          </Button>
        </div>
      </div>
    </div>
  );
}
