import { MessageCircle } from "lucide-react";
import { candidato, contato } from "../data/content";
import { useLeadModal } from "../context/LeadModalContext";

export default function StickyMobileCta() {
  const { openModal } = useLeadModal();

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#7a1550]/95 backdrop-blur-md border-t border-white/10 shadow-[0_-8px_24px_rgba(0,0,0,0.3)] px-3 pt-2.5 flex items-center gap-2"
      style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 10px)" }}
    >
      <a
        href={`https://wa.me/${contato.whatsapp}`}
        aria-label="Falar no WhatsApp"
        className="shrink-0 w-11 h-11 rounded-full bg-[#83af47] text-white flex items-center justify-center active:scale-95 transition"
      >
        <MessageCircle size={20} />
      </a>
      <button
        onClick={openModal}
        className="flex-1 flex items-center justify-center gap-2 bg-[#f2b705] text-[#7a1550] font-display font-bold text-sm py-3 rounded-full active:scale-[0.98] transition"
      >
        Vote {candidato.numero} · Quero fazer parte
      </button>
    </div>
  );
}
