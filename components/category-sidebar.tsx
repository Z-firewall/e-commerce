"use client";

import Link from "next/link";
import { ChevronDown, SlidersHorizontal, X } from "lucide-react";
import { useState } from "react";
import { categories } from "@/lib/catalog";

type CategoryWithSubs = (typeof categories)[number] & { subs?: string[] };

export function CategorySidebar({
  mobile = false,
  onClose,
}: {
  mobile?: boolean;
  onClose?: () => void;
}) {
  const [open, setOpen] = useState<string | null>("electronics");
  const visibleCategories = categories.filter(
    (category) => category.slug !== "all",
  ) as CategoryWithSubs[];

  return (
    <aside
      className={
        mobile
          ? "flex h-full w-full flex-col bg-background p-5"
          : "hidden w-72 shrink-0 border-r border-border pr-6 lg:block"
      }
    >
      <div className="mb-7 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Browse
          </p>
          <h2 className="mt-2 font-serif text-2xl">Shop by category</h2>
        </div>
        {mobile ? (
          <button
            onClick={onClose}
            aria-label="Close categories"
            className="rounded-full p-2 hover:bg-muted"
          >
            <X className="size-5" />
          </button>
        ) : (
          <SlidersHorizontal className="size-5 text-muted-foreground" />
        )}
      </div>
      <nav
        className="flex flex-col gap-1 overflow-y-auto"
        aria-label="Product categories"
      >
        <Link
          href="/category/all"
          onClick={onClose}
          className="border-b border-border py-3 text-sm font-semibold"
        >
          All pieces
        </Link>
        {visibleCategories.map((category) => (
          <div key={category.slug} className="border-b border-border">
            <div className="flex items-center justify-between gap-2 py-3">
              <Link
                href={`/category/${category.slug}`}
                onClick={onClose}
                className="text-sm font-semibold hover:text-accent"
              >
                {category.name}
              </Link>
              {category.subs && (
                <button
                  onClick={() =>
                    setOpen(open === category.slug ? null : category.slug)
                  }
                  aria-label={`Toggle ${category.name} subcategories`}
                  className="rounded-full p-1 hover:bg-muted"
                >
                  <ChevronDown
                    className={`size-4 transition-transform ${open === category.slug ? "rotate-180" : ""}`}
                  />
                </button>
              )}
            </div>
            {category.subs && open === category.slug && (
              <div className="flex flex-col gap-2 pb-4 pl-3 text-xs leading-5 text-muted-foreground">
                {category.subs.map((sub) => (
                  <Link
                    key={sub}
                    href={`/category/${category.slug}`}
                    onClick={onClose}
                    className="hover:text-foreground"
                  >
                    {sub}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}

export function SidebarTrigger({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="Open categories"
      className="inline-flex items-center gap-2 border border-border px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] hover:border-accent"
    >
      <SlidersHorizontal className="size-4" /> Categories
    </button>
  );
}
