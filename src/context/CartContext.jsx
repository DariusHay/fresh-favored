import { useMemo, useState } from "react";
import { CartContext } from "./cart-context";

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  function addItem(item) {
    setItems((current) => {
      const existing = current.find((entry) => entry.slug === item.slug);
      if (!existing) return [...current, { ...item, quantity: 1 }];
      return current.map((entry) =>
        entry.slug === item.slug
          ? { ...entry, quantity: Math.min(entry.quantity + 1, 10) }
          : entry
      );
    });
  }

  function updateQuantity(slug, quantity) {
    const nextQuantity = Math.max(1, Math.min(10, Number(quantity) || 1));
    setItems((current) =>
      current.map((entry) =>
        entry.slug === slug ? { ...entry, quantity: nextQuantity } : entry
      )
    );
  }

  function removeItem(slug) {
    setItems((current) => current.filter((entry) => entry.slug !== slug));
  }

  function clearCart() {
    setItems([]);
  }

  const value = useMemo(() => {
    const subtotal = items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const itemCount = items.reduce((total, item) => total + item.quantity, 0);

    return {
      items,
      subtotal,
      itemCount,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
