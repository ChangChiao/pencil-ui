import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pay App",
  description: "Mobile payment application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className="h-full">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/lucide-static@latest/font/lucide.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="h-full font-primary bg-[var(--fin-bg)]">{children}</body>
    </html>
  );
}
