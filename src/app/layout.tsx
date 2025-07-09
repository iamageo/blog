import type { Metadata } from "next";
import { Karla } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { ScrollToTop } from "../components/scroll-to-top";
import Script from "next/script";
import dynamic from "next/dynamic";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Geovani Amaral",
  description: "Geovani Amaral's personal website",
};

const karla = Karla({
  subsets: ["latin"],
  weight: "400",
});

// https://www.reddit.com/r/nextjs/comments/1bhfikg/comment/kxwj9ou/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button
const Header = dynamic(() => import("./Header"), { ssr: false });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="min-h-screen">
      <body className={`${karla.className} min-h-full px-6`}>
        <Analytics />
        <Script id="theme-toggle" strategy="afterInteractive">
          {`document.documentElement.classList.toggle("dark", localStorage.theme ===
        "dark" || (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches))`}
        </Script>
        <Header />
        <main className="mx-auto max-w-prose pb-4">
          {children}
          <ScrollToTop />
        </main>
        <footer className="mx-auto flex max-w-prose flex-col max-sm:items-start items-center gap-2 py-6 text-sm text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-4">
            <a
              className="decoration-zinc-500 underline-offset-4 transition-all sm:hover:underline dark:decoration-zinc-400"
              href="https://github.com/iamageo/blog"
              target="_blank"
            >
              Code
            </a>
            <a
              className="decoration-zinc-500 underline-offset-4 transition-all sm:hover:underline dark:decoration-zinc-400"
              href="https://x.com/iamageo"
              target="_blank"
            >
              @iamageo
            </a>
          </div>
          <blockquote className="text-zinc-800 dark:text-zinc-300">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Forked and adapted from{" "}
            <a
              href="https://github.com/LukeberryPi"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-zinc-700 dark:hover:text-zinc-300"
            >
              Luke Berry’s
            </a>{" "}
            blog template.
          </p>
          </blockquote>
        </footer>
      </body>
    </html>
  );
}
