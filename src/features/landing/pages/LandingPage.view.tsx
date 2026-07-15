import { useNavigate } from "react-router-dom";
import { BannerShoeImage } from "../components/BannerShoeImage";
import { InstagramIcon, TikTokIcon, WhatsAppIcon } from "../components/SocialIcons";
import type { BannerShoeLayer, LandingSocialLinks } from "../types";
import "./LandingPage.css";
import { ROUTES } from "@/core";

type LandingPageViewProps = {
  shoes: BannerShoeLayer[];
  socialLinks: LandingSocialLinks;
};

export function LandingPageView({ shoes, socialLinks }: LandingPageViewProps) {
   const  navigate =  useNavigate();


  return (
    <main className="landing-viewport landing-viewport--banner mila-landing landing-mobile-tight">
          <div className="mila-landing__card-header">
            <button onClick={() => {
              navigate(ROUTES.iniciarSession)
            }}     className="btn btn-primary">
                inicar session
            </button>
          </div>
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
            <p className="mila-landing__handle">{socialLinks.handle}</p>
            <div className="mila-landing__social-row">
              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mila-landing__social mila-landing__social--wa"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon size={22} />
              </a>
              <a
                href={socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="mila-landing__social mila-landing__social--tt"
                aria-label={`TikTok ${socialLinks.handle}`}
              >
                <TikTokIcon size={22} />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mila-landing__social mila-landing__social--ig"
                aria-label={`Instagram ${socialLinks.handle}`}
              >
                <InstagramIcon size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <a
        href={socialLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="mila-landing__fab"
        aria-label="WhatsApp"
      >
        <WhatsAppIcon size={26} />
      </a>
    </main>
  );
}
