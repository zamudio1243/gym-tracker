import { Feed } from "@/components/feed/feed";
import { m } from "@/paraglide/messages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: m.feed_title({}),
};

export default function FeedPage() {
  return <Feed />;
}
