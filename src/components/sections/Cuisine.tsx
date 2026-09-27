import { restaurant, photos } from "@/lib/restaurant";
import { PhotoSlot } from "../ui/PhotoSlot";

const signatureDishes = [
  { name: "Butter Chicken", price: 8000, src: photos.butterChicken },
  { name: "Tandoori Chicken with Naan Bread", price: 7000, src: photos.tandooriNaan },
  { name: "Samosa", price: 5000, src: photos.samosa },
  { name: "Drums of Heaven", price: 6000, src: photos.drumsOfHeaven },
];

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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {signatureDishes.map((dish) => (
            <article key={dish.name} className="group">
              <PhotoSlot
                label={dish.name}
                src={dish.src}
                aspect="aspect-[4/5]"
                alt={`${dish.name} — SHALUC`}
              />
              <div className="mt-4 flex items-start justify-between gap-3">
                <h3 className="font-display text-lg leading-snug">{dish.name}</h3>
                <span className="mt-1 shrink-0 text-sm text-saffron">
                  {dish.price.toLocaleString("fr-FR")}
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
