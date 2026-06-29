import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import ServiceCard from "../components/ServiceCard";
import { business } from "../data/business";
import { services } from "../data/services";

const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`;
const heroImage = assetPath("images/hero.jpg");
const cateringImage = assetPath("images/catering.jpg");
const sweetsImage = assetPath("images/sweets.jpg");

export default function Home() {
  return (
    <>
      <SEO
        title="Fresh & Favored | Catering, Private Dinners & Retail in Orlando"
        description="Fresh & Favored and 5 Bro's Sweets & Treats serves Orlando with soul food, seafood, cakes, homemade drinks, private dinners, catering, and curated retail."
      />
      <section className="relative overflow-hidden bg-brand-ink px-4 py-20 text-white sm:px-6 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,200,106,0.26),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(184,110,45,0.22),transparent_38%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-butter">{business.tagline}</p>
            <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold leading-tight sm:text-7xl">
              Soulful flavor, sweet moments, and standout style.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              Fresh & Favored brings together catering, private dinners, sweets, homemade drinks, fedoras, perfume oils, and designer purses for Orlando and surrounding areas.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/booking" className="rounded-full bg-brand-butter px-7 py-3 text-center font-bold text-brand-ink transition hover:bg-white">
                Order Food
              </Link>
              <Link to="/services" className="rounded-full border border-white/40 px-7 py-3 text-center font-bold text-white transition hover:bg-white/10">
                Explore Services
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 shadow-soft backdrop-blur">
            <div className="bg-brand-cream/10 p-3">
              <img
                src={heroImage}
                alt="Fresh & Favored food and sweets presentation"
                className="h-auto max-h-[30rem] w-full object-contain"
              />
            </div>
            <div className="p-6">
              <p className="font-display text-4xl">Fresh & Favored</p>
              <p className="mt-2 text-brand-butter">and 5 Bro's Sweets & Treats</p>
              <div className="mt-6 grid gap-4 text-sm text-white/80">
                <p><b className="text-white">Food:</b> Soul food, seafood, plates, family meals, catering, private dinners.</p>
                <p><b className="text-white">Sweets:</b> Cakes, treats, and homemade drinks.</p>
                <p><b className="text-white">Retail:</b> Fedoras, perfume oils, and designer purses.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <article className="overflow-hidden rounded-3xl border border-brand-cocoa/10 bg-brand-cream shadow-soft">
            <div className="bg-white p-3">
              <img
                src={cateringImage}
                alt="Fresh & Favored catering and savory food spread"
                className="h-auto max-h-[30rem] w-full object-contain"
              />
            </div>
            <div className="p-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-sage">Catering</p>
              <h2 className="mt-2 font-display text-4xl text-brand-cocoa">Soulful food for gatherings.</h2>
              <p className="mt-3 text-sm leading-6 text-neutral-700">
                Catering, private dinners, plates, and family meals prepared for celebrations, events, and meaningful moments.
              </p>
            </div>
          </article>
          <article className="overflow-hidden rounded-3xl border border-brand-cocoa/10 bg-brand-cream shadow-soft">
            <div className="bg-white p-3">
              <img
                src={sweetsImage}
                alt="5 Bro's Sweets & Treats cakes and desserts"
                className="h-auto max-h-[30rem] w-full object-contain"
              />
            </div>
            <div className="p-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-sage">Sweets & Drinks</p>
              <h2 className="mt-2 font-display text-4xl text-brand-cocoa">Sweet details, homemade flavor.</h2>
              <p className="mt-3 text-sm leading-6 text-neutral-700">
                Cakes, treats, and homemade drinks are available for everyday orders, events, and custom requests.
              </p>
            </div>
          </article>
        </div>
      </section>
      <section className="px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-sage">Popular Services</p>
          <h2 className="mt-2 font-display text-4xl text-brand-cocoa sm:text-5xl">Food, flavor, and fashion for every occasion.</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
