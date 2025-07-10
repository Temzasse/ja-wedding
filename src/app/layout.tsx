import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Anne and Julien's Wedding",
  description: "Info about Anne and Julien's wedding",
  other: {
    google: "notranslate",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" translate="no">
      <body>{children}</body>
    </html>
  );
}
