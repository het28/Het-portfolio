import type { Metadata, Viewport } from "next";
import "./globals.css";
import { profile } from "./portfolio-data";

export const metadata: Metadata = {
  title: `${profile.name} | Portfolio`,
  description: `Academic AI research portfolio for ${profile.name}.`,
  icons: {
    icon: [
      { url: "/hm-icon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/hm-icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/hm-icon-180.png", sizes: "180x180", type: "image/png" },
      { url: "/hm.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/hm-icon-180.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/hm-icon-32.png",
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
