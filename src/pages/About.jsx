import SEO from "../components/SEO";

const values = ["Faith", "Compassion", "Integrity", "Excellence", "Community", "Empowerment", "Service", "Family"];

export default function About() {
  return (
    <div className="bg-white px-4 py-16 sm:px-6 lg:px-10">
      <SEO title="About | Fresh & Favored" description="Meet Chereeka, founder of Fresh & Favored, LLC, serving families and communities through food, retail, faith, and compassion." />
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-sage">About the Founder</p>
        <h1 className="mt-2 font-display text-5xl text-brand-cocoa">Built with faith, family, and favor.</h1>
        <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl bg-brand-cream p-6 text-brand-ink">
            <p className="font-display text-3xl">Chereeka</p>
            <p className="mt-4 text-sm leading-7 text-neutral-700">
              Founder and owner of Fresh & Favored, LLC, Chereeka combines entrepreneurial vision with a heart for people. Since 2018, she has faithfully served as a single mother to five boys, providing a loving, stable, and nurturing environment while helping shape their futures through faith, discipline, and unconditional love.
            </p>
          </div>
          <div className="space-y-5 text-neutral-700">
            <p>
              Through Fresh & Favored and 5 Bro's Sweets & Treats, she offers quality food services, catering, retail products, and community-centered initiatives that reflect excellence, integrity, and compassion.
            </p>
            <p>
              The mission is to demonstrate the love of Christ by serving individuals and families through faith, compassion, and practical support. Fresh & Favored is committed to providing food, resources, encouragement, and opportunities that empower people to overcome challenges, restore hope, and improve quality of life.
            </p>
          </div>
        </div>
        <section className="mt-14 rounded-3xl bg-brand-ink p-8 text-white">
          <h2 className="font-display text-4xl">Vision</h2>
          <p className="mt-4 max-w-4xl text-white/80">
            To build a thriving community where no person is forgotten, every family has access to essential resources, and lives are transformed through faith, service, and genuine acts of love.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {values.map((value) => (
              <span key={value} className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-brand-butter">{value}</span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
