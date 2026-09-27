import { photos } from "@/lib/restaurant";
import { PhotoSlot } from "../ui/PhotoSlot";

export function Place() {
  return (
    <section id="lieu" className="bg-ink py-24 md:py-32 text-cream">
      <div className="container-shaluc">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-saffron">Le lieu</p>
        <h2 className="mt-4 font-display text-4xl md:text-5xl max-w-xl">
          Un cadre calme, pensé pour s&apos;attarder.
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          <PhotoSlot
            label="La grande table"
            src={photos.tableLongue}
            alt="Grande table dressée chez SHALUC"
            aspect="aspect-[3/4]"
            className="col-span-1 md:col-span-2 md:row-span-2 aspect-[3/4] md:aspect-square"
          />
          <PhotoSlot
            label="Jeu de miroirs"
            src={photos.salleMiroir}
            alt="Reflet de la salle du restaurant SHALUC"
            aspect="aspect-square"
            variant="alt"
          />
          <PhotoSlot
            label="Lumière du soir"
            src={photos.lumiereSoir}
            alt="Détail d'une table du restaurant SHALUC, le soir"
            aspect="aspect-square"
          />
          <PhotoSlot
            label="En journée"
            src={photos.salleJour}
            alt="La salle du restaurant SHALUC en journée"
            aspect="aspect-square"
            variant="alt"
          />
          <PhotoSlot
            label="La terrasse"
            src={photos.terrasse}
            alt="La terrasse extérieure du restaurant SHALUC"
            aspect="aspect-square"
          />
        </div>
      </div>
    </section>
  );
}
