import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const AUDIO_SRC = "/musica-fundo.mp3";
const MUDO_KEY = "musicaMudo";

// Navegadores bloqueiam áudio com som antes de qualquer interação do
// visitante — não tem como contornar isso, é política do próprio navegador.
// Por isso a música só começa a tocar no primeiro toque/clique/rolagem da
// pessoa na página (o que, na prática, acontece quase sempre em menos de um
// segundo). Pausa sozinha sempre que qualquer <video> da página é reproduzido
// e volta a tocar quando ele é pausado ou termina — isso funciona pro vídeo
// em arquivo (<video>) usado em VideoVsl; não funciona pra vídeo incorporado
// via iframe do YouTube/Vimeo, que roda numa origem separada e não expõe
// esses eventos ao documento principal.
export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [mudo, setMudo] = useState(() => {
    if (typeof window === "undefined") return false;
    try {
      return localStorage.getItem(MUDO_KEY) === "1";
    } catch {
      return false;
    }
  });
  const pausadoPeloVideo = useRef(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || mudo) return;

    function tentarTocar() {
      if (pausadoPeloVideo.current) return;
      audio?.play().catch(() => {
        // navegador ainda bloqueou (ex: interação não contou) — os listeners
        // de interação abaixo tentam de novo na próxima
      });
    }

    tentarTocar();

    const eventosInteracao = ["click", "touchstart", "keydown", "scroll"];
    eventosInteracao.forEach((ev) =>
      document.addEventListener(ev, tentarTocar, { once: true, passive: true }),
    );

    // eventos de <video>/<audio> não borbulham — precisa ouvir na fase de
    // captura no document pra pegar o play/pause de qualquer video da página
    function aoTocarVideo(e: Event) {
      if ((e.target as HTMLElement)?.tagName === "VIDEO") {
        pausadoPeloVideo.current = true;
        audio?.pause();
      }
    }
    function aoPausarVideo(e: Event) {
      if ((e.target as HTMLElement)?.tagName === "VIDEO") {
        pausadoPeloVideo.current = false;
        tentarTocar();
      }
    }
    document.addEventListener("play", aoTocarVideo, true);
    document.addEventListener("pause", aoPausarVideo, true);
    document.addEventListener("ended", aoPausarVideo, true);

    return () => {
      eventosInteracao.forEach((ev) => document.removeEventListener(ev, tentarTocar));
      document.removeEventListener("play", aoTocarVideo, true);
      document.removeEventListener("pause", aoPausarVideo, true);
      document.removeEventListener("ended", aoPausarVideo, true);
    };
  }, [mudo]);

  function alternarMudo() {
    setMudo((atual) => {
      const proximo = !atual;
      try {
        localStorage.setItem(MUDO_KEY, proximo ? "1" : "0");
      } catch {
        // localStorage indisponível — segue só na sessão
      }
      if (proximo) {
        audioRef.current?.pause();
      } else if (!pausadoPeloVideo.current) {
        audioRef.current?.play().catch(() => {});
      }
      return proximo;
    });
  }

  return (
    <>
      <audio ref={audioRef} src={AUDIO_SRC} loop preload="auto" />
      <button
        onClick={alternarMudo}
        aria-label={mudo ? "Ativar som da música" : "Silenciar música"}
        aria-pressed={!mudo}
        className="fixed z-40 bottom-[84px] right-4 md:bottom-6 md:left-6 md:right-auto w-11 h-11 flex items-center justify-center rounded-full bg-brand-blue-900/90 text-white shadow-lg shadow-black/25 backdrop-blur hover:brightness-110 active:scale-95 transition"
      >
        {mudo ? <VolumeX size={19} /> : <Volume2 size={19} />}
      </button>
    </>
  );
}
