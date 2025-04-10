import { Product } from '@/contexts/CartContext';
import track from '@/assets/track.png';

export const productData: Product[] = [
  {
    id: 1,
    name: "Red Bull Racing 2025 Team Cap",
    price: 39.99,
    image: track,
    description: "Official Red Bull Racing team cap for the 2025 season. Features team colors and sponsor logos.",
    category: "Apparel",
    location: "Monaco",
    inStock: true,
    featured: true,
    bestSeller: true
  },
  {
    id: 2,
    name: "Ferrari Team T-Shirt",
    price: 49.99,
    image: track,
    description: "Official Ferrari team t-shirt with printed signatures from Charles Leclerc and Carlos Sainz.",
    category: "Apparel",
    location: "Monza",
    inStock: true,
    featured: true
  },
  {
    id: 3,
    name: "Monaco Grand Prix 3D Printed Circuit",
    price: 89.99,
    image: track,
    description: "3D printed replica of the Monaco Grand Prix circuit, perfect for display on your desk or shelf.",
    category: "3D Prints",
    location: "Monaco",
    inStock: true,
    limitedStock: true,
    featured: true
  },
  {
    id: 4,
    name: "Mercedes AMG Petronas Jacket",
    price: 129.99,
    image: track,
    description: "Official Mercedes AMG Petronas F1 team jacket. Water-resistant and featuring team colors.",
    category: "Apparel",
    location: "Silverstone",
    inStock: true
  },
  {
    id: 5,
    name: "Lewis Hamilton Signed Mini Helmet",
    price: 299.99,
    image: track,
    description: "1:2 scale mini helmet signed by seven-time world champion Lewis Hamilton.",
    category: "Collectibles",
    location: "Silverstone",
    inStock: true,
    limitedStock: true
  },
  {
    id: 6,
    name: "F1 Car 3D Printed Model",
    price: 149.99,
    image: track,
    description: "Highly detailed 3D printed model of the latest F1 car. Scale 1:18.",
    category: "3D Prints",
    location: "All",
    inStock: true,
    featured: true
  },
  {
    id: 7,
    name: "Monza Circuit 3D Wall Art",
    price: 79.99,
    image: track,
    description: "3D printed wall art featuring the legendary Monza circuit layout.",
    category: "3D Prints",
    location: "Monza",
    inStock: true
  },
  {
    id: 8,
    name: "Alpine F1 Team Polo Shirt",
    price: 59.99,
    image: track,
    description: "Official Alpine F1 team polo shirt for the 2025 season.",
    category: "Apparel",
    location: "Monaco",
    inStock: true
  },
  {
    id: 9,
    name: "Aston Martin F1 Hoodie",
    price: 89.99,
    image: track,
    description: "Warm and comfortable Aston Martin F1 team hoodie in British Racing Green.",
    category: "Apparel",
    location: "Silverstone",
    inStock: true
  },
  {
    id: 10,
    name: "McLaren 3D Printed Trophy",
    price: 69.99,
    image: track,
    description: "3D printed replica of a Formula 1 trophy in McLaren team colors.",
    category: "3D Prints",
    location: "All",
    inStock: true,
    bestSeller: false
  },
  {
    id: 11,
    name: "Haas F1 Team Backpack",
    price: 79.99,
    image: track,
    description: "Official Haas F1 team backpack with multiple compartments and team branding.",
    category: "Accessories",
    location: "Miami",
    inStock: true
  },
  {
    id: 12,
    name: "Williams Racing Water Bottle",
    price: 29.99,
    image: track,
    description: "Stainless steel Williams Racing water bottle. 500ml capacity.",
    category: "Accessories",
    location: "All",
    inStock: true
  },
  {
    id: 13,
    name: "Monaco Grand Prix 3D Track Poster",
    price: 59.99,
    image: track,
    description: "Detailed 3D printed poster of the iconic Monaco Grand Prix circuit. Perfect wall art for F1 enthusiasts.",
    category: "3D Track Posters",
    location: "Monaco",
    inStock: true,
    featured: true
  },
  {
    id: 14,
    name: "Silverstone 3D Track Poster",
    price: 49.99,
    image: track,
    description: "3D printed wall art featuring the historic Silverstone circuit layout with elevation details.",
    category: "3D Track Posters",
    location: "Silverstone",
    inStock: true
  },
  {
    id: 15,
    name: "Spa-Francorchamps 3D Track Poster",
    price: 54.99,
    image: track,
    description: "Intricately detailed 3D printed poster of the challenging Spa-Francorchamps circuit with Eau Rouge highlight.",
    category: "3D Track Posters",
    location: "Monaco",
    inStock: true,
    limitedStock: true
  },
  {
    id: 16,
    name: "Circuit of the Americas 3D Track",
    price: 57.99,
    image: track,
    description: "3D printed wall art of the COTA circuit in Austin, Texas. Features all elevation changes and sector markings.",
    category: "3D Track Posters",
    location: "Miami",
    inStock: true
  },
  {
    id: 17,
    name: "Ferrari F1 Rear Wing Shelf",
    price: 129.99,
    image: track,
    description: "Authentic replica of Ferrari F1 car rear wing, designed as a functional wall shelf. Perfect for displaying mini helmets.",
    category: "Spoiler Shelves",
    location: "Monza",
    inStock: true,
    featured: true,
    bestSeller: true
  },
  {
    id: 18,
    name: "Red Bull Racing DRS Shelf",
    price: 149.99,
    image: track,
    description: "Red Bull F1 DRS wing replica shelf with carbon fiber finish. Includes adjustable 'DRS open' feature.",
    category: "Spoiler Shelves",
    location: "Monaco",
    inStock: true,
    limitedStock: true
  },
  {
    id: 19,
    name: "Mercedes AMG Carbon Shelf",
    price: 139.99,
    image: track,
    description: "Mercedes AMG F1 inspired rear wing shelf with authentic silver arrows styling and carbon fiber accents.",
    category: "Spoiler Shelves",
    location: "Silverstone",
    inStock: true
  },
  {
    id: 20,
    name: "Ferrari SF-24 LED Lamp",
    price: 79.99,
    image: track,
    description: "Ferrari themed LED lamp with car silhouette design. Features variable brightness and Ferrari red illumination.",
    category: "LED Lamps",
    location: "Monza",
    inStock: true,
    featured: true
  },
  {
    id: 21,
    name: "McLaren MCL38 Night Light",
    price: 69.99,
    image: track,
    description: "McLaren F1 car inspired LED lamp with papaya orange glow. USB rechargeable with touch controls.",
    category: "LED Lamps",
    location: "Monaco",
    inStock: true,
    bestSeller: true
  },
  {
    id: 22,
    name: "Aston Martin AMR24 LED Display",
    price: 89.99,
    image: track,
    description: "British racing green Aston Martin F1 car silhouette with LED illumination. Perfect for home office or game room.",
    category: "LED Lamps",
    location: "Silverstone",
    inStock: true,
    limitedStock: true
  },
  {
    id: 23,
    name: "Alpine A524 LED Corner Lamp",
    price: 74.99,
    image: track,
    description: "Alpine F1 inspired LED corner lamp with blue illumination effects. Features remote control and multiple light patterns.",
    category: "LED Lamps",
    location: "Monaco",
    inStock: true
  }
];
