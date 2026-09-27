import Link from "next/link";
import { SpiceMark } from "@/components/ui/SpiceMark";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-ink px-6 text-center text-cream">
      <SpiceMark tone="cream" className="h-8 w-28 mb-8" />
      <p className="font-display text-7xl">404</p>
      <h1 className="mt-4 font-display text-2xl">Cette table n&apos;existe pas.</h1>
      <p className="mt-3 max-w-sm text-cream/60">
        La page que vous cherchez s&apos;est égarée entre la cuisine et la salle.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-ember px-7 py-3.5 text-sm font-semibold text-cream"
      >
        Retour à l&apos;accueil
      </Link>
    </main>
  );
}
