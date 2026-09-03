import { territorioItems, territorioFrases } from "../data/content";
import foto1 from "../assets/territorio-01.webp";
import foto2 from "../assets/territorio-02.webp";
import foto3 from "../assets/territorio-03.webp";
import foto4 from "../assets/territorio-04.webp";
import foto5 from "../assets/territorio-05.webp";
import foto6 from "../assets/territorio-06.webp";
import foto7 from "../assets/territorio-07.webp";
import foto8 from "../assets/territorio-08.webp";
import foto9 from "../assets/territorio-09.webp";
import foto10 from "../assets/territorio-10.webp";

const FOTOS = [foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8, foto9, foto10];

export default function Territorio() {
  return (
    <section
      id="territorio"
      className="relative overflow-hidden bg-gradient-to-b from-[#83af47] to-[#5c7a2e] text-white py-12 sm:py-16 md:py-24 scroll-mt-24"
    >
      <div className="relative max-w-5xl mx-auto px-4 sm:px-5">
        <div className="text-center mb-8 sm:mb-10">
          <p className="uppercase tracking-widest text-[#f2b705] font-semibold text-xs sm:text-sm mb-3">
            <span className="rounded-full bg-white/10 px-3.5 sm:px-4 py-1.5">
              Presença no território
            </span>
          </p>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl mb-3 leading-tight">
            Estar perto também é cuidar.
          </h2>
          <p className="text-sm sm:text-base text-white/85 max-w-xl mx-auto">
            Visitas, festas, encontros e conversas com o povo da Chapada e do interior da Bahia.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 sm:gap-3">
          {territorioItems.map((item, i) => (
            <div
              key={item.legenda}
              className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-lg shadow-black/20 group"
            >
              <img
                src={FOTOS[i]}
                alt={item.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent text-white text-[11px] sm:text-xs font-bold px-2.5 pt-6 pb-2">
                {item.legenda}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2.5 justify-center mt-8">
          {territorioFrases.map((frase) => (
            <span
              key={frase}
              className="bg-white/15 border border-white/35 backdrop-blur px-4 py-2 rounded-full text-sm font-bold"
            >
              {frase}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
