import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { useCart } from "../context/useCart";
import { formatPrice } from "../utils/formatPrice";

const checkoutEndpoint =
  import.meta.env.VITE_SQUARE_CHECKOUT_ENDPOINT ||
  "/.netlify/functions/create-square-checkout";
const pickupHours = "Sun-Mon: Closed. Tues: 10 AM-6 PM. Wed-Sat: 9 AM-7 PM.";
const pendingOrderKey = "freshFavoredPendingOrder";

export default function Cart() {
  const { items, subtotal, updateQuantity, removeItem, clearCart } = useCart();
  const [error, setError] = useState("");
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");

  async function startCheckout() {
    setError("");
    const trimmedCustomerName = customerName.trim();
    const trimmedCustomerEmail = customerEmail.trim();
    const trimmedCustomerPhone = customerPhone.trim();
    if (!trimmedCustomerName) {
      setError("Please enter the customer name before checkout.");
      return;
    }
    if (!trimmedCustomerEmail) {
      setError("Please enter the customer email before checkout.");
      return;
    }
    if (!trimmedCustomerPhone) {
      setError("Please enter the customer phone number before checkout.");
      return;
    }

    setIsCheckingOut(true);
    try {
      const response = await fetch(checkoutEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map(({ slug, quantity }) => ({ slug, quantity })),
          successUrl: `${window.location.origin}/booking/success`,
        }),
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error || "Checkout failed.");
      window.localStorage.setItem(
        pendingOrderKey,
        JSON.stringify({
          orderId: payload.orderId || "Pending Square order",
          customerName: trimmedCustomerName,
          customerEmail: trimmedCustomerEmail,
          customerPhone: trimmedCustomerPhone,
          items: items.map(({ name, price, quantity }) => ({
            name,
            price,
            quantity,
          })),
          subtotal,
          pickupAddress: "1020 W. Michigan St, Orlando, FL 32805 for pickup only",
          pickupHours,
          createdAt: new Date().toISOString(),
        })
      );
      window.location.href = payload.checkoutUrl;
    } catch (checkoutError) {
      setError(checkoutError.message);
      setIsCheckingOut(false);
    }
  }

  return (
    <div className="px-4 py-16 sm:px-6 lg:px-10">
      <SEO title="Cart | Fresh & Favored" description="Review Fresh & Favored pickup food orders before secure checkout." />
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-sage">Cart</p>
        <h1 className="mt-2 font-display text-5xl text-brand-cocoa">Food Order Cart</h1>
        <p className="mt-4 max-w-3xl text-neutral-700">
          Online checkout is for individual plates and family meals only. All
          purchases must be picked up at 1020 W. Michigan St, Orlando, FL 32805 for pickup only.
          Pickup hours: {pickupHours}
        </p>
        {!items.length ? (
          <div className="mt-8 rounded-3xl bg-white p-8 shadow-soft">
            <p>Your cart is empty.</p>
            <Link className="mt-5 inline-flex rounded-full bg-brand-cocoa px-6 py-3 font-bold text-white" to="/booking">View food orders</Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_320px]">
            <div className="rounded-3xl bg-white shadow-soft">
              {items.map((item) => (
                <div key={item.slug} className="grid gap-4 border-b border-brand-cocoa/10 p-5 last:border-b-0 sm:grid-cols-[1fr_auto_auto] sm:items-center">
                  <div>
                    <p className="font-display text-2xl text-brand-cocoa">{item.name}</p>
                    <p className="text-sm text-neutral-600">{formatPrice(item.price)} each</p>
                  </div>
                  <input
                    aria-label={`${item.name} quantity`}
                    className="w-24 rounded-xl border border-brand-cocoa/20 px-3 py-2"
                    min="1"
                    max="10"
                    type="number"
                    value={item.quantity}
                    onChange={(event) => updateQuantity(item.slug, event.target.value)}
                  />
                  <button className="text-sm font-bold text-brand-cocoa underline" type="button" onClick={() => removeItem(item.slug)}>Remove</button>
                </div>
              ))}
            </div>
            <aside className="h-fit rounded-3xl bg-brand-ink p-6 text-white shadow-soft">
              <p className="text-sm text-white/70">Subtotal</p>
              <p className="mt-2 font-display text-4xl">{formatPrice(subtotal)}</p>
              <p className="mt-4 rounded-2xl bg-white/10 p-3 text-xs leading-5 text-white/80">
                Pickup address: 1020 W. Michigan St, Orlando, FL 32805 for pickup only. Hours:
                {" "}{pickupHours}
              </p>
              <label className="mt-5 grid gap-2 text-sm font-semibold text-white">
                Customer name
                <input
                  type="text"
                  value={customerName}
                  onChange={(event) => setCustomerName(event.target.value)}
                  className="rounded-2xl border border-white/20 bg-white px-4 py-3 font-normal text-brand-ink"
                  placeholder="Name for pickup order"
                />
              </label>
              <label className="mt-4 grid gap-2 text-sm font-semibold text-white">
                Customer email
                <input
                  type="email"
                  value={customerEmail}
                  onChange={(event) => setCustomerEmail(event.target.value)}
                  className="rounded-2xl border border-white/20 bg-white px-4 py-3 font-normal text-brand-ink"
                  placeholder="Email for order updates"
                />
              </label>
              <label className="mt-4 grid gap-2 text-sm font-semibold text-white">
                Customer phone number
                <input
                  type="tel"
                  value={customerPhone}
                  onChange={(event) => setCustomerPhone(event.target.value)}
                  className="rounded-2xl border border-white/20 bg-white px-4 py-3 font-normal text-brand-ink"
                  placeholder="Phone number for order updates"
                />
              </label>
              <button type="button" onClick={startCheckout} disabled={isCheckingOut} className="mt-6 w-full rounded-full bg-brand-butter px-6 py-3 font-bold text-brand-ink disabled:opacity-60">
                {isCheckingOut ? "Starting checkout..." : "Checkout with Square"}
              </button>
              <button type="button" onClick={clearCart} className="mt-3 w-full rounded-full border border-white/30 px-6 py-3 font-bold text-white">Clear Cart</button>
              {error ? <p className="mt-4 text-sm text-red-200">{error}</p> : null}
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}
