"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg bg-white/10 p-8 text-center">
        <p className="font-heading text-lg font-bold text-white">Thanks — got it.</p>
        <p className="mt-2 text-sm text-white/70">
          We&apos;ll get back to you within 1 business day.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-none border-b border-white/25 bg-transparent px-1 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-accent";
  const selectClass = `${inputClass} [&>option]:text-ink`;

  return (
    <form onSubmit={handleSubmit} className="mx-auto grid max-w-xl gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" required placeholder="Name" className={inputClass} />
        <input
          name="email"
          type="email"
          required
          placeholder="Email"
          className={inputClass}
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="phone" type="tel" placeholder="Phone" className={inputClass} />
        <input name="region" placeholder="Region (e.g. Moncton, NB)" className={inputClass} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <select name="propertyType" required defaultValue="" className={selectClass}>
          <option value="" disabled>
            Property type
          </option>
          <option value="Residential">Residential</option>
          <option value="Apartment">Apartment</option>
          <option value="Commercial">Commercial</option>
          <option value="Other">Other</option>
        </select>
        <select name="projectType" required defaultValue="" className={selectClass}>
          <option value="" disabled>
            Project type
          </option>
          <option value="New Construction">New Construction</option>
          <option value="Renovation">Renovation</option>
          <option value="Addition">Addition</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          name="budget"
          placeholder="Project budget"
          className={inputClass}
        />
        <input name="timeline" placeholder="Timeline" className={inputClass} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <select name="renderings" required defaultValue="" className={selectClass}>
          <option value="" disabled>
            Looking for 3D renderings?
          </option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <select name="referralSource" required defaultValue="" className={selectClass}>
          <option value="" disabled>
            How did you hear about us?
          </option>
          <option value="Referral">Referral</option>
          <option value="Google">Google</option>
          <option value="Social Media">Social Media</option>
          <option value="Website">Website</option>
          <option value="Others">Other</option>
        </select>
      </div>
      <textarea
        name="details"
        rows={4}
        placeholder="Tell us a bit about your project — what you're picturing."
        className={inputClass}
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-4 rounded-none bg-accent px-8 py-4 text-sm font-bold tracking-wide text-white transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {status === "submitting" ? "Sending..." : "Book my free consult"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-400">
          Something went wrong — try again, or call 506-300-4380 directly.
        </p>
      )}
      <p className="text-center text-xs text-white/50">
        We&apos;ll get back to you within 1 business day.
      </p>
    </form>
  );
}
