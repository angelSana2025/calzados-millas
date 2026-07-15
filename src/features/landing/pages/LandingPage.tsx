import { useMemo } from "react";
import { getLandingSocialLinks, getSortedBannerShoes } from "../services/landing.service";
import { LandingPageView } from "./LandingPage.view";

/** Contenedor: datos → vista (JSX) */
export function LandingPage() {
  const shoes = useMemo(() => getSortedBannerShoes(), []);
  const socialLinks = useMemo(() => getLandingSocialLinks(), []);

  return <LandingPageView shoes={shoes} socialLinks={socialLinks} />;
}
