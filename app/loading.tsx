export default function Loading() {
  return (
    <main
      className="flex min-h-[60vh] items-center justify-center bg-background px-6"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="flex flex-col items-center gap-5 text-center">
        <div className="relative size-14" aria-hidden="true">
          <div className="absolute inset-0 rounded-full border-2 border-border" />
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-accent" />
          <div className="absolute inset-3 rounded-full bg-accent/10" />
        </div>
        <div>
          <p className="font-serif text-xl font-semibold">
            Billa&apos;s Showroom
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Preparing your selection...
          </p>
        </div>
        <span className="sr-only">Loading page</span>
      </div>
    </main>
  );
}
