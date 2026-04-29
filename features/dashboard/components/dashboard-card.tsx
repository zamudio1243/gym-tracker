import { ReactNode } from "react";
import { cn } from "@/shared/lib/utils";
import { Card } from "@/shared/ui/card";

type DashboardCardTrend = {
  value: string;
  direction?: "up" | "down" | "neutral";
};

type DashboardCardProgress = {
  value: number;
  max?: number;
};

type DashboardCardProps = {
  title: string;
  value: ReactNode;
  unit?: ReactNode;
  icon?: ReactNode;
  subtitle?: ReactNode;
  detail?: ReactNode;
  trend?: DashboardCardTrend;
  progress?: DashboardCardProgress;
  className?: string;
};

const trendMap: Record<NonNullable<DashboardCardTrend["direction"]>, string> = {
  up: "text-primary",
  down: "text-destructive",
  neutral: "text-muted-foreground",
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function DashboardCard({
  title,
  value,
  unit,
  icon,
  subtitle,
  detail,
  trend,
  progress,
  className,
}: DashboardCardProps) {
  const max = progress?.max ?? 100;
  const progressValue = progress ? clamp((progress.value / max) * 100, 0, 100) : 0;

  return (
    <Card
      className={cn(
        "h-full min-h-56 rounded-[2rem] border-border bg-card p-6 text-card-foreground shadow-sm",
        "gap-0",
        className,
      )}
    >
      <div className="mb-8 flex items-start justify-between">
        <p className="text-sm font-semibold tracking-[0.2em] text-muted-foreground uppercase">{title}</p>
        {icon ? <div className="mt-0.5 text-primary">{icon}</div> : null}
      </div>

      <div className="space-y-3">
        <p className="text-5xl leading-none font-bold">
          <span>{value}</span>
          {unit ? <span className="ml-2 text-4xl text-muted-foreground">{unit}</span> : null}
        </p>

        {subtitle ? <p className="text-xl font-medium text-card-foreground">{subtitle}</p> : null}

        {detail ? <p className="text-lg text-muted-foreground">{detail}</p> : null}

        {trend ? (
          <p className={cn("text-3xl font-semibold", trendMap[trend.direction ?? "neutral"])}>{trend.value}</p>
        ) : null}

        {progress ? (
          <div className="pt-2">
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary transition-[width] duration-500"
                style={{ width: `${progressValue}%` }}
              />
            </div>
          </div>
        ) : null}
      </div>
    </Card>
  );
}

export type { DashboardCardProps, DashboardCardTrend, DashboardCardProgress };
