export const CONTACT = {
  whatsappNumber: "51982490463",
  whatsappMessage: "Hola, quiero más información sobre sus zapatos.",
  socials: {
    tiktok: "https://www.tiktok.com/@calzadosmila",
    instagram: "https://www.instagram.com/calzadosmila/",
    handle: "@calzadosmila",
  },
} as const;

export function whatsappLink(number = CONTACT.whatsappNumber, text = CONTACT.whatsappMessage): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
