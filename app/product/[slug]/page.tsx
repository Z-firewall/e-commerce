"use client";

import Link from "next/link";
import { use } from "react";
import { ArrowLeft, Check, Minus, Plus, Star, Truck } from "lucide-react";
import { getProduct, relatedProducts, formatPrice } from "@/lib/catalog";
import { SiteHeader } from "@/components/site-header";
import { ProductCard } from "@/components/product-card";
import { useStore } from "@/components/store-provider";

export default function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const product = getProduct(slug);
  const { addToBag } = useStore();
  if (!product) return <div className="p-10">Product not found</div>;
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-5 py-8 lg:px-8 lg:py-12">
        <Link
          href="/category/all"
          className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" /> Back to shop
        </Link>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="bg-secondary">
            <img
              src={product.image}
              alt={product.name}
              className="aspect-[.9] w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              {product.category} / Morrow edit
            </p>
            <h1 className="mt-4 font-serif text-5xl tracking-tight sm:text-6xl">
              {product.name}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <span className="text-lg font-medium">
                {formatPrice(product.price)}
              </span>
              <span className="flex items-center gap-1 text-sm">
                <Star className="size-4 fill-accent text-accent" />{" "}
                {product.rating}{" "}
                <span className="text-muted-foreground">
                  ({product.reviews} reviews)
                </span>
              </span>
            </div>
            <p className="mt-7 leading-7 text-muted-foreground">
              {product.description}
            </p>
            <p className="mt-5 leading-7 text-muted-foreground">
              Designed with a slower, more useful rhythm in mind, this piece
              brings dependable materials and thoughtful finishing to your
              everyday routine. Each detail has been considered for comfort,
              longevity, and the small pleasure of using something made well.
            </p>
            {product.sizes && (
              <div className="mt-8">
                <p className="mb-3 text-sm font-medium">Select size</p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className="border border-border px-4 py-2 text-sm hover:border-primary"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => addToBag(product)}
                className="flex-1 bg-primary py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground"
              >
                Add to bag
              </button>
              <button
                onClick={() => {
                  addToBag(product);
                  window.location.href = "/bag";
                }}
                className="flex-1 border border-primary py-4 text-sm font-semibold uppercase tracking-wider"
              >
                Purchase now
              </button>
            </div>
            <div className="mt-8 grid gap-4 border-y border-border py-6 text-sm">
              <div className="flex items-center gap-3">
                <Truck className="size-4" /> Free shipping over $75
              </div>
              <div className="flex items-center gap-3">
                <Check className="size-4" /> Easy 30-day returns
              </div>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {product.details.map((detail) => (
                <div
                  key={detail}
                  className="border-t border-border pt-3 text-sm text-muted-foreground"
                >
                  {detail}
                </div>
              ))}
            </div>
          </div>
        </div>
        <section className="mt-24 grid gap-10 border-t border-border pt-12 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              The maker
            </p>
            <h2 className="mt-3 font-serif text-4xl">
              Made by {product.manufacturer}
            </h2>
          </div>
          <div className="flex flex-col gap-5 text-base leading-8 text-muted-foreground">
            <p>
              {product.manufacturer} works in small runs, choosing honest
              materials and practical forms over passing trends. The result is a
              collection of objects that settle naturally into your life and get
              better with use.
            </p>
            <p>
              We visit our makers, ask how each piece is made, and share the
              details so you can buy with confidence. Your purchase supports
              independent design, careful production, and a more considered way
              of shopping.
            </p>
          </div>
        </section>
        <section className="mt-24">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                You may also like
              </p>
              <h2 className="mt-2 font-serif text-4xl">More from the edit</h2>
            </div>
            <Link
              href={`/category/${product.categorySlug}`}
              className="text-sm font-semibold underline underline-offset-4"
            >
              View all
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
            {relatedProducts(product).map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
