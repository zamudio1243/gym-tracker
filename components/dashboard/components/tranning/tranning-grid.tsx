import { dayjsTz, nowInMexicoCity } from "@/shared/lib/dayjs-tz";
import { m } from "@/paraglide/messages";
import {
  TranningDensity,
  type TranningDensityVariant,
} from "./tranning-density";

type TrainingDay = {
  date: string; // ISO format date string (e.g., "2024-06-01")
  intensity: number;
};

type TrainingGridProps = {
  data: TrainingDay[];
};

const WEEKS_TO_SHOW = 12;
const DAYS_IN_WEEK = 7;
const TOTAL_CELLS = WEEKS_TO_SHOW * DAYS_IN_WEEK;

// Mon-first weekday labels (short, locale-agnostic for now)
const WEEKDAY_LABELS = ["L", "M", "X", "J", "V", "S", "D"];

function formatDateKey(value: ReturnType<typeof dayjsTz>) {
  return value.format("YYYY-MM-DD");
}

function getMondayIndex(value: ReturnType<typeof dayjsTz>) {
  return (value.day() + 6) % DAYS_IN_WEEK;
}

function getIntensityVariant(
  intensity: number,
  maxIntensity: number,
): TranningDensityVariant {
  if (intensity <= 0 || maxIntensity <= 0) {
    return "empty";
  }

  const ratio = intensity / maxIntensity;

  if (ratio >= 0.75) {
    return "high";
  }

  if (ratio >= 0.25) {
    return "medium";
  }

  return "low";
}

export function TranningGrid({ data }: TrainingGridProps) {
  const today = nowInMexicoCity().startOf("day");
  const currentWeekStart = today.subtract(getMondayIndex(today), "day");
  const rangeStart = currentWeekStart.subtract(
    (WEEKS_TO_SHOW - 1) * DAYS_IN_WEEK,
    "day",
  );

  const intensityByDate = new Map<string, number>();

  for (const entry of data) {
    const parsedDate = dayjsTz(entry.date).startOf("day");

    if (!parsedDate.isValid()) {
      continue;
    }

    const dateKey = formatDateKey(parsedDate);
    const previousIntensity = intensityByDate.get(dateKey) ?? 0;

    intensityByDate.set(dateKey, Math.max(previousIntensity, entry.intensity));
  }

  const cells = Array.from({ length: TOTAL_CELLS }, (_, index) => {
    const date = rangeStart.add(index, "day");
    const dateKey = formatDateKey(date);
    const isFuture = date.isAfter(today, "day");

    return {
      date,
      dateKey,
      intensity: isFuture ? 0 : (intensityByDate.get(dateKey) ?? 0),
    };
  });

  const maxIntensity = cells.reduce(
    (highest, cell) => Math.max(highest, cell.intensity),
    0,
  );

  // Count training days in the last 7 days (excluding future)
  const last7DaysCount = cells
    .slice(-7)
    .filter((cell) => !cell.date.isAfter(today, "day") && cell.intensity > 0)
    .length;

  return (
    <div className="inline-flex flex-col gap-6">
      {/* Summary insight */}
      <p className="text-sm text-muted-foreground">
        {m.dashboard_density_summary({ count: last7DaysCount })}
      </p>

      {/* Grid with weekday labels */}
      <div className="flex gap-2">
        {/* Weekday labels column */}
        <div className="grid grid-rows-7 gap-2">
          {WEEKDAY_LABELS.map((label) => (
            <span
              key={label}
              className="flex size-4 items-center justify-center text-[0.6rem] font-medium text-muted-foreground/60 uppercase sm:size-5"
            >
              {label}
            </span>
          ))}
        </div>

        {/* Density grid */}
        <div className="grid grid-flow-col grid-rows-7 gap-2">
          {cells.map((cell) => (
            <TranningDensity
              key={cell.dateKey}
              title={m.dashboard_intensity_tooltip({ value: cell.intensity })}
              variant={getIntensityVariant(cell.intensity, maxIntensity)}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between text-sm font-medium tracking-[0.2em] text-muted-foreground/80 uppercase sm:text-base">
        <span>{m.dashboard_weeks_ago({ value: WEEKS_TO_SHOW })}</span>
        <span>{m.dashboard_today({})}</span>
      </div>
    </div>
  );
}
