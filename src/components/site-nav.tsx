"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import { Logo } from "./logo";

const links = [
  { href: "/", label: "Today's briefing" },
  { href: "/signals", label: "Signals & actions" },
];

export function SiteNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock the page behind the open sheet.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-bg/80 backdrop-blur-xl supports-[backdrop-filter]:bg-bg/70"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6 sm:px-10"
      >
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Logo className="h-9 w-9" />
          <span className="display text-[1.15rem] tracking-[-0.03em]">
            Rev<span className="text-red">&</span>Research
          </span>
        </Link>

        {/* Desktop nav starts at lg. At md the logo, both links, the toggle and
            the CTA together exceed the viewport once labels are nowrap. */}
        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`relative whitespace-nowrap rounded-full px-4 py-2 text-[0.95rem] font-medium transition-colors ${
                  active
                    ? "text-fg"
                    : "text-fg-muted hover:text-fg"
                }`}
              >
                {l.label}
                {active && (
                  <span className="absolute inset-x-4 -bottom-px h-0.5 rounded-full bg-red" />
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <Link
            href="/#the-memo"
            className="hidden whitespace-nowrap rounded-full bg-red px-5 py-2.5 text-[0.95rem] font-semibold text-white transition-colors hover:bg-red-ink lg:inline-flex"
          >
            Open today&apos;s briefing
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface-2 text-fg lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile sheet */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-border bg-bg px-5 pb-8 pt-4 lg:hidden"
      >
        <div className="flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`rounded-xl px-4 py-3.5 text-lg font-semibold ${
                pathname === l.href ? "bg-surface-2 text-fg" : "text-fg-muted"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <Link
          href="/#the-memo"
          onClick={() => setOpen(false)}
          className="mt-4 flex items-center justify-center rounded-full bg-red px-5 py-3.5 text-base font-semibold text-white"
        >
          Open today&apos;s briefing
        </Link>
      </div>
    </header>
  );
}
