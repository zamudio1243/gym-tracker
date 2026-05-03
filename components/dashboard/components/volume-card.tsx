import { Dumbbell, Minus, TrendingDown, TrendingUp } from "lucide-react";
import { DashboardCard } from "./dashboard-card";
import { m } from "@/paraglide/messages";

type Trend = "up" | "down" | "neutral";

type VolumeCardProps = {
  kilograms: number;
  trend: { value: string; direction: Trend };
};

const trendMap = {
  up: "text-primary",
  down: "text-destructive",
  neutral: "text-muted-foreground",
} satisfies Record<Trend, string>;

const trendIcons = {
  up: <TrendingUp className="size-4" />,
  down: <TrendingDown className="size-4" />,
  neutral: <Minus className="size-4" />,
} satisfies Record<Trend, React.ReactNode>;

export function VolumeCard({ kilograms, trend }: VolumeCardProps) {
  return (
    <DashboardCard
      title={m.dashboard_volume_title({})}
      value={
        <div className="flex items-baseline gap-1.5 text-card-foreground">
          <span className="text-4xl font-semibold leading-none sm:text-5xl">
            {(kilograms / 1000).toFixed(1)}
          </span>
          <span className="text-2xl font-semibold leading-none text-muted-foreground">
            K
          </span>
        </div>
      }
      icon={<Dumbbell className="size-5" />}
      subtitle={
        <div
          className={`flex items-center gap-1.5 text-sm font-semibold sm:text-base ${trendMap[trend.direction]}`}
        >
          <span>
            {trendIcons[trend.direction]}
          </span>
          {trend.value}
        </div>
      }
      contentClassName="space-y-4"
    />
  );
}
