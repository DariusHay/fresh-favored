import { Link } from "react-router-dom";
import { business } from "../data/business";

export default function Footer() {
  return (
    <footer className="border-t border-brand-cocoa/10 bg-brand-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-10">
        <div>
          <p className="font-display text-3xl">Fresh & Favored</p>
          <p className="mt-3 max-w-sm text-sm text-white/75">{business.tagline}</p>
          <p className="mt-4 text-sm text-white/70">{business.pickupNote}</p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-butter">Contact</p>
          <div className="mt-4 space-y-2 text-sm text-white/80">
            <p><a href={business.phoneHref}>{business.phone}</a></p>
            <p><a href={business.emailHref}>{business.email}</a></p>
            <p>{business.address}</p>
          </div>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-butter">Explore</p>
          <div className="mt-4 grid gap-2 text-sm text-white/80">
            <Link to="/services">Services</Link>
            <Link to="/booking">Order Food</Link>
            <Link to="/policies">Policies</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-butter">Follow</p>
          <p className="mt-4 text-sm leading-6 text-white/75">
            See updated menus, images, specials, and new retail finds.
          </p>
          <div className="mt-4 grid gap-2 text-sm text-white/80">
            <a href={business.social.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={business.social.facebook} target="_blank" rel="noreferrer">
              Facebook
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Fresh & Favored, LLC. All rights reserved.
      </div>
    </footer>
  );
}
