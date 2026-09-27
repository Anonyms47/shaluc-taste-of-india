// Élément graphique signature SHALUC : une volute inspirée de la fumée
// qui s'échappe du four tandoor. Réutilisée comme séparateur et motif de marque.
export function SpiceMark({ className = "", tone = "ember" }: { className?: string; tone?: "ember" | "cream" }) {
  const stroke = tone === "cream" ? "var(--color-cream)" : "var(--color-ember)";
  return (
    <svg
      viewBox="0 0 120 40"
      className={className}
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 30C14 30 14 10 26 10C38 10 38 30 50 30C62 30 62 10 74 10C86 10 86 30 98 30C106 30 112 24 118 18"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
