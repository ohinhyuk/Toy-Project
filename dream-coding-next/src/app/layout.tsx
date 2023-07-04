import "./globals.css";
import { Inter } from "next/font/google";
import styles from "./layout.module.css";
import Link from "next/link";
import { Metadata } from "next";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "멋진 제품 판매소",
  description: "멋진 제품을 판매하는 곳입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className={styles.header}>
          <h4>Logo</h4>
          <nav className={styles.nav}>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/products">Products</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
