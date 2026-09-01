import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LeadForm from "../components/LeadForm";

export const metadata: Metadata = {
  title: "Contact | Innova Design Studio | Atlantic Canada",
  description:
    "Get in touch with Innova Design Studio — book a free consult for your custom home, multi-unit, or renovation project in Atlantic Canada.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <section id="contact-form" className="bg-ink px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Let&apos;s talk about your project.
          </h1>
          <p className="mt-4 text-white/80">
            Book a free consult — no obligation, just a conversation about what&apos;s
            possible.
          </p>
          <p className="mt-2 text-sm text-white/60">
            506-300-4380 · info@innovadesignstudio.ca · Atlantic Canada
          </p>
          <div className="mt-10">
            <LeadForm />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
