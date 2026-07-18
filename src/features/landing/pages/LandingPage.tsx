/* ═══════════════════════════════════════════════════════════════
   ANTES: El container cargaba los zapatos 3D del banner y los
   pasaba al view para la composición hero con 4 zapatos superpuestos.
   
   import { useMemo } from "react";
   import { getLandingSocialLinks, getSortedBannerShoes } from "../services/landing.service";
   import type { BannerShoeLayer } from "../types";
   import { LandingPageView } from "./LandingPage.view";
   
   export function LandingPage() {
     const socialLinks = useMemo(() => getLandingSocialLinks(), []);
     const shoes = useMemo(() => getSortedBannerShoes(), []);
     return <LandingPageView socialLinks={socialLinks} shoes={shoes} />;
   }
   
   → Se eliminó "shoes" porque el hero ya no usa la composición de
     zapatos 3D. El modelo bannerShoe.model.ts se conserva para la
     Fase 2 (Bento Grid de productos).
   ═══════════════════════════════════════════════════════════════ */

import { useMemo } from "react";
import { getLandingSocialLinks } from "../services/landing.service";
import { LandingPageView } from "./LandingPage.view";

export function LandingPage() {
  const socialLinks = useMemo(() => getLandingSocialLinks(), []);

  return <LandingPageView socialLinks={socialLinks} />;
}
