"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export type NavItem = {
  href: string;
  label: string;
};

type SiteNavProps = {
  homeHref: string;
  brand: string;
  items: NavItem[];
  variant: "stream" | "website" | "admin";
};

function isActive(pathname: string, href: string, homeHref: string) {
  if (href === homeHref) {
    return pathname === homeHref;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavLinks({
  items,
  homeHref,
  pathname,
  onNavigate,
  className,
}: {
  items: NavItem[];
  homeHref: string;
  pathname: string;
  onNavigate?: () => void;
  className?: string;
}) {
  return (
    <ul className={className}>
      {items.map((item) => {
        const active = isActive(pathname, item.href, homeHref);

        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={active ? "page" : undefined}
              onClick={onNavigate}
              className={cn(
                "block rounded-full px-3 py-2 text-sm transition-colors",
                active ? "bg-card text-foreground" : "text-muted hover:bg-card hover:text-foreground",
              )}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function SiteNav({ homeHref, brand, items, variant }: SiteNavProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const editorial = variant === "website";
  const sheetItems = items.some((item) => item.href === homeHref)
    ? items
    : [{ href: homeHref, label: "Home" }, ...items];

  return (
    <>
      <header
        className={cn(
          "flex items-center justify-between gap-3 border-b border-border px-4 py-3 sm:px-6",
          variant === "admin" ? "md:hidden" : "md:px-8",
        )}
      >
        <Link
          href={homeHref}
          className={cn(
            "min-w-0 truncate text-sm tracking-[0.22em] uppercase",
            editorial && "font-serif text-base tracking-[0.08em] normal-case",
          )}
        >
          {brand}
        </Link>
        {variant !== "admin" ? (
          <nav aria-label="Primary" className="ml-auto hidden min-w-0 md:block">
            <NavLinks
              items={items}
              homeHref={homeHref}
              pathname={pathname}
              className="flex flex-wrap items-center justify-end gap-1"
            />
          </nav>
        ) : null}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className={variant === "admin" ? "" : "md:hidden"}
              aria-label="Open menu"
            >
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>{brand}</SheetTitle>
            </SheetHeader>
            <nav aria-label="Mobile">
              <NavLinks
                items={sheetItems}
                homeHref={homeHref}
                pathname={pathname}
                onNavigate={() => setOpen(false)}
                className="grid gap-1"
              />
            </nav>
          </SheetContent>
        </Sheet>
      </header>
      {variant === "admin" ? (
        <aside className="hidden w-56 shrink-0 border-r border-border bg-secondary md:flex md:flex-col">
          <Link href={homeHref} className="px-5 py-6 text-sm uppercase tracking-[0.22em]">
            {brand}
          </Link>
          <nav aria-label="Admin" className="px-3 pb-6">
            <NavLinks
              items={items}
              homeHref={homeHref}
              pathname={pathname}
              className="grid gap-1"
            />
          </nav>
        </aside>
      ) : null}
    </>
  );
}
