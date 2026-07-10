/**
 * Single source of copy for both pages.
 *
 * Two standing rules for anything added here:
 *  1. No em dashes. Use a colon, comma, period, or parentheses instead.
 *  2. The client is never named. The product speaks to "your portfolio".
 */

export const hero = {
  eyebrow: "Your revenue command center",
  headlineLead: "One place to see what's moving,",
  headlineRisk: "what's at risk",
  headlineTail: "and what to price next.",
  subhead:
    "Every occupancy signal, pricing recommendation, and market comparison for your portfolio, computed once, validated centrally, refreshed daily. No more chasing conflicting numbers across dashboards.",
  primary: "Open today's briefing",
  secondary: "See what changed this week",
};

export const memo = {
  label: "This week, at a glance",
  title: "Here's where to look first.",
  paragraphs: [
    "Your 2-bedroom homes are filling at 75% against a market sitting at 44%. You're 30 points ahead of the field. Last year says more of October still fills from this exact point, so hold your nerve on rate there. A handful of homes have gone quiet with room left to sell. They're listed below with the price move that gets them booking again. And two groups are worth promoting to everyone right now while demand is real.",
    "Nothing here is a guess. Every number is calculated from your live Wheelhouse data and cross-checked before it reaches this page.",
  ],
  signature: "The Rev & Research team",
  forwardableNote:
    "(Forwardable blocks below: one for the CEO, one for Marketing, one for Reservations. Each a full paragraph, no abbreviations, ready to send as-is.)",
};

/**
 * The brief called for three forwardable blocks but supplied no body copy.
 * Rather than invent new claims, each is assembled from the memo's own
 * sentences, routed to the audience that acts on them.
 */
export const forwardables = [
  {
    audience: "CEO",
    body: "Your 2-bedroom homes are filling at 75% against a market sitting at 44%. You're 30 points ahead of the field. Nothing here is a guess. Every number is calculated from your live Wheelhouse data and cross-checked before it reaches this page.",
  },
  {
    audience: "Marketing",
    body: "Two groups are worth promoting to everyone right now while demand is real. Nothing here is a guess. Every number is calculated from your live Wheelhouse data and cross-checked before it reaches this page.",
  },
  {
    audience: "Reservations",
    body: "A handful of homes have gone quiet with room left to sell. They're listed below with the price move that gets them booking again. Last year says more of October still fills from this exact point, so hold your nerve on rate there.",
  },
];

export const sixThings = [
  {
    n: "01",
    title: "Reservation audits",
    body: "Every home, every month, in one ranked list: which ones are behind last year's pace, which have gone quiet with nights still open, and exactly how much revenue is on the line. We surface the worst offenders first, so your team works the list from the top down. When a home is dragging because the owner blocked nights, not because demand dropped, we say so plainly, so you're not chasing a problem that isn't yours to fix.",
  },
  {
    n: "02",
    title: "Occupancy signals",
    body: "See how full each home is of the nights it could actually sell: booked nights against sellable nights, with owner-blocked nights taken out of the math. We show what's still open, how much of the month historically fills from here, and the rate those remaining nights tend to book at. No more guessing whether a soft month is a real problem or just an early one.",
  },
  {
    n: "03",
    title: "Market-relative performance",
    body: "Your portfolio, measured against the market it actually competes in, broken out by bedroom count, tracked over rolling two-week windows, and read against what the same period did last year. You'll see which bedroom groups are outpacing the market and which are slipping, whether the rest of the month is still coming or already done, and, critically, whether recent fill came at a healthy rate or was bought with discounts. That last distinction keeps you from mistaking a fire sale for real demand.",
  },
  {
    n: "04",
    title: "Pricing recommendations",
    body: "For every home that needs a move, a clear recommendation: cut, raise, or hold, with the exact percentage and the floor you should never quote below. The floor is each home's own owner-approved minimum, and we show the step-down path from today's ask to get there. Your reservations team also gets the flex line: the best rate this home has actually booked at, this year or last.",
  },
  {
    n: "05",
    title: "Top and bottom performers",
    body: "The homes quietly winning, a few points ahead on both occupancy and revenue, off everyone's radar, and the ones falling behind their own size class. Ranked, so Marketing knows exactly which groups to push this week, and Reservations knows exactly which homes need a call.",
  },
  {
    n: "06",
    title: "Everything, prioritized, never all at once",
    body: "This page rotates. Two or three sections lead each day, chosen by the strongest signal: the biggest occupancy pickup, the sharpest pricing gap, the widest market swing. The rest sit one tap deeper. You get what matters today without wading through everything, on any device you happen to be holding.",
  },
];

