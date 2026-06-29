import SEO from "../components/SEO";
import { policies } from "../data/policies";

export default function Policies() {
  return (
    <div className="bg-white px-4 py-16 sm:px-6 lg:px-10">
      <SEO title="Policies | Fresh & Favored" description="Fresh & Favored booking, cancellation, pickup, and late payment policies." />
      <div className="mx-auto max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-sage">Policies</p>
        <h1 className="mt-2 font-display text-5xl text-brand-cocoa">Booking policies</h1>
        <div className="mt-8 space-y-5">
          {Object.entries(policies).map(([key, value]) => (
            <article key={key} className="rounded-3xl bg-brand-cream p-6">
              <h2 className="font-display text-3xl capitalize text-brand-cocoa">{key.replace(/([A-Z])/g, " $1")}</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-700">{value}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
