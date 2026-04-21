import { heroProducts } from "../../../shared/data/inventory";

const WHATSAPP_NUMBER = "51982490463";
const WHATSAPP_TEXT = encodeURIComponent("Hola, quiero más información sobre sus zapatos.");
const SOCIALS = {
  tiktok: "https://www.tiktok.com/@calzadosmila",
  instagram: "https://www.instagram.com/calzadosmila/",
};

const ICON_IN_CIRCLE = 24;

function TikTokIcon({ size = ICON_IN_CIRCLE }: { size?: number }) {
  return (
    <svg
      className="shrink-0"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M39.6 16.6a12.9 12.9 0 0 1-8.7-6.9v18.1a9 9 0 1 1-8.9-9c.7 0 1.4.1 2 .2v-6.3a15.4 15.4 0 0 0-2-.1 15.2 15.2 0 1 0 15.2 15.1V17a20.8 20.8 0 0 0 8.8 2.2v-6.2c-2 0-4.4-.7-6.4-2Z"
      />
    </svg>
  );
}

function InstagramIcon({ size = ICON_IN_CIRCLE }: { size?: number }) {
  return (
    <svg
      className="shrink-0"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9A4.5 4.5 0 0 1 16.5 21h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Z"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.6"
        d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z"
      />
      <path fill="currentColor" d="M17.2 6.9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
    </svg>
  );
}

