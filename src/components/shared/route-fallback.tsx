import { EmptyState } from "@/components/shared/states";

export function RouteFallback({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6">
      <EmptyState title={title} description={description} />
    </div>
  );
}
