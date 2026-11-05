import { RouteFallback } from "@/components/shared/route-fallback";

export default function AdminSettingsPage() {
  return (
    <RouteFallback
      title="Settings"
      description="Brand name, logo text, and accent colors will be saved here and applied on the next public request."
    />
  );
}
