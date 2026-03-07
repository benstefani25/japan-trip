import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { BottomNav } from "@/components/BottomNav";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Japan 2026 — Family Trip",
  description: "April 23 – May 3, 2026 · Tokyo & Kyoto",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Japan Trip",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: "#F5F0E8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased washi-bg`}
      >
        <main className="pb-20 md:pb-0 md:pt-16 min-h-screen">
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  );
}
