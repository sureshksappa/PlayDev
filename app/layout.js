import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import "../fontawesome";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PlayDev Cryptic Hunt (E-HUN1.0)",
  description:
    "Join PlayDev Cryptic Hunt (E-HUN1.0) for an exciting online treasure hunt. Solve puzzles, crack codes, and connect clues in this fun and challenging competition. Open to school and college students across India. Participate from anywhere online on August 4, 2024, and win exciting prizes!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
