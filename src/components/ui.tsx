import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

/* ------------------------------ Layout ------------------------------ */

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-6 sm:px-10 ${className}`}>
      {children}
    </div>
  );
}

/** A hairline rule plus small caps. No icon, no dot. */
export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <span className="h-px w-10 bg-red" />
      <span className="text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-red-ink">
        {children}
      </span>
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block border-b border-border-strong pb-2 text-[0.82rem] font-semibold uppercase tracking-[0.2em] text-fg-subtle">
      {children}
    </span>
  );
}

export function Card({
  children,
  className = "",
  ...rest
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      {...rest}
      className={`rounded-2xl border border-border bg-surface p-7 sm:p-9 ${className}`}
    >
      {children}
    </div>
  );
}

/* ------------------------------ Buttons ------------------------------ */

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "quiet";
  className?: string;
}) {
  const styles = {
    primary: "bg-red text-white hover:bg-red-ink",
    secondary: "border border-border-strong bg-transparent text-fg hover:bg-surface-2",
    quiet: "bg-fg text-bg hover:opacity-90",
  }[variant];

  return (
    <Link
      href={href}
      /* nowrap from sm up, so labels read as one line in the pill. Below sm the
         buttons are full-width and stacked, and a nowrap min-content there
         would push past a 320px viewport. */
      className={`inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-4 text-center text-[1.02rem] font-semibold leading-none transition-colors sm:px-8 sm:whitespace-nowrap ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}

/* --------------------------- Status pill ---------------------------- */

type Tone = "green" | "red" | "amber" | "neutral";

const toneMap: Record<Tone, string> = {
  green: "bg-green-soft text-green-ink border-green/30",
  red: "bg-red-soft text-red-ink border-red/30",
  amber: "bg-amber-soft text-amber-ink border-amber/30",
  neutral: "bg-surface-2 text-fg-muted border-border",
};

/** Status always ships with a glyph plus a label, never color alone. */
export function Pill({
  tone = "neutral",
  glyph,
  children,
}: {
  tone?: Tone;
  glyph?: ReactNode;
  children: ReactNode;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[0.8rem] font-semibold ${toneMap[tone]}`}
    >
      {glyph}
      {children}
    </span>
  );
}

/* Plain directional glyphs, not iconography. */
export const Up = () => (
  <span aria-hidden="true" className="text-[0.72rem] leading-none">
    &#9650;
  </span>
);
export const Down = () => (
  <span aria-hidden="true" className="text-[0.72rem] leading-none">
    &#9660;
  </span>
);
export const Flat = () => (
  <span aria-hidden="true" className="text-[0.9rem] leading-none">
    &#8722;
  </span>
);

/* ------------------------------ Stat tile ---------------------------- */

export function StatTile({
  value,
  label,
  sub,
  tone = "neutral",
}: {
  value: string;
  label: string;
  sub?: string;
  tone?: Tone;
}) {
  const valueTone =
    tone === "green"
      ? "text-green-ink"
      : tone === "red"
        ? "text-red-ink"
        : tone === "amber"
          ? "text-amber-ink"
          : "text-fg";

  return (
    <div className="border-t border-border-strong pt-5">
      <div className={`display text-[2.5rem] sm:text-[2.9rem] ${valueTone}`}>
        {value}
      </div>
      <div className="mt-3 text-[0.95rem] font-semibold text-fg">{label}</div>
      {sub && <div className="mt-1 text-[0.92rem] text-fg-muted">{sub}</div>}
    </div>
  );
}

/* --------------------------- Comparison bars -------------------------
   Two series: your portfolio vs. the market. The market is a warm neutral
   reference, not a second hue, so brick red stays reserved for status.
   Every bar is direct-labeled, so identity never rests on color alone.
   -------------------------------------------------------------------- */

export function CompareBars({
  rows,
  max = 100,
}: {
  rows: { name: string; you: number | null; market: number | null; note?: string }[];
  max?: number;
}) {
  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-2">
        <LegendKey className="bg-green" label="Your portfolio" />
        <LegendKey className="bg-market" label="Market" />
      </div>

      <ul className="flex flex-col gap-7">
        {rows.map((row, i) => {
          const blank = row.you === null || row.market === null;
          return (
            <li key={row.name}>
              <div className="mb-2.5 flex items-baseline justify-between gap-4">
                <span className="text-[0.98rem] font-semibold text-fg">
                  {row.name}
                </span>
                {blank ? (
                  <span className="text-[0.86rem] text-fg-subtle">{row.note}</span>
                ) : (
                  <span className="text-[0.86rem] font-semibold text-green-ink">
                    +{Math.round(row.you! - row.market!)} pt lead
                  </span>
                )}
              </div>

              {blank ? (
                <div className="flex h-[52px] items-center rounded-lg border border-dashed border-border-strong px-4">
                  <span className="text-[1.4rem] text-fg-subtle">&#183;</span>
                </div>
              ) : (
                /* 2px surface gap between adjacent bars */
                <div className="flex flex-col gap-0.5">
                  <Bar
                    value={row.you!}
                    max={max}
                    color="bg-green"
                    seriesLabel="Your portfolio"
                    delay={i * 90}
                  />
                  <Bar
                    value={row.market!}
                    max={max}
                    color="bg-market"
                    seriesLabel="Market"
                    delay={i * 90 + 110}
                  />
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function LegendKey({ className, label }: { className: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-[0.9rem] text-fg-muted">
      <span className={`h-2.5 w-5 rounded-full ${className}`} />
      {label}
    </span>
  );
}

function Bar({
  value,
  max,
  color,
  seriesLabel,
  delay,
}: {
  value: number;
  max: number;
  color: string;
  seriesLabel: string;
  delay: number;
}) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-6 flex-1 overflow-hidden rounded-md bg-surface-2">
        <div
          data-bar
          style={{ width: `${pct}%`, ["--bar-delay" as string]: `${delay}ms` }}
          className={`h-full rounded-md ${color}`}
        />
      </div>
      {/* Direct label. Text wears text tokens, never the series color. */}
      <span className="w-[9.5rem] shrink-0 text-[0.9rem] text-fg-muted">
        <span className="font-semibold tabular-nums text-fg">{value}%</span>{" "}
        <span className="text-fg-subtle">{seriesLabel}</span>
      </span>
    </div>
  );
}
