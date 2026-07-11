import Image from "next/image";
import Link from "next/link";
import {
  ButtonLink,
  CompareBars,
  Container,
  Eyebrow,
  Pill,
  SectionLabel,
  StatTile,
  Up,
} from "@/components/ui";
import { CopyButton } from "@/components/copy-button";
import {
  forwardables,
  hero,
  marketLead,
  memo,
  sixThings,
  trust,
} from "@/content/copy";

import heroA from "../../public/images/hero-a.jpg";
import memoImg from "../../public/images/memo.jpg";
import interior01 from "../../public/images/interior-01.jpg";
import interior03 from "../../public/images/interior-03.jpg";
import kitchen01 from "../../public/images/kitchen-01.jpg";
import coastal02 from "../../public/images/coastal-02.jpg";

/* Only the 2-bedroom row is a validated number. The others stay blank on
   purpose: "we leave it blank rather than show you a zero that isn't real." */
const bedroomRows = [
  { name: "1-bedroom", you: null, market: null, note: "Not computed for this window" },
  { name: "2-bedroom", you: 75, market: 44 },
  { name: "3-bedroom", you: null, market: null, note: "Not computed for this window" },
  { name: "4-bedroom +", you: null, market: null, note: "Not computed for this window" },
];

export default function BriefingPage() {
  return (
    <>
      {/* ====================== HERO: split slab, full viewport ====================== */}
      <section className="border-b border-border">
        {/* 5rem = the sticky nav, so slab + nav together fill exactly one screen. */}
        <div className="grid lg:min-h-[calc(100svh-5rem)] lg:grid-cols-2">
          {/* Type slab. The headline scales against viewport HEIGHT as well as
              width (min(vw,vh)), so the slab still fits one screen on short
              laptops instead of pushing the CTA below the fold. */}
          <div className="paper flex min-w-0 items-center px-6 py-16 sm:px-12 lg:py-12 lg:pl-16 lg:pr-14 xl:pl-24">
            <div className="w-full min-w-0 max-w-[36rem]">
              <Eyebrow>{hero.eyebrow}</Eyebrow>

              <h1 className="display mt-8 text-[clamp(2.75rem,min(5.6vw,8.2vh),4.9rem)]">
                {hero.headlineLead}{" "}
                <span className="text-red">{hero.headlineRisk}</span>
                {hero.headlineTail}
              </h1>

              <p className="pretty mt-7 max-w-xl text-[1.08rem] leading-[1.65] text-fg-muted lg:text-[1.12rem]">
                {hero.subhead}
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <ButtonLink href="#the-memo" variant="primary">
                  {hero.primary}
                </ButtonLink>
                <ButtonLink href="/signals" variant="secondary">
                  {hero.secondary}
                </ButtonLink>
              </div>
            </div>
          </div>

          {/* Photo, bleeding to the right edge */}
          <div className="relative min-h-[60svh] lg:min-h-full">
            <Image
              src={heroA}
              alt="A rental home at dusk, lit from within"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              placeholder="blur"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ============================== THE MEMO ============================== */}
      <section id="the-memo" className="scroll-mt-24 bg-bg-soft py-24 sm:py-32">
        <Container>
          <div data-reveal>
            <SectionLabel>{memo.label}</SectionLabel>
          </div>

          <div className="mt-14 grid gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:gap-20">
            <article data-reveal>
              <h2 className="display balance text-[clamp(2.1rem,3.8vw,3.2rem)]">
                {memo.title}
              </h2>

              <div className="pretty mt-9 flex flex-col gap-6 text-[1.15rem] leading-[1.8] text-fg-muted">
                {memo.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <p className="mt-10 border-t border-border-strong pt-7 text-[1.02rem] font-semibold text-fg">
                {memo.signature}
              </p>
            </article>

            <aside data-reveal style={{ ["--reveal-delay" as string]: "120ms" }}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border">
                <Image
                  src={memoImg}
                  alt="A living room prepared for check-in"
                  fill
                  sizes="(min-width: 1024px) 28vw, 100vw"
                  placeholder="blur"
                  className="object-cover"
                />
              </div>
              <div className="mt-8">
                <StatTile
                  value="Daily"
                  label="Refresh cadence"
                  sub="KPIs move with your Wheelhouse pull."
                  tone="green"
                />
              </div>
            </aside>
          </div>

          {/* Forwardable blocks */}
          <div className="mt-24">
            <p className="pretty max-w-3xl text-[1.02rem] text-fg-subtle" data-reveal>
              {memo.forwardableNote}
            </p>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {forwardables.map((block, i) => (
                <div
                  key={block.audience}
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${i * 110}ms` }}
                  className="flex flex-col rounded-2xl border border-border bg-surface p-7"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-fg-subtle">
                      For the {block.audience}
                    </span>
                    <CopyButton text={block.body} />
                  </div>
                  <p className="pretty mt-6 text-[1.02rem] leading-relaxed text-fg-muted">
                    {block.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ============================== SIX THINGS ============================== */}
      <section id="what-it-shows" className="scroll-mt-24 py-24 sm:py-32">
        <Container>
          <div className="max-w-3xl" data-reveal>
            <SectionLabel>Here&apos;s what you&apos;re looking at</SectionLabel>
            <h2 className="display balance mt-8 text-[clamp(2.3rem,4.8vw,3.9rem)]">
              Six reads. One list. Worked top-down.
            </h2>
          </div>

          <div className="mt-20 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:gap-x-20">
            {sixThings.map((item, i) => (
              <div
                key={item.n}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${(i % 2) * 100}ms` }}
                className="border-t border-border-strong pt-8"
              >
                <div className="flex items-baseline gap-6">
                  <span className="text-[0.95rem] font-semibold tabular-nums text-red-ink">
                    {item.n}
                  </span>
                  <h3 className="display text-[1.65rem] leading-tight tracking-[-0.02em] sm:text-[1.9rem]">
                    {item.title}
                  </h3>
                </div>
                <p className="pretty mt-6 text-[1.06rem] leading-[1.75] text-fg-muted">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-24 grid grid-cols-2 gap-4 sm:grid-cols-4" data-reveal>
            {[interior01, kitchen01, interior03, coastal02].map((src, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(min-width: 640px) 22vw, 45vw"
                  placeholder="blur"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================== MARKET LEAD ============================== */}
      <section id="market-lead" className="scroll-mt-24 bg-bg-soft py-24 sm:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <div data-reveal>
              <SectionLabel>{marketLead.label}</SectionLabel>
              <h2 className="display balance mt-8 text-[clamp(2.1rem,4.2vw,3.4rem)]">
                {marketLead.title}
              </h2>
              <p className="pretty mt-8 text-[1.15rem] leading-relaxed text-fg-muted">
                {marketLead.body}
              </p>

              <div className="mt-12 grid gap-8 sm:grid-cols-2">
                <StatTile value="75%" label="Your portfolio" sub="2-bedroom occupancy" tone="green" />
                <StatTile value="44%" label="Market" sub="Same bedroom count, same market" />
              </div>

              <p className="mt-10 border-t border-border pt-6 text-[0.95rem] leading-relaxed text-fg-subtle">
                {marketLead.blankNote}
              </p>
            </div>

            <div
              className="min-w-0 rounded-2xl border border-border bg-surface p-7 sm:p-10"
              data-reveal
              style={{ ["--reveal-delay" as string]: "120ms" }}
            >
              <div className="mb-9 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="display text-[1.4rem] tracking-[-0.02em]">
                    {marketLead.chartTitle}
                  </h3>
                  <p className="mt-1.5 text-[0.95rem] text-fg-muted">
                    {marketLead.chartSub}
                  </p>
                </div>
                <Pill tone="green" glyph={<Up />}>
                  2-bedroom +31 pt
                </Pill>
              </div>

              <CompareBars rows={bedroomRows} />

              <div className="mt-10 border-t border-border pt-6">
                <Link
                  href="/signals#changing-dynamics"
                  className="text-[1rem] font-semibold text-red-ink underline-offset-4 hover:underline"
                >
                  {marketLead.link}
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================== TRUST ============================== */}
      <section id="trust" className="scroll-mt-24 py-24 sm:py-32">
        <Container>
          <div className="max-w-3xl" data-reveal>
            <SectionLabel>{trust.label}</SectionLabel>
            <h2 className="display balance mt-8 text-[clamp(2.3rem,4.8vw,3.9rem)]">
              {trust.title}
            </h2>
          </div>

          <div className="mt-20 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:gap-x-20">
            {trust.items.map((item, i) => (
              <div
                key={item.title}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${(i % 2) * 100}ms` }}
                className="border-t border-border-strong pt-8"
              >
                <div className="flex items-baseline gap-6">
                  <span className="text-[0.95rem] font-semibold tabular-nums text-red-ink">
                    {item.n}
                  </span>
                  <h3 className="display text-[1.5rem] tracking-[-0.02em]">
                    {item.title}
                  </h3>
                </div>
                <p className="pretty mt-6 text-[1.06rem] leading-[1.75] text-fg-muted">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 grid gap-10 border-t border-border-strong pt-12 sm:grid-cols-3" data-reveal>
            <StatTile value="180" label="Days of history" sub="Booking, blocking and availability, per home." />
            <StatTile value="1" label="Central store" sub="Computed once. Read by every view." tone="green" />
            <StatTile value="2wk" label="Market windows" sub="Segmented by bedroom count and your market." />
          </div>

          <div className="mt-20 flex justify-center" data-reveal>
            <ButtonLink href="/signals" variant="primary">
              {hero.secondary}
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
