import { useCart } from "../context/useCart";
import { formatPrice } from "../utils/formatPrice";

export default function PurchaseCard({ item }) {
  const { addItem } = useCart();

  return (
    <article className="flex h-full flex-col rounded-3xl border border-brand-cocoa/10 bg-white p-6 shadow-soft">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-sage">{item.category}</p>
      <h3 className="mt-2 font-display text-3xl text-brand-cocoa">{item.name}</h3>
      <p className="mt-3 text-2xl font-bold text-brand-ink">{formatPrice(item.price)}</p>
      <p className="mt-4 flex-1 text-sm leading-6 text-neutral-700">{item.description}</p>
      <p className="mt-5 rounded-2xl bg-brand-cream px-4 py-3 text-xs font-semibold leading-5 text-brand-cocoa">
        Pickup only at 1020 W. Michigan St, Orlando, FL 32805 during business hours.
      </p>
      <button
        type="button"
        onClick={() => addItem(item)}
        className="mt-6 rounded-full bg-brand-cocoa px-5 py-3 font-semibold text-white transition hover:bg-brand-ink"
      >
        Add to Cart
      </button>
    </article>
  );
}
