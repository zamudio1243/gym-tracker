import { ForgeNew } from "@/components/workout/workout-new";
import { m } from "@/paraglide/messages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: m.workout_new_title({}),
};

export default function WorkoutNewPage() {
  return <ForgeNew />;
}
