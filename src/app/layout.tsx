import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "株式会社やも",
  description: "株式会社やも 映像制作会社 CM / ドラマ / WebCMなどオールジャンル対応。無料見積もり、ご相談可能。低予算でハイクオリティな映像制作を実現。",
  openGraph: {
    title: "株式会社やも 映像制作会社 CM / ドラマ / WebCMなどオールジャンル対応。無料見積もり、ご相談可能。低予算でハイクオリティな映像制作を実現。",
    description: "test",
    locale: 'ja_JP',
    images: [{ url: '/yamotop.png' }],
    siteName: "株式会社やも"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
