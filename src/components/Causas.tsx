import { HeartHandshake, Soup, Wheat, CarFront, type LucideIcon } from "lucide-react";
import { causas } from "../data/content";

const ICONS: Record<string, LucideIcon> = {
  "heart-handshake": HeartHandshake,
  soup: Soup,
  wheat: Wheat,
  "car-front": CarFront,
};

const CORES = [
  "bg-[#7a1550] text-[#f2b705]",
  "bg-[#5c7a2e] text-white",
  "bg-[#c12974] text-white",
  "bg-[#83af47] text-white",
];

export default function Causas() {
  return (
    <section id="causas" className="bg-[#fdf6fa] dark:bg-brand-ink py-12 sm:py-16 md:py-24 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-5">
        <p className="uppercase tracking-widest text-[#c12974] dark:text-brand-yellow-500 font-semibold text-xs sm:text-sm mb-3 text-center">
          <span className="rounded-full bg-[#c12974]/10 dark:bg-white/10 px-3.5 sm:px-4 py-1.5">
            Causas e projetos
          </span>
        </p>
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-center mb-3 sm:mb-4 leading-tight text-[#7a1550] dark:text-white">
          Projetos que já mudam a vida de Iraquara.
        </h2>
        <p className="text-center text-sm sm:text-base text-[#2b1420]/70 dark:text-white/70 max-w-2xl mx-auto mb-8 sm:mb-12">
          Antes de propor para a Bahia, Keyla já fez acontecer na sua própria cidade.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {causas.map((c, i) => {
            const Icon = ICONS[c.icone];
            return (
              <div
                key={c.titulo}
                className="rounded-2xl border border-[#e5e4e7] dark:border-white/15 bg-white dark:bg-white/5 p-5 sm:p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${CORES[i % CORES.length]}`}
                >
                  <Icon size={22} strokeWidth={2.2} />
                </div>
                <h3 className="font-display font-bold text-lg mb-2 text-[#7a1550] dark:text-white">
                  {c.titulo}
                </h3>
                <p className="text-[#2b1420]/70 dark:text-white/70 text-sm leading-relaxed">{c.texto}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
