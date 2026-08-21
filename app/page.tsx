import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { products, categories } from "@/lib/catalog";
import { ProductCard } from "@/components/product-card";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-24 pt-12 lg:grid-cols-[1.03fr_.97fr] lg:items-center lg:px-8 lg:pt-20">
          <div className="max-w-xl">
            <p className="mb-7 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <Sparkles className="size-4" />
              Made for the in-between
            </p>
            <h1 className="font-serif text-6xl leading-[.95] tracking-[-.045em] sm:text-7xl lg:text-[6.7rem]">
              Good things,
              <br />
              <em className="font-normal text-accent">well chosen.</em>
            </h1>
            <p className="mt-8 max-w-md text-base leading-7 text-muted-foreground">
              A considered collection of everyday objects, clothing, and small
              luxuries designed to make the ordinary feel a little more
              intentional.
            </p>
            <Link
              href="/category/all"
              className="mt-9 inline-flex items-center gap-3 border-b-2 border-accent pb-2 text-sm font-semibold"
            >
              Explore the collection <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="relative overflow-hidden bg-accent/10">
            <img
              src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=1200&q=85"
              alt="Curated selection of clothing and lifestyle goods"
              className="aspect-[.94] w-full object-cover"
            />
            <div className="absolute bottom-5 left-5 bg-background px-4 py-3 text-xs font-medium tracking-wide">
              THE SPRING EDIT{" "}
              <span className="ml-4 text-muted-foreground">01 / 04</span>
            </div>
          </div>
        </section>
        <section className="border-y border-border bg-secondary/40">
          <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-4 px-5 py-5 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground lg:px-8">
            <span>Thoughtfully sourced</span>
            <span>Small batch always</span>
            <span>Designed to last</span>
            <span>For the everyday</span>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                A little of everything
              </p>
              <h2 className="font-serif text-5xl tracking-tight">The edit</h2>
            </div>
            <Link
              href="/category/all"
              className="hidden text-sm font-semibold underline underline-offset-4 sm:block"
            >
              See all pieces
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
            {products.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
        <section className="bg-primary text-primary-foreground">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Why Morrow
              </p>
              <h2 className="mt-5 font-serif text-5xl leading-tight">
                Buy less.
                <br />
                Choose better.
              </h2>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="border-t border-primary-foreground/20 pt-5">
                <h3 className="font-medium">Objects with a point of view</h3>
                <p className="mt-3 leading-7 text-primary-foreground/65">
                  We look for pieces that solve a real need while adding a
                  little beauty to the daily rituals around it.
                </p>
              </div>
              <div className="border-t border-primary-foreground/20 pt-5">
                <h3 className="font-medium">A slower way to shop</h3>
                <p className="mt-3 leading-7 text-primary-foreground/65">
                  Clear details, honest materials, and makers worth knowing help
                  every purchase feel considered.
                </p>
              </div>
              <div className="border-t border-primary-foreground/20 pt-5">
                <h3 className="font-medium">Made to stay</h3>
                <p className="mt-3 leading-7 text-primary-foreground/65">
                  Durability is part of the design. These are things to use,
                  wear, repair, and keep close.
                </p>
              </div>
              <div className="border-t border-primary-foreground/20 pt-5">
                <h3 className="font-medium">A human edit</h3>
                <p className="mt-3 leading-7 text-primary-foreground/65">
                  Our collection is intentionally broad but never endless, so
                  finding something useful does not feel overwhelming.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Explore by category
              </p>
              <h2 className="mt-4 font-serif text-5xl">
                Room for every rhythm.
              </h2>
              <p className="mt-6 max-w-md leading-7 text-muted-foreground">
                From a better desk setup to a softer weekend layer, browse the
                parts of life that make up your own everyday.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-5 border-t border-border pt-2">
              {categories.slice(1, 9).map((category) => (
                <Link
                  key={category.slug}
                  href={`/category/${category.slug}`}
                  className="group flex items-center justify-between border-b border-border py-4 text-sm font-medium"
                >
                  <span>{category.name}</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="border-t border-border">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-20 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                The journal
              </p>
              <h2 className="mt-4 font-serif text-5xl">
                Notes for living well.
              </h2>
            </div>
            <div className="flex flex-col gap-6 text-muted-foreground">
              <p className="leading-8">
                Morrow is a place for useful discoveries and quiet pleasures. We
                share the stories behind the things we carry, wear, cook with,
                and give away because context makes a good object even better.
              </p>
              <p className="leading-8">
                Come back for maker profiles, simple care guides, seasonal field
                notes, and ideas for creating a home that feels like yours.
                There is no rush; the best things tend to reveal themselves
                slowly.
              </p>
              <Link
                href="/category/all"
                className="inline-flex items-center gap-3 font-semibold text-foreground"
              >
                Read the full collection <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-border px-5 py-8 text-sm text-muted-foreground lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 sm:flex-row">
          <span className="font-serif text-lg text-foreground">
            morrow<span className="text-accent">.</span>
          </span>
          <span>Thoughtful goods for everyday living.</span>
        </div>
      </footer>
    </div>
  );
}
