import BarraNavegacao from "@/components/layout/BarraNavegacao";
import Hero from "@/components/sections/Hero";
import Sobre from "@/components/sections/Sobre";
import Contato from "@/components/sections/Contato";
import Horarios from "@/components/sections/Horarios";
import Noticias from "@/components/sections/Noticias";
import Rodape from "@/components/sections/Rodape";
import CustomCursor from "@/components/ui/CustomCursor"
import Galeria from "@/components/sections/Galeria";


export default function Home() {
  return (
    <>
      <CustomCursor />
      <BarraNavegacao />
      <Hero />
      <section >
        <Sobre />
      </section>
      <section className="bg-slate-50/70 dark:bg-slate-950/20 border-y border-slate-100 dark:border-slate-900">
        <Horarios />
      </section>
      <section className="bg-white dark:bg-background py-16 md:py-24">
        <Noticias />
      </section>
      <Galeria />

      <Contato />
      <Rodape />
    </>
  );
}
