import { getVentasProducts } from "./calzado.service";
import type { VentaProduct, StockStatus } from "../types/calzado.types";

let data: VentaProduct[] = [...getVentasProducts()];
let nextId = 100;

export function getVentasCrudProducts(): VentaProduct[] {
  return [...data];
}

export function addVentaProduct(fields: {
  name: string;
  category: string;
  size: string;
  stock: number;
  optimal: number;
  price: number;
  supplier: string;
  status: StockStatus;
}): VentaProduct {
  const product: VentaProduct = {
    id: nextId++,
    name: fields.name,
    category: fields.category,
    image: "",
    size: fields.size,
    stock: fields.stock,
    optimal: fields.optimal,
    status: fields.status,
    price: fields.price,
    supplier: fields.supplier,
  };
  data.push(product);
  return product;
}

export function updateVentaProduct(
  id: number,
  fields: {
    name: string;
    category: string;
    size: string;
    stock: number;
    optimal: number;
    price: number;
    supplier: string;
    status: StockStatus;
  }
): VentaProduct | null {
  const idx = data.findIndex((p) => p.id === id);
  if (idx === -1) return null;
  data[idx] = { ...data[idx], ...fields };
  return data[idx];
}

export function deleteVentaProduct(id: number): boolean {
  const idx = data.findIndex((p) => p.id === id);
  if (idx === -1) return false;
  data.splice(idx, 1);
  return true;
}
