import { useState } from "react";

const encodeForm = (data) => new URLSearchParams(data).toString();

export default function ConsultationFormModal({ service, onClose }) {
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
        throw new Error("Unable to submit consultation request.");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-brand-ink/70 px-4 py-8 backdrop-blur-sm">
      <div className="mx-auto max-w-3xl rounded-[2rem] bg-white p-6 shadow-soft">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-sage">Consultation Request</p>
            <h2 className="mt-2 font-display text-4xl text-brand-cocoa">{service.title}</h2>
            <p className="mt-3 text-sm leading-6 text-neutral-700">
              Share the details below so Fresh & Favored can follow up with accurate pricing, availability, and next steps.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-brand-cocoa/20 px-4 py-2 text-sm font-bold text-brand-cocoa transition hover:bg-brand-cream"
            aria-label="Close consultation request form"
          >
            Close
          </button>
        </div>

        {status === "success" ? (
          <div className="mt-6 rounded-3xl bg-brand-cream p-5">
            <h3 className="font-display text-3xl text-brand-cocoa">Request sent.</h3>
            <p className="mt-2 text-sm leading-6 text-neutral-700">
              Thank you. Fresh & Favored will review the details and follow up soon.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-5 rounded-full bg-brand-cocoa px-6 py-3 font-bold text-white"
            >
              Done
            </button>
          </div>
        ) : (
          <form
            name="consultation-request"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="mt-6 grid gap-4"
          >
            <input type="hidden" name="form-name" value="consultation-request" />
            <input type="hidden" name="service" value={service.title} />
            <input type="hidden" name="starting-price" value={service.price} />
            <p className="hidden">
              <label>
                Do not fill this out if you are human: <input name="bot-field" />
              </label>
            </p>

            {status === "error" && (
              <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                Sorry, the request could not be sent. Please call or email Fresh & Favored directly.
              </p>
            )}

            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" required />
              <Field label="Preferred event or pickup date" name="requestedDate" type="date" />
              <Field label="Guest count or quantity" name="quantity" />
              <Field label="Estimated budget" name="budget" />
            </div>

            <label className="grid gap-2 text-sm font-semibold text-brand-ink">
              Preferred contact method
              <select name="preferredContact" className="rounded-2xl border border-brand-cocoa/20 bg-white px-4 py-3 font-normal">
                <option>Phone call</option>
                <option>Text message</option>
                <option>Email</option>
              </select>
            </label>

            <label className="grid gap-2 text-sm font-semibold text-brand-ink">
              Details for this request
              <textarea
                name="details"
                rows="6"
                required
                placeholder={`Tell us what you need for ${service.title.toLowerCase()}, including timing, location, flavors, menu ideas, colors, style preferences, or any special notes.`}
                className="rounded-2xl border border-brand-cocoa/20 bg-white px-4 py-3 font-normal"
              />
            </label>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="rounded-full bg-brand-cocoa px-6 py-3 font-bold text-white disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "submitting" ? "Sending Request..." : `Request ${service.title} Consultation`}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", required = false }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-brand-ink">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        className="rounded-2xl border border-brand-cocoa/20 bg-white px-4 py-3 font-normal"
      />
    </label>
  );
}
