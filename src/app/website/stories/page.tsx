import { RouteFallback } from "@/components/shared/route-fallback";

export default function StoriesPage() {
  return (
    <RouteFallback
      title="Stories"
      description="Published essays, filters, and search will be listed here. Drafts stay off this public route."
    />
  );
}
