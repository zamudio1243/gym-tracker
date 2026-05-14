import { ExerciseType } from "@/generated/prisma/enums";
import { Button } from "@/shared/ui/button";
import { Plus } from "lucide-react";

export function LibraryItem({
  name,
  muscle,
  type,
}: {
  name: string;
  muscle: string;
  type: ExerciseType;
}) {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex flex-col gap-y-1">
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-muted-foreground">
          {muscle} | {type === ExerciseType.COMPOUND ? "Compound" : "Isolation"}
        </p>
      </div>
      <Button variant="outline" size="sm">
        <Plus />
      </Button>
    </div>
  );
}
