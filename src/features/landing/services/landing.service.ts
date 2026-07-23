import { CONTACT, whatsappLink } from "@/core";
import type { LandingSocialLinks } from "../types";

export function getLandingSocialLinks(): LandingSocialLinks {
  return {
    whatsapp: whatsappLink(),
    tiktok: CONTACT.socials.tiktok,
    instagram: CONTACT.socials.instagram,
    handle: CONTACT.socials.handle,
  };
}
