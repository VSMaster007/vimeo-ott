import { EmptyState } from "@/components/shared/states";

export default function AdminHomePage() {
  return (
    <div className="mx-auto max-w-3xl">
      <p className="text-xs uppercase tracking-[0.18em] text-accent-secondary">Studio</p>
      <h1 className="mt-3 font-serif text-4xl">Overview</h1>
      <div className="mt-8">
        <EmptyState
          title="Counts come from the database"
          description="Article, category, author, and video totals will be read from the local SQLite file. This screen does not invent numbers."
        />
      </div>
    </div>
  );
}
