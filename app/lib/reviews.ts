// Real Google reviews, copied from the Innova Design Studio Google Business Profile.
// Update RATING / REVIEW_COUNT when the profile changes. Text is shortened with "…" only.

export const GOOGLE_REVIEWS_URL = "https://share.google/CLxhQQ3OYSFB2tzqU";
export const RATING = "5.0";
export const REVIEW_COUNT = 34;

export type Review = {
  name: string;
  /** e.g. "Local Guide" — only when Google shows it on the review */
  badge?: string;
  text: string;
};

export const reviews: Review[] = [
  {
    name: "Luke Docksteader",
    text: "Alexander’s deep knowledge of building codes and construction best practices gave us total confidence in the plans we were developing. … We’re extremely grateful for their diligence, which likely saved us from major issues down the road.",
  },
  {
    name: "Christopher Bari",
    text: "Even from a distance, Alex and the team made the entire process feel seamless. They were incredibly responsive, professional, and always one step ahead when it came to communication and deadlines.",
  },
  {
    name: "Jamie Drisdelle",
    badge: "Local Guide",
    text: "As a home builder with multiple clients you need someone that can take on all of the work while doing quality work, Alex is definitely the person you want designing your home! Always answers the phone or calls you back which is rare these days.",
  },
  {
    name: "Alexander Yakhnenko",
    text: "He developed the full project, helped me obtain the building permit, and continues to provide support as I prepare for construction. He is responsive, professional, and genuinely involved in the process.",
  },
  {
    name: "Stephanie Desrochers",
    text: "I am incredibly grateful to Alexander and his team in helping us develop our dream home. He is incredibly personable, polite, patient, and above all - knows his stuff!! I 100% recommend Alexander/ Innova Design Studio.",
  },
  {
    name: "Nathan Williamson",
    text: "Alexander at Innova Design Studio took our new build concepts and made the perfect blueprint. He always responded promptly to our many edits, and was more than happy to help. The process was as smooth as can be!",
  },
  {
    name: "Paul Walker",
    text: "Alex was very accommodating and patient with the many changes we made along the way. He was also very professional and kind. We were very happy with the outcome.",
  },
  {
    name: "Emma Tsoi",
    badge: "Local Guide",
    text: "Alex was a pleasure to work with in creating our house plans! Very quick and responsive.",
  },
];