function WhatsAppIcon({ size = ICON_IN_CIRCLE }: { size?: number }) {
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

  return (
    <main className="landing-viewport landing-mobile-tight relative flex w-full flex-col items-stretch bg-gradient-to-br from-fuchsia-200/95 via-rose-200 to-amber-50 pt-[max(0px,env(safe-area-inset-top))] pl-[max(0px,env(safe-area-inset-left))] pr-[max(0px,env(safe-area-inset-right))] max-md:min-h-0 max-md:overflow-x-hidden md:min-h-0 md:flex-row md:overflow-hidden">
      <div className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-fuchsia-300/50 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-rose-300/60 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 right-1/4 h-64 w-64 rounded-full bg-amber-200/40 blur-3xl" />

      <aside className="relative z-20 flex w-full min-w-0 max-w-[100vw] flex-col items-center justify-center bg-gradient-to-b from-rose-400/85 via-rose-300/80 to-fuchsia-400/50 px-3 pb-3 pt-2 text-center max-md:min-h-0 max-md:flex-none max-md:shrink-0 max-md:overflow-visible md:h-full md:min-h-0 md:w-[35rem] md:flex-[1.02] md:overflow-hidden md:px-8 md:py-6 md:pb-6 md:pt-6 md:items-start md:text-left lg:px-10 lg:py-8">
        <div className="fade-up mx-auto flex w-full max-w-md min-h-0 flex-col gap-2 md:mx-0 md:max-w-lg md:gap-6 lg:gap-8">
          <header className="space-y-1 md:space-y-4 lg:space-y-5">
            <span className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-white/50 bg-white/75 px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.2em] text-rose-800 shadow-md backdrop-blur-sm md:gap-2 md:px-4 md:py-2 md:text-[10px] md:tracking-[0.28em]">
              <span className="h-1 w-1 shrink-0 animate-pulse rounded-full bg-rose-500 md:h-1.5 md:w-1.5" aria-hidden="true" />
              <span className="break-words text-balance sm:whitespace-normal">Nueva temporada · Moda femenina</span>
            </span>
            <div className="space-y-0 md:space-y-2">
              <h1 className="landing-title-calzado font-display text-3xl font-extrabold leading-[1.02] text-white sm:text-4xl md:text-6xl lg:text-7xl">
                CALZADO
              </h1>
              <h2 className="text-gradient-mila font-display text-2xl font-bold tracking-tight sm:text-3xl md:text-5xl lg:text-6xl">
                MILAS
              </h2>
              <p className="mx-auto max-w-sm font-display text-sm italic leading-snug text-rose-950/90 md:mx-0 md:text-lg lg:text-xl">
                Estilo que se nota en cada paso.
              </p>
            </div>
          </header>

          <div className="relative overflow-hidden rounded-2xl border border-white/80 bg-white/55 shadow-xl ring-1 ring-white/50 backdrop-blur-md md:rounded-3xl md:shadow-2xl md:ring-2">
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-fuchsia-400/30 to-rose-400/30 blur-2xl" />
            <div className="relative grid grid-cols-[1fr_auto] gap-0 sm:items-stretch">
              <div className="flex min-w-0 flex-col justify-center gap-1 border-r border-rose-200/60 px-2.5 py-2.5 text-left md:gap-3 md:border-rose-200/60 md:px-6 md:py-6 lg:py-7">
                <span className="inline-flex w-fit max-w-full items-center rounded-full bg-gradient-to-r from-rose-600 to-fuchsia-600 px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider text-white shadow-md md:px-3 md:py-1 md:text-[10px]">
                  Colección favorita
                </span>
                <p className="text-[11px] font-bold uppercase leading-snug tracking-[0.08em] text-rose-900 md:text-base md:tracking-[0.12em]">
                  Tu próximo par te está esperando
                </p>
                <p className="hidden text-sm font-medium leading-relaxed text-rose-800/90 sm:block">
                  Sandalias y calzado con la comodidad que buscas y el look que amas.
                </p>
              </div>
              <div className="landing-offer-pulse relative flex min-w-[5.5rem] flex-col items-center justify-center bg-gradient-to-br from-white via-rose-50 to-fuchsia-50 px-3 py-2.5 md:min-w-[10rem] md:px-8 md:py-6 lg:py-7">
                <p className="mb-0.5 text-[8px] font-bold uppercase tracking-[0.2em] text-rose-600 md:mb-1 md:text-[10px] md:tracking-[0.35em]">
                  Desde solo
                </p>
                <p className="font-display text-2xl font-extrabold tabular-nums text-transparent bg-clip-text bg-gradient-to-br from-rose-600 via-fuchsia-600 to-rose-700 md:text-4xl lg:text-[2.85rem]">
                  S/.75
                </p>
                <p className="mt-1 text-center text-[9px] font-semibold text-rose-700/90 md:mt-2 md:text-[11px]">Precio accesible</p>
              </div>
            </div>
          </div>

          <div className="flex min-h-0 w-full flex-col items-center gap-1.5 md:gap-5">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-glow cta-glow-strong mx-auto inline-flex w-fit max-w-full shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 px-5 py-2 text-xs font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:from-emerald-400 hover:to-green-500 sm:px-6 sm:py-2.5 sm:text-sm md:px-7 md:py-3"
            >
              <WhatsAppIcon size={20} />
              ¡Cotiza por WhatsApp!
            </a>
            <p className="max-w-sm text-center text-[10px] font-medium leading-tight text-white/95 md:text-xs">
              Te respondemos al instante · sin compromiso · también en tienda
            </p>

            <div className="w-full border-t border-white/35 pb-1 pt-2 md:pb-0 md:pt-5">
              <p className="mb-1.5 text-center text-[9px] font-bold uppercase tracking-[0.12em] text-white drop-shadow-sm md:mb-3 md:text-xs md:tracking-[0.18em]">
                Síguenos · Calzados Mila
              </p>
              <div className="flex flex-col items-center gap-2.5">
                <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md ring-2 ring-white/30 transition hover:-translate-y-0.5 hover:bg-[#20bd5a] hover:shadow-lg md:h-11 md:w-11"
                    aria-label="Abrir WhatsApp"
                  >
                    <WhatsAppIcon size={22} />
                  </a>
                  <a
                    href={SOCIALS.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-white shadow-md ring-2 ring-white/20 transition hover:-translate-y-0.5 hover:bg-black hover:shadow-lg md:h-11 md:w-11"
                    aria-label="TikTok @calzadosmila"
                  >
                    <TikTokIcon size={22} />
                  </a>
                  <a
                    href={SOCIALS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white shadow-md ring-2 ring-white/30 transition hover:-translate-y-0.5 hover:brightness-105 hover:shadow-lg md:h-11 md:w-11"
                    aria-label="Instagram @calzadosmila"
                  >
                    <InstagramIcon size={22} />
                  </a>
                </div>
                <span className="text-gradient-mila text-center text-sm font-bold md:text-base">@calzadosmila</span>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <section className="relative w-full min-w-0 max-w-[100vw] border-t border-white/15 max-md:flex-none md:h-full md:min-h-0 md:flex-1 md:border-t-0">
        <div className="relative w-full min-w-0 max-md:h-auto md:h-full md:min-h-0">
          <div className="grid grid-cols-2 gap-2.5 px-2 pb-[calc(6.5rem+env(safe-area-inset-bottom,0px))] pt-3 md:hidden">
            {heroProducts.map((product, i) => (
              <div
                key={product.id}
                className="product-card aspect-square w-full overflow-hidden rounded-xl border-2 border-white/80 bg-white shadow-lg"
              >
                <div className={`h-full w-full ${product.float}`}>
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="hero-photo h-full w-full object-cover object-[center_38%]"
                    loading={i < 2 ? "eager" : "lazy"}
                    decoding="async"
                    {...(i === 0 ? { fetchPriority: "high" as const } : {})}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="hidden h-full min-h-0 md:block">
            {heroProducts.map((product, i) => (
              <div
                key={product.id}
                className={`${product.pos} ${product.tilt} product-card h-56 w-56 overflow-hidden rounded-2xl border-4 border-white/80 bg-white shadow-xl`}
              >
                <div className={`h-full w-full ${product.float}`}>
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="hero-photo h-full w-full object-cover object-[center_38%]"
                    loading={i < 3 ? "eager" : "lazy"}
                    decoding="async"
                    {...(i === 0 ? { fetchPriority: "high" as const } : {})}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl ring-2 ring-white/35 transition hover:-translate-y-0.5 hover:bg-[#20bd5a] md:bottom-5 md:right-5 md:h-14 md:w-14"
      >
        <WhatsAppIcon size={26} />
      </a>
    </main>
  );
}
