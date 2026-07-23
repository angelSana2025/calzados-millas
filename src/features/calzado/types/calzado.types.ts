export type StockStatus = "optimal" | "low" | "critical";

export type VentaProduct = {
  id: number;
  name: string;
  category: string;
  image: string;
  size: string;
  stock: number;
  optimal: number;
  status: StockStatus;
  price: number;
  supplier: string;
};

export type VentasFilters = {
  search: string;
  category: string;
  status: string;
};
