import { Badge } from "@/shared/ui/badge";
import { getMuscles } from "./data/library.data";
import { MuscleSearch } from "./muscle-search";
import { LibraryItem } from "./library.item";

interface LibraryProps {
  search?: string;
}

export async function Library({ search }: LibraryProps) {
  const muscles = await getMuscles(search);

  return (
    <div className="space-y-6 p-4 sm:p-6 bg-accent rounded-lg">
      <h1 className="text-2xl font-bold">Library</h1>
      <MuscleSearch />
      <div className="flex gap-2 overflow-x-auto scrollbar-hide">
        {muscles.map((muscle) => (
          <Badge variant="outline" key={muscle.id} className="shrink-0">
            {muscle.nameEs}
          </Badge>
        ))}
      </div>
      <LibraryItem name="Bench Press" muscle="Chest" type="COMPOUND" />
      <LibraryItem name="Bicep Curl" muscle="Biceps" type="ISOLATED" />
    </div>
  );
}
