"use client";

import { ErrorState } from "@/components/shared/states";

export default function StreamError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6">
      <ErrorState onRetry={reset} />
    </div>
  );
}
