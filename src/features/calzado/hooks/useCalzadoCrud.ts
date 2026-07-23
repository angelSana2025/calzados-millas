import { useState, useCallback } from "react";
import { getVentasCrudProducts, addVentaProduct, updateVentaProduct, deleteVentaProduct } from "../services/calzadoCrud.service";
import type { VentaProduct, StockStatus } from "../types/calzado.types";

type FormData = {
  name: string;
  category: string;
  size: string;
  stock: number;
  optimal: number;
  price: number;
  supplier: string;
  status: StockStatus;
};

export function useCalzadoCrud() {
  const [rows, setRows] = useState<VentaProduct[]>(() => getVentasCrudProducts());

  const add = useCallback((data: FormData) => {
    addVentaProduct(data);
    setRows(getVentasCrudProducts());
  }, []);

  const update = useCallback((id: number, data: FormData) => {
    updateVentaProduct(id, data);
    setRows(getVentasCrudProducts());
  }, []);

  const remove = useCallback((id: number) => {
    deleteVentaProduct(id);
    setRows(getVentasCrudProducts());
  }, []);

  return { rows, add, update, remove };
}
