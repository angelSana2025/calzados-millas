import { NavLink } from "react-router-dom";
import { BarChart3, Flower2, HelpCircle, LogOut, Mountain, Package, PlusCircle } from "lucide-react";
import { ROUTES } from "@/core";

type NavItem = {
  label: string;
  icon: React.ReactNode;
  to: string;
};

type NavSection = {
  title: string;
  items: NavItem[];
};

const SECTIONS: NavSection[] = [
  {
    title: "Gestión",
    items: [
      { label: "Sandalias", icon: <Flower2 size={18} />, to: ROUTES.gestionSandalias },
      { label: "Botines", icon: <Mountain size={18} />, to: ROUTES.gestionBotines },
    ],
  },
  {
    title: "Calzado",
    items: [
      { label: "Productos", icon: <Package size={18} />, to: ROUTES.calzado },
    ],
  },
  {
    title: "Dashboard",
    items: [
      { label: "Dashboard", icon: <BarChart3 size={18} />, to: ROUTES.dashboard },
    ],
  },
];

export function InventorySidebar() {
  return (
    <aside className="flex flex-col h-full">
      <nav className="flex-1 space-y-5 px-2">
        {SECTIONS.map((section) => (
          <div key={section.title}>
            <p className="text-[10px] font-bold text-[#867275] uppercase tracking-widest mb-3">
              {section.title}
            </p>
            <div className="space-y-0.5">
              {section.items.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 text-left ${
                      isActive
                        ? "bg-[#E8839A] text-[#671c32] font-bold shadow-sm"
                        : "text-[#544245] hover:bg-[#F5DCE9]/50"
                    }`
                  }
                >
                  {item.icon}
                  <span className="text-[14px] font-medium">{item.label}</span>
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </nav>

      <div className="mt-auto pt-4 border-t border-[#E5E7EB] px-2 space-y-1">
        <button className="w-full flex items-center gap-3 px-4 py-2.5 text-[#984258] bg-[#984258]/5 hover:bg-[#984258]/10 rounded-lg font-bold transition-all text-left">
          <PlusCircle size={18} />
          <span className="text-[14px] font-medium">Registrar Producto</span>
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-2.5 text-[#544245] hover:bg-[#F5DCE9]/50 rounded-lg transition-all text-left">
          <HelpCircle size={18} aria-hidden="true" />
          <span className="text-[14px] font-medium">Centro de ayuda</span>
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-2.5 text-[#544245] hover:bg-[#F5DCE9]/50 rounded-lg transition-all text-left">
          <LogOut size={18} aria-hidden="true" />
          <span className="text-[14px] font-medium">Cerrar sesión</span>
        </button>
      </div>
    </aside>
  );
}
