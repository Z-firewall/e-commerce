"use client";

import Link from "next/link";
import {
  Moon,
  ShoppingBag,
  Sun,
  Search,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import { useEffect, useState } from "react";
import { products } from "@/lib/catalog";
import { useStore } from "./store-provider";
import { CategorySidebar } from "./category-sidebar";

export function SiteHeader() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { itemCount } = useStore();
  const results = query.trim()
    ? products
        .filter((p) =>
          `${p.name} ${p.category} ${p.description}`
            .toLowerCase()
            .includes(query.toLowerCase()),
        )
        .slice(0, 6)
    : [];

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);
  useEffect(() => {
    document.body.style.overflow = searchOpen || menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [searchOpen, menuOpen]);

  return (
    <>
      <div className="border-b border-border bg-primary px-4 py-2 text-center text-xs font-medium tracking-[0.12em] text-primary-foreground">
        FREE SHIPPING ON ORDERS OVER $75{" "}
        <span className="mx-2 opacity-50">/</span> EASY 30-DAY RETURNS
      </div>
      <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
          <div className="flex items-center gap-8">
            <button
              className="lg:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
            <Link
              href="/"
              className="font-serif text-2xl font-semibold tracking-tight"
            >
              Billa&apos;s Showroom<span className="text-accent">.</span>
            </Link>
            <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
              <Link href="/">Home</Link>
              <Link href="/category/all">Shop all</Link>
              <Link href="/category/hardware">Hardware</Link>
              <Link href="/category/men">Men</Link>
              <Link href="/category/women">Women</Link>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              className="rounded-full p-2 hover:bg-muted"
              aria-label="Search"
            >
              <Search className="size-5" />
            </button>
            <button
              onClick={() => {
                setDark(!dark);
                document.documentElement.classList.toggle("dark");
              }}
              className="rounded-full p-2 hover:bg-muted"
              aria-label="Toggle dark mode"
            >
              {dark ? <Sun className="size-5" /> : <Moon className="size-5" />}
            </button>
            <Link
              href="/bag"
              className="relative rounded-full p-2 hover:bg-muted"
              aria-label="Open shopping bag"
            >
              <ShoppingBag className="size-5" />
              {itemCount > 0 && (
                <span className="absolute right-0 top-0 flex size-4 items-center justify-center rounded-full bg-accent text-[10px] text-accent-foreground">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </header>
      {menuOpen && (
        <div className="fixed inset-x-0 bottom-0 top-[89px] z-40 overflow-y-auto bg-background p-5 lg:hidden">
          <CategorySidebar mobile onClose={() => setMenuOpen(false)} />
        </div>
      )}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 p-5 backdrop-blur-sm sm:p-10">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-4 border-b-2 border-foreground pb-4">
              <Search className="size-6" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Escape") setSearchOpen(false);
                }}
                placeholder="Search products, categories, or materials"
                className="min-w-0 flex-1 bg-transparent text-xl outline-none sm:text-3xl"
              />
              <button
                onClick={() => setSearchOpen(false)}
                aria-label="Close search"
              >
                <X />
              </button>
            </div>
            {query && (
              <div className="mt-8 flex flex-col gap-2">
                {results.length ? (
                  results.map((product) => (
                    <Link
                      key={product.id}
                      href={`/product/${product.slug}`}
                      onClick={() => setSearchOpen(false)}
                      className="flex items-center justify-between border-b border-border py-4 hover:text-accent"
                    >
                      <span>
                        <span className="block font-medium">
                          {product.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {product.category}
                        </span>
                      </span>
                      <ArrowRight className="size-4" />
                    </Link>
                  ))
                ) : (
                  <p className="py-8 text-muted-foreground">
                    No pieces found. Try another search.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
