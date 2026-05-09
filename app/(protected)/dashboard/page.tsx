import { Dashboard } from "@/components/dashboard/dashboard";
import { m } from "@/paraglide/messages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: m.dashboard_title({}),
};

export default function DashboardPage() {
  return <Dashboard />;
}
