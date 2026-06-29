import { NavLink, Link } from "react-router-dom";
import { useCart } from "../context/useCart";

const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/services", "Services"],
  ["/menu-retail", "Menu & Retail"],
  ["/booking", "Order Food"],
  ["/contact", "Contact"],
];

export default function Navbar() {
  const { itemCount } = useCart();
  const navClass = ({ isActive }) =>
    [
      "rounded-full px-3 py-2 text-sm font-semibold transition",
      isActive
        ? "bg-brand-cocoa text-white hover:bg-brand-cocoa"
        : "text-brand-ink hover:bg-brand-cream",
    ].join(" ");

  return (
    <header className="sticky top-0 z-50 border-b border-brand-cocoa/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <Link to="/" className="font-display text-2xl font-bold text-brand-cocoa">
          Fresh & Favored
        </Link>
        <nav className="flex flex-wrap items-center gap-2">
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              className={navClass}
              style={({ isActive }) => (isActive ? { color: "#ffffff" } : undefined)}
            >
              {label}
            </NavLink>
          ))}
          <NavLink
            to="/cart"
            className={navClass}
            style={({ isActive }) => (isActive ? { color: "#ffffff" } : undefined)}
          >
            Cart ({itemCount})
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
