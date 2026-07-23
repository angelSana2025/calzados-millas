/** Modal para agregar un nuevo producto al inventario.
 *  Adaptado del mockup HTML (code.html) a la paleta de marca del proyecto.
 *  Validación con react-hook-form + zod.
 *  Cierra con Escape, backdrop click, o botón CANCELAR/X.
 *  No usa alert/confirm/prompt — errores inline en el formulario. */
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";

const TALLAS = [35, 36, 37, 38, 39] as const;

const addProductSchema = z.object({
  modelo: z.string().min(1, "El modelo es obligatorio"),
  color: z.string().min(1, "El color es obligatorio"),
  temporada: z.enum(["Verano 2024", "Invierno 2024", "Primavera 2025"]),
  pares: z
    .array(
      z.object({
        talla: z.number(),
        cantidad: z.number().min(0, "Mínimo 0").int("Debe ser entero"),
      })
    )
    .length(5),
});

export type AddProductFormData = z.infer<typeof addProductSchema>;

type AddProductModalProps = {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: AddProductFormData) => void | Promise<void>;
};

export function AddProductModal({ open, onClose, onSubmit }: AddProductModalProps) {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AddProductFormData>({
    resolver: zodResolver(addProductSchema),
    defaultValues: {
      modelo: "",
      color: "",
      temporada: "Verano 2024",
      pares: TALLAS.map((talla) => ({ talla, cantidad: 0 })),
    },
  });

  const { fields } = useFieldArray({ control, name: "pares" });

  useEffect(() => {
    if (open) {
      reset({
        modelo: "",
        color: "",
        temporada: "Verano 2024",
        pares: TALLAS.map((talla) => ({ talla, cantidad: 0 })),
      });
    }
  }, [open, reset]);

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
            Agregar Producto
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

        <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-8">
          <div className="space-y-2">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-[#544245]/70">
              MODELO
            </label>
            <input
              type="text"
              placeholder="Ej: Sandalia Casual S-001"
              className="w-full border border-[#E5E7EB] rounded-lg px-4 py-3 text-[#251721] placeholder:text-[#E5E7EB]/60 transition-all duration-200 bg-white focus:ring-1 focus:ring-[#984258] outline-none"
              {...register("modelo")}
            />
            {errors.modelo && (
              <p className="text-[12px] text-[#EF4444] mt-1">{errors.modelo.message}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-[#544245]/70">
                COLOR
              </label>
              <input
                type="text"
                placeholder="Negro"
                className="w-full border border-[#E5E7EB] rounded-lg px-4 py-3 text-[#251721] placeholder:text-[#E5E7EB]/60 transition-all duration-200 bg-white focus:ring-1 focus:ring-[#984258] outline-none"
                {...register("color")}
              />
              {errors.color && (
                <p className="text-[12px] text-[#EF4444] mt-1">{errors.color.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-[#544245]/70">
                TEMPORADA
              </label>
              <div className="relative">
                <select
                  className="w-full border border-[#E5E7EB] rounded-lg px-4 py-3 text-[#251721] transition-all duration-200 bg-white focus:ring-1 focus:ring-[#984258] outline-none appearance-none pr-10"
                  {...register("temporada")}
                >
                  <option value="Verano 2024">Verano 2024</option>
                  <option value="Invierno 2024">Invierno 2024</option>
                  <option value="Primavera 2025">Primavera 2025</option>
                </select>
                <svg
                  className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#544245]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-[#544245]/70">
              PARES POR TALLA
            </label>
            <div className="flex gap-3 flex-wrap">
              {fields.map((field, index) => (
                <label
                  key={field.id}
                  className="relative w-14 h-14 flex flex-col items-center justify-center border rounded-lg cursor-pointer transition-colors bg-white hover:border-[#984258]"
                  style={{ borderColor: "#E5E7EB" }}
                >
                  <span className="text-[10px] font-bold text-[#544245] leading-none mb-0.5">
                    {TALLAS[index]}
                  </span>
                  <input
                    type="number"
                    min={0}
                    className="w-10 text-center bg-transparent border-none p-0 text-sm font-semibold text-[#251721] focus:ring-0 outline-none [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    {...register(`pares.${index}.cantidad`, { valueAsNumber: true })}
                  />
                </label>
              ))}
            </div>
            {errors.pares?.root?.message && (
              <p className="text-[12px] text-[#EF4444] mt-1">{errors.pares.root.message}</p>
            )}
            {TALLAS.map((talla, i) => {
              const err = (errors.pares as unknown as Record<string, { cantidad?: { message?: string } }> | undefined)?.[i];
              return err?.cantidad?.message ? (
                <p key={talla} className="text-[12px] text-[#EF4444] mt-1">
                  Talla {talla}: {err.cantidad.message}
                </p>
              ) : null;
            })}
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
              {isSubmitting ? "AGREGANDO..." : "AGREGAR PRODUCTO"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
