import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deseret Alphabet Translator",
  description:
    "Translate between English and the 19th-century phonemic Deseret alphabet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
