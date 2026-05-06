import { CalendarCheck2 } from "lucide-react";
import { DashboardCard } from "./dashboard-card";
import { m } from "@/paraglide/messages";

type WorkoutsCardProps = {
  completed: number;
  total: number;
};

export function WorkoutsCard({ completed, total }: WorkoutsCardProps) {
  const progress = total > 0 ? Math.min((completed / total) * 100, 100) : 0;

  return (
    <DashboardCard
      title={m.dashboard_workouts_title({})}
      icon={<CalendarCheck2 className="size-5" />}
      context={m.dashboard_this_week({})}
      value={
        <div className="flex items-baseline gap-1.5 text-card-foreground">
          <span className="text-4xl font-semibold leading-none sm:text-5xl">
            {completed}
          </span>
          <span className="text-2xl font-semibold leading-none text-muted-foreground">
            /{total}
          </span>
        </div>
      }
      subtitle={
        <div className="h-3.5 rounded-full bg-secondary">
          <div
            className="h-full rounded-full bg-primary"
            style={{ width: `${progress}%` }}
          />
        </div>
      }
      contentClassName="space-y-6"
    />
  );
}
