import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Julien & Anne's Wedding",
  description: "Info about Julien & Anne's wedding",
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
