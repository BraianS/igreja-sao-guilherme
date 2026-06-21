'use client';

import React from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardHeader, CardTitle,  CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays } from "lucide-react";

import igreja from "@/app/data.json";

export default function Noticias() {
  const { info, titulo, paragrafo, cards } = igreja.noticia;
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // 1. Variante para o cabeçalho surgir por desfoque e fade simples (sutil)
  const headerVariants = {
    hidden: { opacity: 0, filter: "blur(4px)" },
    visible: { 
      opacity: 1, 
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // 2. Variante pai para a grade (Stagger dinâmico)
  const gridVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  };

  // 3. Efeito Elástico Alternado: Cards ímpares vêm de um lado, pares do outro com zoom suave
  const cardVariants = (index: number) => ({
    hidden: { 
      opacity: 0, 
      scale: 0.94,
      x: index % 2 === 0 ? -15 : 15 
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      x: 0,
      transition: { 
        type: "spring",
        stiffness: 70,
        damping: 14, 
        mass: 0.8
      }
    }
  });

  return (
    <section 
      id="noticias" 
      ref={ref}
      className="w-full bg-zinc-50/50 dark:bg-zinc-900/50 py-16 md:py-24 border-t border-muted overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Cabeçalho da Seção Animado via Blur Reveal */}
        <motion.div 
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center text-center space-y-3 mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
            {info}
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            {titulo}
          </h2>
          <p className="text-muted-foreground max-w-2xl text-base">
            {paragrafo}
          </p>
        </motion.div>

        {/* Grade de Cards Animada */}
        <motion.div 
          variants={gridVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {cards.map((item, index) => (
            // Transformamos a tag li/div numa motion.div passando o index para a variante personalizada
            <motion.div
              key={item.id || index}
              custom={index}
              variants={cardVariants(index)}
              className="h-full"
            >
              <Card className="flex flex-col justify-between h-full border border-muted bg-white dark:bg-zinc-950 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 hover:border-amber-500/20 group">
                
                <CardHeader className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <Badge variant="outline" className="text-xs font-normal group-hover:border-amber-500/30 group-hover:bg-amber-50/50 dark:group-hover:bg-amber-950/20 transition-colors">
                      {item.categoria}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground gap-1">
                      <CalendarDays className="w-3.5 h-3.5 text-amber-600" />
                      <span>{item.data}</span>
                    </div>
                  </div>

                  <CardTitle className="text-lg font-bold tracking-tight pt-1 line-clamp-2 transition-colors group-hover:text-amber-600 dark:group-hover:text-amber-500">
                    {item.titulo}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {item.descricao || "Nenhuma descrição informada para este evento."}
                  </p>
                </CardContent>

                <CardFooter className="pt-0 text-xs font-medium text-amber-600 cursor-pointer transition-transform duration-300 group-hover:translate-x-1">
                  Saber mais <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </CardFooter>
                
              </Card>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}