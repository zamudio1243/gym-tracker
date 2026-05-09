import { ForgeNew } from "@/components/workout/workout-new";
import { m } from "@/paraglide/messages";

export const metadata = {
  title: m.workout_new_title({}),
};

export default function WorkoutNewPage() {
  return <ForgeNew />;
}
