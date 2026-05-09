import { Train } from "@/components/train/train";
import { m } from "@/paraglide/messages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: m.train_title({}),
};

export default function TrainPage() {
  return <Train />;
}
