import type { Metadata } from "next";
import { M_PLUS_Rounded_1c, Klee_One } from "next/font/google";
import "./globals.css";

const mPlusRounded = M_PLUS_Rounded_1c({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const kleeOne = Klee_One({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "めぐりケア | 自分を整えると、毎日が変わる",
  description:
    "20〜40代の女性へ。食と日々の習慣から、からだを根底から整えるための情報をお届けします。自分が輝くと、大切な人も輝く。",
  keywords: ["生理", "女性の健康", "食生活", "ホルモンバランス", "セルフケア"],
  openGraph: {
    title: "めぐりケア | 自分を整えると、毎日が変わる",
    description:
      "食と日々の習慣から、からだを根底から整える。20〜40代の女性のためのセルフケアサイト。",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${mPlusRounded.variable} ${kleeOne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
