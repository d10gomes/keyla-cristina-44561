import { useState, type FormEvent } from "react";
import { CheckCircle2, ShieldCheck, Share2 } from "lucide-react";
import { candidato, cidadesRegiao, contato } from "../data/content";
import fotoKeyla from "../assets/keyla-hero-photo.webp";

const PARTICIPACAO = [
  "Só quero acompanhar",
  "Posso divulgar no meu bairro ou povoado",
  "Tenho grupos de WhatsApp para compartilhar",
  "Sou liderança na minha comunidade",
];

const TEMAS = [
  "Proteção à infância",
  "Empreendedorismo feminino",
  "Segurança alimentar",
  "Assistência social",
];

function formatarWhatsapp(valor: string) {
  // assume sempre o formato de celular (DDD + 9 dígitos) — o padrão no Brasil hoje
  const digitos = valor.replace(/\D/g, "").slice(0, 11);
  if (digitos.length === 0) return "";
  if (digitos.length <= 2) return `(${digitos}`;
  if (digitos.length <= 7) return `(${digitos.slice(0, 2)}) ${digitos.slice(2)}`;
  return `(${digitos.slice(0, 2)}) ${digitos.slice(2, 7)}-${digitos.slice(7)}`;
}

function compartilhar() {
  const texto = `Ei! Conheça o trabalho de ${candidato.nome} (${candidato.numero}), candidata a ${candidato.cargo} pela Bahia. Dá uma olhada: ${window.location.origin}`;

  if (navigator.share) {
    navigator.share({ text: texto, url: window.location.origin }).catch(() => {});
    return;
  }
  window.open(
    `https://wa.me/?text=${encodeURIComponent(texto)}`,
    "_blank",
    "noopener,noreferrer",
  );
}

