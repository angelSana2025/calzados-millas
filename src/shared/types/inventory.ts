export type HeroProduct = {
  id: number;
  image: string;
  alt: string;
  pos: string;
  float: string;
  tilt: string;
};

export type StockRow = {
  id: number;
  model: string;
  color: string;
  size1: { size: number; qty: number };
  size2: { size: number; qty: number };
  size3: { size: number; qty: number };
  totalPairs: number;
  season: string;
  status: "Activo" | "Bloqueado";
  image?: string;
  provider?: string;
  soldTotal?: number;
};
