import type { Metadata } from "next";
import "./globals.css";
import { profile } from "./portfolio-data";
import { SiteCursor } from "./shared";

export const metadata: Metadata = {
  title: `${profile.name} | Portfolio`,
  description: `Academic AI research portfolio for ${profile.name}.`,
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteCursor />
        {children}
      </body>
    </html>
  );
}
