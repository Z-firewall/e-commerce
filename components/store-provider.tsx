"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Product } from "@/lib/catalog";

type CartItem = Product & { quantity: number };
type StoreContextValue = {
  cart: CartItem[];
  addToBag: (product: Product, quantity?: number) => void;
  removeFromBag: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  total: number;
  itemCount: number;
};
const StoreContext = createContext<StoreContextValue | null>(null);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  useEffect(() => {
    try {
      setCart(JSON.parse(localStorage.getItem("morrow-cart") || "[]"));
    } catch {}
  }, []);
  useEffect(() => {
    localStorage.setItem("morrow-cart", JSON.stringify(cart));
  }, [cart]);
  const value = useMemo(
    () => ({
      cart,
      addToBag: (product: Product, quantity = 1) =>
        setCart((items) => {
          const existing = items.find((item) => item.id === product.id);
          return existing
            ? items.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item,
              )
            : [...items, { ...product, quantity }];
        }),
      removeFromBag: (id: number) =>
        setCart((items) => items.filter((item) => item.id !== id)),
      updateQuantity: (id: number, quantity: number) =>
        setCart((items) =>
          quantity < 1
            ? items.filter((item) => item.id !== id)
            : items.map((item) =>
                item.id === id ? { ...item, quantity } : item,
              ),
        ),
      total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
      itemCount: cart.reduce((sum, item) => sum + item.quantity, 0),
    }),
    [cart],
  );
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
}
export function useStore() {
  const context = useContext(StoreContext);
  if (!context) throw new Error("useStore must be used within StoreProvider");
  return context;
}
