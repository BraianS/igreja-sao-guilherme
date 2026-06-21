'use client';

import React from "react";
import { motion, useInView } from "framer-motion";
import PastorCard from "@/components/ui/PastorCard";
import igreja from "@/app/data.json";

export default function Sobre() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // 1. Container que coordena a entrada dos cards de pastores lado a lado
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15, // O segundo pastor aparece logo após o primeiro começar
      },
    },
  };

  // 2. Variante individual para cada PastorCard (Aparência suave e premium)
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30, 
      scale: 0.96 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.65, 
        ease: [0.16, 1, 0.3, 1] // Curva ultra suave de desaceleração (easeOutExpo)
      }
    }
  };

  return (
    <div ref={ref} className="w-full px-4">
      {/* Container mestre transformado em motion.div para gerenciar os filhos */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center max-w-4xl mx-auto p-4"
      >
        {igreja.sobre.pastores.map((pastor, index) => (
          // Envolvemos o PastorCard na div animada que respeita o fluxo de cascata
          <motion.div 
            key={index} 
            variants={cardVariants}
            className="h-full"
          >
            <PastorCard
              nome={pastor.nome}
              cargo={pastor.cargo}
              imageUrl={pastor.imageUrl}
              versiculo={pastor.versiculo}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}