import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LeadForm from "./components/LeadForm";

const services = [
  {
    title: "Custom Homes",
    desc: "Ground-up design for homeowners building the home they've been picturing.",
    href: "/custom-homes",
    image: "/images/custom-homes-category.jpg",
  },
  {
    title: "Multi-Unit",
    desc: "Design and approvals for developers building beyond a single home.",
    href: "/multi-unit",
    image: "/images/multi-unit-category.jpg",
  },
  {
    title: "Renovations & Additions",
    desc: "Thoughtful updates and additions to the home you already have.",
    href: "/renovations-additions",
    image: "/images/portfolio/renovations-1.jpg",
  },
];

const differentiators = [
  {
    n: "01",
    title: "Permitting expertise",
    desc: "We know Atlantic Canada's bylaws inside and out — so approvals don't stall your project.",
  },
  {
    n: "02",
    title: "Full lifecycle, one studio",
    desc: "From first sketch to construction-ready documents, you work with one team the whole way.",
  },
  {
    n: "03",
    title: "Local knowledge",
    desc: "Deep, region-specific familiarity with how design and regulation actually work here.",
  },
];

const process = [
  { title: "Free consult", desc: "Tell us about your project, no obligation." },
  { title: "Site + bylaw review", desc: "We assess what's possible on your property." },
  { title: "Design + permitting", desc: "We design it and get it approved." },
  { title: "Ready to build", desc: "Construction-ready documents, handed off." },
];

