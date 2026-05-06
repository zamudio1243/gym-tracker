import type { ReactNode } from "react";
import { cn } from "@/shared/lib/utils";
import { Card } from "@/shared/ui/card";

type DashboardCardProps = {
  title: string;
  value: ReactNode;
  icon?: ReactNode;
  subtitle?: ReactNode;
  context?: string;
  className?: string;
  contentClassName?: string;
};

export function DashboardCard({
  title,
  value,
  icon,
  subtitle,
  context,
  className,
  contentClassName,
}: DashboardCardProps) {
  return (
      <Card
        className={cn(
        "h-full min-h-44 rounded-[2rem] border-border bg-card px-7 py-6 text-card-foreground shadow-sm",
         "gap-0",
         className,
       )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold tracking-[0.2em] text-muted-foreground uppercase sm:text-base">
            {title}
          </p>
          {context && (
            <p className="text-[0.65rem] font-medium text-muted-foreground/60 uppercase tracking-widest mt-0.5">
              {context}
            </p>
          )}
        </div>
        {icon ? <div className="mt-0.5 text-muted-foreground">{icon}</div> : null}
      </div>

      <div className={cn("mt-auto space-y-3", contentClassName)}>
        {value}
        {subtitle ? (
          <div>{subtitle}</div>
        ) : null}
      </div>
    </Card>
  );
}

export type { DashboardCardProps };
