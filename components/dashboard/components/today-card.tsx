import { CirclePlay } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { m } from "@/paraglide/messages";
import Link from "next/link";

export function TodayCard() {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-border/60 bg-card px-5 py-4">
      <div className="space-y-0.5">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          {m.dashboard_today_heading({})}
        </p>
        <p className="text-base font-semibold text-foreground">
          {m.dashboard_today_ready({})}
        </p>
      </div>
      <Button asChild size="sm">
        <Link href="/train">
          <CirclePlay className="size-4" />
          {m.dashboard_today_go({})}
        </Link>
      </Button>
    </div>
  );
}
