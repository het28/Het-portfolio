import type { Metadata, Viewport } from "next";
import "./globals.css";
import { profile } from "./portfolio-data";

export const metadata: Metadata = {
  title: `${profile.name} | Portfolio`,
  description: `Academic AI research portfolio for ${profile.name}.`,
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", sizes: "any" },
      { url: "/favicon.svg?v=2", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png?v=2",
    shortcut: "/favicon.ico?v=2",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="axis">
      <body>{children}</body>
    </html>
  );
}
