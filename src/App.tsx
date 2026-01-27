// Formato: código de país + número (solo dígitos, sin "+" ni espacios). Perú = 51
const WHATSAPP_NUMBER = "51982490463";
const WHATSAPP_TEXT = encodeURIComponent("¡Hola! Quiero más información.");

const SOCIALS = {
  tiktok: "https://www.tiktok.com/@calzadosmila",
};

type Product = {
  id: number;
  image: string;
  alt: string;
  pos: string;
};

function TikTokIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        fill="currentColor"
        d="M39.6 16.6a12.9 12.9 0 0 1-8.7-6.9v18.1a9 9 0 1 1-8.9-9c.7 0 1.4.1 2 .2v-6.3a15.4 15.4 0 0 0-2-.1 15.2 15.2 0 1 0 15.2 15.1V17a20.8 20.8 0 0 0 8.8 2.2v-6.2c-2 0-4.4-.7-6.4-2Z"
      />
    </svg>
  );
}

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
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

export default function App() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`;

  // Placeholder: por ahora uso tu imagen actual para que se vea bien.
  // Si luego subes /public/product-1.jpg ... /product-6.jpg, cambia estas rutas.
  const placeholder = "/images/WhatsApp%20Image%202025-11-27%20at%2014.35.26.jpeg";

  const products: Product[] = [
    { id: 1, image: placeholder, alt: "Sandalia", pos: "absolute top-12 left-64" },
    { id: 2, image: placeholder, alt: "Taco", pos: "absolute top-12 right-32" },
    { id: 3, image: placeholder, alt: "Sandalia", pos: "absolute top-56 left-96" },
    { id: 4, image: placeholder, alt: "Bota", pos: "absolute top-96 left-72" },
    { id: 5, image: placeholder, alt: "Sandalia", pos: "absolute top-[26rem] left-[38rem]" },
    { id: 6, image: placeholder, alt: "Taco", pos: "absolute top-96 right-40" },
  ];

  return (
    <main className="relative flex min-h-screen w-full flex-col items-stretch bg-gradient-to-r from-rose-300 to-rose-200 md:flex-row">
      {/* Left Side */}
      <aside className="relative z-20 flex w-full flex-col items-center justify-center bg-rose-300 px-6 py-10 md:w-[20rem] md:px-8">
        <div className="text-center">
          <h1 className="mb-2 text-5xl font-black leading-tight tracking-[3px] text-white md:text-6xl">MILAS</h1>
          <h2 className="mb-8 text-4xl font-black text-gray-800 md:text-5xl">CALZADOS</h2>

          <div className="mb-8 inline-block rounded-lg bg-white/30 px-6 py-4 backdrop-blur">
            <p className="text-xs font-bold uppercase tracking-widest text-white">Tus zapatos favoritos</p>
          </div>

          <div className="mb-6 inline-block rounded-lg bg-white/90 px-6 py-4">
            <p className="mb-2 text-xs font-bold text-rose-900">Desde</p>
            <p className="text-4xl font-black text-rose-600">S/.99</p>
          </div>

          <div className="mb-6">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-5 py-3 font-bold text-white shadow-lg transition hover:bg-green-600"
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
          </div>

          <p className="text-xs font-bold uppercase leading-5 tracking-widest text-white">
            Encuéntralos en
            <br />
            tu tienda cercana
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href={SOCIALS.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-black px-4 py-2 text-white shadow-md transition hover:bg-neutral-900"
              aria-label="TikTok"
            >
              <TikTokIcon />
              <span className="text-sm font-bold">@calzadosmila</span>
            </a>
          </div>
        </div>
      </aside>

      {/* Right Side - Products */}
      <section className="relative flex-1">
        <div className="relative h-full w-full">
          {/* Mobile: grid */}
          <div className="grid grid-cols-2 gap-4 p-5 md:hidden">
            {products.map((product) => (
              <div
                key={product.id}
                className="aspect-square overflow-hidden rounded-lg border-4 border-white bg-white shadow-xl"
              >
                <img src={product.image} alt={product.alt} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>

          {/* Desktop: posiciones absolutas */}
          <div className="hidden md:block">
            {products.map((product) => (
              <div
                key={product.id}
                className={`${product.pos} h-52 w-52 overflow-hidden rounded-lg border-4 border-white bg-white shadow-xl`}
              >
                <img src={product.image} alt={product.alt} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-green-500 text-white shadow-xl transition hover:bg-green-600"
      >
        <WhatsAppIcon size={26} />
      </a>
    </main>
  );
}


