import { restaurant } from "@/lib/restaurant";
import { PhotoSlot } from "../ui/PhotoSlot";
import { SpiceMark } from "../ui/SpiceMark";

export function Story() {
  return (
    <section id="histoire" className="bg-cream py-24 md:py-32">
      <div className="container-shaluc grid gap-12 md:grid-cols-2 md:gap-16 items-center">
        <div>
          <SpiceMark className="h-8 w-28 mb-6" />
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ember">Notre histoire</p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            Une cuisine indienne,
            <br />
            <span className="italic text-ember">pensée pour Dakar.</span>
          </h2>
          <div className="mt-8 space-y-5 max-w-lg text-[17px] leading-relaxed text-ink/80">
            <p>
              Chez SHALUC, la cuisine se prépare comme en Inde : au four tandoor, avec patience et
              des épices qui ne trichent pas. Le résultat se lit dans les avis — {restaurant.reviewCount}{" "}
              d&apos;entre eux, pour une note de {restaurant.rating}/5.
            </p>
            <p>
              {restaurant.managedByWoman &&
                "Un lieu géré par une femme, "}
              où l&apos;on prend le temps de s&apos;assurer que chaque table est bien servie —
              c&apos;est ce que racontent, sans qu&apos;on le leur demande, les habitués.
            </p>
          </div>
          <p className="mt-8 text-sm text-ink/50 italic">
            L&apos;histoire complète de SHALUC — sa fondation, son équipe en cuisine — trouvera
            naturellement sa place ici.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <PhotoSlot label="Le tandoor" aspect="aspect-[3/4]" className="mt-8" />
          <PhotoSlot label="En cuisine" aspect="aspect-[3/4]" variant="alt" />
        </div>
      </div>
    </section>
  );
}
