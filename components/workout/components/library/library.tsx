import { getMuscles } from "./data/library.data";
import { MuscleSearch } from "./components/muscle-search";
import { LibraryItem } from "./components/library.item";
import { MuscleFilter } from "./components/muscle-filter";

interface LibraryProps {
  search?: string;
  slugs?: string;
}

export async function Library({ search, slugs }: LibraryProps) {
  const activeSlugs = slugs?.split(",").filter(Boolean);
  const muscles = await getMuscles({ search, slugs: activeSlugs });

  return (
    <div className="space-y-6 p-4 sm:p-6 bg-accent rounded-lg">
      <h1 className="text-2xl font-bold">Library</h1>
      <MuscleSearch />
      <MuscleFilter muscles={muscles} />
      <LibraryItem name="Bench Press" muscle="Chest" type="COMPOUND" />
      <LibraryItem name="Bicep Curl" muscle="Biceps" type="ISOLATED" />
    </div>
  );
}
