import { restaurant } from "@/lib/restaurant";
import { PhotoSlot } from "../ui/PhotoSlot";

export function Cuisine() {
  return (
    <section className="bg-ink py-24 md:py-32 text-cream">
      <div className="container-shaluc">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-saffron">La cuisine</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl max-w-xl">
              Des créations, pas des fiches produit.
            </h2>
          </div>
          <p className="max-w-sm text-cream/70">
            Deux plats reviennent le plus souvent dans les avis. Le reste du menu vous attend
            juste en dessous.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {restaurant.popularDishes.map((dish) => (
            <article key={dish.name} className="group">
              <PhotoSlot label={dish.name} aspect="aspect-[5/4]" alt={dish.name} />
              <div className="mt-4 flex items-start justify-between gap-4">
                <h3 className="font-display text-2xl">{dish.name}</h3>
                <span className="mt-1 shrink-0 rounded-full bg-ember/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-ember-soft">
                  {dish.tag}
                </span>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-sm text-cream/50">
          Cité par les clients : {restaurant.reviewKeywords.join(" · ")}
        </p>
      </div>
    </section>
  );
}