export default function LeadForm({ onDone }: { onDone?: () => void }) {
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [participacao, setParticipacao] = useState(PARTICIPACAO[0]);
  const [temas, setTemas] = useState<string[]>([]);
  const [autoriza, setAutoriza] = useState(false);
  const [enviado, setEnviado] = useState(false);

  function toggleTema(tema: string) {
    setTemas((prev) =>
      prev.includes(tema) ? prev.filter((t) => t !== tema) : [...prev, tema],
    );
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!autoriza) return;

    const linhas = [
      `Quero fazer parte da campanha!`,
      `Nome: ${nome}`,
      `WhatsApp: ${whatsapp}`,
      `Cidade: ${cidade}${bairro ? " - " + bairro : ""}`,
      `Como quero participar: ${participacao}`,
      temas.length ? `O que mais me toca: ${temas.join(", ")}` : "",
    ].filter(Boolean);

    const url = `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(
      linhas.join("\n"),
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
    sessionStorage.setItem("leadEnviado", "1");
    setEnviado(true);
  }

  if (enviado) {
    return (
      <div className="p-8 md:p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-[#83af47]/10 text-[#5c7a2e] flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="font-display font-extrabold text-2xl mb-2">
          Show! Você já faz parte.
        </h3>
        <p className="text-[#2b1420]/70 mb-6">
          Abrimos o WhatsApp pra você confirmar a mensagem. Qualquer novidade da campanha,
          chega primeiro pra você.
        </p>

        <div className="rounded-2xl bg-[#fdf6fa] border border-[#e5e4e7] p-5 mb-6 text-left">
          <p className="font-display font-bold text-base mb-1.5">
            Ajude a mudar a realidade da nossa região.
          </p>
          <p className="text-sm text-[#2b1420]/70 mb-4">
            Manda esse link pra pelo menos 3 amigos — quanto mais gente sabendo, mais forte
            fica esse movimento.
          </p>
          <button
            onClick={compartilhar}
            className="w-full flex items-center justify-center gap-2 bg-[#5c7a2e] text-white font-display font-bold py-2.5 rounded-full hover:brightness-110 active:scale-[0.98] transition"
          >
            <Share2 size={16} />
            Compartilhar com 3 amigos
          </button>
        </div>

        {onDone && (
          <button
            onClick={onDone}
            className="bg-[#7a1550] text-white font-semibold px-6 py-2.5 rounded-full hover:brightness-110 transition"
          >
            Fechar
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="px-5 pb-6 pt-2 sm:p-8 md:p-10">
      <div className="flex justify-center mb-3">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden ring-4 ring-[#f2b705]/40 bg-[#7a1550]">
          <img
            src={fotoKeyla}
            alt={candidato.nome}
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>

      <p className="uppercase tracking-widest text-[#5c7a2e] font-semibold text-xs sm:text-sm mb-2 text-center">
        Sua parte
      </p>
      <h2 className="font-display font-extrabold text-xl sm:text-2xl md:text-3xl text-center mb-2.5 sm:mb-3 leading-tight">
        Some com a gente.
      </h2>
      <p className="text-center text-[#2b1420]/70 mb-6 sm:mb-8 text-sm md:text-base">
        Você vai saber o que está acontecendo na sua cidade, em primeira mão. E sai da lista
        quando quiser. Leva menos de um minuto.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        <div>
          <label className="block text-sm font-semibold mb-1" htmlFor="nome">
            Seu nome *
          </label>
          <input
            id="nome"
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full rounded-lg border border-[#e5e4e7] px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#c12974]"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1" htmlFor="whatsapp">
            WhatsApp *
          </label>
          <input
            id="whatsapp"
            required
            inputMode="numeric"
            placeholder="(75) 99886-6906"
            value={whatsapp}
            onChange={(e) => setWhatsapp(formatarWhatsapp(e.target.value))}
            className="w-full rounded-lg border border-[#e5e4e7] px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#c12974]"
          />
        </div>

        <div className="grid grid-cols-1 min-[420px]:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-1" htmlFor="cidade">
              Sua cidade *
            </label>
            <select
              id="cidade"
              required
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              className="w-full rounded-lg border border-[#e5e4e7] px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#c12974] bg-white"
            >
              <option value="" disabled>
                Escolha
              </option>
              {cidadesRegiao.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1" htmlFor="bairro">
              Bairro ou povoado
            </label>
            <input
              id="bairro"
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
              className="w-full rounded-lg border border-[#e5e4e7] px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#c12974]"
            />
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold mb-2">Como você quer participar</p>
          <div className="space-y-2">
            {PARTICIPACAO.map((op) => (
              <label key={op} className="flex items-center gap-2.5 text-sm py-0.5">
                <input
                  type="radio"
                  name="participacao"
                  checked={participacao === op}
                  onChange={() => setParticipacao(op)}
                  className="w-4 h-4 accent-[#c12974] shrink-0"
                />
                {op}
              </label>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold mb-2">O que mais te toca</p>
          <div className="flex flex-wrap gap-2">
            {TEMAS.map((tema) => (
              <button
                type="button"
                key={tema}
                onClick={() => toggleTema(tema)}
                className={`text-xs font-semibold rounded-full px-3.5 py-2 border transition active:scale-95 ${
                  temas.includes(tema)
                    ? "bg-[#7a1550] text-white border-[#7a1550]"
                    : "border-[#e5e4e7] text-[#2b1420]/70 hover:border-[#c12974]"
                }`}
              >
                {tema}
              </button>
            ))}
          </div>
        </div>

        <label className="flex items-start gap-2 text-sm text-[#2b1420]/80">
          <input
            type="checkbox"
            required
            checked={autoriza}
            onChange={(e) => setAutoriza(e.target.checked)}
            className="mt-1 accent-[#c12974]"
          />
          Autorizo o tratamento do meu nome e WhatsApp, conforme a LGPD (Lei nº
          13.709/2018), para receber mensagens da campanha *
        </label>

        <p className="text-xs text-[#2b1420]/50">
          Seus dados são usados só para falar com você e nunca são vendidos ou repassados.
          Você pode cancelar e sair da lista a qualquer momento, respondendo SAIR em qualquer
          mensagem. Li a{" "}
          <a
            href="/privacidade.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#c12974]"
          >
            Política de Privacidade
          </a>
          .
        </p>

        <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-[#5c7a2e]">
          <ShieldCheck size={14} />
          Seus dados estão protegidos
        </div>

        <button
          type="submit"
          className="w-full bg-[#f2b705] text-[#7a1550] font-display font-bold py-3 rounded-full hover:brightness-95 transition"
        >
          Quero fazer parte
        </button>
      </form>
    </div>
  );
}
