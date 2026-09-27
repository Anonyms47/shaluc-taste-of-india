import { restaurant } from "@/lib/restaurant";

// Le menu structuré complet (catégories, plats, prix) n'a pas été fourni.
// En attendant, on affiche honnêtement ce qui est confirmé : les deux plats
// signature et les plats mentionnés par les clients dans leurs avis.
const mentionedDishes = restaurant.reviewKeywords.filter(
  (k) => !restaurant.popularDishes.some((d) => d.name.toLowerCase().includes(k))
);

export function Menu() {
  return (
    <section id="menu" className="bg-cream py-24 md:py-32">
      <div className="container-shaluc">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ember">Le menu</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Ce qu&apos;on sait déjà que vous aimerez.</h2>
          <p className="mt-5 text-[17px] leading-relaxed text-ink/70">
            Le menu complet et ses prix seront ajoutés ici dès qu&apos;ils nous seront transmis.
            Comptez entre {restaurant.priceRange.min.toLocaleString("fr-FR")} et{" "}
            {restaurant.priceRange.max.toLocaleString("fr-FR")} {restaurant.priceRange.currency}{" "}
            {restaurant.priceRange.unit}.
          </p>
        </div>

        <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          <div>
            <h3 className="font-display text-xl text-ember mb-4">Signatures</h3>
            <ul className="space-y-4">
              {restaurant.popularDishes.map((d) => (
                <li key={d.name} className="flex items-baseline justify-between gap-4 border-b border-ink/10 pb-3">
                  <span className="text-[17px]">{d.name}</span>
                  <span className="shrink-0 text-xs uppercase tracking-wide text-ember">{d.tag}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-xl text-ember mb-4">Aussi évoqués par nos clients</h3>
            <ul className="space-y-4">
              {mentionedDishes.map((d) => (
                <li key={d} className="border-b border-ink/10 pb-3 text-[17px] capitalize">
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
