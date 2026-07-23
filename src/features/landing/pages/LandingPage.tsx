import { useMemo } from "react";
import { getLandingSocialLinks } from "../services/landing.service";
import { LandingPageView } from "./LandingPage.view";

export function LandingPage() {
  const socialLinks = useMemo(() => getLandingSocialLinks(), []);

  return <LandingPageView socialLinks={socialLinks} />;
}
