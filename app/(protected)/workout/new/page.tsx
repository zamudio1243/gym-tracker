import { ForgeNew } from "@/components/workout/workout-new";
import { m } from "@/paraglide/messages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: m.workout_new_title({}),
};

export default async function WorkoutNewPage({
  searchParams,
}: {
  searchParams: Promise<{ muscle?: string }>;
}) {
  const { muscle } = await searchParams;
  return <ForgeNew search={muscle} />;
}
