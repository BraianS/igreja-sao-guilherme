'use client';

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import React from "react";
import { AnimatePresence, useInView, motion } from "framer-motion";
import data from "@/app/data.json"; // Importando os dados do JSON

export default function Hero() {
  const { image, subtitle, buttons, title, description } = data.hero;
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Variantes para controlar a entrada coordenada das letras
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04, // Tempo entre o surgimento de cada letra
      },
    },
  };
  
  const subtitleContainerVariants = {
    hidden:{},
    visible: {
      transition: {
        staggerChildren: 0.03
      },
    }
  }
  

  const letterVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const fadeUpVariants = {
    hidden: {opacity: 0, y:20},
    visible: {
      opacity:1,
      y:0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355,1]
      }
    }
  }

  return (
    <section 
      ref={ref} 
      className="container mx-auto relative flex min-h-[95vh] items-center justify-center overflow-hidden bg-background"
    >
      {IgrejaImage(image.src, image.alt)}

      {/* Gradiente Mobile/Tablet */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/70 to-transparent lg:hidden"
        aria-hidden="true"
      />

      {/* GRADIENTE DESKTOP */}
      <div
        className="hidden lg:block absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent w-full lg:w-2/3"
        aria-hidden="true"
      />

      {/* Conteúdo Principal */}
      <div className="relative z-10 w-full px-6 py-20 md:px-12 lg:px-8 flex flex-col items-start">
        
        {/* Container mestre animado */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="w-full max-w-xl lg:max-w-2xl rounded-2xl drop-shadow-sm"
        >
          <AnimatePresence>
            {/* Seus efeitos do Framer Motion entram aqui */}
          </AnimatePresence>

          {/* 1. Subtítulo (Animação de letras) */}
          <motion.p 
            variants={subtitleContainerVariants}
            className="flex flex-wrap text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-slate-800 dark:text-slate-200 mb-4"
          >
            {subtitle.split('').map((char, i) => (
              <motion.span
                key={i}
                variants={letterVariants}
                className="inline-block"
              >
                {char === ' ' ? <span className="inline-block">&nbsp;</span> : char}
              </motion.span>
            ))}
          </motion.p>

          {/* 2. Título (Animação Fade-Up) */}
          <motion.h1 
            variants={fadeUpVariants}
            className="text-4xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white md:text-5xl lg:text-6xl"
          >
            {title.mainText}
            <span className="text-(--primary) dark:text-amber-500 block sm:inline font-extrabold drop-shadow-[0_2px_10px_rgba(251,191,36,0.1)]">
              {title.highlightedText}
            </span>
          </motion.h1>

          {/* 3. Descrição (Animação Fade-Up) */}
          <motion.p 
            variants={fadeUpVariants}
            className="mt-5 max-w-md text-base md:text-lg font-medium leading-relaxed text-slate-700 dark:text-slate-300"
          >
            {description}
          </motion.p>

          {/* 4. Bloco de Botões (Animação Fade-Up unificada) */}
          <motion.div 
            variants={fadeUpVariants}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full bg-slate-900 text-white px-8 text-base font-semibold shadow-lg shadow-slate-900/10 hover:bg-slate-800 transition-all duration-250 dark:bg-white dark:text-slate-900"
            >
              <Link href={buttons.primary.href}>
                {buttons.primary.text}
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-slate-300 bg-background/60 backdrop-blur-sm text-slate-800 hover:bg-background transition-all duration-250 dark:border-slate-700 dark:text-slate-200"
            >
              <Link href={buttons.secondary.href}>
                {buttons.secondary.text}
              </Link>
            </Button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

function IgrejaImage(src: string, alt: string) {
  return (
    <div className="absolute inset-0 m-4 rounded-2xl border-4 border-foreground/10 shadow-2xl shadow-black/30 overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        className="object-cover object-center"
      />
    </div>
  );
}