import { PageHeader } from "../shared/page-header";
import { RecoveryCard } from "./components/recovery-card";
import { StreakCard } from "./components/streak-card";
import { TranningSection } from "./components/tranning/tranning-section";
import { VolumeCard } from "./components/volume-card";
import { WorkoutsCard } from "./components/workouts-card";
import { m } from "@/paraglide/messages";

export function Dashboard() {
  return (
    <div className="space-y-6 p-4 sm:p-6">
      <PageHeader
        title={m.dashboard_title({})}
        description={m.dashboard_description({})}
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <VolumeCard
          kilograms={12400}
          trend={{ value: "+5%", direction: "up" }}
        />
        <WorkoutsCard completed={4} total={5} />
        <StreakCard days={14} personalBest={21} />
        <RecoveryCard
          percentage={85}
          status={m.dashboard_recovery_optimal({})}
        />
      </div>

      <TranningSection />
    </div>
  );
}
