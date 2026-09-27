import Image from "next/image";

// Affiche une vraie photographie du restaurant quand `src` est fournie.
// Sans `src`, affiche une texture de marque en attendant une photo réelle.
export function PhotoSlot({
  label,
  src,
  aspect = "aspect-[4/5]",
  alt = "",
  variant = "default",
  className = "",
  priority = false,
  sizes = "(min-width: 768px) 50vw, 100vw",
}: {
  label: string;
  src?: string;
  aspect?: string;
  alt?: string;
  variant?: "default" | "alt";
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${aspect} ${className}`}>
        <Image
          src={src}
          alt={alt || label}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      </div>
    );
  }

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
