const logoPath = (filename) => `${import.meta.env.BASE_URL}images/${filename}`;

export default function SocialLinkButton({ href, label, logo, variant = "light", size = "default" }) {
  const classes =
    variant === "filled"
      ? "bg-brand-cocoa text-white hover:bg-brand-cocoa"
      : "border border-brand-cocoa/25 bg-white text-brand-ink hover:bg-brand-cream";
  const sizing = size === "compact" ? "px-3 py-2 text-xs" : "px-5 py-3 text-sm";
  const logoSize = size === "compact" ? "h-4 w-4" : "h-5 w-5";

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full text-center font-semibold transition ${sizing} ${classes}`}
    >
      <img src={logoPath(logo)} alt="" className={`${logoSize} rounded-md object-contain`} />
      <span className="text-brand-cocoa">{label}</span>
    </a>
  );
}
