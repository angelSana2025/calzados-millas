import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { InstagramIcon, TikTokIcon, WhatsAppIcon } from "../components/SocialIcons";
import type { LandingSocialLinks } from "../types";
import { ROUTES } from "@/core";

type LandingPageViewProps = {
  socialLinks: LandingSocialLinks;
};

export function LandingPageView({ socialLinks }: LandingPageViewProps) {
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (!navbar) return;

    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add("py-2");
        navbar.classList.remove("py-4");
      } else {
        navbar.classList.add("py-4");
        navbar.classList.remove("py-2");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-[#fcf9f7] text-[#2a1e22] min-h-screen selection:bg-[#fcebeb] selection:text-[#2a1e22]">

      {/*═════════════════════════════════════════════════════
      Fondo de encabezado 
      ═════════════════════════════════════════════════════*/}

      <div className="fixed inset-0 pointer-events-none -z-10 golden-thread-bg" />

      {/*═════════════════════════════════════════════════════ 
      Menu de encabezado 
      ═════════════════════════════════════════════════════*/}

      <header id="navbar" className="bg-[#fcf9f7]/70 backdrop-blur-md sticky top-0 z-50 border-b border-[rgba(168,124,124,0.2)] shadow-sm transition-all duration-300 landing-nav">
        <div className="flex justify-between items-center px-8 max-w-[1152px] mx-auto py-4">
          
          {/*══════════════════ 
          Iconos - Redes sociales 
          ══════════════════*/}

          <div className="hidden md:flex items-center gap-6">
            <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="text-[#5a4d52] hover:text-[#a87c7c] transition-all" aria-label="WhatsApp">
              <WhatsAppIcon size={20} />
            </a>
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-[#5a4d52] hover:text-[#a87c7c] transition-all" aria-label="Instagram">
              <InstagramIcon size={20} />
            </a>
            <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" className="text-[#5a4d52] hover:text-[#a87c7c] transition-all" aria-label="TikTok">
              <TikTokIcon size={20} />
            </a>
          </div>

          <div className="flex items-center gap-6">
            <nav className="hidden lg:flex items-center gap-8 mr-4">
              <a href="#coleccion" className="font-['Montserrat',sans-serif] text-[10px] text-[#2a1e22] border-b border-[#2a1e22] pb-1 tracking-[0.3em] font-semibold uppercase transition-all">Colección</a>
              <a href="#somos" className="font-['Montserrat',sans-serif] text-[10px] text-[#5a4d52] hover:text-[#a87c7c] tracking-[0.3em] font-semibold uppercase transition-all">Somos</a>
              <Link to={ROUTES.iniciarSession} className="font-['Montserrat',sans-serif] text-[10px] text-[#5a4d52] hover:text-[#a87c7c] tracking-[0.3em] font-semibold uppercase transition-all">Login</Link>
            </nav>

            {/* ═══════════════════════════════════════════════════════════════
               BOTONES DEL NAVBAR — Guía de ajustes visuales
               
               bg-[color]        → Fondo del botón.   Ej: bg-[#2a1e22], bg-[#a87c7c]
               hover:bg-[color]  → Color al pasar mouse. hover:bg-[#a87c7c], hover:bg-[#2a1e22]
               text-[color]      → Color del texto.   text-white, text-[#2a1e22]
               px-? py-?         → Padding. px-6 py-2 = 24px horiz, 8px vert. px-8 py-3 = más grande
               rounded-?         → Borde. rounded-full = pastilla, rounded-xl = esquina suave,
                                    rounded-lg = poco, rounded-none = recto
               text-?            → Tamaño fuente. text-xs=12px, text-[10px]=custom, text-sm=14px
               font-?            → Peso. font-semibold=600, font-bold=700, font-medium=500
               tracking-?        → Espaciado letras. tracking-widest, tracking-wide, tracking-[0.15em]
               shadow-?          → Sombra. shadow-md, shadow-lg, shadow-xl, shadow-none
               transition-?      → Animación. transition-colors=solo colores, transition-all=todo
               
               Para cambiar un valor, reemplazar la clase Tailwind o el hex entre corchetes.
               ═══════════════════════════════════════════════════════════════ */}

            <div className="flex items-center gap-4">
              <button className="flex items-center justify-center text-[#2a1e22]" aria-label="Buscar"><Search size={20} /></button>
              <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer"
                className={
                  "bg-[#2a1e22]" +           /* Fondo: marrón oscuro. Cambiar hex por otro color */
                  " text-white" +             /* Texto blanco. text-[#color] para tono personalizado */
                  " font-['Montserrat',sans-serif]" +
                  " px-6 py-2" +             /* Padding. px-8 py-3 = más grande, px-4 py-1.5 = más chico */
                  " rounded-full" +          /* Borde pastilla. rounded-xl = esquina suave */
                  " text-[10px]" +           /* Tamaño. text-xs=12, text-sm=14, text-[11px]=custom */
                  " hover:bg-[#a87c7c]" +    /* Hover: rosa tierra. Cambiar hex por otro tono */
                  " transition-colors" +     /* transition-all = anima sombra/posición también */
                  " uppercase" +
                  " tracking-widest" +       /* tracking-wide = menos espacio */
                  " font-semibold" +          /* font-bold = negrita, font-medium = normal */
                  ""
                }
              >
                Consulta Ahora!
              </a>
              <Link to={ROUTES.ecommerce}
                className={
                  "bg-[#2a1e22]" +           /* Fondo: marrón oscuro */
                  " text-white" +
                  " font-['Montserrat',sans-serif]" +
                  " px-6 py-2" +
                  " rounded-full" +
                  " text-[10px]" +
                  " hover:bg-[#a87c7c]" +
                  " transition-colors" +
                  " uppercase" +
                  " tracking-widest" +
                  " font-semibold" +
                  " shadow-md" +              /* Sombra suave. shadow-lg=media, shadow-xl=grande, shadow-none=sin */
                  " hover:shadow-xl"          /* Sombra crece al pasar mouse */
                }
              >
                COMPRA AQUÍ
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/*═════════════════════════════════════════════════════
       Seccion - Hero 
       ═════════════════════════════════════════════════════*/}

      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
       
        {/*══════════════════
         Editorial background — CSS gradients + texture 
         ══════════════════*/}

        <div className="editorial-hero-bg absolute inset-0 z-0" />
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.35)_0%,transparent_70%)]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(168,124,124,0.06)_0%,transparent_60%)]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(200,175,165,0.04)_0%,transparent_60%)]" />
        </div>

        {/*══════════════════
         Formas orgánicas 
         ══════════════════*/}

        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute top-1/4 -left-20 w-96 h-96 organic-shape border border-[#a87c7c]/20 rotate-12" />
          <div className="absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] organic-shape border border-[#a87c7c]/20 -rotate-12" />
        </div>
    

        {/*══════════════════
         Tarjeta con efecto Glass
         ══════════════════*/}

        <div className="relative z-10 max-w-[1152px] mx-auto px-8 text-center">
          <div className="glass-card px-10 py-12 inline-block rounded-3xl animate-hero-fade">
            <p className="font-['Montserrat',sans-serif] text-[14px] text-[#a87c7c] mb-4 uppercase tracking-[0.25em] font-light">
              Nueva Temporada
            </p>
            <h1 className="font-display text-[clamp(72px,10vw,96px)] text-[#2a1e22] leading-[0.9] mb-8">
              <i>Milas</i>
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#coleccion" className="bg-[#2a1e22] text-white font-['Montserrat',sans-serif] px-10 py-4 rounded-full text-xs hover:bg-[#a87c7c] transition-all uppercase tracking-widest font-semibold shadow-xl">
                Ver Colección
              </a>
              <a href="#somos" className="bg-transparent border border-[#a87c7c] text-[#2a1e22] font-['Montserrat',sans-serif] px-10 py-4 rounded-full text-xs hover:bg-[#f9f2f2] transition-all uppercase tracking-widest font-semibold">
                Nuestra Historia
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
