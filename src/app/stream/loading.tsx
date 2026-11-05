import { LoadingState } from "@/components/shared/states";

export default function StreamLoading() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <LoadingState label="Loading the library" />
    </div>
  );
}
