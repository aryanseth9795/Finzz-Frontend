export type ScreenId =
  | "chats"
  | "ledger"
  | "report"
  | "expenses"
  | "analytics"
  | "notes"
  | "pools"
  | "vault";

export const SCREENS: Record<ScreenId, { src: string; alt: string }> = {
  chats: {
    src: "/screens/chats.png",
    alt: "Chats tab listing friends, each with their latest entry and its date",
  },
  ledger: {
    src: "/screens/ledger.png",
    alt: "Friend ledger with Rohan Mehta: monthly totals and entries marked verified or pending",
  },
  report: {
    src: "/screens/report.png",
    alt: "PDF report preview of a friend ledger, ready to share",
  },
  expenses: {
    src: "/screens/expenses.png",
    alt: "Expenses tab: money out and money in for the month, with entries grouped by day, category and payment mode",
  },
  analytics: {
    src: "/screens/analytics.png",
    alt: "Expense analytics for the month: amount saved, spent against received, and the spending pace",
  },
  notes: {
    src: "/screens/notes.png",
    alt: "Notes tab with a list of notes, some shared with friends",
  },
  pools: {
    src: "/screens/pools.png",
    alt: "Pool tab listing group pools, a Goa trip and a shared flat, with their members",
  },
  vault: {
    src: "/screens/vault.png",
    alt: "Vault tab listing saved items such as an email login and Wi-Fi details",
  },
};

export type Feature = {
  id: "chats" | "pool" | "expenses" | "notes" | "vault";
  tab: string;
  title: string;
  lead: string;
  points: [string, string, string];
  screen: ScreenId;
  extraScreen?: ScreenId;
};

export const FEATURES: Feature[] = [
  {
    id: "chats",
    tab: "Chats",
    title: "A ledger for every friend",
    lead: "Add friends by phone number; each friend gets one running record.",
    points: [
      "Pending, verified or rejected at a glance",
      "Flip through months with monthly totals",
      "PDF report with an in-app preview",
    ],
    screen: "chats",
    extraScreen: "report",
  },
  {
    id: "pool",
    tab: "Pool",
    title: "Shared money for groups",
    lead: "Trips, flatmates, events: one pool, everyone's entries in one place.",
    points: [
      "Create a pool and add friends",
      "Everyone logs what they put in",
      "See who paid what",
    ],
    screen: "pools",
  },
  {
    id: "expenses",
    tab: "Expenses",
    title: "Know where your money went",
    lead: "Your own spending and income, in your own categories.",
    points: [
      "Cash or online, and how (card, bank, wallet…)",
      "Add entries for past months",
      "Search by text or amount, filter, and see trends",
    ],
    screen: "analytics",
    extraScreen: "expenses",
  },
  {
    id: "notes",
    tab: "Notes",
    title: "Notes you can share",
    lead: "Keep notes for yourself, or share them with a friend.",
    points: [
      "Write notes for yourself",
      "Share with a friend as view-only or editable",
      "Only you see your own labels",
    ],
    screen: "notes",
  },
  {
    id: "vault",
    tab: "Vault",
    title: "Passwords that stay on your phone",
    lead: "A private vault for the logins and details you don't want lying around.",
    points: [
      "Encrypted on your phone with your PIN",
      "Never sent to our servers",
      "Auto-locks, and screenshots are blocked",
    ],
    screen: "vault",
  },
];

export type Video = {
  id: string;
  file: string;
  poster: string;
  title: string;
  seconds: number;
  lang?: "hi";
};

export const FEATURED_VIDEO_ID = "promo";

export const VIDEOS: Video[] = [
  {
    id: "promo",
    file: "finzz-promo-9x16.mp4",
    poster: "/videos/posters/promo.jpg",
    title: "The 60-second tour",
    seconds: 60,
  },
  {
    id: "story-hindi",
    file: "finzz-story-hindi-9x16.mp4",
    poster: "/videos/posters/story-hindi.jpg",
    title: "Rohan & Akash · हिंदी",
    seconds: 82,
    lang: "hi",
  },
  {
    id: "friends-pools",
    file: "finzz-v1-friends-pools-9x16.mp4",
    poster: "/videos/posters/friends-pools.jpg",
    title: "Friends & pools",
    seconds: 38,
  },
  {
    id: "expenses",
    file: "finzz-v2-expenses-9x16.mp4",
    poster: "/videos/posters/expenses.jpg",
    title: "Expenses",
    seconds: 37,
  },
  {
    id: "vault-notes",
    file: "finzz-v3-vault-notes-9x16.mp4",
    poster: "/videos/posters/vault-notes.jpg",
    title: "Vault & notes",
    seconds: 34,
  },
  {
    id: "teaser",
    file: "finzz-teaser-9x16.mp4",
    poster: "/videos/posters/teaser.jpg",
    title: "15-second teaser",
    seconds: 15,
  },
];

export const PRIVACY_CARDS: { title: string; body: string; href?: string }[] = [
  { title: "Records only", body: "No bank or card details, ever." },
  {
    title: "Vault on your phone",
    body: "Encrypted with your PIN, never sent to us.",
  },
  { title: "No ads", body: "And we never sell your data." },
  {
    title: "Delete anytime",
    body: "In the app or on our website.",
    href: "/delete-account",
  },
];

export const FAQ: { q: string; a: string; href?: string; linkLabel?: string }[] = [
  { q: "Is Finzz free?", a: "Yes. No ads and no in-app purchases." },
  {
    q: "Does Finzz send or hold money?",
    a: "No. Pay your friend however you like (cash or online), then record it in Finzz. Finzz is a record-keeping app.",
  },
  {
    q: "Does my friend need Finzz too?",
    a: "Yes. Find them by phone number and send a friend request; once they accept, you share a ledger.",
  },
  {
    q: "What if my friend rejects an entry?",
    a: "It stays in the list marked Rejected, with their reason, and doesn't count toward your balance. You can edit it and send it again.",
  },
  {
    q: "Is my vault backed up?",
    a: "No, on purpose. It lives only on your phone, encrypted. If you uninstall Finzz or change phones, vault items don't come with you, so keep your own copy of anything important.",
  },
  { q: "Is there an iPhone app?", a: "Not yet. Finzz is on Android." },
  {
    q: "How do I delete my account?",
    a: "In the app: Account → Delete account. Or follow the steps on the delete-account page.",
    href: "/delete-account",
    linkLabel: "Delete account page",
  },
];
