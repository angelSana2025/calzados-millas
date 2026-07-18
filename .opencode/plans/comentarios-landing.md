# Plan: Comentar código anterior de la Landing Page

## Objetivo
Preservar el código previo a los ajustes como comentarios en español preciso,
para que se entienda qué había antes y por qué cambió.

---

## Archivo 1: `src/features/landing/pages/LandingPage.view.tsx`

### 1.1 Import de `useEffect` — nuevo
```tsx
import { useEffect } from "react";
```
No reemplaza nada, es agregado. Sin comentario.

### 1.2 Logo eliminado del navbar (líneas 36-66)
**Dónde:** Entre el `<div>` de iconos sociales y el `<div>` de nav+acciones.

**Comentario a insertar:**
```tsx
{/* ANTES: Logo "Milas CALZADOS" estaba centrado entre redes sociales y navegación
<Link to="/" className="flex flex-col items-center leading-none">
  <span className="font-display text-2xl text-[#2a1e22] italic leading-none">Milas</span>
  <span className="font-['Montserrat',sans-serif] text-[9px] text-[#2a1e22] tracking-[0.4em] mt-0.5 font-semibold">CALZADOS</span>
</Link>
→ Se eliminó porque el mockup v5 (code.html) no tiene logo en el navbar.
  El branding "Milas" aparece solo como hero heading. */}
```

### 1.3 Scroll behavior — nuevo (useEffect)
No reemplaza nada. Sin comentario.

### 1.4 Hero background — reemplazado
**Dónde:** Líneas 70-76 (antes era un gradiente simple).

**Comentario a insertar antes de la línea 70:**
```tsx
{/* ANTES: Fondo hero con gradiente simple de 3 colores
<div className="absolute inset-0 z-0">
  <div className="absolute inset-0 bg-gradient-to-br from-[#fcf9f7] via-[#f0e8e0] to-[#e8dcd0]" />
  <div className="absolute inset-0 bg-gradient-to-r from-[#fcf9f7]/40 to-transparent" />
</div>
→ Reemplazado por .editorial-hero-bg (textura trama + gradiente 165°)
  + 3 spots de luz ambiental (spotlight superior, glow rosa, glow cálido). */}
```

### 1.5 Tercera shape orgánica — eliminada
**Dónde:** Entre las 2 shapes restantes (línea 82 cerró el div, antes había 3).

**Comentario a insertar dentro del div de organic shapes (línea 79):**
```tsx
{/* ANTES: Había una tercera shape orgánica
<div className="absolute top-[60%] left-[15%] w-48 h-48 organic-shape border border-[#a87c7c]/10 rotate-45" />
→ Eliminada para coincidir con mockup v5 (solo 2 shapes). */}
```

### 1.6 Glass card — padding, divider, slogan, botones
**Dónde:** Líneas 86-101.

**Comentario a insertar antes de la línea 86:**
```tsx
{/* ANTES: Glass card con padding mayor, divider decorativo y slogan
<div className="glass-card px-12 py-14 md:px-16 md:py-16 inline-block rounded-3xl text-center max-w-2xl w-full">
  <p className="font-['Montserrat',sans-serif] text-[13px] text-[#a87c7c] mb-5 uppercase tracking-[0.35em] font-light">· Nueva Temporada ·</p>
  <h1 className="font-display text-[clamp(3.5rem,12vw,7rem)] text-[#2a1e22] leading-[0.9] mb-2"><i>Milas</i></h1>
  <div className="w-12 h-[1px] bg-[#a87c7c]/30 mx-auto my-6" />
  <p className="font-['Montserrat',sans-serif] text-[15px] text-[#5a4d52] mb-10 leading-relaxed font-light italic max-w-sm mx-auto">Estilo que se nota en cada paso.</p>
  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <a href="#coleccion" className="bg-[#2a1e22] text-white font-['Montserrat',sans-serif] px-10 py-4 rounded-full text-[11px] hover:bg-[#a87c7c] transition-all uppercase tracking-[0.25em] font-semibold shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0">Ver Colección</a>
    <a href="#somos" className="bg-transparent border border-[#a87c7c]/40 text-[#2a1e22] font-['Montserrat',sans-serif] px-10 py-4 rounded-full text-[11px] hover:bg-[#2a1e22] hover:text-white hover:border-[#2a1e22] transition-all uppercase tracking-[0.25em] font-semibold">Nuestra Historia</a>
  </div>
</div>
→ Ajustado al mockup v5: padding px-10 py-12, sin divider, sin slogan,
  "Nueva Temporada" sin puntos, tracking 0.25em, botones text-xs,
  secundario con borde sólido #a87c7c y hover bg-[#f9f2f2]. */}
```

