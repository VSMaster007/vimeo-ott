import { RouteFallback } from "@/components/shared/route-fallback";

export default function AdminArticlesPage() {
  return (
    <RouteFallback
      title="Articles"
      description="Create, edit, publish, and filter articles from this list once the database is connected."
    />
  );
}
