import Link from "next/link";
import { DemoLabel } from "@/components/shared/demo-label";
import { SafeImage } from "@/components/shared/safe-image";
import { photos } from "@/lib/placeholders";

export default function HomePage() {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <div className="sticky top-0 z-40 border-b border-border bg-background/90 px-4 py-2 backdrop-blur">
        <DemoLabel className="text-center" />
      </div>
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center gap-12 px-4 py-12 sm:px-6 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.22em] text-accent-secondary">Sauna Channel</p>
          <h1 className="mt-4 font-serif text-5xl leading-[1.02] sm:text-7xl">
            A room for heat, and a library that stays with it.
          </h1>
          <p className="mt-6 text-base leading-8 text-muted">
            This is a concept demonstration of one brand in two forms: a cinematic streaming
            library and an editorial journal. The films, essays, and plans are sample content.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href="/stream"
            className="group overflow-hidden rounded-3xl border border-border bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <SafeImage src={photos.lake} alt="" aspectClassName="aspect-[16/10]" />
            <div className="space-y-2 p-6">
              <p className="text-[11px] uppercase tracking-[0.18em] text-accent">Streaming</p>
              <h2 className="text-2xl tracking-tight">Watch the channel</h2>
              <p className="text-sm leading-6 text-muted">
                Full-bleed titles, short metadata, and a dark library meant for browsing.
              </p>
            </div>
          </Link>
          <Link
            href="/website"
            className="group overflow-hidden rounded-3xl border border-border bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <SafeImage src={photos.timber} alt="" aspectClassName="aspect-[16/10]" />
            <div className="space-y-2 p-6">
              <p className="text-[11px] uppercase tracking-[0.18em] text-accent-secondary">Journal</p>
              <h2 className="font-serif text-3xl leading-tight">Read the stories</h2>
              <p className="text-sm leading-6 text-muted">
                Longer essays, serif headlines, and an asymmetric page that is not the streaming home.
              </p>
            </div>
          </Link>
        </div>
        <Link href="/admin" className="self-start text-sm text-muted underline-offset-4 hover:text-foreground hover:underline">
          Local admin
        </Link>
      </main>
    </div>
  );
}
