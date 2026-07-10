import type { Metadata } from "next";
import Image from "next/image";
import {
  ButtonLink,
  Card,
  Container,
  Down,
  Eyebrow,
  Flat,
  Pill,
  SectionLabel,
  Up,
} from "@/components/ui";
import {
  changingDynamics,
  closing,
  flexLine,
  floors,
  needsAWin,
  pushList,
  signalsIntro,
} from "@/content/copy";

import coastal01 from "../../../public/images/coastal-01.jpg";
import prop01 from "../../../public/images/prop-01.jpg";
import prop03 from "../../../public/images/prop-03.jpg";
import prop05 from "../../../public/images/prop-05.jpg";
import house02 from "../../../public/images/house-02.jpg";
import house04 from "../../../public/images/house-04.jpg";
import house06 from "../../../public/images/house-06.jpg";
import kitchen02 from "../../../public/images/kitchen-02.jpg";
import interior02 from "../../../public/images/interior-02.jpg";

export const metadata: Metadata = {
  title: "Signals & actions",
  description:
    "Why it moved, and what to do about it: changing dynamics, price floors and steps, the flex line, homes that need a win, and this week's push list.",
};

const ladder = [
  { label: "Today's ask", kind: "start" as const },
  { label: "Step down 10%", kind: "step" as const },
  { label: "Step down 10%", kind: "step" as const },
  { label: "Floor, $249", kind: "floor" as const },
];

const flexHomes = [
  { img: prop01, name: "404 Barrington Arms", month: "August", rate: "$447" },
  { img: prop05, name: "2371 Racquet Club", month: "July", rate: "$468" },
];

const ranked = [
  {
    rank: "01",
    img: prop03,
    name: "404 Barrington Arms",
    month: "August",
    move: "Step down 10% at a time",
    detail: "Never below the $249 floor",
  },
  {
    rank: "02",
    img: prop05,
    name: "2371 Racquet Club",
    month: "July",
    move: "Anchor at the flex line",
    detail: "Booked at $468 a night",
  },
];

