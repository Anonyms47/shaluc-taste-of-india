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

8 photos réelles ont été récupérées depuis la catégorie **"Photos du propriétaire"**
de la fiche Google Maps de SHALUC (contenu publié par le compte du restaurant
lui-même — choix délibéré pour éviter de réutiliser des photos de clients/Local
Guides sans autorisation claire). Elles sont dans `public/photos/` et référencées
dans `src/lib/restaurant.ts` (export `photos`).

Une photo montrant des enfants clients a été écartée par respect de leur vie privée.

`PhotoSlot` (`src/components/ui/PhotoSlot.tsx`) accepte un prop `src` optionnel :
avec `src`, il affiche la vraie photo (via `next/image`) ; sans, il retombe sur la
texture de marque placeholder. Pour ajouter d'autres photos officielles (menu,
plats identifiés, équipe), déposez-les dans `public/photos/` et référencez-les de
la même façon.

⚠️ **Point à vérifier avec le restaurant** : le logo réel photographié sur place
(`public/photos/logo-source.jpg`) affiche **"Shaluc — Flavour of Asia"** avec un
pictogramme d'éléphant, ce qui diffère du nom "Taste of India" utilisé sur la
fiche Google Maps et donc sur tout le site actuel. À confirmer avant mise en ligne :
lequel des deux est le nom/la accroche officiels à utiliser.

## Structure

- `src/app/page.tsx` — assemblage de la page one-page (chapitres narratifs)
- `src/components/sections/*` — chaque chapitre (Hero, Story, Cuisine, Menu, Place, Reviews, Visit…)
- `src/components/ui/*` — SpiceMark (motif signature) et PhotoSlot
- `src/lib/restaurant.ts` — données du restaurant (seule source de vérité)
