import { CirclePlay, RotateCcw } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/shared/ui/button";
import { m } from "@/paraglide/messages";

export function Train() {
  return (
    <div className="space-y-6 p-4 sm:p-6">
      <PageHeader
        title={m.train_title({})}
        description={m.train_description({})}
        action={
          <Button>
            <CirclePlay className="size-4" />
            {m.train_start_session({})}
          </Button>
        }
      />

      {/* Empty state */}
      <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-border/60 bg-muted/20 py-16 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted">
          <CirclePlay className="size-6 text-muted-foreground" />
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium">{m.train_empty_title({})}</p>
          <p className="text-xs text-muted-foreground max-w-[22rem]">
            {m.train_empty_description({})}
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 sm:flex-row">
          <Button>
            <CirclePlay className="size-4" />
            {m.train_start_session({})}
          </Button>
          <Button variant="outline">
            <RotateCcw className="size-4" />
            {m.train_resume_last({})}
          </Button>
        </div>
      </div>
    </div>
  );
}
