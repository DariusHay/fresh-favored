import SEO from "../components/SEO";

const items = [
  ["Individual Plates", "$15 and up", "Soul food and seafood plate options."],
  ["Family Meals", "$30 and up", "Comforting meals designed for sharing."],
  ["Homemade Drinks", "$5 and up", "Fresh drink options for orders and events."],
  ["Cakes", "$6 and up", "Cakes and sweets by request."],
  ["Fedoras", "$15 and up", "Fashion-forward retail finds."],
  ["Perfume Oils", "$10", "Everyday fragrance options."],
  ["Designer Purses", "$45 and up", "Curated statement pieces."],
];

export default function MenuRetail() {
  return (
    <div className="bg-white px-4 py-16 sm:px-6 lg:px-10">
      <SEO title="Menu & Retail | Fresh & Favored" description="Fresh & Favored offers plates, family meals, homemade drinks, cakes, fedoras, perfume oils, and designer purses in Orlando." />
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-sage">Menu & Retail</p>
        <h1 className="mt-2 font-display text-5xl text-brand-cocoa">Simple starting prices. Custom final quotes.</h1>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {items.map(([name, price, description]) => (
            <article key={name} className="rounded-3xl border border-brand-cocoa/10 bg-brand-cream p-6">
              <div className="flex items-start justify-between gap-4">
                <h2 className="font-display text-3xl text-brand-cocoa">{name}</h2>
                <p className="rounded-full bg-white px-3 py-1 text-sm font-bold text-brand-cocoa">{price}</p>
              </div>
              <p className="mt-3 text-sm text-neutral-700">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
