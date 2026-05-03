import { cn } from "@/shared/lib/utils";
import { m } from "@/paraglide/messages";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/ui/tooltip";

type TranningDensityVariant = "empty" | "low" | "medium" | "high";

export const ALL_TRAINING_DENSITY_VARIANTS: TranningDensityVariant[] = [
  "empty",
  "low",
  "medium",
  "high",
] as const;

export function getTrainingDensityLabel(variant: TranningDensityVariant) {
  switch (variant) {
    case "empty":
      return m.dashboard_density_empty({});
    case "low":
      return m.dashboard_density_low({});
    case "medium":
      return m.dashboard_density_medium({});
    case "high":
      return m.dashboard_density_high({});
  }
}

type TranningDensityProps = {
  variant: TranningDensityVariant;
  className?: string;
  title?: string;
};

const densityVariantClassName = {
  empty: "bg-muted/40",
  low: "bg-primary/25",
  medium: "bg-primary/60",
  high: "bg-primary",
} satisfies Record<TranningDensityVariant, string>;

export function TranningDensity({
  variant,
  className,
  title,
}: TranningDensityProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div
            className={cn(
              "size-4 rounded-[0.2rem] sm:size-5",
              densityVariantClassName[variant],
              className,
            )}
            role="img"
            title={title}
          />
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-sm">{title}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export type { TranningDensityProps, TranningDensityVariant };
