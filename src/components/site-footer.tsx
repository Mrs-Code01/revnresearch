import Link from "next/link";
import { Logo } from "./logo";
import { Container } from "./ui";

const columns = [
  {
    title: "The briefing",
    links: [
      { label: "This week, at a glance", href: "/#the-memo" },
      { label: "What this page shows you", href: "/#what-it-shows" },
      { label: "Market-relative performance", href: "/#market-lead" },
      { label: "Why the numbers are trustworthy", href: "/#trust" },
    ],
  },
  {
    title: "Signals & actions",
    links: [
      { label: "Changing dynamics", href: "/signals#changing-dynamics" },
      { label: "Price floors and steps", href: "/signals#floors" },
      { label: "The flex line", href: "/signals#flex-line" },
      { label: "Needs a win", href: "/signals#needs-a-win" },
      { label: "Push list", href: "/signals#push-list" },
    ],
  },
  {
    title: "Data",
    links: [
      { label: "Wheelhouse integration", href: "/#trust" },
      { label: "KPI definitions", href: "/#trust" },
      { label: "Refresh cadence", href: "/#trust" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-bg-soft">
      <Container className="py-20">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Logo className="h-9 w-9" />
              <span className="display text-[1.15rem] tracking-[-0.03em]">
                Rev<span className="text-red">&amp;</span>Research
              </span>
            </Link>
            <p className="pretty mt-6 max-w-sm text-[1rem] leading-relaxed text-fg-muted">
              Every occupancy signal, pricing recommendation, and market
              comparison for your portfolio, computed once, validated centrally,
              refreshed daily.
            </p>
            <p className="mt-7 inline-block border border-border-strong px-4 py-2 text-[0.85rem] text-fg-muted">
              Wheelhouse sync healthy, refreshed daily
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-fg-subtle">
                  {col.title}
                </h3>
                <ul className="mt-6 flex flex-col gap-3.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-[0.98rem] text-fg-muted transition-colors hover:text-fg"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 border-t border-border pt-8">
          <p className="text-[0.9rem] text-fg-subtle text-center">
            © {new Date().getFullYear()} Rev &amp; Research. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
