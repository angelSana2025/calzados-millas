import { useState } from "react";
import { bannerShoes } from "../../../shared/data/inventory";
import type { BannerLayerRole, BannerShoeLayer } from "../../../shared/types/inventory";
import "./LandingPage.css";

const WHATSAPP_NUMBER = "51982490463";
const WHATSAPP_TEXT = encodeURIComponent("Hola, quiero más información sobre sus zapatos.");
const SOCIALS = {
  tiktok: "https://www.tiktok.com/@calzadosmila",
  instagram: "https://www.instagram.com/calzadosmila/",
};

const ICON = 22;

const LAYER_ORDER: Record<BannerLayerRole, number> = {
  back: 0,
  left: 1,
  right: 2,
  center: 3,
};

function TikTokIcon({ size = ICON }: { size?: number }) {
  return (
    <svg className="shrink-0" width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        fill="currentColor"
        d="M39.6 16.6a12.9 12.9 0 0 1-8.7-6.9v18.1a9 9 0 1 1-8.9-9c.7 0 1.4.1 2 .2v-6.3a15.4 15.4 0 0 0-2-.1 15.2 15.2 0 1 0 15.2 15.1V17a20.8 20.8 0 0 0 8.8 2.2v-6.2c-2 0-4.4-.7-6.4-2Z"
      />
    </svg>
  );
}

function InstagramIcon({ size = ICON }: { size?: number }) {
  return (
    <svg className="shrink-0" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9A4.5 4.5 0 0 1 16.5 21h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Z"
      />
      <path stroke="currentColor" strokeWidth="1.6" d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z" />
      <path fill="currentColor" d="M17.2 6.9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
    </svg>
  );
}

function BannerShoeImage({ shoe }: { shoe: BannerShoeLayer }) {
  const [src, setSrc] = useState(shoe.image);

  return (
    <img
      src={src}
      alt={shoe.alt}
      className="mila-landing__shoe-img"
      loading="eager"
      decoding="async"
      onError={() => {
        if (shoe.fallbackImage && src !== shoe.fallbackImage) {
          setSrc(shoe.fallbackImage);
        }
      }}
      {...(shoe.layer === "center" ? { fetchPriority: "high" as const } : {})}
    />
  );
}

function WhatsAppIcon({ size = ICON }: { size?: number }) {
  return (
    <svg className="shrink-0" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20.5 3.5A11 11 0 0 0 3.8 19.2L2 22l2.9-.8A11 11 0 1 0 20.5 3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M8.1 7.9c-.2-.5-.4-.4-.6-.4l-.5.1c-.2.1-.4.2-.5.5a4.2 4.2 0 0 0 .5 3.5c.6 1 1.7 2.4 3.4 3.3 2 1.1 2.4.9 2.8.8.5 0 1.4-.6 1.6-1.2.2-.6.2-1 .2-1.1 0-.1-.1-.2-.2-.3l-1-.5c-.2-.1-.3-.2-.5 0-.1.1-.5.6-.6.7-.1.1-.2.1-.4 0l-.3-.2a6.3 6.3 0 0 1-2-1.8c-.2-.2-.2-.3 0-.5l.3-.4c.1-.2.1-.3.2-.5 0-.2-.1-.4-.2-.5l-.7-1c-.2-.3-.4-.3-.6-.3Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function LandingPage() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`;
  const shoes = [...bannerShoes].sort((a, b) => LAYER_ORDER[a.layer] - LAYER_ORDER[b.layer]);

  return (
    <main className="landing-viewport landing-viewport--banner mila-landing landing-mobile-tight">
      <div className="mila-landing__card">
        <div className="mila-landing__bg-base" aria-hidden="true" />
        <div className="mila-landing__bg-blocks" aria-hidden="true">
          <div className="mila-landing__block mila-landing__block--dark-tl" />
          <div className="mila-landing__block mila-landing__block--light-tr" />
          <div className="mila-landing__block mila-landing__block--dark-br" />
          <div className="mila-landing__block mila-landing__block--light-bl" />
          <div className="mila-landing__ring mila-landing__ring--outer" />
          <div className="mila-landing__ring mila-landing__ring--inner" />
        </div>

        <div className="mila-landing__inner">
          <div className="mila-landing__badge">
            <span className="mila-landing__badge-dot" aria-hidden="true" />
            <span className="mila-landing__badge-text">NUEVA TEMPORADA - MODA FEMENINA</span>
          </div>

          <header className="mila-landing__header">
            <h1 className="mila-landing__title">
              <span className="mila-landing__title-script">Milas</span>
              <span className="mila-landing__title-caps">Calzados</span>
            </h1>
            <p className="mila-landing__slogan">Estilo que se nota en cada paso.</p>
          </header>

          <div className="mila-landing__stage-wrap">
            <div className="mila-landing__scene">
              {shoes.map((shoe) => (
                <div key={shoe.layer} className={`mila-landing__shoe mila-landing__shoe--${shoe.layer}`}>
                  <BannerShoeImage shoe={shoe} />
                </div>
              ))}
            </div>

            <div className="mila-landing__price">
              <p className="mila-landing__price-label">Colección favorita</p>
              <p className="mila-landing__price-amount">Desde solo S/.75</p>
              <p className="mila-landing__price-note">Precio accesible</p>
            </div>
          </div>

          <div className="mila-landing__follow">
            <p className="mila-landing__follow-label">Síguenos</p>
            <p className="mila-landing__handle">@calzadosmila</p>
            <div className="mila-landing__social-row">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mila-landing__social mila-landing__social--wa"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon size={22} />
              </a>
              <a
                href={SOCIALS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="mila-landing__social mila-landing__social--tt"
                aria-label="TikTok @calzadosmila"
              >
                <TikTokIcon size={22} />
              </a>
              <a
                href={SOCIALS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mila-landing__social mila-landing__social--ig"
                aria-label="Instagram @calzadosmila"
              >
                <InstagramIcon size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <a href={waLink} target="_blank" rel="noopener noreferrer" className="mila-landing__fab" aria-label="WhatsApp">
        <WhatsAppIcon size={26} />
      </a>
    </main>
  );
}
