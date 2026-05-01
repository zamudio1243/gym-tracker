import { Activity } from "lucide-react";
import { DashboardCard } from "./dashboard-card";

type RecoveryCardProps = {
  percentage: number;
  status: string;
};

export function RecoveryCard({ percentage, status }: RecoveryCardProps) {
  return (
    <DashboardCard
      title="RECOVERY"
      icon={<Activity className="size-5" />}
      value={
        <div className="flex items-baseline gap-1.5 text-card-foreground">
          <span className="text-4xl font-semibold leading-none sm:text-5xl">
            {percentage}
          </span>
          <span className="text-2xl font-semibold leading-none text-muted-foreground">
            %
          </span>
        </div>
      }
      subtitle={
        <p className="font-mono text-xl font-semibold text-primary sm:text-2xl">
          {status}
        </p>
      }
      contentClassName="space-y-4"
    />
  );
}
