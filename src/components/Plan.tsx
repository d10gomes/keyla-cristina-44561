import { useState } from "react";
import {
  ChevronDown,
  HeartPulse,
  GraduationCap,
  Drama,
  Volleyball,
  Route,
  Droplet,
  MapPin,
  type LucideIcon,
} from "lucide-react";
import { eixos, prioridades, type Eixo, type Proposta } from "../data/content";

const ICONS: Record<string, LucideIcon> = {
  "heart-pulse": HeartPulse,
  "graduation-cap": GraduationCap,
  drama: Drama,
  volleyball: Volleyball,
  route: Route,
  droplet: Droplet,
  "map-pin": MapPin,
};

const ICON_BG = [
  "bg-[#c12974]/10 text-[#c12974]",
  "bg-[#2a6fd8]/10 text-[#2a6fd8]",
  "bg-[#83af47]/15 text-[#5c7a2e]",
  "bg-[#c12974]/10 text-[#c12974]",
  "bg-[#2a6fd8]/10 text-[#2a6fd8]",
  "bg-[#83af47]/15 text-[#5c7a2e]",
  "bg-[#c12974]/10 text-[#c12974]",
];

function PropostaCard({ proposta }: { proposta: Proposta }) {
  return (
    <div className="bg-[#fdf6fa] dark:bg-white/5 rounded-xl p-4 border border-[#e5e4e7] dark:border-white/15">
      <h4 className="font-display font-bold text-base text-[#7a1550] dark:text-white mb-2.5">
        {proposta.titulo}
      </h4>
      {proposta.problema && (
        <>
          <p className="text-[10px] font-bold uppercase tracking-wide text-[#c12974] mb-1">
            O problema
          </p>
          <p className="text-[#2b1420]/70 dark:text-white/70 text-sm mb-2.5">{proposta.problema}</p>
        </>
      )}
      <p className="text-[10px] font-bold uppercase tracking-wide text-[#c12974] mb-1">
        O objetivo
      </p>
      <p className="text-[#2b1420]/70 dark:text-white/70 text-sm">{proposta.objetivo}</p>
      {proposta.comoFunciona && (
        <>
          <p className="text-[10px] font-bold uppercase tracking-wide text-[#c12974] mt-2.5 mb-1">
            Como pode funcionar
          </p>
          <ul className="list-disc pl-4 space-y-0.5">
            {proposta.comoFunciona.map((item) => (
              <li key={item} className="text-[#2b1420]/70 dark:text-white/70 text-sm">
                {item}
              </li>
            ))}
          </ul>
        </>
      )}
      <p className="mt-3 pl-3 border-l-2 border-[#c12974] font-display italic text-sm text-[#2b1420] dark:text-white/90">
        "{proposta.frase}"
      </p>
    </div>
  );
}

function EixoCard({ eixo, cor }: { eixo: Eixo; cor: string }) {
  const [aberto, setAberto] = useState(false);
  const Icon = ICONS[eixo.icone];

  return (
    <div className="border border-[#e5e4e7] dark:border-white/15 rounded-2xl overflow-hidden bg-white dark:bg-white/5 hover:shadow-lg transition-shadow">
      <button
        onClick={() => setAberto((v) => !v)}
        className="w-full flex items-start gap-3 sm:gap-4 p-4 sm:p-6 text-left hover:bg-[#fdf6fa] dark:hover:bg-white/5 transition"
      >
        <span
          className={`rounded-xl w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center shrink-0 ${cor}`}
        >
          <Icon size={22} strokeWidth={2.2} />
        </span>
        <span className="flex-1 min-w-0">
          <h3 className="font-display font-bold text-base sm:text-xl mb-1 text-[#7a1550] dark:text-white">
            {eixo.titulo}
          </h3>
          <p className="text-[#2b1420]/70 dark:text-white/70 text-xs sm:text-sm">{eixo.resumo}</p>
        </span>
        <ChevronDown
          className={`shrink-0 mt-1.5 sm:mt-2 transition-transform text-[#2b1420]/50 dark:text-white/50 ${aberto ? "rotate-180" : ""}`}
          size={20}
        />
      </button>

      {aberto && (
        <div className="px-4 sm:px-6 pb-4 sm:pb-6 space-y-3">
          {eixo.propostas.map((p) => (
            <PropostaCard key={p.titulo} proposta={p} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Plan() {
  return (
    <section id="propostas" className="bg-[#fdf6fa] dark:bg-brand-ink py-12 sm:py-16 md:py-24 scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-5">
        <p className="uppercase tracking-widest text-[#c12974] dark:text-brand-yellow-500 font-semibold text-xs sm:text-sm mb-3 text-center">
          <span className="rounded-full bg-[#c12974]/10 dark:bg-white/10 px-3.5 sm:px-4 py-1.5">
            Propostas
          </span>
        </p>
        <h2 className="font-display font-extrabold text-xl sm:text-3xl md:text-4xl text-center mb-8 sm:mb-12 leading-tight text-[#7a1550] dark:text-white">
          Ideias para cuidar da Bahia a partir de quem conhece o interior.
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mb-10 sm:mb-14">
          {prioridades.map((p, i) => {
            const Icon = ICONS[p.icone];
            return (
              <div
                key={p.titulo}
                className="rounded-xl border border-[#e5e4e7] dark:border-white/15 bg-white dark:bg-white/5 p-3 sm:p-4 text-center"
              >
                <span
                  className={`w-9 h-9 rounded-lg flex items-center justify-center mx-auto mb-2 ${ICON_BG[i % ICON_BG.length]}`}
                >
                  <Icon size={17} strokeWidth={2.2} />
                </span>
                <p className="font-display font-bold text-xs sm:text-sm text-[#7a1550] dark:text-white">
                  {p.titulo}
                </p>
              </div>
            );
          })}
        </div>

        <div className="space-y-3 sm:space-y-4">
          {eixos.map((eixo, i) => (
            <EixoCard key={eixo.numero} eixo={eixo} cor={ICON_BG[i % ICON_BG.length]} />
          ))}
        </div>
      </div>
    </section>
  );
}
