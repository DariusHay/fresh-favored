export default function ServiceCard({ service }) {
  return (
    <article className="rounded-3xl border border-brand-cocoa/10 bg-white p-6 shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-3xl text-brand-cocoa">{service.title}</h3>
        <p className="whitespace-nowrap rounded-full bg-brand-cream px-3 py-1 text-xs font-bold text-brand-cocoa">{service.price}</p>
      </div>
      <p className="mt-4 text-sm leading-6 text-neutral-700">{service.summary}</p>
      <ul className="mt-5 space-y-2 text-sm text-neutral-700">
        {service.details.map((detail) => (
          <li key={detail} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-caramel" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
