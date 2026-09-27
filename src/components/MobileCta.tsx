import { telUrl, mapsUrl } from "@/lib/restaurant";

export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex md:hidden border-t border-ink/10 bg-cream/95 backdrop-blur-md">
      <a
        href={telUrl}
        className="flex-1 py-4 text-center text-sm font-semibold text-ink border-r border-ink/10"
      >
        Appeler
      </a>
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-4 text-center text-sm font-semibold text-cream bg-ember"
      >
        Itinéraire
      </a>
    </div>
  );
}
