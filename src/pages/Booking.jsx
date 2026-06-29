import SEO from "../components/SEO";
import PurchaseCard from "../components/PurchaseCard";
import { purchasableItems } from "../data/services";
import { policies } from "../data/policies";

export default function Booking() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-10">
      <SEO title="Order Plates & Family Meals | Fresh & Favored" description="Order seafood and soul food individual plates or family meals from Fresh & Favored for pickup during business hours." />
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-sage">Online Food Orders</p>
        <h1 className="mt-2 font-display text-5xl text-brand-cocoa">Pickup-only plates and family meals.</h1>
        <p className="mt-4 max-w-3xl text-neutral-700">
          Online checkout is available only for individual plates and family meals. All other services are consultation-based and priced after request details are confirmed.
        </p>
        <div className="mt-6 rounded-3xl border border-brand-cocoa/10 bg-white p-5 text-sm leading-7 text-brand-cocoa shadow-soft">
          <b>Pickup notice:</b> Food purchases must be picked up at 1020 W. Michigan St, Orlando, FL 32805 during business hours. This address is for food pickup only.
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {purchasableItems.map((item) => (
            <PurchaseCard key={item.slug} item={item} />
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
