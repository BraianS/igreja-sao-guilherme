'use client';

import React from "react";
import { useInView, motion } from "framer-motion";
import { Clock } from "lucide-react";
import data from "@/app/data.json";
import { cn } from "@/lib/utils";
import CardEvent from "../ui/CardEvent";

export default function Horarios() {

  const { subtitulo, titulo, descricao, cultos } = data.horarios;

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Variantes de animação em cascata (Stagger) para os cards
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }
    }
  };

  return (
    <section
      id="horarios"
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-background via-slate-50/50 to-background py-20 md:py-28"
    >
      {/* Padrão Boiserie otimizado com máscara suave e opacidade reduzida para não brigar com os cards */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04] dark:opacity-[0.015] mix-blend-multiply"
        style={{
          backgroundImage: "url(/patterns/boiserie.svg)",
          backgroundSize: "70px 70px",
          backgroundRepeat: "repeat",
          maskImage: "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)"
        }}
      />

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-8">

        {/* Cabeçalho com contraste aprimorado */}
        <header className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-amber-600 dark:text-amber-500">
            {subtitulo}
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 dark:text-white md:text-4xl lg:text-5xl">
            {titulo}
          </h2>
          <p className="mt-4 text-base md:text-lg font-medium leading-relaxed text-slate-700 dark:text-slate-300">
            {descricao}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {cultos.map((culto) => (
            <CardEvent key={culto.data} culto={culto}  />
          ))}
        </div>

      </div>
    </section>
  );
}