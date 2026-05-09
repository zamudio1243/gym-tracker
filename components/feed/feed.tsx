import { Earth } from "lucide-react";
import { PageHeader } from "@/components/shared/header/page-header";
import { m } from "@/paraglide/messages";

export function Feed() {
  return (
    <div className="space-y-6 p-4 sm:p-6">
      <PageHeader
        title={m.feed_title({})}
        description={m.feed_description({})}
      />

      {/* Empty state */}
      <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-border/60 bg-muted/20 py-16 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted">
          <Earth className="size-6 text-muted-foreground" />
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium">{m.feed_empty_title({})}</p>
          <p className="text-xs text-muted-foreground max-w-[22rem]">
            {m.feed_empty_description({})}
          </p>
        </div>
      </div>
    </div>
  );
}
