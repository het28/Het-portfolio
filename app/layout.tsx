import type { Metadata, Viewport } from "next";
import "./globals.css";
import { profile } from "./portfolio-data";

export const metadata: Metadata = {
  title: `${profile.name} | Portfolio`,
  description: `Academic AI research portfolio for ${profile.name}.`,
  icons: {
    icon: "/favicon.svg",
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
