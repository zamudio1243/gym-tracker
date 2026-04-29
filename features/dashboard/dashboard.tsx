import { Activity, CalendarDays, Dumbbell, Flame } from "lucide-react";
import { DashboardCard } from "./components/dashboard-card";


export function Dashboard() {
  return (
    <div className="space-y-6 p-6">
      <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>

      <div className="grid gap-4 sm:grid-cols-2">
        <DashboardCard
          title="VOLUME"
          value="12.4"
          unit="K"
          icon={<Dumbbell className="size-5" />}
          trend={{ value: "+5%", direction: "up" }}
        />

        <DashboardCard
          title="WORKOUTS"
          value={4}
          unit="/5"
          icon={<CalendarDays className="size-5" />}
          progress={{ value: 4, max: 5 }}
        />

        <DashboardCard
          title="STREAK"
          value={14}
          unit="DAYS"
          icon={<Flame className="size-5" />}
          subtitle="Personal Best:"
          detail="21"
        />

        <DashboardCard
          title="RECOVERY"
          value={85}
          unit="%"
          icon={<Activity className="size-5" />}
          subtitle="Optimal"
        />
      </div>
    </div>
  );
}