export default function SignalsPage() {
  return (
    <>
      {/* ============================== INTRO: split slab ============================== */}
      <section className="border-b border-border">
        <div className="grid lg:min-h-[calc(100svh-5rem)] lg:grid-cols-2">
          <div className="paper flex min-w-0 items-center px-6 py-16 sm:px-12 lg:py-12 lg:pl-16 lg:pr-14 xl:pl-24">
            <div className="w-full min-w-0 max-w-[36rem]">
              <Eyebrow>{signalsIntro.eyebrow}</Eyebrow>
              <h1 className="display mt-8 text-[clamp(2.75rem,min(5.6vw,8.2vh),4.9rem)]">
                {signalsIntro.title}
              </h1>
              <p className="pretty mt-7 max-w-xl text-[1.08rem] leading-[1.65] text-fg-muted lg:text-[1.12rem]">
                {signalsIntro.body}
              </p>
              <div className="mt-9">
                <ButtonLink href="#changing-dynamics" variant="primary">
                  Read the signals
                </ButtonLink>
              </div>
            </div>
          </div>

          <div className="relative min-h-[60svh] lg:min-h-full">
            <Image
              src={coastal01}
              alt="A coastal rental property at golden hour"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              placeholder="blur"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ======================= CHANGING DYNAMICS ======================= */}
      <section id="changing-dynamics" className="scroll-mt-24 py-24 sm:py-32">
        <Container>
          <div className="max-w-3xl" data-reveal>
            <SectionLabel>{changingDynamics.label}</SectionLabel>
            <h2 className="display balance mt-8 text-[clamp(2.2rem,4.6vw,3.7rem)]">
              {changingDynamics.title}
            </h2>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Card data-reveal className="flex min-w-0 flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <Pill tone="neutral">1-bedroom</Pill>
                  <Pill tone="neutral">October</Pill>
                  <Pill tone="amber" glyph={<Flat />}>
                    Hold rate
                  </Pill>
                </div>

                <p className="pretty mt-9 text-[1.15rem] leading-[1.75] text-fg-muted">
                  {changingDynamics.body}{" "}
                  <strong className="font-semibold text-fg">
                    {changingDynamics.emphasis}
                  </strong>
                </p>
              </div>

              {/* Polarity read: one measure up, one down. Each carries a glyph
                  and a label, so the meaning never rests on color. */}
              <div className="mt-12 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-green/30 bg-green-soft p-6">
                  <div className="flex items-center gap-2 text-green-ink">
                    <Up />
                    <span className="text-[0.82rem] font-semibold uppercase tracking-[0.14em]">
                      Occupancy
                    </span>
                  </div>
                  <div className="display mt-4 text-[2.7rem] text-green-ink">+31 pts</div>
                  <p className="mt-2 text-[0.95rem] text-fg-muted">
                    Filled from this same point last year.
                  </p>
                </div>

                <div className="rounded-xl border border-red/30 bg-red-soft p-6">
                  <div className="flex items-center gap-2 text-red-ink">
                    <Down />
                    <span className="text-[0.82rem] font-semibold uppercase tracking-[0.14em]">
                      Rate
                    </span>
                  </div>
                  <div className="display mt-4 text-[2.7rem] text-red-ink">&#8722;17%</div>
                  <p className="mt-2 text-[0.95rem] text-fg-muted">
                    Fell as that occupancy filled.
                  </p>
                </div>
              </div>
            </Card>

            <div
              className="relative min-h-[24rem] overflow-hidden rounded-2xl"
              data-reveal
              style={{ ["--reveal-delay" as string]: "120ms" }}
            >
              <Image
                src={interior02}
                alt="A one-bedroom rental interior"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                placeholder="blur"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
              <p className="absolute inset-x-8 bottom-8 text-[1.3rem] font-semibold leading-snug text-white">
                {changingDynamics.caption}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ======================= FLOORS + FLEX LINE ======================= */}
      <section className="bg-bg-soft py-24 sm:py-32">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {/* min-w-0: grid items whose `truncate` would otherwise inflate the column. */}
            <div id="floors" className="min-w-0 scroll-mt-24" data-reveal>
              <Card className="h-full">
                <SectionLabel>{floors.label}</SectionLabel>

                <p className="pretty mt-9 text-[1.12rem] leading-[1.75] text-fg-muted">
                  404 Barrington Arms, August. Floor{" "}
                  <strong className="font-semibold text-fg">$249</strong> (its own
                  owner-approved minimum). Step down from today&apos;s ask at 10% a
                  time, and never cross the floor.
                </p>

                <ol className="mt-10 flex flex-col gap-3">
                  {ladder.map((step, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[0.85rem] font-semibold tabular-nums ${
                          step.kind === "floor"
                            ? "bg-red text-white"
                            : "border border-border-strong bg-surface-2 text-fg-muted"
                        }`}
                      >
                        {i + 1}
                      </span>
                      <div
                        className={`flex min-w-0 flex-1 items-center justify-between gap-3 rounded-lg border px-5 py-3.5 ${
                          step.kind === "floor"
                            ? "border-red/30 bg-red-soft"
                            : "border-border bg-surface-2"
                        }`}
                      >
                        <span
                          className={`text-[1rem] font-semibold ${
                            step.kind === "floor" ? "text-red-ink" : "text-fg"
                          }`}
                        >
                          {step.label}
                        </span>
                        {step.kind === "floor" && (
                          <Pill tone="red" glyph={<Flat />}>
                            Never below
                          </Pill>
                        )}
                        {step.kind === "step" && (
                          <span className="shrink-0 text-[0.9rem] tabular-nums text-fg-subtle">
                            &#8722;10%
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>

                <div className="mt-9 flex items-center gap-4 border-t border-border pt-6">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg">
                    <Image src={prop03} alt="" fill sizes="64px" placeholder="blur" className="object-cover" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[1rem] font-semibold text-fg">{floors.home}</p>
                    <p className="text-[0.92rem] text-fg-muted">{floors.homeSub}</p>
                  </div>
                </div>
              </Card>
            </div>

            <div
              id="flex-line"
              className="min-w-0 scroll-mt-24"
              data-reveal
              style={{ ["--reveal-delay" as string]: "120ms" }}
            >
              <Card className="h-full">
                <SectionLabel>{flexLine.label}</SectionLabel>

                <p className="pretty mt-9 text-[1.12rem] leading-[1.75] text-fg-muted">
                  404 Barrington Arms has booked at{" "}
                  <strong className="font-semibold text-fg">$447</strong> a night
                  for August. 2371 Racquet Club has booked at{" "}
                  <strong className="font-semibold text-fg">$468</strong> for July.
                  When a guest hesitates, that&apos;s your anchor.
                </p>

                <div className="mt-10 flex flex-col gap-4">
                  {flexHomes.map((home) => (
                    <div
                      key={home.name}
                      className="flex items-center gap-5 rounded-lg border border-border bg-surface-2 p-4"
                    >
                      <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-md">
                        <Image src={home.img} alt="" fill sizes="96px" placeholder="blur" className="object-cover" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[1.05rem] font-semibold text-fg">
                          {home.name}
                        </p>
                        <p className="text-[0.92rem] text-fg-muted">
                          Best booked rate, {home.month}
                        </p>
                      </div>
                      <div className="shrink-0 text-right">
                        <div className="display text-[1.85rem] text-green-ink">{home.rate}</div>
                        <div className="text-[0.82rem] text-fg-subtle">a night</div>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-9 border-t border-border pt-6 text-[1rem] leading-relaxed text-fg-muted">
                  {flexLine.footnote}
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* ======================= NEEDS A WIN ======================= */}
      <section id="needs-a-win" className="scroll-mt-24 py-24 sm:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <div data-reveal>
              <SectionLabel>{needsAWin.label}</SectionLabel>
              <h2 className="display balance mt-8 text-[clamp(2.1rem,4.2vw,3.4rem)]">
                {needsAWin.title}
              </h2>
              <p className="pretty mt-8 text-[1.12rem] leading-relaxed text-fg-muted">
                {needsAWin.body}
              </p>

              <div className="mt-10 flex flex-wrap gap-2.5">
                <Pill tone="neutral">Bookings on the calendar</Pill>
                <Pill tone="amber" glyph={<Flat />}>
                  Nothing new in two weeks
                </Pill>
                <Pill tone="red" glyph={<Down />}>
                  Nights still open
                </Pill>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-4">
                {[house02, kitchen02].map((src, i) => (
                  <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                    <Image src={src} alt="" fill sizes="(min-width: 1024px) 20vw, 45vw" placeholder="blur" className="object-cover" />
                  </div>
                ))}
              </div>
            </div>

            <div
              className="min-w-0 overflow-hidden rounded-2xl border border-border bg-surface"
              data-reveal
              style={{ ["--reveal-delay" as string]: "120ms" }}
            >
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border px-7 py-6">
                <h3 className="display text-[1.3rem] tracking-[-0.02em]">
                  {needsAWin.tableTitle}
                </h3>
                <Pill tone="red" glyph={<Down />}>
                  Gone quiet
                </Pill>
              </div>

              <ol className="divide-y divide-border">
                {ranked.map((row) => (
                  <li key={row.rank} className="flex flex-wrap items-center gap-5 px-7 py-6">
                    <span className="text-[0.95rem] font-semibold tabular-nums text-red-ink">
                      {row.rank}
                    </span>
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg">
                      <Image src={row.img} alt="" fill sizes="56px" placeholder="blur" className="object-cover" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[1.05rem] font-semibold text-fg">{row.name}</p>
                      <p className="text-[0.92rem] text-fg-muted">{row.month}</p>
                    </div>
                    <div className="min-w-0">
                      <p className="text-[1rem] font-semibold text-fg">{row.move}</p>
                      <p className="text-[0.92rem] text-fg-muted">{row.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <p className="border-t border-border bg-surface-2 px-7 py-6 text-[0.95rem] leading-relaxed text-fg-subtle">
                {needsAWin.footnote}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ======================= PUSH LIST ======================= */}
      <section id="push-list" className="scroll-mt-24 bg-bg-soft py-24 sm:py-32">
        <Container>
          <div className="max-w-3xl" data-reveal>
            <SectionLabel>{pushList.label}</SectionLabel>
            <h2 className="display balance mt-8 text-[clamp(2.1rem,4.2vw,3.4rem)]">
              {pushList.title}
            </h2>
            <p className="pretty mt-8 text-[1.12rem] leading-relaxed text-fg-muted">
              {pushList.body}
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {[house04, house06].map((src, i) => (
              <div
                key={i}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 120}ms` }}
                className="overflow-hidden rounded-2xl border border-border bg-surface"
              >
                <div className="relative aspect-[16/9]">
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 45vw, 100vw"
                    placeholder="blur"
                    className="object-cover"
                  />
                  <div className="absolute left-5 top-5">
                    <Pill tone="green" glyph={<Up />}>
                      Demand still in the market
                    </Pill>
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="display text-[1.45rem] tracking-[-0.02em]">
                    Bedroom group {i + 1}
                  </h3>
                  <div className="mt-5 flex flex-wrap gap-2.5">
                    <Pill tone="red" glyph={<Down />}>
                      Behind on revenue
                    </Pill>
                    <Pill tone="red" glyph={<Down />}>
                      Behind on occupancy
                    </Pill>
                  </div>
                  <p className="mt-6 text-[1.02rem] leading-relaxed text-fg-muted">
                    Promote to everyone this week.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ======================= CLOSING ======================= */}
      <section className="py-28 sm:py-36">
        <Container>
          <div className="mx-auto max-w-4xl text-center" data-reveal>
            <h2 className="display balance text-[clamp(2.5rem,5.6vw,4.6rem)]">
              {closing.title}
            </h2>
            <p className="pretty mx-auto mt-9 max-w-2xl text-[1.15rem] leading-relaxed text-fg-muted">
              {closing.body}
            </p>
            <div className="mt-12 flex justify-center">
              <ButtonLink href="/" variant="primary">
                {closing.cta}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
