"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import igreja from "@/app/data.json"

import {
Sheet,
SheetContent,
SheetTrigger,
} from "@/components/ui/sheet";

export default function BarraNavegacao() {
  const links = igreja.navegacao

  return (
    <header className="border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">

        {/* Logo */}
        <h1 className="font-bold text-xl text-[var(--foreground)]">
          São Guilherme
        </h1>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.nome}
              href={link.href}
              className="
              text-[var(--foreground)]
              hover:text-[var(--primary)]
              transition-colors
              "
            >
              {link.nome}
            </Link>
          ))}

          <Button
            className="
            rounded-full
            bg-[var(--primary)]
            text-white
            "
          >
            Planejar visita
          </Button>
        </nav>

        {/* Mobile */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
            >
              <Menu />
            </Button>
          </SheetTrigger>

          <SheetContent>
            <div className="flex flex-col gap-5 mt-10">

              {links.map((link) => (
                <Link
                  key={link.nome}
                  href={link.href}
                >
                  {link.nome}
                </Link>
              ))}

            </div>
          </SheetContent>
        </Sheet>

      </div>
    </header>
  );
}