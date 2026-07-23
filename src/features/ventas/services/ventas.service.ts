import type { VentaProduct } from "../types/ventas.types";

/*
 * Datos de ejemplo para desarrollo — cuando el backend NestJS esté listo,
 * este servicio se conectará a GET /inventory/:section y devolverá datos
 * reales desde la base de datos.
 */
const MOCK_PRODUCTS: VentaProduct[] = [
  {
    id: 1,
    name: "Velvet Nocturne",
    category: "Stilettos",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfgbWeriT84u3O3sbus0joxThvy9XhSGdOp0HSgkoBsTGOSmi_vxT4fkvDatuN82_cOW9pcsDR9BraWgMjKFSw_XKaFvUPtP5E0ogXB0dwsztToknhaxqoBweC8m96-yuXB7e_BZavU4b2j93h6sLhKbOnPnXEK2luR7qTUVMQVeGTGvc3IPzJFKXbPm9XT4xtY7MK4rHpcqBcKT06kthfp7lPHu5emAN4dfyPxsooaGFfAKSzFi5VWg",
    size: "38 EU",
    stock: 12,
    optimal: 45,
    status: "optimal",
    price: 285.00,
    supplier: "Atelier Milan",
  },
  {
    id: 2,
    name: "Heritage Loafer",
    category: "Loafers",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuACcldwPSknL2imihJ1jWjzCfUPATgESgOGD8-ERZ8LkN65_eymVMcORaXsiw4MkhWKeEJR37MPJIYq9tik1scOM3A7riq9iBkn9JLvY7iz-drVa3qPmmrw9s8X66mXPiTSiBVKUgcQXwdRDDv-QNJ6_ZmIF4PvqaekyJghoIM2Olfeip8NogzfsFC8kPySLSbwPnGNHbhWFTWxYLTKupFWF-IgUUQeP57EU39x1MgUmYG0RkjtGuyynA",
    size: "42 EU",
    stock: 5,
    optimal: 30,
    status: "low",
    price: 320.00,
    supplier: "Tuscany Leather Works",
  },
  {
    id: 3,
    name: "Midnight Gala",
    category: "Pumps",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmEUdAJzXVvYB6xnA3M8OO1NjTeVLkBF0cVkVkUtg5luiI1G8hWUaqMXMGbNJJ2eX0-efPxnDOhkni7Dj2YMZMsfJhJuUH60vlT57U9icjyzBOIlGEpDiiMHxEeeYvEfzSlNNjp2I0XoWN3xK4tH3QJLuNDDoeNugwHz_GcVw_tlfOZA7RxsHyN23GjiLvGlYwOWrWmu-jpyOYh_Kn9rmSuaaBEoUxqkL1dokU4xw7hrMRJ1fVYEo7fA",
    size: "37 EU",
    stock: 2,
    optimal: 25,
    status: "critical",
    price: 410.00,
    supplier: "Iberian Silk House",
  },
  {
    id: 4,
    name: "Urban Suede Boot",
    category: "Boots",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcIgeQAPvqUUMLvHsFZ7-OJn88fzxl0549VPAS2jhfYOeBxBTAn7MwfDIvkQy0POdAAmD0GAKq1olXKP-ZnUvapGiwO6JOdNfULJj1f-V5a5qFM5_pV6fMj_sPMavvunxzXOUlA56m2dOEmVhfguUEDFcketvX3oQGlLNGGgiYo432CPc8ttgH5_wRrwzsJNPnuVcYwU5Cg8-zmbkh_eBaOgVW5v4u-9OWEHvvtXrGLJIxk0hA-zJBnA",
    size: "39 EU",
    stock: 28,
    optimal: 40,
    status: "optimal",
    price: 245.00,
    supplier: "Nordic Steps Co.",
  },
  {
    id: 5,
    name: "Crimson Slingback",
    category: "Stilettos",
    image: "",
    size: "36 EU",
    stock: 18,
    optimal: 35,
    status: "optimal",
    price: 275.00,
    supplier: "Atelier Milan",
  },
  {
    id: 6,
    name: "Espresso Oxford",
    category: "Loafers",
    image: "",
    size: "43 EU",
    stock: 3,
    optimal: 25,
    status: "critical",
    price: 350.00,
    supplier: "Tuscany Leather Works",
  },
  {
    id: 7,
    name: "Blush Ballet Flat",
    category: "Pumps",
    image: "",
    size: "37 EU",
    stock: 22,
    optimal: 30,
    status: "low",
    price: 195.00,
    supplier: "Iberian Silk House",
  },
  {
    id: 8,
    name: "Tan Desert Boot",
    category: "Boots",
    image: "",
    size: "41 EU",
    stock: 15,
    optimal: 50,
    status: "low",
    price: 265.00,
    supplier: "Nordic Steps Co.",
  },
];

/** Devuelve todos los productos disponibles (mock por ahora) */
export function getVentasProducts(): VentaProduct[] {
  return MOCK_PRODUCTS;
}

/** Extrae y ordena las categorías únicas de los productos para los filtros */
export function getVentasCategories(): string[] {
  const categories = new Set(MOCK_PRODUCTS.map((p) => p.category));
  return Array.from(categories).sort();
}
