// Client-facing services. Plain language, outcome-first — no framework names or acronyms.

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
    title: "Business Websites",
    desc: "A fast, professional website that builds trust and turns visitors into customers.",
    icon: "language",
    proofSlug: "kandy-trekking-tours",
    proofLabel: "Kandy Trekking Tours",
    features: [
      "Custom responsive design",
      "SEO-friendly structures",
      "Optimized load speeds",
      "Integrated contact forms"
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
      "Seamless platform handoff"
    ],
  },
  {
    title: "Online Stores & Payments",
    desc: "Sell products online with secure checkout and a simple way to manage orders.",
    icon: "shopping_bag",
    proofSlug: "rosalover-ecommerce",
    proofLabel: "Lover Shop",
    features: [
      "Secure Stripe/PayPal integrations",
      "Intuitive order dashboard",
      "Discount codes & promo features",
      "Automatic customer receipts"
    ],
  },
  {
    title: "Hosting & Ongoing Care",
    desc: "Reliable hosting that grows with you, with updates and monitoring handled for you.",
    icon: "cloud_done",
    proofSlug: "axcom",
    proofLabel: "AxCom",
    features: [
      "99.9% uptime hosting tier",
      "Automated daily site backups",
      "Security updates & monitoring",
      "Priority content updates"
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
    desc: "We talk through your idea, goals, and budget — no obligation.",
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
