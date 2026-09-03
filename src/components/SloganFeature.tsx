import { candidato, sloganFeature } from "../data/content";
import bg from "../assets/slogan-feature-bg.webp";

export default function SloganFeature() {
  const partes = sloganFeature.frase.split(sloganFeature.fraseAccent);

  return (
    <section className="relative min-h-[70svh] flex items-center justify-center overflow-hidden bg-[#1a0f1c]">
      <img
        src={bg}
        alt={sloganFeature.alt}
        className="absolute inset-0 w-full h-full object-cover object-top opacity-55"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,15,28,0.55)_0%,rgba(26,15,28,0.35)_40%,rgba(26,15,28,0.92)_100%)]" />

      <div className="relative z-10 text-center px-6 py-16 text-white max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-2.5 uppercase tracking-widest text-xs font-bold text-[#cfe0ff] mb-4">
          {sloganFeature.kicker}
        </div>
        <h2 className="font-display italic font-semibold text-3xl sm:text-5xl leading-tight">
          {partes[0]}
          <span className="text-[#f2b705] not-italic font-display font-extrabold">
            {sloganFeature.fraseAccent}
          </span>
          {partes[1]}
        </h2>
        <div className="inline-flex items-center gap-2 mt-7 bg-white/10 border border-white/30 backdrop-blur px-5 py-2.5 rounded-full font-display font-bold text-sm">
          Vote <b className="text-[#ff6fae] text-lg">{candidato.numero}</b> · KEYLA
        </div>
      </div>
    </section>
  );
}
