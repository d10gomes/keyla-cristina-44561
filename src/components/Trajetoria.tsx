import { trajetoria } from "../data/content";

export default function Trajetoria() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#5c7a2e] to-[#83af47] text-white py-12 sm:py-16 md:py-20">
      <div className="pointer-events-none absolute -top-20 -left-20 w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-[#f2b705]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-16 w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-[#7a1550]/20 blur-3xl" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-5">
        <p className="uppercase tracking-widest text-[#f2b705] font-semibold text-xs sm:text-sm mb-3 text-center">
          <span className="rounded-full bg-white/10 px-3.5 sm:px-4 py-1.5">Uma trajetória, não uma promessa</span>
        </p>
        <h2 className="font-display font-extrabold text-xl sm:text-3xl md:text-4xl text-center mb-8 sm:mb-12 leading-tight">
          De professora a presidente da Câmara.
          <br />
          Sempre do lado de quem precisa.
        </h2>

        <div className="relative pl-6 sm:pl-8 space-y-6 sm:space-y-8 border-l-2 border-white/25">
          {trajetoria.map((marco) => (
            <div key={marco.titulo} className="relative">
              <span className="absolute -left-[29px] sm:-left-[37px] top-0.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#f2b705] ring-4 ring-[#5c7a2e]" />
              <p className="uppercase tracking-wide text-[11px] sm:text-xs font-bold text-[#f2b705] mb-1">
                {marco.ano}
              </p>
              <h3 className="font-display font-bold text-base sm:text-lg mb-1">{marco.titulo}</h3>
              <p className="text-white/85 text-sm sm:text-base">{marco.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
