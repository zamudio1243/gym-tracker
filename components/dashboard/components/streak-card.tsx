import { Flame } from "lucide-react";
import { DashboardCard } from "./dashboard-card";
import { m } from "@/paraglide/messages";

type StreakCardProps = {
  days: number;
  personalBest: number;
};

export function StreakCard({ days, personalBest }: StreakCardProps) {
  return (
    <DashboardCard
      title={m.dashboard_streak_title({})}
      icon={<Flame className="size-5 text-primary" />}
      context={m.dashboard_all_time({})}
      value={
        <div className="flex items-baseline gap-1.5 text-card-foreground">
          <span className="text-4xl font-semibold leading-none sm:text-5xl">
            {days}
          </span>
          <span className="text-2xl font-semibold leading-none text-muted-foreground uppercase">
            {m.dashboard_days_suffix({})}
          </span>
        </div>
      }
      subtitle={
        <p className="text-2xl leading-tight font-medium tracking-[0.08em] text-muted-foreground sm:text-xl">
          {m.dashboard_personal_best({ value: personalBest })}
        </p>
      }
      contentClassName="space-y-4"
    />
  );
}
