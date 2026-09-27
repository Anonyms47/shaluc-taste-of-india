import { restaurant, telUrl, mapsUrl } from "@/lib/restaurant";

const NAV = [
  { href: "#accueil", label: "Accueil" },
  { href: "#histoire", label: "Notre histoire" },
  { href: "#menu", label: "Menu" },
  { href: "#lieu", label: "Le lieu" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-cream pt-20 pb-10">
      <div className="container-shaluc">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div>
            <p className="font-display text-2xl">SHALUC</p>
            <p className="mt-1 text-sm italic text-ink/50">{restaurant.tagline} — Dakar</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a href={telUrl} className="text-sm font-semibold text-ember hover:underline">
                {restaurant.phoneDisplay}
              </a>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-ember hover:underline"
              >
                Itinéraire
              </a>
            </div>
          </div>

          <nav className="flex flex-col gap-2 text-sm text-ink/60">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-ink">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="text-sm text-ink/60">
            <p>{restaurant.address.plusCode}, {restaurant.address.city}</p>
            <p className="mt-1">Ferme à {restaurant.hours.closes}</p>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse gap-4 border-t border-ink/10 pt-6 text-xs text-ink/40 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} SHALUC — {restaurant.tagline}.</p>
          <p>{restaurant.rating}/5 sur {restaurant.reviewCount} avis Google.</p>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="pointer-events-none select-none mt-4 -mb-6 text-center font-display text-[22vw] leading-none text-ink/[0.04] md:-mb-10"
      >
        SHALUC
      </p>
    </footer>
  );
}
