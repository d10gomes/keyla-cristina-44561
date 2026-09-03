import { useEffect, useState } from "react";
import { candidato } from "../data/content";
import logoOficial from "../assets/logo-oficial.webp";

const SESSION_KEY = "introExibida";
const DURACAO_MS = 2500;
const SAIDA_MS = 500;

function deveExibir() {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  return sessionStorage.getItem(SESSION_KEY) !== "1";
}

// Pontinhos dourados espalhados ao redor do coração — remetem ao brilho dos
// diamantes da Chapada Diamantina, um toque delicado sem virar poluição visual.
const FAISCAS = [
  { top: "20%", left: "20%", delay: "0.1s", size: 9 },
  { top: "24%", left: "78%", delay: "0.5s", size: 6 },
  { top: "62%", left: "14%", delay: "0.9s", size: 7 },
  { top: "68%", left: "84%", delay: "0.3s", size: 10 },
  { top: "10%", left: "52%", delay: "0.7s", size: 5 },
  { top: "80%", left: "48%", delay: "1.1s", size: 8 },
];

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

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_38%,#a3226e_0%,#7a1550_55%,#3f0c2a_100%)] transition-opacity duration-500 ${
        saindo ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      {/* brilho pulsante atrás do coração */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div
          className="w-[65vmin] h-[65vmin] rounded-full bg-[radial-gradient(circle,rgba(242,183,5,0.22)_0%,transparent_70%)]"
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
            animation: `introFaisca 1.8s ease-in-out ${f.delay} infinite`,
          }}
        />
      ))}

      <div className="relative flex flex-col items-center px-6 text-center">
        {/* coração desenhado a mão, depois preenchido com um brilho suave */}
        <svg
          viewBox="0 0 100 90"
          className="w-16 h-[3.6rem] sm:w-20 sm:h-[4.5rem] mb-3"
          style={{ animation: "introCoracaoPop 0.5s ease-out 0.75s both" }}
        >
          <path
            d="M50 82 C10 55 2 30 18 15 C30 4 46 8 50 24 C54 8 70 4 82 15 C98 30 90 55 50 82 Z"
            fill="#f2b705"
            style={{ opacity: 0, animation: "introCoracaoPreenche 0.4s ease-out 0.6s forwards" }}
          />
          <path
            d="M50 82 C10 55 2 30 18 15 C30 4 46 8 50 24 C54 8 70 4 82 15 C98 30 90 55 50 82 Z"
            fill="none"
            stroke="#f2b705"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength={1}
            style={{
              strokeDasharray: 1,
              strokeDashoffset: 1,
              animation: "introCoracaoDesenha 0.8s ease-out forwards",
            }}
          />
        </svg>

        <div
          className="rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden"
          style={{ animation: "introLogoPop 0.6s cubic-bezier(.34,1.56,.64,1) 0.95s both" }}
        >
          <img
            src={logoOficial}
            alt={`${candidato.nome} — ${candidato.cargo}`}
            className="w-48 sm:w-64 md:w-72 h-auto"
          />
        </div>

        <p
          className="mt-4 font-display italic text-white/90 text-sm sm:text-base tracking-wide"
          style={{ animation: "introTexto 0.5s ease-out 1.55s both" }}
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
