import SEO from "../components/SEO";
import DepositCard from "../components/DepositCard";
import { bookingDeposits } from "../data/services";
import { policies } from "../data/policies";

export default function Booking() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-10">
      <SEO title="Booking Deposits | Fresh & Favored" description="Reserve catering, private dinner, custom cake, or retail requests with Fresh & Favored booking deposits." />
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-sage">Booking & Deposits</p>
        <h1 className="mt-2 font-display text-5xl text-brand-cocoa">Reserve a request with a deposit.</h1>
        <p className="mt-4 max-w-3xl text-neutral-700">Booking and consultation requests should be submitted at least 2 weeks before the event. Deposits help reserve planning time or requested availability and are applied toward confirmed totals unless otherwise stated.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {bookingDeposits.map((item) => (
            <DepositCard key={item.slug} item={item} />
          ))}
        </div>
        <section className="mt-12 grid gap-6 lg:grid-cols-3">
          <Policy title="Booking Notice" body={policies.booking} />
          <Policy title="Cancellation Policy" body={policies.cancellation} />
          <Policy title="Late Payment Policy" body={policies.latePayment} />
        </section>
      </div>
    </div>
  );
}

function Policy({ title, body }) {
  return (
    <article className="rounded-3xl bg-white p-6 shadow-soft">
      <h2 className="font-display text-3xl text-brand-cocoa">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-neutral-700">{body}</p>
    </article>
  );
}
