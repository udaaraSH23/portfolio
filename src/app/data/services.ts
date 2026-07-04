// Client-facing services. Plain language, outcome-first - no framework names or acronyms.

export interface Service {
  title: string;
  desc: string;
  icon: string; // Material Symbols name
  proofSlug?: string; // links to a real project as proof
  proofLabel?: string;
  features?: string[];
}

export const services: Service[] = [
  {
    title: "Websites & Custom Platforms",
    desc: "A fast, professional website - or a full custom platform with logins, dashboards, and multiple portals - that builds trust and turns visitors into customers.",
    icon: "language",
    proofSlug: "kandy-trekking-tours",
    proofLabel: "Kandy Trekking Tours",
    features: [
      "Custom responsive design",
      "Scales from a single page to a full platform",
      "SEO-friendly structures & optimized speed",
      "Integrated contact forms & logins",
    ],
  },
  {
    title: "AI Chat & Booking Assistants",
    desc: "A smart assistant that answers questions and takes bookings for you around the clock.",
    icon: "support_agent",
    proofSlug: "trekdesk-ai",
    proofLabel: "TrekDesk AI",
    features: [
      "24/7 instant customer reply",
      "Trained on your business info",
      "Direct calendar booking",
      "Seamless platform handoff",
    ],
  },
  {
    title: "Online Stores & Payments",
    desc: "Sell products online with secure checkout, order management, and admin tools built to handle real volume.",
    icon: "shopping_bag",
    proofSlug: "axcom",
    proofLabel: "AxCom",
    features: [
      "Secure Stripe/PayPal integrations",
      "Intuitive order & inventory dashboard",
      "Discount codes & promo features",
      "Built to handle high traffic reliably",
    ],
  },
  {
    title: "Launch & Hosting Support",
    desc: "Already have a site or app? I'll get it live, keep it fast and secure, and handle the technical upkeep - so you never have to think about servers or downtime.",
    icon: "cloud_done",
    features: [
      "Launch new or migrate existing sites/apps",
      "Reliable hosting that scales with your traffic",
      "Automated backups & security monitoring",
      "Ongoing technical support & maintenance",
    ],
  },
];

export interface ProcessStep {
  title: string;
  desc: string;
  icon: string;
}

// Simple, reassuring path for a client: chat → proposal → build → launch → support.
export const processSteps: ProcessStep[] = [
  {
    title: "Chat",
    desc: "We talk through your idea, goals, and budget - no obligation.",
    icon: "chat",
  },
  {
    title: "Proposal",
    desc: "You get a clear plan with a timeline and a fixed price.",
    icon: "description",
  },
  {
    title: "Build",
    desc: "I build it and share progress so there are no surprises.",
    icon: "build",
  },
  {
    title: "Launch",
    desc: "We go live together and make sure everything works.",
    icon: "rocket_launch",
  },
  {
    title: "Support",
    desc: "I stay available to help, fix, and improve over time.",
    icon: "favorite",
  },
];
