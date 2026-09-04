import { useEffect, useState } from "react";
import { candidato } from "../data/content";

const SESSION_KEY = "introExibida";
const DURACAO_MS = 2500;
const SAIDA_MS = 500;

// Faíscas douradas espalhadas — o brilho dos diamantes da Chapada Diamantina.
const FAISCAS = [
  { top: "14%", left: "16%", delay: "0.1s", size: 7 },
  { top: "22%", left: "84%", delay: "0.6s", size: 5 },
  { top: "38%", left: "8%", delay: "1s", size: 6 },
  { top: "34%", left: "92%", delay: "0.3s", size: 8 },
  { top: "58%", left: "12%", delay: "0.8s", size: 5 },
  { top: "62%", left: "88%", delay: "0.2s", size: 7 },
  { top: "78%", left: "24%", delay: "1.1s", size: 6 },
  { top: "80%", left: "74%", delay: "0.5s", size: 8 },
  { top: "8%", left: "50%", delay: "0.9s", size: 5 },
];

const LETRA_DELAY_BASE = 0.35;
const LETRA_DELAY_PASSO = 0.045;

function deveExibir() {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  return sessionStorage.getItem(SESSION_KEY) !== "1";
}

function Palavra({ texto, offset }: { texto: string; offset: number }) {
  return (
    <span className="inline-flex whitespace-nowrap">
      {texto.split("").map((letra, i) => (
        <span
          key={i}
          className="inline-block text-brand-yellow-500"
          style={{
            textShadow: "0 0 16px rgba(242,183,5,0.55)",
            animation: `introLetra 0.55s cubic-bezier(.2,.9,.3,1.2) ${
              LETRA_DELAY_BASE + (offset + i) * LETRA_DELAY_PASSO
            }s both`,
          }}
        >
          {letra}
        </span>
      ))}
    </span>
  );
}

export default function IntroSplash() {
  const [visivel, setVisivel] = useState(deveExibir);
  const [saindo, setSaindo] = useState(false);

  useEffect(() => {
    if (!visivel) return;
    sessionStorage.setItem(SESSION_KEY, "1");
    const overflowOriginal = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timerSaida = setTimeout(() => setSaindo(true), DURACAO_MS);
    const timerRemover = setTimeout(() => {
      setVisivel(false);
      document.body.style.overflow = overflowOriginal;
    }, DURACAO_MS + SAIDA_MS);

    return () => {
      clearTimeout(timerSaida);
      clearTimeout(timerRemover);
      document.body.style.overflow = overflowOriginal;
    };
  }, [visivel]);

  if (!visivel) return null;

  const palavras = candidato.nome.toUpperCase().split(" ");
  const palavrasComOffset = palavras.reduce<{ texto: string; offset: number }[]>((acc, texto) => {
    const anterior = acc[acc.length - 1];
    const offset = anterior ? anterior.offset + anterior.texto.length : 0;
    return [...acc, { texto, offset }];
  }, []);
  const totalLetras = palavras.join("").length;
  const numeroDelay = LETRA_DELAY_BASE + totalLetras * LETRA_DELAY_PASSO + 0.15;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_38%,#a3226e_0%,#7a1550_55%,#3f0c2a_100%)] transition-opacity duration-500 ${
        saindo ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      {/* brilho pulsante de fundo */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div
          className="w-[75vmin] h-[75vmin] rounded-full bg-[radial-gradient(circle,rgba(242,183,5,0.22)_0%,transparent_70%)]"
          style={{ animation: "introGlow 2.4s ease-in-out infinite" }}
        />
      </div>

      {/* faíscas douradas */}
      {FAISCAS.map((f, i) => (
        <span
          key={i}
          className="pointer-events-none absolute rounded-full bg-brand-yellow-500"
          style={{
            top: f.top,
            left: f.left,
            width: f.size,
            height: f.size,
            opacity: 0,
            boxShadow: "0 0 10px 2px rgba(242,183,5,0.55)",
            animation: `introFaisca 1.9s ease-in-out ${f.delay} infinite`,
          }}
        />
      ))}

      <div className="relative flex flex-col items-center px-6 text-center max-w-xs sm:max-w-md">
        <p
          className="uppercase tracking-[0.25em] text-white/70 font-semibold text-[11px] sm:text-xs mb-3"
          style={{ animation: "introTexto 0.5s ease-out 0s both" }}
        >
          Candidata a {candidato.cargo}
        </p>

        <h1 className="relative font-display font-extrabold leading-[0.95] text-4xl sm:text-6xl flex flex-wrap justify-center gap-x-3 gap-y-1 overflow-hidden px-1">
          {palavrasComOffset.map(({ texto, offset }) => (
            <Palavra key={texto} texto={texto} offset={offset} />
          ))}
          {/* brilho que varre o nome uma vez, depois que as letras terminam de aparecer */}
          <span
            className="pointer-events-none absolute inset-0 mix-blend-overlay"
            style={{
              background:
                "linear-gradient(100deg, transparent 35%, rgba(255,255,255,0.9) 50%, transparent 65%)",
              backgroundSize: "300% 100%",
              backgroundPosition: "150% 0",
              animation: `introBrilhoVarre 0.9s ease-in-out ${numeroDelay - 0.15}s 1`,
            }}
          />
        </h1>

        <div
          className="mt-4 inline-flex items-center gap-2.5 text-brand-yellow-500 font-display font-extrabold text-2xl sm:text-3xl tracking-wide"
          style={{ animation: `introNumeroPop 0.5s cubic-bezier(.34,1.56,.64,1) ${numeroDelay}s both` }}
        >
          <span className="text-base sm:text-lg opacity-80">✦</span>
          {candidato.numero}
          <span className="text-base sm:text-lg opacity-80">✦</span>
        </div>

        <p
          className="mt-4 font-display italic text-white/85 text-sm sm:text-base tracking-wide"
          style={{ animation: `introTexto 0.5s ease-out ${numeroDelay + 0.45}s both` }}
        >
          {candidato.slogan}
        </p>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-1.5 bg-white/10">
        <div
          className="h-full bg-gradient-to-r from-brand-yellow-500 via-white to-brand-yellow-500"
          style={{ animation: `introBarra ${DURACAO_MS}ms linear forwards` }}
        />
      </div>
    </div>
  );
}
