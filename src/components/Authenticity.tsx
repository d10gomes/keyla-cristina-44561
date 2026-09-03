import { bio } from "../data/content";
import { useLeadModal } from "../context/LeadModalContext";

export default function Authenticity() {
  const { openModal } = useLeadModal();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#7a1550] to-[#2b1420] text-white py-12 sm:py-16 md:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 flex">
        <span className="flex-1 bg-[#f2b705]" />
        <span className="flex-1 bg-[#83af47]" />
        <span className="flex-1 bg-[#c12974]" />
        <span className="flex-1 bg-[#5c7a2e]" />
      </div>

      <div className="relative max-w-2xl mx-auto px-4 sm:px-5 text-center">
        <p className="uppercase tracking-widest text-[#f2b705] font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
          <span className="rounded-full bg-white/10 px-3.5 sm:px-4 py-1.5">
            Quem faz o pedido
          </span>
        </p>
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 leading-tight">
          {bio.autenticidadeTitulo}
        </h2>
        <p className="text-white/85 text-sm sm:text-lg mb-6 sm:mb-8">{bio.autenticidadeTexto}</p>

        <button
          onClick={openModal}
          className="inline-flex items-center gap-2 bg-[#f2b705] text-[#7a1550] font-display font-bold text-sm sm:text-base px-7 py-3 rounded-full hover:brightness-95 active:scale-[0.98] transition"
        >
          Quero fazer parte
        </button>
      </div>
    </section>
  );
}
