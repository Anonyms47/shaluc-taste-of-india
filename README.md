# SHALUC — Taste of India

Site vitrine du restaurant indien SHALUC à Dakar. Next.js (App Router) + TypeScript + Tailwind CSS v4.

## Démarrer

```bash
npm install
npm run dev
```

## Contenu réel vs. à compléter

Toutes les informations affichées viennent de la fiche Google Maps du restaurant
(`src/lib/restaurant.ts`). Ce fichier est la seule source de vérité pour le contenu factuel :
aucune histoire, date de création ou plat n'a été inventé.

**Champs à compléter dès que l'information existe** (actuellement `null` ou vides dans
`src/lib/restaurant.ts`) :

- `whatsapp` — numéro WhatsApp
- `instagram` — lien Instagram
- `address.full` — adresse rue précise (seul le plus code Google est connu)
- `hours` — horaires complets 7j/7 (seule l'heure de fermeture est connue)
- `founderStory` — histoire, fondateur, chef
- Menu complet structuré (catégories, plats, prix)

## Photos

Aucune photo réelle n'a été fournie. Les zones photo utilisent un composant
`PhotoSlot` (`src/components/ui/PhotoSlot.tsx`) avec une texture de marque en attendant.
Pour les remplacer :

1. Déposer les images dans `public/photos/`.
2. Remplacer chaque `<PhotoSlot label="..." />` par `<Image src="/photos/xxx.jpg" ... />`.

## Structure

- `src/app/page.tsx` — assemblage de la page one-page (chapitres narratifs)
- `src/components/sections/*` — chaque chapitre (Hero, Story, Cuisine, Menu, Place, Reviews, Visit…)
- `src/components/ui/*` — SpiceMark (motif signature) et PhotoSlot
- `src/lib/restaurant.ts` — données du restaurant (seule source de vérité)