export default function Home() {
  return (
    <>
      <Header />

      <section className="relative flex h-screen min-h-[640px] items-center justify-center overflow-hidden text-center">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="relative z-10 mx-auto max-w-3xl px-6">
          <h1 className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl">
            Your custom home, designed
            <br />
            and <span className="whitespace-nowrap">permit-ready.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-white/90">
            Thoughtful residential design and approvals handled — so your project moves
            from idea to built without surprises.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact-form"
              className="rounded-none bg-accent px-8 py-4 text-sm font-bold tracking-wide text-white hover:opacity-90"
            >
              Book a free consult
            </a>
            <a
              href="/portfolio"
              className="rounded-none border border-white px-8 py-4 text-sm font-bold tracking-wide text-white hover:bg-white/10"
            >
              View our work
            </a>
          </div>
          <p className="mt-5 text-sm text-white/70">or call 506-300-4380</p>
        </div>
      </section>

      <section className="border-b border-cream-300 px-6 py-6 text-center">
        <p className="text-sm italic text-ink/60">
          &ldquo;Incredibly responsive, professional, and always one step
          ahead.&rdquo; <span className="not-italic text-ink/40">— Google Review</span>
        </p>
      </section>

      <section className="mx-auto w-full max-w-2xl px-6 py-24 text-center">
        <p className="font-heading text-xl leading-relaxed text-ink sm:text-2xl">
          Innova Design Studio is a residential design studio built around one idea: your
          home deserves someone who cares about every detail as much as you do.
        </p>
        <p className="mx-auto mt-6 max-w-lg text-ink/60">
          We handle the full project lifecycle — site and bylaw assessment, design, and
          construction documentation — so what we design is what gets approved and built.
        </p>
      </section>

      <section>
        <div className="grid sm:grid-cols-3">
          {services.map((s) => (
            <a
              key={s.href}
              href={s.href}
              className="group relative flex aspect-[3/4] items-end overflow-hidden bg-ink"
            >
              {s.image && (
                <Image
                  src={s.image}
                  alt={`${s.title} service by Innova Design Studio`}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-90"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
              <div className="relative z-10 p-8 text-left">
                <h3 className="font-heading text-xl font-bold text-white">{s.title}</h3>
                <p className="mt-2 max-w-[22ch] text-sm text-white/75">{s.desc}</p>
                <span className="mt-4 inline-block text-xs font-bold uppercase tracking-widest text-white/90">
                  Explore →
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-6 py-24">
        <div className="grid gap-12 sm:grid-cols-3">
          {differentiators.map((d) => (
            <div key={d.n}>
              <div className="font-heading text-sm font-bold text-accent">{d.n}</div>
              <h3 className="mt-3 font-heading text-lg font-bold">{d.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-cream-300 bg-cream-100 px-6 py-28">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-16 font-heading text-2xl font-bold sm:text-3xl">
            From first sketch to final build
          </h2>
          <div className="grid gap-x-8 gap-y-16 sm:grid-cols-4">
            {process.map((step, i) => (
              <div key={step.title} className="border-t-2 border-ink/10 pt-6">
                <div className="font-heading text-4xl font-bold text-ink/15 sm:text-5xl">
                  0{i + 1}
                </div>
                <p className="mt-4 font-heading font-bold">{step.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{step.desc}</p>
              </div>
            ))}
          </div>
          <a
            href="/process"
            className="mt-16 inline-block text-sm font-bold text-accent"
          >
            See our full process →
          </a>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 py-24">
        <div className="mb-10 flex items-baseline justify-between">
          <h2 className="font-heading text-2xl font-bold">Recent work</h2>
          <a href="/portfolio" className="text-sm font-bold text-accent">
            View full portfolio →
          </a>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            {
              src: "/images/portfolio/custom-homes-40.jpg",
              alt: "Modern custom home with a wraparound covered deck, designed by Innova Design Studio",
            },
            {
              src: "/images/portfolio/custom-homes-52.jpg",
              alt: "Rendering of an attached single-story residential development designed by Innova Design Studio",
            },
            {
              src: "/images/portfolio/custom-homes-1.jpg",
              alt: "Custom home exterior with a stone base and a glass observation tower, designed by Innova Design Studio",
            },
            {
              src: "/images/portfolio/custom-homes-42.jpg",
              alt: "Two-story custom home with stone accents and a black metal roof, designed by Innova Design Studio",
            },
          ].map((img) => (
            <div key={img.src} className="relative aspect-[3/4] overflow-hidden bg-cream-200">
              <Image src={img.src} alt={img.alt} fill sizes="25vw" className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-cream-300 bg-ink px-6 py-20 text-center">
        <h2 className="font-heading text-xl font-bold text-white sm:text-2xl">
          Currently building
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-white/60">
          Real photos from active job sites — a look at what&apos;s underway right now.
        </p>
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-3">
          {[
            {
              src: "/images/current-builds/build-1.jpg",
              alt: "Interior view of a home's roof framing during construction",
            },
            {
              src: "/images/portfolio/renovations-29.jpg",
              alt: "Aerial view of a home addition under construction, wrapped in house wrap",
            },
            {
              src: "/images/current-builds/build-7.jpg",
              alt: "Aerial view of an active construction site with a nearly complete garage building",
            },
          ].map((img) => (
            <div key={img.src} className="relative aspect-[3/4] overflow-hidden">
              <Image src={img.src} alt={img.alt} fill sizes="25vw" className="object-cover" />
            </div>
          ))}
        </div>
        <a href="/current-builds" className="mt-8 inline-block text-sm font-bold text-white">
          See what&apos;s underway →
        </a>
      </section>

      <section className="mx-auto w-full max-w-2xl px-6 py-24 text-center">
        <p className="font-heading text-xl italic leading-relaxed text-terracotta sm:text-2xl">
          &ldquo;Alexander&apos;s deep knowledge of building codes gave us total confidence.
          We&apos;re extremely grateful for their diligence, which likely saved us from
          major issues down the road.&rdquo;
        </p>
        <p className="mt-5 text-sm text-ink/50">— Luke Docksteader, Google Review</p>
      </section>

      <section id="contact-form" className="bg-ink py-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="font-heading text-3xl font-bold text-white">
            Ready to start your project?
          </h2>
          <p className="mt-3 text-white/70">
            Book a free consult — no obligation, just a conversation about what&apos;s
            possible.
          </p>
          <div className="mt-12">
            <LeadForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
