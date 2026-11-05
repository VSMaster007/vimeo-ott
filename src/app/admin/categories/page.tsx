import { RouteFallback } from "@/components/shared/route-fallback";

export default function AdminCategoriesPage() {
  return (
    <RouteFallback
      title="Categories"
      description="Editorial categories can be created here. A category that still has articles cannot be deleted."
    />
  );
}
