import { restaurant, telUrl, mapsUrl, photos } from "@/lib/restaurant";
import { PhotoSlot } from "../ui/PhotoSlot";

export function Hero() {
  return (
    <section id="accueil" className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <PhotoSlot
          label="La salle SHALUC"
          src={photos.salleSoir}
          alt="La salle du restaurant SHALUC, le soir"
          aspect="aspect-auto h-full"
          className="h-full w-full"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10" />
      </div>

      <div className="container-shaluc relative z-10 pb-16 pt-40 md:pb-24">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-saffron">
          {restaurant.category} · Dakar
        </p>
        <h1 className="max-w-3xl font-display text-5xl leading-[1.05] text-cream sm:text-6xl md:text-7xl">
          SHALUC
          <span className="block text-2xl font-normal italic text-cream/80 sm:text-3xl md:text-4xl mt-2">
            Taste of India
          </span>
        </h1>
        <p className="mt-6 max-w-md text-lg text-cream/85">
          Le feu du tandoor, les épices, et l&apos;art du partage — au cœur de Dakar.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#menu"
            className="rounded-full bg-ember px-7 py-3.5 text-sm font-semibold text-cream transition-transform hover:scale-[1.03]"
          >
            Voir le menu
          </a>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-cream/50 px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-cream hover:text-ink"
          >
            Nous trouver
          </a>
        </div>

        <div className="mt-12 flex items-center gap-3 text-cream/80">
          <span className="font-display text-2xl text-saffron">{restaurant.rating}</span>
          <span className="text-sm">
            sur {restaurant.reviewCount} avis · {restaurant.priceRange.min.toLocaleString("fr-FR")}–
            {restaurant.priceRange.max.toLocaleString("fr-FR")} {restaurant.priceRange.currency} /{" "}
            {restaurant.priceRange.unit}
          </span>
        </div>
      </div>

      <a
        href={telUrl}
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-20 focus:rounded-full focus:bg-cream focus:px-4 focus:py-2 focus:text-ink"
      >
        Appeler SHALUC
      </a>
    </section>
  );
}
