import { notFound } from "next/navigation";
import { categories, products } from "@/lib/catalog";
import { SiteHeader } from "@/components/site-header";
import { ProductCard } from "@/components/product-card";
import { CategorySidebar } from "@/components/category-sidebar";
export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);
  if (!category) notFound();
  const items =
    slug === "all"
      ? products
      : products.filter((product) => product.categorySlug === slug);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto flex max-w-7xl gap-8 px-5 py-10 lg:px-8 lg:py-14">
        <CategorySidebar />
        <section className="min-w-0 flex-1">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Morrow / Shop
          </p>
          <div className="flex flex-col justify-between gap-5 border-b border-border pb-10 md:flex-row md:items-end">
            <div>
              <h1 className="font-serif text-5xl tracking-tight sm:text-6xl">
                {category.name}
              </h1>
              <p className="mt-4 max-w-lg leading-7 text-muted-foreground">
                {category.description}
              </p>
            </div>
            <p className="text-sm text-muted-foreground">
              {items.length} pieces
            </p>
          </div>
          {items.length ? (
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 py-12 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
              {items.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="py-20 text-muted-foreground">
              More pieces are on the way.
            </p>
          )}
        </section>
      </main>
    </div>
  );
}
