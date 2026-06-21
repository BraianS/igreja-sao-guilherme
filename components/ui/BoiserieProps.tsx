import { cn } from "@/lib/utils";

interface BoiserieProps {
  children?: React.ReactNode;
  className?: string;
  compact?: boolean;
  decorative?: boolean;
}

export default function Boiserie({
  children,
  className = "",
  compact = false,
  decorative = false,
}: BoiserieProps) {
  if (decorative) {
    return (
      <div
        className={cn(
          "relative aspect-square shrink-0 bg-stone-100/60",
          className
        )}
        aria-hidden
      >
        <div className="pointer-events-none absolute inset-[3px] border-[3px] border-white shadow-[inset_0_1px_2px_rgba(0,0,0,0.12),0_2px_4px_rgba(0,0,0,0.08)]" />
        <div className="pointer-events-none absolute inset-[6px] border border-white shadow-[inset_0_1px_1px_rgba(0,0,0,0.08)]" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex items-center justify-center bg-stone-100/50 p-6",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-2 border-[6px] border-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.15),0_4px_10px_rgba(0,0,0,0.1)]" />
      <div className="pointer-events-none absolute inset-6 border-2 border-white shadow-[inset_0_1px_2px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.05)]" />

      <div
        className={cn(
          "z-10 flex h-full w-full items-center justify-center",
          !compact && "min-h-[200px] min-w-[200px]"
        )}
      >
        {children ?? (
          <span className="text-sm font-light text-gray-400">Espaço Vazio</span>
        )}
      </div>
    </div>
  );
}
