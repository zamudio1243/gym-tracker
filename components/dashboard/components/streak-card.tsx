import { Flame } from "lucide-react";
import { DashboardCard } from "./dashboard-card";

type StreakCardProps = {
  days: number;
  personalBest: number;
};

export function StreakCard({ days, personalBest }: StreakCardProps) {
  return (
    <DashboardCard
      title="STREAK"
      icon={<Flame className="size-5 text-primary" />}
      value={
        <div className="flex items-baseline gap-1.5 text-card-foreground">
          <span className="text-4xl font-semibold leading-none sm:text-5xl">
            {days}
          </span>
          <span className="text-2xl font-semibold leading-none text-muted-foreground uppercase">
            DAYS
          </span>
        </div>
      }
      subtitle={
        <p className="text-2xl leading-tight font-medium tracking-[0.08em] text-muted-foreground sm:text-xl">
          Personal Best: {personalBest}
        </p>
      }
      contentClassName="space-y-4"
    />
  );
}
