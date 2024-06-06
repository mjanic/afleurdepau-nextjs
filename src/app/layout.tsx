import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A Fleur de Pau",
  description: "A Fleur de Pau Boutique", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-paubeige`}>{children}</body>
    </html>
  );
}
