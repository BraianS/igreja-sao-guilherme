import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface PastorCardProps {
  nome: string;
  cargo: string; // Adicionado para receber o cargo do JSON
  imageUrl: string;
  versiculo?: string;
}

export default function PastorCard({ nome, cargo, imageUrl, versiculo }: PastorCardProps) { 
  return (    
    <Card className="mx-auto w-full max-w-sm pt-0 overflow-hidden group border border-muted transition-all duration-300 hover:shadow-md">
      
      {/* Container da Imagem com Aspect Ratio */}
      <div className="relative w-full aspect-video overflow-hidden">
        
        {/* Overlay escuro fixado dentro do container da imagem */}
        <div className="absolute inset-0 z-10 bg-black/30 transition-opacity duration-300 group-hover:bg-black/20" />
        
        <Image
          width={150}
          height={150}
          src={imageUrl}
          alt={`Foto do ${nome}`}
          className="w-full h-full object-cover brightness-90 transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badge posicionada corretamente no canto superior direito */}
        <div className="absolute top-3 right-3 z-20">
          <Badge variant="secondary" className="backdrop-blur-md bg-white/80 text-zinc-900 font-medium shadow-sm dark:bg-zinc-900/80 dark:text-zinc-50">
            {cargo}
          </Badge>
        </div>
      </div>

      <CardHeader className="space-y-2">
        <CardTitle className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          {nome}
        </CardTitle>
        
        {versiculo && (
          <CardDescription className="italic text-sm text-muted-foreground leading-relaxed">
            {versiculo}
          </CardDescription>
        )}
      </CardHeader>
      
    </Card>
  );
}