---

## Archivo 2: `src/features/landing/pages/LandingPage.tsx`

### 2.1 Prop `shoes` eliminada
**Dónde:** Líneas 1-9 (todo el archivo).

**Comentario a insertar al inicio:**
```tsx
/* ANTES: El container cargaba zapatos banner y los pasaba al view
import { useMemo } from "react";
import { getLandingSocialLinks, getSortedBannerShoes } from "../services/landing.service";
import type { BannerShoeLayer } from "../types";
import { LandingPageView } from "./LandingPage.view";

export function LandingPage() {
  const socialLinks = useMemo(() => getLandingSocialLinks(), []);
  const shoes = useMemo(() => getSortedBannerShoes(), []);
  return <LandingPageView socialLinks={socialLinks} shoes={shoes} />;
}
→ Se eliminó shoes porque el hero ya no usa composición de zapatos 3D.
  El modelo bannerShoe.model.ts se conserva para Fase 2 (Bento Grid). */
```

---

## Archivo 3: `src/features/landing/pages/LandingPage.css`

### 3.1 Archivo completamente reemplazado
**Dónde:** Línea 1 (única línea actual).

```css
/* ANTES: ~675 líneas de CSS para posicionamiento de zapatos 3D en el banner hero
   (.banner-shoe--back, .banner-shoe--left, .banner-shoe--right, .banner-shoe--center,
    .banner-scene, .banner-shoe-layer, .banner-shoe-img, media queries, etc.)
   → Se limpió porque el hero ya no usa composición de zapatos.
     El CSS de zapatos se conserva en style.css (líneas 158-280) para Fase 2 (Bento Grid). */
```

---

## Archivo 4: `src/style.css` — Sección Landing

### 4.1 Material Symbols opsz
**Dónde:** Línea 1106.

```css
/* ANTES: font-variation-settings: "FILL" 0, "wght" 300, "GRAD" 0, "opsz" 20;
   → Cambiado a opsz 24 para coincidir con mockup v5 (code.html línea 117). */
```

### 4.2 Button border-radius overrides — nuevo
No reemplaza nada. Sin comentario adicional.

### 4.3 `.landing-nav a` — nuevo
No reemplaza nada. Sin comentario adicional (ya tiene comentario explicativo).

### 4.4 Clases nuevas de Landing (líneas 1132-1173)
**Dónde:** Antes de `.glass-card` (línea 1132).

```css
/* ANTES: Estas clases no existían. Se agregaron para implementar
   el diseño del mockup v5 (glassmorphism + editorial).
   - .glass-card: fondo blanco 70% + backdrop-blur + borde semitransparente
   - .animate-hero-fade + @keyframes: animación fade-in + slide-up
   - .organic-shape: border-radius orgánico (60% 40% 30% 70%)
   - .product-shadow: drop-shadow difuso para imágenes de producto
   - .golden-thread-bg: patrón punteado decorativo (hilo dorado)
   - .editorial-hero-bg: textura trama + gradiente 165° editorial */
```

---

## Archivo 5: `index.html`

### 5.1 Google Fonts — agregadas
**Dónde:** Líneas 11-20.

```html
<!-- ANTES: Solo cargaba Playfair Display + Poppins (para login)
     Se agregaron: Montserrat (300-700) para textos landing,
     Material Symbols Outlined para iconos de interfaz. -->
```

---

## Resumen de cambios por archivo

| Archivo | Líneas | Cambio |
|---|---|---|
| `LandingPage.view.tsx` | ~106 | Logo eliminado, background reemplazado, glass card ajustada, scroll agregado |
| `LandingPage.tsx` | ~9 | Prop shoes eliminada |
| `LandingPage.css` | ~1 → ~675 | CSS vaciado (zapatos movidos a style.css para Fase 2) |
| `style.css` | ~1173 | +6 clases landing, +1 reset navbar, opsz 20→24 |
| `index.html` | ~26 | +Montserrat, +Material Symbols fonts |

Ningún cambio afecta a: login, inventory, orders, u otras páginas.