export const marketLead = {
  label: "Market lead, where you're ahead",
  title: "2-bedroom: you're at 75% occupancy against a 44% market.",
  body: "A 31-point lead. Protect it on rate.",
  chartTitle: "Occupancy by bedroom count",
  chartSub: "Rolling two-week window, against your market.",
  blankNote:
    "Rows are left blank where the metric can't be computed honestly for this window, never filled with a zero that isn't real.",
  link: "See whether that fill came at a healthy rate",
};

export const trust = {
  label: "Built on a single source of truth",
  title: "Why the numbers are trustworthy.",
  items: [
    {
      n: "01",
      title: "One table, one answer.",
      body: "Every KPI on this page is computed once, in a single central store, and read from there by every view you see. That's the end of dashboards disagreeing with each other. There is only one number, and it's this one.",
    },
    {
      n: "02",
      title: "Refreshed daily.",
      body: "Your Wheelhouse data pulls daily, and now the KPIs move with it, so occupancy, pace, and pricing signals reflect where you actually stand, not where you stood a week ago.",
    },
    {
      n: "03",
      title: "Every metric is validated before you see it.",
      body: "Each KPI carries a plain-English definition, the exact logic behind it, and a check against Wheelhouse's own benchmarks. Nothing reaches this page as fact until the math is documented and confirmed. When something can't be computed honestly, we leave it blank rather than show you a zero that isn't real.",
    },
    {
      n: "04",
      title: "Powered by your live data.",
      body: "180 days of booking, blocking, and availability history per home. Market snapshots segmented by bedroom count and your market, tracked in two-week windows. All flowing into one place, so the insight is nuanced and the source is consistent.",
    },
  ],
};

/* ------------------------------ Page 2 ------------------------------ */

export const signalsIntro = {
  eyebrow: "Rotating, the strongest signal leads",
  title: "Signal cards.",
  body: "Rotating, shown with your portfolio's real validated numbers. Why it moved, and what to do about it.",
};

export const changingDynamics = {
  label: "Changing dynamics, what last year says is coming",
  title: "That fill was bought with discounts, not real demand.",
  body: "Your 1-bedroom homes in October: from this same point last year, occupancy filled another 31 points, but the rate fell 17% as it did. That fill was bought with discounts, not real demand.",
  emphasis: "Hold rate; don't chase it down.",
  caption: "Don't mistake a fire sale for real demand.",
};

export const floors = {
  label: "Price floors and steps",
  body: "404 Barrington Arms, August. Floor $249 (its own owner-approved minimum). Step down from today's ask at 10% a time, and never cross the floor.",
  home: "404 Barrington Arms",
  homeSub: "August, owner-approved minimum $249",
};

export const flexLine = {
  label: "The flex line",
  body: "404 Barrington Arms has booked at $447 a night for August. 2371 Racquet Club has booked at $468 for July. When a guest hesitates, that's your anchor.",
  footnote: "This year or last, the best rate the home has actually booked at.",
};

export const needsAWin = {
  label: "Needs a win",
  title: "Work them top-down.",
  body: "Homes with bookings on the calendar but nothing new in two weeks and nights still open. Each carries its recommended move. Work them top-down.",
  tableTitle: "Ranked, worst offenders first",
  footnote:
    "When a home is dragging because the owner blocked nights, not because demand dropped, the list says so plainly.",
};

export const pushList = {
  label: "Push list, promote these now",
  title: "Visibility is the gap, not price.",
  body: "Two bedroom groups pacing behind on both revenue and occupancy, with demand still in the market. Visibility is the gap, not price. Promote them to everyone this week.",
};

export const closing = {
  title: "Less time in your PMS. More time making the call.",
  body: "Everything you need to price and fill your portfolio lives here, in one interface, updated daily. When a home needs attention, this page tells you, and tells you what to do about it.",
  cta: "Open today's briefing",
};
