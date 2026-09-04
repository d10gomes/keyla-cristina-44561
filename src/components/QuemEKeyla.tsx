import { quemCards } from "../data/content";
import foto1 from "../assets/quem-01-familia.webp";
import foto2 from "../assets/quem-02-chapada.webp";
import foto3 from "../assets/quem-03-pessoas.webp";
import foto4 from "../assets/quem-04-trajetoria.webp";
import foto5 from "../assets/quem-05-futuro.webp";
import foto6 from "../assets/quem-06-agora-e-ela.webp";

const FOTOS = [foto1, foto2, foto3, foto4, foto5, foto6];

export default function QuemEKeyla() {
  return (
    <section className="bg-white dark:bg-brand-ink py-12 sm:py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-5">
        <div className="text-center mb-8 sm:mb-10">
          <p className="uppercase tracking-widest text-[#c12974] dark:text-brand-yellow-500 font-semibold text-xs sm:text-sm mb-3">
            <span className="rounded-full bg-[#c12974]/10 dark:bg-white/10 px-3.5 sm:px-4 py-1.5">
              Quem é Keyla
            </span>
          </p>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl mb-3 leading-tight text-[#7a1550] dark:text-white">
            A pessoa por trás da candidata
          </h2>
          <p className="text-sm sm:text-base text-[#2b1420]/70 dark:text-white/70 max-w-xl mx-auto">
            Mãe, esposa e uma vida inteira dedicada a servir a Chapada Diamantina.
          </p>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-4 sm:px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {quemCards.map((card, i) => (
          <div
            key={card.titulo}
            className="snap-center shrink-0 w-[84%] max-w-[340px] sm:w-[30%] sm:min-w-[280px] bg-white dark:bg-white/5 rounded-2xl overflow-hidden border border-[#e5e4e7] dark:border-white/15 shadow-lg shadow-black/5 flex flex-col"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={FOTOS[i]}
                alt={card.alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <span className="absolute top-3.5 left-3.5 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wide text-[#7a1550]">
                {card.tag}
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-display font-bold text-lg mb-1.5 text-[#7a1550] dark:text-white">
                {card.titulo}
              </h3>
              <p className="text-[#2b1420]/70 dark:text-white/70 text-sm leading-relaxed">
                {card.texto}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8 sm:mt-10">
        <a
          href="https://www.instagram.com/keyla.baofc/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white font-display font-bold text-sm px-6 py-3 rounded-full hover:brightness-105 active:scale-[0.98] transition"
          style={{ background: "linear-gradient(135deg, #c12974, #8a2ba8 55%, #2a6fd8)" }}
        >
          Seguir Keyla no Instagram
        </a>
      </div>
    </section>
  );
}
