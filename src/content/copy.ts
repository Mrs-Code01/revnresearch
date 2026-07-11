/**
 * Single source of copy for both pages.
 *
 * Final approved copy, in Ben's voice. Standing rules:
 *  1. No em dashes. Use a colon, comma, period, or parentheses instead.
 *  2. The client is never named. The product speaks to "your homes".
 *  3. This is a landing page: it describes the product. Copy never claims
 *     that live numbers or dashboards are on THIS page ("shows up here",
 *     "this page tells you"). The product does those things.
 *
 * No live numbers belong in this file: every real figure on the site
 * comes from the data components, never from copy.
 */

export const hero = {
  eyebrow: "Rev & Research",
  headlineLead: "The stuff I always wanted to know when I ran my own book. Now it's yours,",
  headlineRisk: "every morning",
  headlineTail: ".",
  subhead:
    "Every number on your homes: how they're pacing, where you've got upside, what to price next. Pulled straight off your live Wheelhouse data and checked before it ever reaches you. So you're not logging into your PMS every day just to figure out where to look.",
  primary: "Show me today",
  secondary: "What changed this week",
};

export const memo = {
  label: "Start here",
  title: "Here's how I'd read this.",
  paragraphs: [
    "When I ran my own book, this is exactly what I wanted to know every morning, so I built it.",
    "First thing: look at what's beating the market. The homes and sizes that are ahead of the field, leave those rates alone. They earned it. Don't talk yourself into a discount you don't need.",
    "Then check what last year's already telling you. A lot of a month fills late. But if last year it only filled because the rate got cut, that's not demand, that's a discount. Hold your price; it fills anyway, at your number.",
    "Then the quiet ones: homes with open nights and nothing coming in. Each one comes with the exact price move sitting right next to it. Work 'em from the top.",
    "And the groups where the demand's there but nobody's seeing them: those go to marketing this week.",
    "None of this is a guess. Every number comes straight off your live Wheelhouse data, and we check it before you ever see it.",
  ],
  signature: "Ben",
  forwardableNote:
    "(Three ready-to-send notes sit right below: one for your CEO, one for Marketing, one for your Reservations team. Each is written out in full so whoever gets it can just forward it, no cleanup.)",
};

/**
 * PLACEHOLDER BODIES: the final copy deferred the three forwardable notes
 * ("say the word on those"). Until Ben supplies them, each note is assembled
 * from the memo's own sentences, routed to the audience that acts on them.
 * Swap these bodies for the real notes when they arrive.
 */
export const forwardables = [
  {
    audience: "CEO",
    body: "First thing: look at what's beating the market. The homes and sizes that are ahead of the field, leave those rates alone. They earned it. None of this is a guess. Every number comes straight off your live Wheelhouse data, and we check it before you ever see it.",
  },
  {
    audience: "Marketing",
    body: "The groups where the demand's there but nobody's seeing them: those go to marketing this week. None of this is a guess. Every number comes straight off your live Wheelhouse data, and we check it before you ever see it.",
  },
  {
    audience: "Reservations",
    body: "The quiet ones: homes with open nights and nothing coming in. Each one comes with the exact price move sitting right next to it. Work 'em from the top. Hold your price; it fills anyway, at your number.",
  },
];

export const sixThings = [
  {
    n: "01",
    title: "Every reservation, ranked.",
    body: "Every home, every month, in one list: who's behind last year, who's gone quiet with nights still open, and how much money's on the table. Worst ones up top, so your team just works down the list. Each flagged home tells you the story straight: it's not booking, it's priced over what it's historically taken, it's bleeding revenue, it's gone stale. And if a home's dragging because the owner blocked off nights (not because demand died), I tell you straight, so you're not chasing something that was never your problem.",
  },
  {
    n: "02",
    title: "How full you really are.",
    body: "Not just full: full of the nights you could actually sell, with the owner's blocked nights pulled out of the math. You'll see what's still open, how much of the month usually fills from here, and what those leftover nights tend to book at. So a slow month is either a real problem or just an early one, and you'll know which.",
  },
  {
    n: "03",
    title: "How you stack up against your market.",
    body: "Your homes against the ones you actually compete with: by bedroom size, tracked every two weeks, lined up against what the same stretch did last year. You'll see which sizes are beating the market and which are slipping, whether the rest of a month is still coming or already done, and, the big one, whether recent bookings came in at a good rate or only because somebody cut the price. That last part keeps you from celebrating a fire sale. (The full read's on the next page.)",
  },
  {
    n: "04",
    title: "What to do about price.",
    body: "For every home that needs a move: cut, raise, or hold, with the exact percent and the lowest price you should ever quote. That floor is the home's own minimum, the owner-approved bottom, and I show you the step-by-step way down to it. Your reservations team also gets the closer: the best price this home has actually booked at, this year or last.",
  },
  {
    n: "05",
    title: "Where you've got upside.",
    body: "Not just the homes that are hurting: the ones with room to raise. Something picks up early occupancy, the rate holds, and there's money being left on the table. Those get surfaced too. Winning is about more bookable nights year over year, and sometimes that means pushing a rate up, not down.",
  },
  {
    n: "06",
    title: "Just today's stuff, not everything at once.",
    body: "Your briefing moves. Two or three things lead every morning, whatever's shouting loudest: the biggest jump in bookings, the widest price gap, the sharpest market swing. Everything else is one tap away. You get today's story without wading through the whole thing, on your phone or your laptop.",
  },
];

