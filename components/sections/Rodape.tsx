import React from "react";
import igreja from "@/app/data.json";
import { MapPin, Phone, Church } from "lucide-react";

export default function Rodape() {
  // Puxando todos os dados necessários do nosso arquivo JSON
  const { navegacao, sobre, contato } = igreja;

  // Ano atual dinâmico para o copyright
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="w-full bg-zinc-900 text-zinc-300 border-t border-zinc-800 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-zinc-800">
        
        {/* COLUNA 1: Sobre a Igreja */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-white font-bold text-lg">
            <Church className="w-5 h-5 text-amber-500" />
            <span>{sobre.sobre}</span>
          </div>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Um espaço de acolm espaço de acolhimento, fé e crescimento espiritual para famílias de todas as idades no coração do Jardim São Guilherme.
          </p>
        </div>

        {/* COLUNA 2: Links de Navegação Rápida */}
        <div className="space-y-3">
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider">
            Navegação Rápida
          </h4>
          <ul className="space-y-2 text-sm">
            {navegacao.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href} 
                  className="hover:text-amber-500 transition-colors duration-200 block w-max"
                >
                  {link.nome}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* COLUNA 3: Contato Simplificado */}
        <div className="space-y-3">
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider">
            Contato
          </h4>
          <div className="space-y-3 text-sm text-zinc-400">
            <div className="flex gap-2 items-start">
              <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <span>
                {contato.endereco}<br />
                {contato.bairro} — {contato.cidadeEstado}
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <Phone className="w-4 h-4 text-amber-500 shrink-0" />
              <span>{contato.telefone}</span>
            </div>
          </div>
        </div>

      </div>

      {/* Direitos Autorais (Copyright) */}
      <div className="max-w-6xl mx-auto px-4 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
        <p>© {anoAtual} {sobre.sobre}. Todos os direitos reservados.</p>
        <p className="hover:text-zinc-400 transition-colors">
          Desenvolvido como Portfólio Paroquial
        </p>
      </div>
    </footer>
  );
}