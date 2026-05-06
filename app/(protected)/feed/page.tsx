import { Feed } from "@/components/feed/feed";
import { m } from "@/paraglide/messages";

export const metadata = {
  title: m.feed_title({}),
};

export default function FeedPage() {
  return <Feed />;
}
