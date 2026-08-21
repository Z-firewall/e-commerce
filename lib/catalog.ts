export type Product = {
  id: number;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  price: number;
  color: string;
  image: string;
  badge?: string;
  manufacturer: string;
  description: string;
  rating: number;
  reviews: number;
  sizes?: string[];
  details: string[];
};

const image = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1000&q=85`;

export const products: Product[] = [
  {
    id: 1,
    slug: "cloud-ribbed-sweater",
    name: "Cloud Ribbed Sweater",
    category: "Women",
    categorySlug: "women",
    price: 98,
    color: "Oat",
    image: image("photo-1576566588028-4147f3842f27"),
    badge: "New in",
    manufacturer: "Morrow Studio, Portugal",
    description:
      "A softly structured knit with a relaxed shoulder and cloud-soft hand feel. Made for slow mornings and late evenings.",
    rating: 4.8,
    reviews: 126,
    sizes: ["XS", "S", "M", "L"],
    details: ["100% organic cotton", "Relaxed fit", "Machine wash cold"],
  },
  {
    id: 2,
    slug: "everyday-canvas-tote",
    name: "Everyday Canvas Tote",
    category: "Accessories",
    categorySlug: "accessories",
    price: 54,
    color: "Natural",
    image: image("photo-1544816155-12df9643f363"),
    badge: "Bestseller",
    manufacturer: "Northline Goods, New York",
    description:
      "The dependable carry-all with a wide base, reinforced handles, and room for the day ahead.",
    rating: 4.9,
    reviews: 218,
    details: ["14 oz organic canvas", "Interior pocket", "Made in the USA"],
  },
  {
    id: 3,
    slug: "sculptural-stoneware-set",
    name: "Sculptural Stoneware Set",
    category: "Home",
    categorySlug: "home",
    price: 72,
    color: "Clay",
    image: image("photo-1610701596007-11502861dcfa"),
    badge: "Studio pick",
    manufacturer: "Atelier Noma, Kyoto",
    description:
      "Three hand-finished forms that bring a quiet, tactile rhythm to your table.",
    rating: 4.7,
    reviews: 84,
    details: ["Set of 3", "Hand glazed stoneware", "Dishwasher safe"],
  },
  {
    id: 4,
    slug: "soft-focus-eau-de-parfum",
    name: "Soft Focus Eau de Parfum",
    category: "Beauty",
    categorySlug: "beauty",
    price: 84,
    color: "No. 04",
    image: image("photo-1547887538-e3a2f32cb1cc"),
    badge: "New in",
    manufacturer: "Morrow Fragrance Lab, Paris",
    description:
      "A close-to-skin blend of iris, cedar, and warm musk. Subtle enough for every day, memorable enough for a second look.",
    rating: 4.6,
    reviews: 61,
    details: ["50 ml eau de parfum", "Vegan formula", "Not tested on animals"],
  },
  {
    id: 5,
    slug: "felted-wool-slippers",
    name: "Felted Wool Slippers",
    category: "Home",
    categorySlug: "home",
    price: 68,
    color: "Charcoal",
    image: image("photo-1603487742131-4160ec999306"),
    manufacturer: "Hearth & Hide, Berlin",
    description:
      "Dense felted wool slippers with a soft natural sole for all-day indoor comfort.",
    rating: 4.8,
    reviews: 93,
    sizes: ["36", "38", "40", "42"],
    details: ["100% felted wool", "Natural rubber sole", "Made in Germany"],
  },
  {
    id: 6,
    slug: "essential-cotton-shirt",
    name: "Essential Cotton Shirt",
    category: "Men",
    categorySlug: "men",
    price: 76,
    color: "White",
    image: image("photo-1603252110481-7ba873bf42ab"),
    manufacturer: "Field Notes Apparel, Osaka",
    description:
      "A crisp everyday shirt cut with a little room to move and a collar that holds its shape.",
    rating: 4.7,
    reviews: 109,
    sizes: ["S", "M", "L", "XL"],
    details: [
      "100% long-staple cotton",
      "Regular fit",
      "Mother-of-pearl buttons",
    ],
  },
  {
    id: 7,
    slug: "brass-line-candle",
    name: "Brass Line Candle",
    category: "Home",
    categorySlug: "home",
    price: 38,
    color: "Amber",
    image: image("photo-1603006905003-be475563bc59"),
    manufacturer: "Still Life Co., Copenhagen",
    description:
      "A warm, resinous candle poured into a reusable brass-toned vessel.",
    rating: 4.5,
    reviews: 47,
    details: ["40 hour burn time", "Soy wax blend", "Phthalate-free fragrance"],
  },
  {
    id: 8,
    slug: "daily-frame-sunglasses",
    name: "Daily Frame Sunglasses",
    category: "Accessories",
    categorySlug: "accessories",
    price: 62,
    color: "Tortoise",
    image: image("photo-1511499767150-a48a237f0083"),
    manufacturer: "Sunday Optical, California",
    description:
      "A softly squared frame with full UV protection and a low-key, everyday silhouette.",
    rating: 4.8,
    reviews: 156,
    details: [
      "100% UV protection",
      "Recycled acetate",
      "Includes protective case",
    ],
  },
  {
    id: 9,
    slug: "utility-cordless-drill",
    name: "Utility Cordless Drill",
    category: "Hardware",
    categorySlug: "hardware",
    price: 129,
    color: "Graphite",
    image: image("photo-1504148455328-c376907d081c"),
    badge: "Workshop pick",
    manufacturer: "Forgeworks, Michigan",
    description:
      "A compact, reliable drill for weekend fixes and serious home projects alike.",
    rating: 4.9,
    reviews: 302,
    details: ["18V battery included", "Two-speed motor", "2 year warranty"],
  },
  {
    id: 10,
    slug: "boys-colorblock-hoodie",
    name: "Colorblock Hoodie",
    category: "Boys",
    categorySlug: "boys",
    price: 48,
    color: "Blue / Ecru",
    image: image("photo-1519238263530-99bdd11df2ea"),
    manufacturer: "Kindred Kids, Amsterdam",
    description:
      "An easy hoodie with playful color blocking and a brushed interior for everyday adventures.",
    rating: 4.8,
    reviews: 72,
    sizes: ["4Y", "6Y", "8Y", "10Y"],
    details: ["Organic cotton fleece", "Roomy fit", "GOTS certified"],
  },
  {
    id: 11,
    slug: "girls-pleated-dress",
    name: "Pleated Day Dress",
    category: "Girls",
    categorySlug: "girls",
    price: 64,
    color: "Sage",
    image: image("photo-1518831959646-742c3a14ebf7"),
    manufacturer: "Little Sunday, Copenhagen",
    description:
      "A light pleated dress that moves beautifully from school days to special occasions.",
    rating: 4.7,
    reviews: 88,
    sizes: ["4Y", "6Y", "8Y", "10Y"],
    details: ["Organic cotton poplin", "Adjustable waist", "Lined bodice"],
  },
];

const expandedCategories = [
  {
    name: "Electronics & Computers",
    slug: "electronics",
    description: "Smart tools, screens, and connected essentials.",
    subs: [
      "Smartphones & Accessories",
      "Laptops, Desktops & Peripherals",
      "TV, Audio & Home Theater",
      "Cameras & Photography",
      "Wearable Technology",
    ],
  },
  {
    name: "Fashion & Apparel",
    slug: "fashion",
    description: "Everyday clothing, footwear, and finishing pieces.",
    subs: [
      "Men's, Women's & Kids' Clothing",
      "Footwear",
      "Watches & Jewelry",
      "Bags, Wallets & Luggage",
    ],
  },
  {
    name: "Home, Kitchen & Garden",
    slug: "home-garden",
    description: "Thoughtful objects for every room and outside space.",
    subs: [
      "Furniture & Mattresses",
      "Home Appliances",
      "Cookware & Dining",
      "Home Decor & Lighting",
      "Patio, Lawn & Garden",
    ],
  },
  {
    name: "Beauty, Health & Personal Care",
    slug: "beauty-health",
    description: "Daily rituals, wellness, and personal care.",
    subs: [
      "Skincare & Makeup",
      "Haircare & Grooming",
      "Vitamins & Dietary Supplements",
      "Medical Supplies & Equipment",
    ],
  },
  {
    name: "Grocery & Essentials",
    slug: "grocery",
    description: "Pantry, produce, drinks, and household basics.",
    subs: [
      "Pantry Staples",
      "Fresh Produce & Meat",
      "Beverages",
      "Household Cleaning Supplies",
    ],
  },
  {
    name: "Toys, Kids & Baby",
    slug: "toys-kids",
    description: "Play, learning, and little-life essentials.",
    subs: [
      "Action Figures & Dolls",
      "Board Games & Puzzles",
      "Baby Clothing & Gear",
      "Nursery & Diapering",
    ],
  },
  {
    name: "Sports, Fitness & Outdoors",
    slug: "sports",
    description: "Move, explore, and spend more time outside.",
    subs: [
      "Exercise Equipment & Apparel",
      "Outdoor Recreation (Camping, Hiking)",
      "Team Sports",
      "Cycling & Scooters",
    ],
  },
  {
    name: "Automotive & Industrial",
    slug: "automotive",
    description: "Workshop, vehicle, and serious project supplies.",
    subs: [
      "Car Parts & Accessories",
      "Motorcycle Gear",
      "Power & Hand Tools",
      "Industrial & Scientific Supplies",
    ],
  },
  {
    name: "Books, Media & Entertainment",
    slug: "books-media",
    description: "Stories, screens, sound, and creative pursuits.",
    subs: [
      "Physical & Digital Books",
      "Video Games & Consoles",
      "Movies & Music",
      "Musical Instruments",
    ],
  },
  {
    name: "Pet Supplies",
    slug: "pets",
    description: "Good things for the animals in your life.",
    subs: [
      "Pet Food & Treats",
      "Beds, Habitats & Accessories",
      "Pet Healthcare & Grooming",
    ],
  },
  {
    name: "Office & Stationery",
    slug: "office",
    description: "Tools for focused work and bright ideas.",
    subs: [
      "Printers & Ink",
      "Office Furniture",
      "Paper & Planners",
      "Writing Instruments",
    ],
  },
];

const generatedImageIds = [
  "photo-1498049794561-7780e7231661",
  "photo-1523275335684-37898b6baf30",
  "photo-1556228578-8c89e6adf883",
  "photo-1542291026-7eec264c27ff",
  "photo-1511707171634-5f897ff02aa9",
  "photo-1517336714739-489689fd1ca8",
  "photo-1484704849700-f032a568e944",
  "photo-1493770348161-369560ae357d",
  "photo-1542291026-7eec264c27ff",
  "photo-1524758631624-e2822e304c36",
  "photo-1556742049-0cfed4f6a45d",
  "photo-1503602642458-232111445657",
  "photo-1494438639946-1ebd1d20bf85",
  "photo-1556910103-1c02745aae4d",
  "photo-1556229010-53e7facb47b3",
  "photo-1526170375885-4d8ecf77b99f",
  "photo-1493225457124-a3eb161ffa5f",
  "photo-1511512578047-dfb367046420",
  "photo-1504150558240-0b4fd8946624",
  "photo-1542751371-adc38448a05e",
  "photo-1509099836639-18ba1795216d",
  "photo-1516627145497-ae6968895b74",
  "photo-1519340241574-2cec6aef0c01",
  "photo-1535572290543-960a8046f5af",
  "photo-1504150558240-0b4fd8946624",
  "photo-1526367790999-0150786686a2",
  "photo-1495474472287-4d71bcdd2085",
  "photo-1547592180-85f173990554",
  "photo-1513558161293-cdaf765ed2fd",
  "photo-1519710164239-da123dc03ef4",
  "photo-1513694203232-719a280e022f",
  "photo-1505693416388-ac5ce068fe85",
  "photo-1586023492125-27b2c045efd7",
  "photo-1555041469-a586c61ea9bc",
  "photo-1558618666-fcd25c85cd64",
  "photo-1596462502278-27bfdc403348",
  "photo-1522335789203-a3339b6c9c2f",
  "photo-1526045478516-99145907023c",
  "photo-1529139574466-a303027c1d8b",
  "photo-1490481651871-ab68de25d43d",
];

const generatedProducts: Product[] = expandedCategories.flatMap(
  (category, categoryIndex) =>
    category.subs.flatMap((sub, subIndex) =>
      Array.from({ length: 10 }, (_, itemIndex) => {
        const id = 1000 + categoryIndex * 100 + subIndex * 10 + itemIndex;
        const name = `${sub.split(" & ")[0]} Essential ${itemIndex + 1}`;
        return {
          id,
          slug: `${category.slug}-${subIndex + 1}-${itemIndex + 1}`,
          name,
          category: category.name,
          categorySlug: category.slug,
          price:
            24 + ((categoryIndex * 17 + subIndex * 13 + itemIndex * 9) % 180),
          color: ["Natural", "Graphite", "Sage", "Sand"][itemIndex % 4],
          image: image(
            generatedImageIds[
              (categoryIndex * 40 + subIndex * 10 + itemIndex) %
                generatedImageIds.length
            ],
          ),
          manufacturer: `Morrow Select / ${category.name}`,
          description: `A considered ${sub.toLowerCase()} pick selected for everyday use and lasting value.`,
          rating: 4.4 + (itemIndex % 5) / 10,
          reviews: 24 + categoryIndex * 11 + itemIndex * 7,
          details: [
            "Thoughtfully selected",
            "Quality checked",
            "30-day returns",
          ],
        };
      }),
    ),
);

products.push(...generatedProducts);

export const categories = [
  { name: "All pieces", slug: "all", description: "The complete Morrow edit." },
  ...expandedCategories.map(({ name, slug, description, subs }) => ({
    name,
    slug,
    description,
    subs,
  })),
  {
    name: "Hardware",
    slug: "hardware",
    description: "Tools and workshop essentials built to last.",
  },
  {
    name: "Men",
    slug: "men",
    description: "Considered everyday layers for him.",
  },
  {
    name: "Women",
    slug: "women",
    description: "Easy pieces with a point of view.",
  },
  {
    name: "Boys",
    slug: "boys",
    description: "Play-ready essentials for growing people.",
  },
  {
    name: "Girls",
    slug: "girls",
    description: "Beautiful, durable pieces for her.",
  },
  {
    name: "Home",
    slug: "home",
    description: "Objects for a more intentional home.",
  },
  {
    name: "Beauty",
    slug: "beauty",
    description: "Small rituals and considered formulas.",
  },
  {
    name: "Accessories",
    slug: "accessories",
    description: "The finishing details.",
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}
export function formatPrice(price: number) {
  return `$${price.toFixed(2)}`;
}
export function relatedProducts(product: Product) {
  return products
    .filter(
      (item) =>
        item.categorySlug === product.categorySlug && item.id !== product.id,
    )
    .slice(0, 4);
}
