export function EcommercePageView() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFF0F6] via-white to-[#FBE1EF]">
      <div className="text-center px-6">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#984258] flex items-center justify-center shadow-lg">
          <span className="text-3xl">🛍️</span>
        </div>
        <h1 className="text-[32px] font-bold text-[#251721] tracking-tight mb-3">
          Tienda en línea
        </h1>
        <p className="text-[#544245] text-[16px] max-w-md mx-auto leading-relaxed">
          Estamos preparando algo increíble para ti.
          <br />
          <span className="font-semibold text-[#984258]">Próximamente</span> podrás comprar nuestros productos directamente desde aquí.
        </p>
      </div>
    </section>
  );
}
