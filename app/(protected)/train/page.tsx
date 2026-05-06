import { Train } from "@/components/train/train";
import { m } from "@/paraglide/messages";

export const metadata = {
  title: m.train_title({}),
};

export default function TrainPage() {
  return <Train />;
}
