import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { useCart } from "../context/useCart";

export default function Success() {
  const { clearCart } = useCart();
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-10">
      <SEO title="Food Order Received | Fresh & Favored" description="Thank you for your Fresh & Favored pickup food order." />
      <div className="mx-auto max-w-2xl rounded-3xl bg-white p-8 shadow-soft">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-sage">Thank you</p>
        <h1 className="mt-2 font-display text-5xl text-brand-cocoa">Your food order was received.</h1>
        <p className="mt-4 text-neutral-700">
          Fresh & Favored will follow up as needed. Please pick up your order at 1020 W. Michigan St, Orlando, FL 32805 during business hours.
        </p>
        <button type="button" onClick={clearCart} className="mt-6 rounded-full bg-brand-cocoa px-6 py-3 font-bold text-white">Clear Cart</button>
        <Link to="/" className="ml-3 inline-flex rounded-full border border-brand-cocoa/20 px-6 py-3 font-bold">Home</Link>
      </div>
    </div>
  );
}
