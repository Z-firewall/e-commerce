import type { Metadata, Viewport } from "next";
import "./globals.css";
import { StoreProvider } from "@/components/store-provider";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Billa's Showroom — Everything worth choosing.",
  description:
    "Billa's Showroom brings together everyday essentials, clothing, technology, home goods, and more.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <GoogleTagManager gtmId="GTM-5WCTZD5V" />

      <body className="antialiased">
        <StoreProvider>{children}</StoreProvider>
        {process.env.NODE_ENV === "production"}
      </body>
    </html>
  );
}
