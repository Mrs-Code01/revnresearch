import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Rev & Research · Your revenue command center",
    template: "%s · Rev & Research",
  },
  description:
    "One place to see what's moving, what's at risk, and what to price next. Every occupancy signal, pricing recommendation, and market comparison for your portfolio, computed once, validated centrally, refreshed daily.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbf8f4" },
    { media: "(prefers-color-scheme: dark)", color: "#14100d" },
  ],
};

/**
 * Runs before first paint: resolves the stored/system theme and flags that JS
 * is live, which is what arms the scroll-reveal styles.
 */
const themeScript = `(function(){try{var e=document.documentElement;e.classList.add("js");var t=localStorage.getItem("theme");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;e.classList.toggle("dark",d);e.style.colorScheme=d?"dark":"light";}catch(_){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // suppressHydrationWarning: themeScript stamps `js`/`dark` and a color-scheme
  // style onto <html> before hydration, so the client's attributes intentionally
  // differ from the server's. It is scoped to this element only, so children still
  // get full hydration checking.
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-fg antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-surface focus:px-4 focus:py-2 focus:font-semibold focus:shadow-lg focus:ring-1 focus:ring-border-strong"
        >
          Skip to content
        </a>
        <ScrollReveal />
        <SiteNav />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
