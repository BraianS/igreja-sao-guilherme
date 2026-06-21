'use client';

import React from "react";
import { motion, useInView } from "framer-motion";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Map } from "lucide-react";
import igreja from "@/app/data.json";

export default function Contato() {
  const { info, titulo, paragrafo, endereco, bairro, cidadeEstado, cep, telefone, linkMapa } = igreja.contato;
  
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Link de incorporação direta (Iframe) baseado no endereço fornecido
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.2917637841785!2d-47.4885867!3d-23.452714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c5f5ab1d4ec9fb%3A0xae54a39fed3920ad!2sAv.%20Edward%20Fru-Fru%20Marciano%20da%20Silva%2C%20229%20-%20Jardim%20Sao%20Guilherme%2C%20Sorocaba%20-%20SP%2C%2018074-621!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr";

  // 1. Variante do cabeçalho da seção
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // 2. Animação do Lado Esquerdo (Mapa) - Efeito de expansão com fade
  const mapVariants = {
    hidden: { opacity: 0, scale: 0.95, x: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  // 3. Animação do Lado Direito (Informações) - Deslizamento suave coordenado
  const infoVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }
    }
  };

  return (
    <section 
      id="contato" 
      ref={ref}
      className="w-full px-4 p-10"
    >
      {/* Cabeçalho da Seção Animado */}
      <motion.div 
        variants={headerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-col items-center text-center space-y-3 mb-12"
      >
        <p className="text-sm font-semibold uppercase tracking-wider text-amber-500">
          {info}
        </p>
        <h2 className="text-3xl font-black tracking-tight text-black md:text-4xl">
          {titulo}
        </h2>
        <p className="text-gray-500 max-w-xl text-base">
          {paragrafo}
        </p>
      </motion.div>

      {/* Card Principal Split */}
      <Card className="w-full border-red border-slate-800 bg-slate-900/40 shadow-2xl shadow-black/20 overflow-hidden p-0 grid grid-cols-1 md:grid-cols-2 min-h-[450px] max-w-6xl mx-auto rounded-2xl backdrop-blur-md">
        
        {/* LADO ESQUERDO: Mapa Interativo Animado */}
        <motion.div 
          variants={mapVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="w-full h-[300px] md:h-full relative bg-slate-800"
        >
          <iframe
            src={embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full grayscale-[20%] contrast-[110%] dark:invert dark:grayscale opacity-80"
          />
        </motion.div>

        {/* LADO DIREITO: Informações de Endereço com Alto Contraste no Slate */}
        <motion.div 
          variants={infoVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col justify-between p-8 bg-slate-900/60 md:border-l border-slate-800"
        >
          
          <div className="space-y-6 my-auto">
            {/* Título Interno */}
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                Atendimento Local
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-white">
                Nossa Sede
              </h3>
            </div>

            {/* Dados do Endereço */}
            <div className="flex gap-4 items-start">
              <div className="flex p-2.5 rounded-xl bg-slate-800 border border-slate-700/60 text-amber-500 shrink-0 mt-0.5 shadow-md shadow-black/10">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex flex-col space-y-1 text-base text-slate-300">
                <span className="font-bold text-white tracking-wide">{endereco}</span>
                <span>{bairro}</span>
                <span>{cidadeEstado}</span>
                <span className="text-sm font-medium text-slate-500 bg-slate-950/40 w-max px-2.5 py-0.5 rounded-md mt-1 border border-slate-800/40">
                  CEP {cep}
                </span>
              </div>
            </div>

            {/* Dados de Telefone */}
            <div className="flex gap-4 items-center border-t border-slate-800/80 pt-6">
              <div className="flex p-2.5 rounded-xl bg-slate-800 border border-slate-700/60 text-amber-500 shrink-0 shadow-md shadow-black/10">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-base text-slate-300">
                <span className="text-slate-400 font-medium">Secretaria: </span>
                <span className="font-bold text-white tracking-wide">{telefone}</span>
              </div>
            </div>
          </div>

          {/* Link de Ação Inferior */}
          <div className="pt-6 border-t border-slate-800/80 mt-6">
            <a 
              href={linkMapa}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 px-4 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm rounded-xl transition-all duration-200 shadow-lg shadow-amber-500/10 group"
            >
              <Map className="w-4 h-4 transition-transform group-hover:scale-110" />
              Abrir Rotas no Google Maps
            </a>
          </div>

        </motion.div>
      </Card>
    </section>
  );
}