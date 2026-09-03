import { bio, candidato } from "../data/content";

export default function Bio() {
  return (
    <section id="sobre" className="bg-[#fdf6fa] dark:bg-brand-ink py-12 sm:py-16 md:py-24 scroll-mt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-5">
        <p className="uppercase tracking-widest text-[#c12974] dark:text-brand-yellow-500 font-semibold text-xs sm:text-sm mb-3 sm:mb-4 text-center">
          <span className="rounded-full bg-[#c12974]/10 dark:bg-white/10 px-3.5 sm:px-4 py-1.5">Quem é ela</span>
        </p>
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-10 text-center leading-tight text-[#7a1550] dark:text-white">
          {candidato.nome} nasceu na terra que quer representar.
        </h2>

        <div className="relative pl-5 sm:pl-6 space-y-4 sm:space-y-5 text-[#2b1420]/85 dark:text-white/85 text-sm sm:text-lg border-l-2 border-[#c12974]/20 dark:border-white/20">
          {bio.quemE.map((paragrafo, i) => (
            <p key={i} className="relative">
              <span className="absolute -left-[25px] sm:-left-[29px] top-1.5 sm:top-2 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#83af47]" />
              {paragrafo}
            </p>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 rounded-2xl bg-gradient-to-r from-[#7a1550] to-[#c12974] p-5 sm:p-8 text-center">
          <p className="font-display font-bold text-base sm:text-xl md:text-2xl text-white">
            "{bio.citacao}"
          </p>
        </div>
      </div>
    </section>
  );
}
