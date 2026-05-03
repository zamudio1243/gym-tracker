import {
  ALL_TRAINING_DENSITY_VARIANTS,
  getTrainingDensityLabel,
  TranningDensity,
} from "./tranning-density";
import { TranningGrid } from "./tranning-grid";
import { m } from "@/paraglide/messages";

const trainingDensityData = [
  { date: "2026-02-09", intensity: 1 },
  { date: "2026-02-10", intensity: 3 },
  { date: "2026-02-11", intensity: 2 },
  { date: "2026-02-12", intensity: 3 },
  { date: "2026-02-13", intensity: 1 },
  { date: "2026-02-14", intensity: 3 },
  { date: "2026-02-16", intensity: 3 },
  { date: "2026-02-17", intensity: 3 },
  { date: "2026-02-18", intensity: 3 },
  { date: "2026-02-19", intensity: 3 },
  { date: "2026-02-20", intensity: 2 },
  { date: "2026-02-21", intensity: 3 },
  { date: "2026-02-23", intensity: 3 },
  { date: "2026-02-24", intensity: 3 },
  { date: "2026-02-25", intensity: 2 },
  { date: "2026-02-26", intensity: 2 },
  { date: "2026-03-02", intensity: 3 },
  { date: "2026-03-03", intensity: 3 },
  { date: "2026-03-04", intensity: 3 },
  { date: "2026-03-05", intensity: 1 },
  { date: "2026-03-10", intensity: 2 },
  { date: "2026-03-11", intensity: 2 },
  { date: "2026-03-16", intensity: 3 },
  { date: "2026-03-17", intensity: 3 },
  { date: "2026-03-18", intensity: 3 },
  { date: "2026-03-20", intensity: 3 },
  { date: "2026-03-23", intensity: 1 },
  { date: "2026-03-24", intensity: 2 },
  { date: "2026-03-30", intensity: 3 },
  { date: "2026-03-31", intensity: 2 },
  { date: "2026-04-01", intensity: 1 },
  { date: "2026-04-06", intensity: 3 },
  { date: "2026-04-07", intensity: 3 },
  { date: "2026-04-08", intensity: 2 },
  { date: "2026-04-09", intensity: 3 },
  { date: "2026-04-14", intensity: 3 },
  { date: "2026-04-15", intensity: 3 },
  { date: "2026-04-16", intensity: 3 },
  { date: "2026-04-20", intensity: 2 },
  { date: "2026-04-21", intensity: 1 },
  { date: "2026-04-27", intensity: 2 },
  { date: "2026-04-28", intensity: 3 },
] satisfies Parameters<typeof TranningGrid>[0]["data"];

export function TranningSection() {
  return (
    <section className="flex min-h-120 flex-col gap-8 px-1 py-2 text-card-foreground">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-xl font-semibold tracking-[0.24em] text-card-foreground uppercase sm:text-2xl">
          {m.dashboard_training_density({})}
        </h2>
        <div className="flex items-center gap-2">
          {ALL_TRAINING_DENSITY_VARIANTS.map((variant) => (
            <TranningDensity
              key={variant}
              variant={variant}
              title={getTrainingDensityLabel(variant)}
              className="size-4 rounded-[0.15rem] border border-border/60 sm:size-5"
            />
          ))}
        </div>
      </div>

      <div className="max-w-max pt-3">
        <TranningGrid data={trainingDensityData} />
      </div>
    </section>
  );
}
