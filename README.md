# SHALUC — Flavour of Asia

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

**Champs à compléter dès que l'information existe** (actuellement `null` dans
`src/lib/restaurant.ts`) :

- `whatsapp` — numéro WhatsApp
- `address.full` — adresse rue précise (seul le plus code Google est connu)
- `hours` — horaires complets 7j/7 (seule l'heure de fermeture est connue)
- `founderStory` — histoire, fondateur, chef

## Menu

Le menu complet (79 plats, 15 catégories, prix en F CFA) est dans `src/lib/menu.ts`.
Source : photos haute résolution de la carte officielle imprimée (logo éléphant),
récupérées depuis la catégorie "Menu" de la fiche Google Maps. Deux autres versions
de menu trouvées sur la même fiche (feuilles imprimées simples, prix différents)
ont été volontairement ignorées car elles semblent obsolètes et contredisent la
carte actuelle — à vérifier avec le restaurant si des écarts de prix sont signalés.

Le composant `Menu.tsx` affiche les catégories sous forme d'onglets, comme sur la
fiche Google Maps originale.

## Photos

14 photos réelles au total dans `public/photos/`, référencées dans
`src/lib/restaurant.ts` (export `photos`) :

- 8 photos de lieu/ambiance depuis la catégorie **"Photos du propriétaire"** de la
  fiche Google Maps (contenu publié par le compte du restaurant lui-même — choix
  délibéré pour éviter de réutiliser des photos de clients/Local Guides sans
  autorisation claire).
- 6 photos de plats identifiées nommément sur la fiche Google Maps
  (`dish-*.jpg` : Butter Chicken, Tandoori Chicken with Naan Bread, Samosa,
  Drums of Heaven, Mojito Bissap, Mixed Vegetable Curry), utilisées dans la
  section Cuisine.

Une photo montrant des enfants clients a été écartée par respect de leur vie privée.

Le motif graphique signature du site (`public/brand/elephant-motif.png`) est
l'éléphant du vrai logo SHALUC, détouré depuis la photo du logo en salle et
réutilisé en filigrane (classe CSS `.elephant-watermark`) — comme sur la carte
du restaurant elle-même.

`PhotoSlot` (`src/components/ui/PhotoSlot.tsx`) accepte un prop `src` optionnel :
avec `src`, il affiche la vraie photo (via `next/image`) ; sans, il retombe sur la
texture de marque placeholder. Pour ajouter d'autres photos officielles (menu,
plats identifiés, équipe), déposez-les dans `public/photos/` et référencez-les de
la même façon.

✅ **Nom de marque tranché** : le logo réel photographié sur place
(`public/photos/logo-source.jpg`) affiche "Shaluc — Flavour of Asia" avec un
pictogramme d'éléphant. C'est différent du nom "Taste of India" utilisé sur la
fiche Google Maps — le client a confirmé que "Flavour of Asia" est le nom
officiel à utiliser ; tout le site a été mis à jour en conséquence
(`restaurant.tagline` dans `src/lib/restaurant.ts`).

## Direction artistique

Police d'affichage et palette ajustées pour coller à la vraie identité visuelle
de SHALUC (carte imprimée + logo) plutôt qu'à un choix arbitraire :

- Police : **Baloo 2** (ronde, épaisse) — proche du lettrage "Shaluc" du vrai logo.
- Couleurs : brun-noir + orange, calées sur les tons du menu officiel
  (`src/app/globals.css`, tokens `--color-ink` / `--color-ember` / `--color-saffron`).

Le compte Instagram `@shalucdakar` est confirmé (QR code + mention sur la carte
officielle) et utilisé dans le header/footer/section contact.

## Structure

- `src/app/page.tsx` — assemblage de la page one-page (chapitres narratifs)
- `src/components/sections/*` — chaque chapitre (Hero, Story, Cuisine, Menu, Place, Reviews, Visit…)
- `src/components/ui/*` — SpiceMark (motif signature) et PhotoSlot
- `src/lib/restaurant.ts` — données du restaurant (seule source de vérité)
