// Menu complet de SHALUC — Flavour of Asia.
// Source : photos du menu officiel (carte imprimée avec logo éléphant),
// récupérées à haute résolution depuis la catégorie "Menu" de la fiche
// Google Maps du restaurant. 79 plats, prix en F CFA.
// Ne pas modifier les noms, descriptions ou prix sans nouvelle photo du menu.

export type MenuItem = {
  no?: number;
  name: string;
  desc?: string;
  price: number;
  vegan?: boolean;
};

export type MenuCategory = {
  id: string;
  title: string;
  subtitle: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "boissons",
    title: "Boissons",
    subtitle: "Boissons non alcoolisées & Coffee / The",
    items: [
      { name: "Water Bottle", desc: "Bouteille d'eau", price: 1500 },
      { name: "Sparkling Water", desc: "Eau gazeuse", price: 1500 },
      { name: "Coca / Fanta / Sprite", price: 1500 },
      { name: "Soda / Tonic", price: 1500 },
      { name: "Coca Zero", desc: "Coca zéro", price: 2000 },
      { name: "Mojito Mint", desc: "Mojito menthe (sans alcool)", price: 4000 },
      { name: "Water Melon Juice", desc: "Jus de pastèque", price: 2500 },
      { name: "Juice Local", desc: "Jus local", price: 2000 },
      { name: "Lassi Salted", desc: "Lassi salé", price: 3000 },
      { name: "Lassi Mango", desc: "Lassi à la mangue", price: 4000 },
      { name: "Lassi Sweet", desc: "Lassi sucré", price: 3000 },
      { name: "Fresh Lime Soda", desc: "Soda au citron vert frais", price: 2500 },
      { name: "Mango Shake", desc: "Shake à la mangue", price: 3500 },
      { name: "Cold Coffee", desc: "Café glacé au lait et crème glacée", price: 4000 },
      { name: "Chai", desc: "Thé indien au lait, thé noir et gingembre cardamome", price: 2000 },
      { name: "Expresso", price: 1500 },
      { name: "Green Tea", desc: "Thé vert", price: 1500 },
    ],
  },
  {
    id: "bar",
    title: "Bar",
    subtitle: "Boissons alcoolisées",
    items: [
      { name: "Glenfiddich", price: 5000 },
      { name: "Chivas", price: 5000 },
      { name: "Ballentine", price: 4000 },
      { name: "Jameson", price: 4000 },
      { name: "Black Label", price: 4000 },
      { name: "Clan Cambelle", price: 3000 },
      { name: "J&B", price: 3000 },
      { name: "Red Label", price: 2500 },
      { name: "Vat 69", price: 2500 },
      { name: "Vodka", price: 3000 },
      { name: "Gin", price: 4000 },
      { name: "Jack Daniel", price: 4000 },
      { name: "Bacardi", price: 3000 },
      { name: "Vin blanc / rouge / rosé (verre)", price: 3000 },
      { name: "Bouteille de vin", price: 15000 },
      { name: "Mojito Mint", desc: "Mojito menthe", price: 5000 },
      { name: "Bissap Mojito", price: 5000 },
      { name: "Screw Driver", price: 5000 },
      { name: "Flag / Gazelle", price: 1500 },
      { name: "Heineken", price: 2000 },
      { name: "Corona", price: 3000 },
    ],
  },
  {
    id: "bar-starters",
    title: "Entrées de bar",
    subtitle: "Bar Starters",
    items: [
      { no: 1, name: "Masala Papad", desc: "Pâté pois chiches et légumes", price: 2500, vegan: true },
      { no: 2, name: "Masala Peanut", desc: "Cacahuètes grillées et légumes", price: 2000, vegan: true },
      { no: 3, name: "Egg Bhurji", desc: "Œufs et légumes", price: 2500 },
      { no: 4, name: "Green Salad", desc: "Salade légumes", price: 1000 },
    ],
  },
  {
    id: "soupe",
    title: "Soupe",
    subtitle: "Soup",
    items: [
      { no: 5, name: "Veg Manchow", desc: "Légumes et nouilles frites", price: 3000 },
      { no: 6, name: "Chicken Manchow Soup", desc: "Poulet, légumes et nouilles frites", price: 4000 },
    ],
  },
  {
    id: "veg-starters",
    title: "Entrées végétariennes",
    subtitle: "Veg Starters",
    items: [
      { no: 7, name: "Sharma Samosa", desc: "Pâté avec pomme de terre", price: 5000, vegan: true },
      { no: 8, name: "Aloo Tikki", desc: "Croquette de pomme de terre, yaourt et chutney vert", price: 5000 },
      { no: 9, name: "Pakora", desc: "Légumes frits dans la farine de pois chiches", price: 5000, vegan: true },
      { no: 10, name: "Mirchi Bajji", desc: "Piment vert et pomme de terre frits dans la farine de pois chiches", price: 3000, vegan: true },
      { no: 11, name: "Hara Bhara Kabab", desc: "Croquette de légumes", price: 4000, vegan: true },
      { no: 12, name: "Chili Potato", desc: "Sauce chili avec légumes", price: 5000, vegan: true },
      { no: 13, name: "Chili Paneer", desc: "Sauce chili, fromage cottage et légumes", price: 6000 },
      { no: 14, name: "Veg Chowmein", desc: "Nouilles sautées avec légumes", price: 5000, vegan: true },
    ],
  },
  {
    id: "non-veg-starters",
    title: "Entrées non végétariennes",
    subtitle: "Non Veg Starters",
    items: [
      { no: 15, name: "Chilli Chicken", desc: "Sauce chili, blanc de poulet et légumes", price: 6000 },
      { no: 16, name: "Chilli Prawns", desc: "Sauce chili, crevettes et légumes", price: 7000 },
      { no: 17, name: "Kung Pao Chicken", desc: "Sauce sucrée, blanc de poulet et légumes", price: 6000 },
      { no: 18, name: "Drums of Heaven", desc: "Sucette aux ailes de poulet", price: 6000 },
      { no: 19, name: "Chicken Chowmein", desc: "Nouilles sautées, légumes et blanc de poulet", price: 6000 },
      { no: 20, name: "Prawn Chowmein", desc: "Nouilles sautées, légumes et crevettes", price: 7000 },
    ],
  },
  {
    id: "momos",
    title: "Momos",
    subtitle: "Dumplings / Momos — Raviolis / Wontons",
    items: [
      { no: 21, name: "Veg Momo", desc: "Raviolis aux légumes (vapeur ou frit)", price: 5000, vegan: true },
      { no: 22, name: "Paneer Momo", desc: "Raviolis au fromage indien et légumes (vapeur ou frit)", price: 6000 },
      { no: 23, name: "Chicken Momo", desc: "Raviolis au poulet haché et légumes (vapeur ou frit)", price: 7000 },
    ],
  },
  {
    id: "tandoori",
    title: "Tandoori",
    subtitle: "Cuits dans un four",
    items: [
      { no: 24, name: "Tandoori Chicken", desc: "Cuisses de poulet marinées au yaourt et aux épices", price: 7000 },
      { no: 25, name: "Chicken Malai Tikka", desc: "Poitrine de poulet marinée au yaourt, noix de cajou et cardamome", price: 7000 },
      { no: 26, name: "Chicken Tikka", desc: "Poitrine de poulet marinée au yaourt et aux épices", price: 7000 },
      { no: 27, name: "Lahori Chicken Tikka", desc: "Poitrine de poulet marinée, noix de cajou, ail et yaourt", price: 7000 },
      { no: 28, name: "Paneer Tikka", desc: "Fromage indien mariné dans du yaourt et des épices", price: 6000 },
      { no: 29, name: "Chicken Seekh Kabab", desc: "Poulet haché aux saveurs et épices indiennes", price: 7000 },
      { no: 30, name: "Mutton Seekh Kabab", desc: "Mouton haché aux saveurs et épices indiennes", price: 8000 },
    ],
  },
  {
    id: "veg-curry",
    title: "Curry végétarien",
    subtitle: "Veg Curry",
    items: [
      { no: 31, name: "Egg Curry", desc: "Œuf au curry", price: 4000 },
      { no: 32, name: "Dal Tadka", desc: "Curry de lentilles jaunes", price: 4000, vegan: true },
      { no: 33, name: "Aubergine & Potato", desc: "Curry d'aubergines et pommes de terre", price: 3000, vegan: true },
      { no: 34, name: "Paneer Bhurji", desc: "Fromage indien émietté avec légumes", price: 4000 },
      { no: 35, name: "Dal Makhani", desc: "Curry de lentilles noires", price: 5000 },
      { no: 36, name: "Alu Gobhi", desc: "Curry de chou-fleur et pomme de terre", price: 5000, vegan: true },
      { no: 37, name: "Chole Masala", desc: "Curry de pois chiches", price: 5000, vegan: true },
      { no: 38, name: "Alu Palak", desc: "Curry d'épinards et pomme de terre", price: 5000, vegan: true },
      { no: 39, name: "Palak Paneer", desc: "Curry d'épinards et fromage cottage", price: 7000 },
      { no: 40, name: "Mixed Veg", desc: "Curry de légumes mélangés", price: 7000 },
      { no: 41, name: "Paneer Lababdar", desc: "Curry de fromage indien et légumes", price: 7000 },
      { no: 42, name: "Matar Paneer", desc: "Curry de fromage indien et petits pois", price: 6000 },
      { no: 43, name: "Paneer Tikka Masala", desc: "Curry de fromage indien et légumes grillés", price: 7000 },
    ],
  },
  {
    id: "non-veg-curry",
    title: "Curry non végétarien",
    subtitle: "Non Veg Curry",
    items: [
      { no: 44, name: "Butter Chicken", desc: "Curry de poulet grillé, sauce aux noix de cajou", price: 8000 },
      { no: 45, name: "Chicken Tikka Masala", desc: "Curry de poulet blanc grillé", price: 8000 },
      { no: 46, name: "Palak Chicken", desc: "Curry de poulet blanc aux épinards", price: 8000 },
      { no: 47, name: "Kadhai Chicken", desc: "Curry de poulet blanc grillé avec légumes", price: 8000 },
      { no: 48, name: "Prawn Makhini", desc: "Curry de crevettes, sauce makhani", price: 8000 },
      { no: 49, name: "Prawn Masala", desc: "Curry de crevettes, sauce masala", price: 8000 },
      { no: 50, name: "Chicken Do Pyaza", desc: "Curry de poulet blanc grillé à l'oignon", price: 8000 },
      { no: 51, name: "Mutton Curry", desc: "Mouton tendre cuit au curry indien", price: 9000 },
      { no: 52, name: "Mutton Sagwala", desc: "Mouton tendre aux épinards", price: 9000 },
      { no: 53, name: "Coconut Fish Curry", desc: "Curry de poisson aux noix de coco", price: 8000 },
    ],
  },
  {
    id: "riz",
    title: "Riz",
    subtitle: "Rice",
    items: [
      { no: 54, name: "Basmati Rice", desc: "Riz basmati", price: 2000, vegan: true },
      { no: 55, name: "Jeera Rice", desc: "Riz basmati au cumin", price: 2000, vegan: true },
      { no: 56, name: "Saffron Pulao", desc: "Riz basmati au safran, petits pois et cumin", price: 2500, vegan: true },
      { no: 57, name: "Veg Fried Rice", desc: "Riz basmati sauté aux légumes", price: 4000, vegan: true },
      { no: 58, name: "Chicken Fried Rice", desc: "Riz basmati sauté, légumes et poulet blanc", price: 5000 },
      { no: 59, name: "Prawn Fried Rice", desc: "Riz basmati sauté, légumes et crevettes", price: 6000 },
      { no: 60, name: "Spicy Shezwan Fried Rice", desc: "Riz frit épicé façon Shezwan, demi-œuf au plat", price: 5000 },
      { no: 61, name: "Lemon Rice", desc: "Riz basmati, arachides, curcuma et citron", price: 4000, vegan: true },
      { no: 62, name: "Chicken Biryani", desc: "Riz basmati avec cuisse de poulet", price: 8000 },
    ],
  },
  {
    id: "pain",
    title: "Pain indien",
    subtitle: "Naan / Indian Bread",
    items: [
      { no: 63, name: "Tandoori Roti", desc: "Pain à la farine de blé, cuit au four", price: 1000 },
      { no: 64, name: "Tawa Roti", desc: "Pain à la farine de blé, cuit à la poêle", price: 500 },
      { no: 65, name: "Lachcha Parantha", desc: "Pain feuilleté et croustillant à la menthe", price: 2000 },
      { no: 66, name: "Tawa Parantha", desc: "Pain à la farine de blé et huile, cuit à la poêle", price: 1000 },
      { no: 67, name: "Pain Naan", desc: "Pain à la farine blanche, cuit au four", price: 1000 },
      { no: 68, name: "Garlic Naan", desc: "Pain à la farine blanche et à l'ail, cuit au four", price: 2000 },
      { no: 69, name: "Butter Naan", desc: "Pain à la farine blanche et au beurre, cuit au four", price: 2000 },
      { no: 70, name: "Cheese Naan", desc: "Pain à la farine blanche et fromage cheddar, cuit au four", price: 3000 },
      { no: 71, name: "Alu Kulcha", desc: "Pain à la farine blanche et pomme de terre, cuit au four", price: 2000 },
      { no: 72, name: "Paneer Kulcha", desc: "Pain à la farine blanche et fromage indien, cuit au four", price: 2000 },
      { no: 73, name: "Pyaz Kulcha", desc: "Pain à la farine blanche et oignon, cuit au four", price: 2000 },
      { no: 74, name: "Missi Roti", desc: "Pain à la farine de pois chiche", price: 1500 },
    ],
  },
  {
    id: "raita-desserts",
    title: "Raita & Desserts",
    subtitle: "Raita / Yaourt — Sweets / Dessert",
    items: [
      { no: 75, name: "Plain Curd", desc: "Yaourt nature", price: 1000 },
      { no: 76, name: "Boondi Raita", desc: "Yaourt avec boules de pois chiche", price: 1500 },
      { no: 77, name: "Mixed Veg Raita", desc: "Yaourt avec légumes", price: 2000 },
      { no: 78, name: "Gulab Jamun", desc: "Boules de lait frites au sirop de sucre", price: 3000 },
      { no: 79, name: "Kulfi", desc: "Crème glacée au lait, amandes, noix de cajou, cardamome et safran", price: 3000 },
    ],
  },
];
