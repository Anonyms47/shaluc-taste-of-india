import { restaurant, telUrl, mapsUrl, instagramUrl } from "@/lib/restaurant";

export function Visit() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-24 md:py-32 text-cream">
      <div className="elephant-watermark -left-20 -bottom-10 h-80 w-[28rem]" aria-hidden="true" />
      <div className="container-shaluc relative grid gap-12 md:grid-cols-2 md:gap-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-saffron">Venir chez SHALUC</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">On vous garde une table.</h2>
          <p className="mt-6 max-w-md text-cream/70">
            Sur place, en drive, ou en livraison sans contact — {restaurant.services.join(", ").toLowerCase()}.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={telUrl}
              className="rounded-full bg-ember px-7 py-3.5 text-sm font-semibold transition-transform hover:scale-[1.03]"
            >
              Appeler · {restaurant.phoneDisplay}
            </a>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-cream/50 px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-cream hover:text-ink"
            >
              Itinéraire
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-cream/50 px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-cream hover:text-ink"
            >
              Instagram
            </a>
          </div>
        </div>

        <dl className="space-y-6 text-sm">
          <div className="border-t border-cream/15 pt-5">
            <dt className="text-cream/50 uppercase tracking-wide text-xs">Adresse</dt>
            <dd className="mt-1 text-lg">
              {restaurant.address.plusCode}, {restaurant.address.city}
            </dd>
          </div>
          <div className="border-t border-cream/15 pt-5">
            <dt className="text-cream/50 uppercase tracking-wide text-xs">Horaires</dt>
            <dd className="mt-1 text-lg">Ferme à {restaurant.hours.closes}</dd>
            <dd className="mt-1 text-xs text-cream/40">{restaurant.hours.note}</dd>
          </div>
          <div className="border-t border-cream/15 pt-5">
            <dt className="text-cream/50 uppercase tracking-wide text-xs">Téléphone</dt>
            <dd className="mt-1 text-lg">{restaurant.phoneDisplay}</dd>
          </div>
          <div className="border-t border-cream/15 pt-5">
            <dt className="text-cream/50 uppercase tracking-wide text-xs">Tarifs</dt>
            <dd className="mt-1 text-lg">
              {restaurant.priceRange.min.toLocaleString("fr-FR")}–
              {restaurant.priceRange.max.toLocaleString("fr-FR")} {restaurant.priceRange.currency} /{" "}
              {restaurant.priceRange.unit}
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
