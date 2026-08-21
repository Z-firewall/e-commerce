"use client";
import Link from "next/link";
import { ArrowLeft, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { useStore } from "@/components/store-provider";
import { formatPrice } from "@/lib/catalog";
export default function BagPage() {
  const { cart, total, updateQuantity, removeFromBag } = useStore();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5 py-12 lg:px-8 lg:py-20">
        <Link
          href="/category/all"
          className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" /> Continue shopping
        </Link>
        <div className="flex flex-col justify-between gap-3 border-b border-border pb-8 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Your Morrow edit
            </p>
            <h1 className="font-serif text-6xl tracking-tight">Shopping bag</h1>
          </div>
          <p className="text-sm text-muted-foreground">
            {cart.reduce((sum, item) => sum + item.quantity, 0)} items
          </p>
        </div>
        {cart.length ? (
          <div className="grid gap-12 py-10 lg:grid-cols-[1fr_340px]">
            <div className="flex flex-col gap-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 border-b border-border pb-6"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="size-28 object-cover sm:size-36"
                  />
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-4">
                      <div>
                        <Link
                          href={`/product/${item.slug}`}
                          className="font-medium hover:text-accent"
                        >
                          {item.name}
                        </Link>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {item.color}
                        </p>
                      </div>
                      <p className="font-medium">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-5">
                      <div className="flex items-center border border-border">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="p-2"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="size-3" />
                        </button>
                        <span className="min-w-8 text-center text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="p-2"
                          aria-label="Increase quantity"
                        >
                          <Plus className="size-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromBag(item.id)}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="size-4" /> Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <aside className="h-fit border border-border p-6">
              <h2 className="font-serif text-3xl">Summary</h2>
              <div className="mt-6 flex justify-between text-sm">
                <span>Subtotal</span>
                <span>{formatPrice(total)}</span>
              </div>
              <div className="mt-3 flex justify-between text-sm text-muted-foreground">
                <span>Delivery</span>
                <span>{total >= 75 ? "Free" : "$8.00"}</span>
              </div>
              <div className="my-6 border-t border-border pt-5">
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>{formatPrice(total + (total >= 75 ? 0 : 8))}</span>
                </div>
              </div>
              <button
                onClick={() =>
                  alert(
                    "Thanks for shopping with Billa's Showroom. Checkout is ready to connect.",
                  )
                }
                className="w-full bg-primary py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground"
              >
                Purchase
              </button>
              <p className="mt-4 text-center text-xs leading-5 text-muted-foreground">
                Secure checkout · Easy 30-day returns
              </p>
            </aside>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 py-28 text-center">
            <ShoppingBag className="size-10 text-muted-foreground" />
            <h2 className="font-serif text-4xl">Your bag is waiting.</h2>
            <p className="max-w-sm text-muted-foreground">
              Add something good to get started.
            </p>
            <Link
              href="/category/all"
              className="mt-3 bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              Explore the collection
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
