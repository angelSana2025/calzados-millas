import { useState } from "react";
import { Pencil, Trash2, ImageIcon, Check, X } from "lucide-react";
import type { VentaProduct } from "../types/calzado.types";
import { StockStatusPill } from "./StockStatusPill";

type Props = {
  products: VentaProduct[];
  onEdit: (product: VentaProduct) => void;
  onDelete: (id: number) => void;
};

export function ProductTable({ products, onEdit, onDelete }: Props) {
  const [deletingId, setDeletingId] = useState<number | null>(null);

  if (products.length === 0) {
    return (
      <div className="flex items-center justify-center h-48 text-[#544245] text-[14px]">
        Ningún producto coincide con los filtros actuales.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto custom-scrollbar">
      <table className="w-full text-left border-collapse">
        <thead className="bg-[#FFF0F6]">
          <tr>
            <th className="px-6 py-4 text-[13px] font-semibold text-[#867275] uppercase tracking-[0.02em] whitespace-nowrap">Producto</th>
            <th className="px-6 py-4 text-[13px] font-semibold text-[#867275] uppercase tracking-[0.02em] whitespace-nowrap">Detalles</th>
            <th className="px-6 py-4 text-[13px] font-semibold text-[#867275] uppercase tracking-[0.02em] whitespace-nowrap">Talla</th>
            <th className="px-6 py-4 text-[13px] font-semibold text-[#867275] uppercase tracking-[0.02em] whitespace-nowrap text-center">Stock</th>
            <th className="px-6 py-4 text-[13px] font-semibold text-[#867275] uppercase tracking-[0.02em] whitespace-nowrap text-center">Ópt.</th>
            <th className="px-6 py-4 text-[13px] font-semibold text-[#867275] uppercase tracking-[0.02em] whitespace-nowrap">Estado</th>
            <th className="px-6 py-4 text-[13px] font-semibold text-[#867275] uppercase tracking-[0.02em] whitespace-nowrap">Precio</th>
            <th className="px-6 py-4 text-[13px] font-semibold text-[#867275] uppercase tracking-[0.02em] whitespace-nowrap">Proveedor</th>
            <th className="px-6 py-4 text-[13px] font-semibold text-[#867275] uppercase tracking-[0.02em] whitespace-nowrap text-right">Acciones</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#E5E7EB]">
          {products.map((product) => (
            <tr
              key={product.id}
              className="group hover:bg-[#FBF0F0]/50 transition-all duration-150 hover:translate-x-[4px]"
            >
              <td className="px-6 py-4">
                <div className="w-12 h-12 rounded-lg bg-[#FBE1EF] overflow-hidden border border-[#E5E7EB] flex items-center justify-center">
                  {product.image ? (
                    <img className="w-full h-full object-cover" src={product.image} alt={product.name} />
                  ) : (
                    <ImageIcon size={24} className="text-[#984258]" aria-hidden="true" />
                  )}
                </div>
              </td>
              <td className="px-6 py-4">
                <p className="font-bold text-[#251721]">{product.name}</p>
                <p className="text-[10px] text-[#867275] uppercase font-bold tracking-tight">{product.category}</p>
              </td>
              <td className="px-6 py-4">
                <span className="bg-[#F5DCE9] text-[#544245] px-2 py-0.5 rounded text-[11px] font-bold">{product.size}</span>
              </td>
              <td className="px-6 py-4 text-center">
                <span className={`text-[20px] font-bold ${product.status === "critical" ? "text-[#EF4444]" : product.status === "low" ? "text-[#EAB308]" : "text-[#251721]"}`}>
                  {product.stock}
                </span>
              </td>
              <td className="px-6 py-4 text-center text-[14px] text-[#867275]">{product.optimal}</td>
              <td className="px-6 py-4"><StockStatusPill status={product.status} /></td>
              <td className="px-6 py-4 text-[18px] font-bold text-[#984258]">${product.price.toFixed(2)}</td>
              <td className="px-6 py-4 text-[12px] text-[#544245]">{product.supplier}</td>
              <td className="px-6 py-4 text-right">
                {deletingId === product.id ? (
                  <div className="flex justify-end items-center gap-1 text-[12px] text-[#EF4444] font-semibold">
                    <span>¿Eliminar?</span>
                    <button
                      type="button"
                      onClick={() => { onDelete(product.id); setDeletingId(null); }}
                      className="p-1.5 text-white bg-[#EF4444] rounded-full hover:bg-[#DC2626] transition-colors cursor-pointer"
                      aria-label="Confirmar eliminación"
                    >
                      <Check size={14} />
                    </button>
                    <button
                      type="button"
                      onClick={() => setDeletingId(null)}
                      className="p-1.5 text-[#544245] border border-[#E5E7EB] rounded-full hover:bg-[#FFF0F6] transition-colors cursor-pointer"
                      aria-label="Cancelar eliminación"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ) : (
                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => onEdit(product)}
                      className="p-2 text-[#984258] hover:bg-[#984258]/5 rounded-full transition-colors cursor-pointer"
                      aria-label="Editar"
                    >
                      <Pencil size={16} />
                    </button>
                    <button
                      type="button"
                      onClick={() => setDeletingId(product.id)}
                      className="p-2 text-[#867275] hover:text-[#EF4444] hover:bg-[#EF4444]/5 rounded-full transition-colors cursor-pointer"
                      aria-label="Eliminar"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
