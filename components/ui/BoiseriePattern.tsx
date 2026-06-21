import { cn } from "@/lib/utils";

interface BoiseriePatternProps {
  className?: string;
  tileSize?: number;
}

export default function BoiseriePattern({
  className,
  tileSize = 80,
}: BoiseriePatternProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 bg-[#f6f3ee]",
        className
      )}
      style={{
        backgroundImage: "url(/patterns/boiserie.svg)",
        backgroundSize: `${tileSize}px ${tileSize}px`,
        backgroundRepeat: "repeat",
      }}
    />
  );
}
