"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Foto } from "../interface/Interface" 

const fotos: Foto[] = [
  { src: "/images/1.jpg", alt: "Culto" },
  { src: "/images/2.jpg", alt: "Culto" },
  { src: "/images/3.jpg", alt: "Culto" },
  { src: "/images/4.jpg", alt: "Culto" },
]

// Variantes individuais para o efeito de revelação (Reveal) no scroll
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
}

export default function Galeria() {
  return (
    <section id="galeria" className="w-full py-12 px-4">
      <div className="flex flex-col items-center justify-center max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Galeria de Fotos</h1>
        
        {/* Container principal usando Flex Col em vez de Grid */}
        <div className="flex flex-col gap-8 w-full">
          {fotos.map((foto, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              // amount: 0.2 garante que revela assim que 20% do card entra na tela
              viewport={{ once: true, amount: 0.2 }} 
              className="relative overflow-hidden rounded-lg shadow-md aspect-video w-full bg-gray-100 group"
            >
              <Image
                src={foto.src}
                alt={foto.alt}
                fill
                sizes="(max-w-768px) 100vw, 700px"
                className="object-cover transition-transform duration-500 group-hover:scale-103"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}