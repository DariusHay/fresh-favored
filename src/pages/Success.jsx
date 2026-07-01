import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { useCart } from "../context/useCart";
import { formatPrice } from "../utils/formatPrice";

const pendingOrderKey = "freshFavoredPendingOrder";

const encodeForm = (data) => new URLSearchParams(data).toString();

function formatOrderDetails(order) {
  const items = order.items
    ?.map(
      (item) =>
        `${item.quantity} x ${item.name} at ${formatPrice(item.price)} each`
    )
    .join("\n");

  return [
    `Square order ID: ${order.orderId || "Not provided"}`,
    `Customer name: ${order.customerName || "Not provided"}`,
    `Customer email: ${order.customerEmail || "Not provided"}`,
    `Items:\n${items || "No item details found"}`,
    `Subtotal: ${formatPrice(order.subtotal || 0)}`,
    `Pickup address: ${order.pickupAddress}`,
    `Pickup hours: ${order.pickupHours}`,
    `Checkout started: ${order.createdAt}`,
  ].join("\n\n");
}

export default function Success() {
  const { clearCart } = useCart();
  const [notificationStatus, setNotificationStatus] = useState("checking");

  useEffect(() => {
    async function sendOrderNotification() {
      const pendingOrder = window.localStorage.getItem(pendingOrderKey);

      if (!pendingOrder) {
        setNotificationStatus("empty");
        return;
      }

      try {
        const order = JSON.parse(pendingOrder);
        const response = await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encodeForm({
            "form-name": "order-notification",
            "bot-field": "",
            "square-order-id": order.orderId || "Not provided",
            "customer-name": order.customerName || "Not provided",
            "customer-email": order.customerEmail || "Not provided",
            items:
              order.items
                ?.map((item) => `${item.quantity} x ${item.name}`)
                .join(", ") || "No item details found",
            subtotal: formatPrice(order.subtotal || 0),
            "pickup-address": order.pickupAddress,
            "pickup-hours": order.pickupHours,
            details: formatOrderDetails(order),
          }),
        });

        if (!response.ok) {
          throw new Error("Unable to send order notification.");
        }

        window.localStorage.removeItem(pendingOrderKey);
        clearCart();
        setNotificationStatus("sent");
      } catch {
        setNotificationStatus("error");
      }
    }

    sendOrderNotification();
  }, [clearCart]);

  return (
    <div className="px-4 py-16 sm:px-6 lg:px-10">
      <SEO title="Food Order Received | Fresh & Favored" description="Thank you for your Fresh & Favored pickup food order." />
      <div className="mx-auto max-w-2xl rounded-3xl bg-white p-8 shadow-soft">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-sage">Thank you</p>
        <h1 className="mt-2 font-display text-5xl text-brand-cocoa">Your food order was received.</h1>
        <p className="mt-4 text-neutral-700">
          Fresh & Favored will follow up as needed. Please pick up your order at 1020 W. Michigan St, Orlando, FL 32805 for pickup only during business hours.
        </p>
        {notificationStatus === "sent" ? (
          <p className="mt-4 rounded-2xl bg-brand-cream px-4 py-3 text-sm font-semibold text-brand-cocoa">
            Order notification sent to Fresh & Favored.
          </p>
        ) : null}
        {notificationStatus === "error" ? (
          <p className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
            The payment was completed, but the order email notification could not be sent automatically. Please contact Fresh & Favored with your Square receipt.
          </p>
        ) : null}
        <button type="button" onClick={clearCart} className="mt-6 rounded-full bg-brand-cocoa px-6 py-3 font-bold text-white">Clear Cart</button>
        <Link to="/" className="ml-3 inline-flex rounded-full border border-brand-cocoa/20 px-6 py-3 font-bold">Home</Link>
      </div>
    </div>
  );
}
