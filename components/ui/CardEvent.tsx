"use client"; // Required in Next.js App Router for framer-motion

import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Culto } from "@/components/interface/Interface";
import { motion } from "framer-motion"; // 1. Import framer-motion

interface CardEventProps {
  culto: Culto;
}

export default function CardEvent({ culto }: CardEventProps) {
  const data = new Date(culto.data);
  const abreviacao = format(data, 'EEE', { locale: ptBR }).substring(0, 3).toUpperCase();
  const numero = format(data, "dd");

  return (
    <motion.div
      // Fade in and slide up slightly when the card mounts
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      
      // Clean hover and tap effects
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className="w-full"
    >
      <Card
        className={`p-2 transition-colors ${
          culto.destaque ? "border-2 border-yellow-500 shadow-md" : "border border-gray-200"
        } rounded-lg`}
      >
        <CardContent>
          <div className="flex flex-row items-center gap-4">
            {/* Bloco da data */}
            <div className="flex flex-col items-center justify-center px-2">
              <span className="text-lg font-bold text-gray-800">{numero}</span>
              <span className="text-sm text-gray-500">{abreviacao}</span>
            </div>

            {/* Linha vertical separadora */}
            <div className="w-px bg-gray-300 self-stretch"></div>

            <div className="flex flex-col flex-1">
              <span className="font-bold text-gray-900">{culto.titulo}</span>
              <span className="text-sm text-gray-500">{culto.descricao}</span>
            </div>
            
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="text-sm font-medium text-blue-600 cursor-pointer hover:underline"
            >
              Add to calendar
            </motion.span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}