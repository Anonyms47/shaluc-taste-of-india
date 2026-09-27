// Données confirmées SHALUC — Flavour of Asia (source : fiche Google Maps du
// restaurant, et logo réel photographié en salle — voir public/photos/logo-source.jpg).
// Règle du projet : ne jamais inventer un fait manquant. Les champs `null` ou vides
// sont volontairement laissés ainsi et doivent être complétés avec de vraies informations.

export const restaurant = {
  name: "SHALUC",
  tagline: "Flavour of Asia",
  category: "Restaurant indien moderne",
  rating: 4.9,
  reviewCount: 406,
  priceRange: { min: 8000, max: 18000, currency: "F CFA", unit: "par personne" },
  phone: "+221778880046",
  phoneDisplay: "77 888 00 46",
  address: {
    plusCode: "PFRG+CF3",
    city: "Dakar",
    country: "Sénégal",
    full: null as string | null,
  },
  mapsQuery: "PFRG+CF3 Dakar",
  hours: {
    closes: "23:00",
    note: "Horaires complets à confirmer avec le restaurant",
  },
  services: ["Repas sur place", "Service de drive", "Livraison sans contact"] as const,
  managedByWoman: true,
  popularDishes: [
    { name: "Butter Chicken", tag: "Populaire" },
    { name: "Tandoori Chicken with Naan Bread", tag: "Populaire" },
  ],
  reviewKeywords: [
    "poulet tikka massala",
    "samosa",
    "vegan",
    "butter chicken",
    "biryani",
  ],
  reviews: [
    {
      author: "Yasmine Bamoulid",
      meta: "Local Guide · 38 avis",
      when: "il y a 7 mois",
      text: "Très belle découverte. Le restaurant propose une cuisine indienne authentique et savoureuse. Les plats sont délicieux, préparés de manière traditionnelle, notamment au four tandoor, ce qui donne un goût vraiment incroyable.",
      ownerReply: "Merci infiniment 🙏",
    },
    {
      author: "Salimata Niang",
      meta: "Local Guide · 57 avis",
      when: "il y a 5 mois",
      text: "Cadre magnifique bien calme et soft. Personnel très bien. Ils prennent le temps de passer voir la clientèle pour s'assurer qu'ils sont bien servis. Leur repas côté qualité prix trop bien. J'ai adoré 🥰",
      ownerReply: "Merci beaucoup",
    },
    {
      author: "Dekcioh Phi",
      meta: "Local Guide · 196 avis",
      when: "il y a un an",
      text: "Une très bonne surprise ! C'était authentique et tous les plats étaient excellents. Le poulet tandoori était parfaitement grillé et assaisonné, et j'ai adoré le biryani aussi. Le service était rapide. C'est le meilleur restaurant indien à Dakar !",
      ownerReply: "Merci beaucoup, j'espère vous revoir bientôt",
    },
  ],
  whatsapp: null as string | null,
  instagram: "shalucdakar",
  website: null as string | null,
  founderStory: null as string | null,
  logo: null as string | null,
} as const;

// Photos réelles du restaurant, récupérées depuis la catégorie
// "Photos du propriétaire" de sa fiche Google Maps (contenu publié par le
// compte SHALUC Flavour of Asia lui-même).
export const photos = {
  salleSoir: "/photos/salle-soir.jpg",
  salleJour: "/photos/salle-jour.jpg",
  salleMiroir: "/photos/salle-miroir.jpg",
  tableLongue: "/photos/table-longue.jpg",
  terrasse: "/photos/terrasse.jpg",
  lumiereSoir: "/photos/lumiere-soir.jpg",
  assiette1: "/photos/assiette-1.jpg",
  assiette2: "/photos/assiette-2.jpg",
  butterChicken: "/photos/dish-butter-chicken.jpg",
  tandooriNaan: "/photos/dish-tandoori-naan.jpg",
  samosa: "/photos/dish-samosa.jpg",
  drumsOfHeaven: "/photos/dish-drums-of-heaven.jpg",
  mojitoBissap: "/photos/dish-mojito-bissap.jpg",
  mixedVegCurry: "/photos/dish-mixed-veg-curry.jpg",
} as const;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  restaurant.mapsQuery
)}`;

export const telUrl = `tel:${restaurant.phone}`;
export const instagramUrl = `https://www.instagram.com/${restaurant.instagram}`;
