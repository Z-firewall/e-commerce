"use client";
import Link from "next/link";
import { Heart, Plus } from "lucide-react";
import { useState } from "react";
import type { Product } from "@/lib/catalog";
import { formatPrice } from "@/lib/catalog";
import { useStore } from "./store-provider";
export function ProductCard({ product }: { product: Product }) {
  const [fav, setFav] = useState(false);
  const { addToBag } = useStore();
  return (
    <article className="group">
      <div className="relative mb-4 overflow-hidden bg-secondary">
        <Link href={`/product/${product.slug}`}>
          <img
            src={product.image}
            alt={product.name}
            className="aspect-[.84] w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </Link>
        {product.badge && (
          <span className="absolute left-3 top-3 bg-background px-2 py-1 text-[10px] font-semibold uppercase tracking-wider">
            {product.badge}
          </span>
        )}
        <button
          onClick={() => setFav(!fav)}
          aria-label={`Favorite ${product.name}`}
          className="absolute right-3 top-3 rounded-full bg-background/90 p-2"
        >
          <Heart
            className={fav ? "size-4 fill-accent text-accent" : "size-4"}
          />
        </button>
        <button
          onClick={() => addToBag(product)}
          aria-label={`Add ${product.name} to bag`}
          className="absolute bottom-3 right-3 rounded-full bg-primary p-3 text-primary-foreground opacity-0 transition group-hover:opacity-100"
        >
          <Plus className="size-4" />
        </button>
      </div>
      <Link href={`/product/${product.slug}`}>
        <p className="text-sm font-medium">{product.name}</p>
        <p className="mt-1 text-sm text-muted-foreground">
          {product.color} <span className="mx-1">·</span>{" "}
          {formatPrice(product.price)}
        </p>
      </Link>
    </article>
  );
}
