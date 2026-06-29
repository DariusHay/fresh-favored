import SEO from "../components/SEO";
import ServiceCard from "../components/ServiceCard";
import { purchasableItems, services } from "../data/services";

const consultationServices = services.filter(
  (service) => !["Individual Plates", "Family Meals"].includes(service.title)
);

export default function MenuRetail() {
  return (
    <div className="bg-white px-4 py-16 sm:px-6 lg:px-10">
      <SEO title="Menu & Retail | Fresh & Favored" description="Fresh & Favored offers pickup plates, family meals, catering, private dinners, cakes, homemade drinks, fedoras, perfume oils, and designer purses in Orlando." />
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-sage">Menu & Retail</p>
        <h1 className="mt-2 font-display text-5xl text-brand-cocoa">Pickup food orders and consultation-based services.</h1>

        <section className="mt-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-sage">Online Checkout</p>
              <h2 className="mt-2 font-display text-4xl text-brand-cocoa">Available for plates and family meals.</h2>
            </div>
            <p className="max-w-md text-sm text-neutral-700">
              Seafood and soul food options are pickup only during business hours.
            </p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {purchasableItems.map((item) => (
              <article key={item.slug} className="rounded-3xl border border-brand-cocoa/10 bg-brand-cream p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-3xl text-brand-cocoa">{item.name}</h3>
                  <p className="rounded-full bg-white px-3 py-1 text-sm font-bold text-brand-cocoa">${item.price}</p>
                </div>
                <p className="mt-3 text-sm text-neutral-700">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-sage">Consultation Based</p>
          <h2 className="mt-2 font-display text-4xl text-brand-cocoa">Custom pricing after details are confirmed.</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {consultationServices.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
