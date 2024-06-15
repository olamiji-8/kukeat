const data = [
  {
    id: 1,
    title: "Golden penny Spaghetti (pieces)",
    description: "Premium taste",
    price: "999.99",
    image:
      "https://res.cloudinary.com/dxd1j0yzt/image/upload/v1711420862/kukeat/IMG_4863_umidrb.jpg",
    category: "Popular",
  },
  {
    id: 2,
    title: "Crown Spaghetti (pieces)",
    description: "100% Yummy",
    price: "929.99",
    image:
      "https://res.cloudinary.com/dxd1j0yzt/image/upload/v1707864927/crown_darxvb.png",
    category: "Popular",
  },
  {
    id: 3,
    title: "Dangote Sugar 250g (1 sachet)",
    description: "Sweet Delight",
    price: "800.99",
    image:
      "https://res.cloudinary.com/dxd1j0yzt/image/upload/v1711420862/kukeat/IMG_4864_ty6off.jpg",
    category: "Popular",
  },
  {
    id: 4,
    title: "indomitable (1 carton)",
    description: "The fastest fast-food",
    price: "8999.99",
    image:
      "https://res.cloudinary.com/dxd1j0yzt/image/upload/v1711420847/kukeat/IMG_4876_goutzf.jpg",
    category: "Popular",
  },
  {
    id: 5,
    title: "Gino pepper and onions (1 roll)",
    description: "Perfect for stew and soup",
    price: "899.99",
    image:
      "https://res.cloudinary.com/dxd1j0yzt/image/upload/v1711420847/kukeat/IMG_4877_qw8m6m.jpg",
    category: "Top Sales",
  },
  {
    id: 6,
    title: "Titus (1 can)",
    description: "100% healthy and delicious.",
    price: "1399.99",
    image:
      "https://res.cloudinary.com/dxd1j0yzt/image/upload/v1711420858/kukeat/IMG_4867_nsv3sr.jpg",
    category: "Top Sales",
  },
  {
    id: 7,
    title: "MyMy (1 pack)",
    description: "Every stick counts",
    price: "269.98",
    image:
      "https://res.cloudinary.com/dxd1j0yzt/image/upload/v1711420846/kukeat/IMG_4878_vc82by.jpg",
    category: "Top Sales",
  },
  {
    id: 8,
    title: "White Garri (1 congo)",
    description: "The bond that joins us together",
    price: "1499.99",
    image:
      "https://res.cloudinary.com/dxd1j0yzt/image/upload/v1711908556/new%20kukeat/Garri_-_1_Congo_thxu5e.png",
    category: "Garri",
  },
  {
    id: 9,
    title: "Mr cheff (1 sachet)",
    description: "Queen of your food.",
    price: "200.97",
    image:
      "https://res.cloudinary.com/dxd1j0yzt/image/upload/v1707864928/salt_sltdxf.png",
    category: "Extra",
  },
  {
    id: 10,
    title: "Mom's pride (1 roll)",
    description: "Peppery the way you like it.",
    price: "750.99",
    image:
      "https://res.cloudinary.com/dxd1j0yzt/image/upload/v1707864924/mom_pride_xbeezd.png",
    category: "Extra",
  },
  {
    id: 11,
    title: "Maggi (1 sachet)",
    description: "Timeless Culinary Essence",
    price: "609.99",
    image:
      "https://res.cloudinary.com/dxd1j0yzt/image/upload/v1711908406/new%20kukeat/Maggi_chicken_flavour_seasoning_reqtgm.png",
    category: "Extra",
  },
  {
    id: 13,
    title: "Gino Curry (1 roll)",
    description: "The must-add spice!",
    price: "774.97",
    image:
      "hhttps://res.cloudinary.com/dxd1j0yzt/image/upload/v1711582816/kukeat/1680897909_gino-gino-curry-herbs-spices-sachet-5g-10-sachets_gg7cni.jpg",
    category: "Extra",
  },
  {
    id: 14,
    title: "Gino party jollof (1 roll)",
    description: "Spice up your jollof rice.",
    price: "950.99",
    image:
      "https://res.cloudinary.com/dxd1j0yzt/image/upload/v1707864926/Gino_part_jollof_qbq9ti.png",
    category: "Extra",
  },

  {
    id: 15,
    title: "Onions chicken (1 carton)",
    description: "Variety just for you.",
    price: "10499.99",
    image:
      "https://res.cloudinary.com/dxd1j0yzt/image/upload/v1711420842/kukeat/IMG_4881_fdkw9z.jpg",
    category: "Extra",
  },
  {
    id: 17,
    title: "Pretty lady Rice (1 congo)",
    description: "Made from the finest plantations",
    price: "2649.99",
    image:
      "https://res.cloudinary.com/dxd1j0yzt/image/upload/v1707864926/Pretty_lady_rice_tg2mic.png",
    category: "Extra",
  },
  {
    id: 18,
    title: "Drum (1 congo)",
    description: "Nutrient-Packed Legumes",
    price: "3199.99",
    image:
      "https://res.cloudinary.com/dxd1j0yzt/image/upload/v1711420843/kukeat/IMG_4882_w37kb7.jpg",
    category: "Extra",
  },
  {
    id: 19,
    title: "Palm Oil(1 bottle) 75cl",
    description: "Made from the finest oil plantations",
    price: "1599.99",
    image:
      "https://res.cloudinary.com/dxd1j0yzt/image/upload/v1707901641/Palmoil_ty9xwm.png",
    category: "Extra",
  },
  {
    id: 21,
    title: "Golden penny Semo (1kg)",
    description: "Smooth Indulgence",
    price: "1649.97",
    image:
      "https://res.cloudinary.com/dxd1j0yzt/image/upload/v1707864925/Golden_penny_semo_fyevzg.png",
    category: "Extra",
  },
  {
    id: 22,
    title: "Crown Spaghetti (carton)",
    description: "100% Yummy",
    price: "15999.4",
    image:
      "https://res.cloudinary.com/dxd1j0yzt/image/upload/v1711908563/new%20kukeat/Crown_Spag_Carton_eix8hk.png",
    category: "Extra",
  },
  {
    id: 23,
    title: "Honey beans (Ewa Oloyin)",
    description: "Rich Legumes(1 congo)",
    price: "3199.99",
    image:
      "https://res.cloudinary.com/dxd1j0yzt/image/upload/v1707864924/oloyin_beans_oxtgor.png",
    category: "Extra",
  },
  {
    id: 24,
    title: "Groundnut Oil (1 bottle) 75cl",
    description: "Made for you",
    price: "1799.99",
    image:
      "https://res.cloudinary.com/dxd1j0yzt/image/upload/v1712091993/new%20kukeat/w9_m5hfvy.jpg",
    category: "Extra",
  },
  {
    id: 25,
    title: "Auntie B Pasta",
    description: "Premium taste",
    price: "809.99",
    image:
      "https://res.cloudinary.com/dxd1j0yzt/image/upload/v1718179866/new%20kukeat/spag_ac1oil.jpg",
    category: "Popular",
  },
];
module.exports = data;
