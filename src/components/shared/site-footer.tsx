import Link from "next/link";
import { DemoLabel } from "@/components/shared/demo-label";

export function SiteFooter({
  links,
  note,
}: {
  links: { href: string; label: string }[];
  note?: string;
}) {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 sm:px-6">
        <DemoLabel />
        {note ? <p className="max-w-xl text-sm leading-6 text-muted">{note}</p> : null}
        <nav aria-label="Footer" className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
