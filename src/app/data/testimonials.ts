// Client testimonials. NEVER fabricate a quote - leave `verified: false` until you
// have the person's real words and permission. Placeholder entries render as an
// obviously-reserved slot, not as a real quote.

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  verified: boolean;
}

export const testimonials: Testimonial[] = [
  {
    // TODO: replace with 2 real sentences from the Kandy Trekking Tours owner,
    // then set verified: true.
    quote: "",
    author: "Kandy Trekking Tours",
    role: "Client",
    verified: false,
  },
];
