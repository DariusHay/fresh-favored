import SEO from "../components/SEO";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";

export default function Services() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-10">
      <SEO title="Services | Fresh & Favored" description="Explore Fresh & Favored catering, private dinners, plates, family meals, cakes, homemade drinks, and retail services in Orlando." />
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-sage">Services</p>
        <h1 className="mt-2 font-display text-5xl text-brand-cocoa">Flavor, sweets, and retail with purpose.</h1>
        <p className="mt-4 max-w-3xl text-neutral-700">Pricing begins at the listed rates and is finalized after the menu, quantity, timing, and event details are confirmed.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}
