"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type SafeImageProps = {
  src?: string | null;
  alt: string;
  className?: string;
  aspectClassName?: string;
};

export function SafeImage({
  src,
  alt,
  className,
  aspectClassName = "aspect-video",
}: SafeImageProps) {
  const [failed, setFailed] = useState(!src);

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-secondary",
        aspectClassName,
        className,
      )}
    >
      {failed ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 px-4 text-center">
          <span className="font-serif text-lg text-accent">Sauna Channel</span>
          <span className="text-[11px] uppercase tracking-[0.16em] text-muted">Image unavailable</span>
        </div>
      ) : (
        // Remote samples can fail; the branded frame keeps the ratio either way.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src ?? undefined}
          alt={alt}
          className="h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
