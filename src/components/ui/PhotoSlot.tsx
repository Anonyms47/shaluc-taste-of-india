// Emplacement pour une vraie photographie du restaurant (plat, lieu, équipe...).
// Aucune photo n'a été fournie pour le moment : ce bloc affiche une texture de
// marque en attendant. Remplacer par <Image src="..." /> dès que les photos
// officielles SHALUC sont disponibles.
export function PhotoSlot({
  label,
  aspect = "aspect-[4/5]",
  alt = "",
  variant = "default",
  className = "",
}: {
  label: string;
  aspect?: string;
  alt?: string;
  variant?: "default" | "alt";
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={alt || label}
      className={`photo-slot grain relative ${variant === "alt" ? "photo-slot-alt" : ""} ${aspect} ${className}`}
    >
      <span className="absolute bottom-3 left-3 rounded-full bg-ink/40 px-3 py-1 text-[11px] tracking-wide text-cream/80 backdrop-blur-sm">
        {label}
      </span>
    </div>
  );
}
