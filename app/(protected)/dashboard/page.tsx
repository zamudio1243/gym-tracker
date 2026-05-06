import { Dashboard } from "@/components/dashboard/dashboard";
import { m } from "@/paraglide/messages";

export const metadata = {
  title: m.dashboard_title({}),
};

export default function DashboardPage() {
  return <Dashboard />;
}
