import { useState } from "react";
import SEO from "../components/SEO";
import SocialLinkButton from "../components/SocialLinkButton";
import { business } from "../data/business";

const encodeForm = (data) =>
  new URLSearchParams(data).toString();

export default function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeForm(formData),
      });

      if (!response.ok) {
        throw new Error("Unable to submit contact form.");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="bg-white px-4 py-16 sm:px-6 lg:px-10">
      <SEO title="Contact | Fresh & Favored" description="Contact Fresh & Favored for catering, private dinners, cakes, retail, and pickup questions in Orlando." />
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-sage">Contact</p>
          <h1 className="mt-2 font-display text-5xl text-brand-cocoa">Let's plan something fresh.</h1>
          <p className="mt-4 text-neutral-700">Call, email, or send a message for catering, private dinners, sweets, drinks, and retail questions.</p>
          <div className="mt-8 space-y-3 text-neutral-700">
            <p><b>Phone:</b> <a className="underline" href={business.phoneHref}>{business.phone}</a></p>
            <p><b>Email:</b> <a className="underline" href={business.emailHref}>{business.email}</a></p>
            <p><b>Pickup:</b> {business.address}</p>
            <p className="text-sm">{business.pickupNote}</p>
          </div>
          <div className="mt-8 rounded-3xl border border-brand-cocoa/10 bg-brand-cream p-5">
            <p className="text-sm font-bold text-brand-cocoa">Follow for updates</p>
            <p className="mt-2 text-sm leading-6 text-neutral-700">
              Fresh menus, food photos, specials, and retail arrivals are shared on social media.
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <SocialLinkButton
                href={business.social.instagram}
                label="Instagram"
                logo="Instagram_logo.png"
                variant="light"
              />
              <SocialLinkButton
                href={business.social.facebook}
                label="Facebook"
                logo="Facebook_logo.png"
                variant="light"
              />
            </div>
          </div>
        </div>
        <form
          name="contact"
          method="POST"
          onSubmit={handleSubmit}
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="rounded-3xl bg-brand-cream p-6 shadow-soft"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Do not fill this out if you are human: <input name="bot-field" />
            </label>
          </p>
          {status === "success" && (
            <p className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-brand-cocoa">
              Thanks! Your message was sent. Fresh & Favored will follow up soon.
            </p>
          )}
          {status === "error" && (
            <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
              Sorry, the message could not be sent. Please call or email Fresh & Favored directly.
            </p>
          )}
          <div className="grid gap-4">
            <Field label="Name" name="name" />
            <Field label="Email" name="email" type="email" />
            <Field label="Phone" name="phone" />
            <label className="grid gap-2 text-sm font-semibold text-brand-ink">
              What do you need?
              <select name="service" className="rounded-2xl border border-brand-cocoa/20 bg-white px-4 py-3 font-normal">
                <option>Catering</option>
                <option>Private Dinner</option>
                <option>Cakes or Sweets</option>
                <option>Plates or Family Meals</option>
                <option>Retail</option>
                <option>Other</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-semibold text-brand-ink">
              Message
              <textarea name="message" rows="5" className="rounded-2xl border border-brand-cocoa/20 bg-white px-4 py-3 font-normal" />
            </label>
            <button className="rounded-full bg-brand-cocoa px-6 py-3 font-bold text-white disabled:cursor-not-allowed disabled:opacity-70" type="submit" disabled={status === "submitting"}>
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text" }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-brand-ink">
      {label}
      <input name={name} type={type} className="rounded-2xl border border-brand-cocoa/20 bg-white px-4 py-3 font-normal" />
    </label>
  );
}