export const marketLead = {
  label: "The numbers, grouped the way that matters",
  title: "Where you stand, by home size.",
  body: "Everything is grouped by bedroom size, the comparison that actually means something, not one lumped-together portfolio number. And you're never looking at yourself in a vacuum: right next to your own numbers, you'll see the market around you.",
  chartTitle: "Occupancy by bedroom count",
  chartSub: "Rolling two-week window, against your market.",
  blankNote:
    "Anywhere a home is too new to have last year to compare against, we say “New” instead of showing you a fake zero.",
  link: "See whether that fill came at a healthy rate",
};

export const trust = {
  label: "One source, one answer",
  title: "Why you can trust these numbers.",
  items: [
    {
      n: "01",
      title: "One place, one number.",
      body: "Every number gets worked out once, in one spot, and every screen reads from that same spot. So you'll never again have two dashboards telling you two different things. There's one number, and this is it.",
    },
    {
      n: "02",
      title: "Fresh every day.",
      body: "Your Wheelhouse data comes in daily, and the numbers move with it. What you see is where you stand today, not last week.",
    },
    {
      n: "03",
      title: "Checked before you ever see it.",
      body: "Every number comes with a plain-English explanation of what it is and how we got it, and we check it against Wheelhouse's own figures. Nothing goes up as fact until the math is written down and confirmed. And if we can't work something out honestly, we leave it blank. I'm not going to show you a zero that isn't real.",
    },
    {
      n: "04",
      title: "Built on your own data.",
      body: "Six months of booking, blocking, and open-night history on every home. Market snapshots by home size and your area, tracked every two weeks. All of it flowing into one place.",
    },
  ],
};

/* ------------------------------ Page 2 ------------------------------ */

export const signalsIntro = {
  eyebrow: "The market read",
  title: "You vs. your market.",
  paragraphs: [
    "This is the part I get most fired up about, because I'm pulling the whole Wheelhouse market and neighborhood data now, so you're never looking at yourself in a vacuum.",
    "For every bedroom size, you'll see how full you are against how full the market around you is. Being 75% full sounds great until you find out the market's at 90 and you left money on the table. Or it sounds rough until you find out the market's at 40 and you're the one winning. The number only means something sitting next to the market.",
    "Then we track it over rolling two-week windows, so you see which way the market's actually moving (heating up or cooling off) by size, not just where it sits today.",
    "And here's the one that does the real work: we take your own booking pace and the market's pace, weight them together (mostly your own book, with the market as the tilt), and roll it into a single read on where a month is really headed. It's built off last year: how you and the market each moved year over year, applied to this year's pace. So if you're outrunning the market, it says so. If the market's the only thing carrying you, it says that too. That's your early read on whether to push rate or protect what you've got.",
  ],
};

export const changingDynamics = {
  label: "What's coming",
  title: "Read last year before you cut.",
  body: "Last year already told you how a month fills from this point. You just have to read it right. A lot of a month books late, so a slow-looking month now might be totally fine. But here's the catch: if last year that month only filled because the rate came down, that's not demand walking in the door, that's a discount. Don't drop your price chasing it.",
  emphasis: "It comes anyway. Make it come at your number.",
  caption: "Don't mistake a fire sale for real demand.",
};

export const occupancyFool = {
  label: "The number behind the number",
  title: "Don't let occupancy fool you.",
  body: "Occupancy going up doesn't always mean you won. If your bookings climbed but only because you dropped the rate, that's not a win: that's you buying the occupancy. And the usual “same day last year” rate hides it, because that number froze the day your premium bookings came in and hasn't moved since. So we always put the rate move right next to the occupancy move. You see what really happened, not just that something moved.",
};

export const floors = {
  label: "Price floors + the steps down",
  body: "Every home has a floor: its own owner-approved minimum, the lowest you're ever allowed to quote. If you've gotta come down, do it in steps, about 10% at a time off today's price, and stop the second you'd cross the floor. Never go under it.",
  home: "404 Barrington Arms",
  homeSub: "August, owner-approved minimum $249",
};

export const flexLine = {
  label: "What it's actually booked at",
  body: "When a guest is on the fence, use what the home has really booked at, this year or last. That's your anchor: real money the home has already pulled, not a number we made up. It's the price you negotiate up from, not down.",
  footnote: "This year or last, the best rate the home has actually booked at.",
};

export const needsAWin = {
  label: "Stalled",
  title: "The quiet ones. Go wake them up.",
  body: "These are the ones a lot of people miss. A home picks up some early occupancy, Wheelhouse holds or raises the rate, and then it just sits there: 14 days, no new bookings, still plenty of open nights. It's not nearly sold out. It stalled. Each one comes with its price move sitting next to it. Work 'em from the top.",
  tableTitle: "Ranked, worst offenders first",
  footnote:
    "When a home is dragging because the owner blocked nights, not because demand dropped, the list says so plainly.",
};

export const pushList = {
  label: "Send these to marketing",
  title: "Groups to push right now.",
  body: "When a whole size group is running behind last year on both bookings and revenue, and the demand's still out there, price isn't the problem, visibility is. Get these in front of everyone this week.",
};

export const closing = {
  title: "Log into your PMS less. Spend more time actually making the call.",
  body: "Everything you need to price and fill your homes lives in one place, updated every day. When a home needs you, your briefing tells you, and tells you exactly what to do about it. That's the whole point: more bookable nights, year over year, and a little less of your morning spent digging for where to look.",
  cta: "Show me today",
};
