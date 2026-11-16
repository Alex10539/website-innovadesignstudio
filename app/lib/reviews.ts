// Real Google reviews, copied word for word from the Innova Design Studio Google Business Profile.
// Update RATING / REVIEW_COUNT when the profile changes. Do not shorten or reword the text.

export const GOOGLE_REVIEWS_URL = "https://share.google/CLxhQQ3OYSFB2tzqU";
export const RATING = "5.0";
export const REVIEW_COUNT = 34;

export type Review = {
  name: string;
  /** e.g. "Local Guide" — only when Google shows it on the review */
  badge?: string;
  /** Full review text; blank line between paragraphs */
  text: string;
};

export const reviews: Review[] = [
  {
    name: "Luke Docksteader",
    text: "We had a fantastic experience working with Alexander and his team. From the beginning, their professionalism and expertise were evident. Alexander’s deep knowledge of building codes and construction best practices gave us total confidence in the plans we were developing.\n\nThey were incredibly thorough at every stage, and their attention to detail ended up revealing that our contractor did not have the level of experience he had claimed—something we may not have discovered until it was too late. We’re extremely grateful for their diligence, which likely saved us from major issues down the road.\n\nIf you’re looking for a drafting team that is knowledgeable, meticulous, and truly invested in your project’s success, we highly recommend Alexander and his crew.",
  },
  {
    name: "Christopher Bari",
    text: "Working with Innova Design Studio has been an absolute pleasure! Even from a distance, Alex and the team made the entire process feel seamless. They were incredibly responsive, professional, and always one step ahead when it came to communication and deadlines. Their attention to detail and ability to bring creative ideas to life was seriously impressive. If you want a design team that’s reliable, fast, and genuinely great to work with — look no further. Highly recommend Innova!",
  },
  {
    name: "Jamie Drisdelle",
    badge: "Local Guide",
    text: "As a home builder with multiple clients you need someone that can take on all of the work while doing quality work, Alex is definitely the person you want designing your home! Always answers the phone or calls you back which is rare these days.\n\nThank you Alex for all of your help!",
  },
  {
    name: "Alexander Yakhnenko",
    text: "I started working with Alexander from Innova in September, and the experience has been excellent.\n\nHe developed the full project, helped me obtain the building permit, and continues to provide support as I prepare for construction. He is responsive, professional, and genuinely involved in the process.\n\nHighly recommended.",
  },
  {
    name: "Stephanie Desrochers",
    text: "I am incredibly grateful to Alexander and his team in helping us develop our dream home. He is incredibly personable, polite, patient, and above all - knows his stuff!! I 100% recommend Alexander/ Innova Design Studio",
  },
  {
    name: "Nathan Williamson",
    text: "Alexander at Innova Design Studio took our new build concepts and made the perfect blueprint. He always responded promptly to our many edits, and was more than happy to help. The process was as smooth as can be! Highly recommend working with Alexander for your architectural needs.",
  },
  {
    name: "Paul Walker",
    text: "We hired Alex to put together plans for a house we were going to build a couple years ago. Alex was very accommodating and patient with the many changes we made along the way. He was also very professional and kind. We were very happy with the outcome. I would not hesitate to recommend Alex and his business to anyone needing house plans made up!",
  },
  {
    name: "Emma Tsoi",
    badge: "Local Guide",
    text: "Alex was a pleasure to work with in creating our house plans! Very quick and responsive.",
  },
];
