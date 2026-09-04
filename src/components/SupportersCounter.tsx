import { Users } from "lucide-react";
import { useLeadsCount } from "../hooks/useLeadsCount";

const VARIANTS = {
  dark: "bg-white/10 text-white/90",
  light: "bg-[#c12974]/10 text-[#7a1550]",
};

export default function SupportersCounter({
  className = "",
  variant = "dark",
}: {
  className?: string;
  variant?: keyof typeof VARIANTS;
}) {
  const count = useLeadsCount();

  if (count === null) return null;

  const texto =
    count === 0
      ? "Seja um dos primeiros a se cadastrar"
      : count === 1
        ? "1 pessoa já confirmou presença"
        : `${count.toLocaleString("pt-BR")} pessoas já confirmaram presença`;

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold ${VARIANTS[variant]} ${className}`}
    >
      <Users size={15} />
      {texto}
    </div>
  );
}
