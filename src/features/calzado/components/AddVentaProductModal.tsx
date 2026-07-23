import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import type { VentaProduct, StockStatus } from "../types/calzado.types";

const CATEGORIES = ["Stilettos", "Loafers", "Pumps", "Boots"] as const;
const STATUS_OPTIONS: { value: StockStatus; label: string }[] = [
  { value: "optimal", label: "Optimal" },
  { value: "low", label: "Low" },
  { value: "critical", label: "Critical" },
];

const schema = z.object({
  name: z.string().min(1, "El nombre es obligatorio"),
  category: z.enum(CATEGORIES),
  size: z.string().min(1, "La talla es obligatoria"),
  stock: z.coerce.number().min(0, "Mínimo 0").int("Debe ser entero"),
  optimal: z.coerce.number().min(0, "Mínimo 0").int("Debe ser entero"),
  price: z.coerce.number().min(0, "Mínimo 0"),
  supplier: z.string().min(1, "El proveedor es obligatorio"),
  status: z.enum(["optimal", "low", "critical"]),
});

export type AddVentaProductFormData = z.infer<typeof schema>;

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: AddVentaProductFormData) => void | Promise<void>;
  editingRow?: VentaProduct;
};

function defaultValues(editingRow?: VentaProduct): AddVentaProductFormData {
  if (editingRow) {
    return {
      name: editingRow.name,
      category: editingRow.category as AddVentaProductFormData["category"],
      size: editingRow.size,
      stock: editingRow.stock,
      optimal: editingRow.optimal,
      price: editingRow.price,
      supplier: editingRow.supplier,
      status: editingRow.status,
    };
  }
  return {
    name: "",
    category: "Stilettos",
    size: "38 EU",
    stock: 0,
    optimal: 30,
    price: 0,
    supplier: "",
    status: "optimal",
  };
}

export function AddVentaProductModal({ open, onClose, onSubmit, editingRow }: Props) {
  const isEditing = !!editingRow;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AddVentaProductFormData>({
    resolver: zodResolver(schema) as any,
    defaultValues: defaultValues(editingRow),
  });

  useEffect(() => {
    if (open) reset(defaultValues(editingRow));
  }, [open, editingRow, reset]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(50, 35, 45, 0.05)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-[560px] bg-white rounded-2xl overflow-hidden"
        style={{ boxShadow: "0px 12px 40px rgba(50,35,45,0.15)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-8 py-6 flex justify-between items-center border-b border-[#E5E7EB]">
          <h2 className="text-2xl font-semibold tracking-tight text-[#251721]">
            {isEditing ? "Editar Producto" : "Agregar Producto"}
          </h2>
          <button
            type="button"
            className="text-[#544245] hover:text-[#251721] transition-colors p-1 rounded-full hover:bg-[#FFF0F6]"
            onClick={onClose}
            aria-label="Cerrar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6">
          <div className="space-y-2">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-[#544245]/70">NOMBRE</label>
            <input
              type="text"
              placeholder="Ej: Velvet Nocturne"
              className="w-full border border-[#E5E7EB] rounded-lg px-4 py-3 text-[#251721] placeholder:text-[#E5E7EB]/60 transition-all bg-white focus:ring-1 focus:ring-[#984258] outline-none"
              {...register("name")}
            />
            {errors.name && <p className="text-[12px] text-[#EF4444] mt-1">{errors.name.message}</p>}
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-[#544245]/70">CATEGORÍA</label>
              <div className="relative">
                <select
                  className="w-full border border-[#E5E7EB] rounded-lg px-4 py-3 text-[#251721] transition-all bg-white focus:ring-1 focus:ring-[#984258] outline-none appearance-none pr-10"
                  {...register("category")}
                >
                  {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#544245]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-[#544245]/70">TALLA</label>
              <input
                type="text"
                placeholder="38 EU"
                className="w-full border border-[#E5E7EB] rounded-lg px-4 py-3 text-[#251721] placeholder:text-[#E5E7EB]/60 transition-all bg-white focus:ring-1 focus:ring-[#984258] outline-none"
                {...register("size")}
              />
              {errors.size && <p className="text-[12px] text-[#EF4444] mt-1">{errors.size.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-[#544245]/70">STOCK</label>
              <input
                type="number"
                min={0}
                className="w-full border border-[#E5E7EB] rounded-lg px-4 py-3 text-[#251721] transition-all bg-white focus:ring-1 focus:ring-[#984258] outline-none"
                {...register("stock", { valueAsNumber: true })}
              />
              {errors.stock && <p className="text-[12px] text-[#EF4444] mt-1">{errors.stock.message}</p>}
            </div>
            <div className="space-y-2">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-[#544245]/70">ÓPTIMO</label>
              <input
                type="number"
                min={0}
                className="w-full border border-[#E5E7EB] rounded-lg px-4 py-3 text-[#251721] transition-all bg-white focus:ring-1 focus:ring-[#984258] outline-none"
                {...register("optimal", { valueAsNumber: true })}
              />
              {errors.optimal && <p className="text-[12px] text-[#EF4444] mt-1">{errors.optimal.message}</p>}
            </div>
            <div className="space-y-2">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-[#544245]/70">PRECIO ($)</label>
              <input
                type="number"
                min={0}
                step="0.01"
                className="w-full border border-[#E5E7EB] rounded-lg px-4 py-3 text-[#251721] transition-all bg-white focus:ring-1 focus:ring-[#984258] outline-none"
                {...register("price", { valueAsNumber: true })}
              />
              {errors.price && <p className="text-[12px] text-[#EF4444] mt-1">{errors.price.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-[#544245]/70">PROVEEDOR</label>
              <input
                type="text"
                placeholder="Ej: Atelier Milan"
                className="w-full border border-[#E5E7EB] rounded-lg px-4 py-3 text-[#251721] placeholder:text-[#E5E7EB]/60 transition-all bg-white focus:ring-1 focus:ring-[#984258] outline-none"
                {...register("supplier")}
              />
              {errors.supplier && <p className="text-[12px] text-[#EF4444] mt-1">{errors.supplier.message}</p>}
            </div>
            <div className="space-y-2">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-[#544245]/70">ESTADO</label>
              <div className="relative">
                <select
                  className="w-full border border-[#E5E7EB] rounded-lg px-4 py-3 text-[#251721] transition-all bg-white focus:ring-1 focus:ring-[#984258] outline-none appearance-none pr-10"
                  {...register("status")}
                >
                  {STATUS_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#544245]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
              </div>
            </div>
          </div>

          <div className="pt-4 flex gap-4">
            <button
              type="button"
              className="flex-1 py-3.5 text-[#544245] font-bold text-[12px] uppercase tracking-widest rounded-full border transition-all hover:bg-[#FFF0F6]"
              style={{ borderColor: "#E5E7EB" }}
              onClick={onClose}
            >
              CANCELAR
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 py-3.5 bg-[#984258] text-white font-bold text-[12px] uppercase tracking-widest rounded-full transition-all hover:bg-[#7A2E45] disabled:opacity-60 disabled:cursor-not-allowed"
              style={{ boxShadow: isSubmitting ? "none" : "0 4px 6px -1px rgba(152,66,88,0.2)" }}
            >
              {isSubmitting ? "GUARDANDO..." : isEditing ? "GUARDAR CAMBIOS" : "AGREGAR PRODUCTO"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
