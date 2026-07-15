import { CONTACT, whatsappLink } from "@/core";
import { bannerShoes } from "../models/bannerShoe.model";
import type { BannerLayerRole, BannerShoeLayer, LandingSocialLinks } from "../types";

const BANNER_LAYER_ORDER: Record<BannerLayerRole, number> = {
  back: 0,
  left: 1,
  right: 2,
  center: 3,
};

export function getSortedBannerShoes(): BannerShoeLayer[] {
  return [...bannerShoes].sort(
    (a, b) => BANNER_LAYER_ORDER[a.layer] - BANNER_LAYER_ORDER[b.layer],
  );
}

export function getLandingSocialLinks(): LandingSocialLinks {
  return {
    whatsapp: whatsappLink(),
    tiktok: CONTACT.socials.tiktok,
    instagram: CONTACT.socials.instagram,
    handle: CONTACT.socials.handle,
  };
}
