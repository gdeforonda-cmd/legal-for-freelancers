import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative bg-gray-50 pt-32 pb-16 text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 leading-tight mb-4">
          La única solución legal integral para operar con EE.UU.
        </h1>

        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Creada para emprendedores, empresas y trabajadores remotos de LATAM.
        </p>

        {/* Fila 1: CTAs principales */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
          <a
            href="https://wa.me/5491153873068?text=Hola%2C%20quiero%20crear%20mi%20empresa%20en%20EE.UU."
            target="_blank" rel="noopener noreferrer"
          >
            <Button className="text-lg px-8 py-3.5">Quiero crear mi empresa en EE.UU.</Button>
          </a>

          <a
            href="https://wa.me/5491153873068?text=Hola%2C%20quiero%20revisar%20mi%20contrato."
            target="_blank" rel="noopener noreferrer"
          >
            <Button variant="outline" className="text-lg px-8 py-3.5">
              Revisar mi contrato
            </Button>
          </a>
        </div>

        {/* Fila 2: CTA específico */}
        <div className="flex justify-center mb-8">
          <a
            href="https://wa.me/5491153873068?text=Hola%2C%20quiero%20reclamar%20un%20pago%20de%20un%20cliente%20de%20EE.UU."
            target="_blank" rel="noopener noreferrer"
          >
            <Button variant="ghost" className="text-lg px-8 py-3.5">Reclamar un pago</Button>
          </a>
        </div>

        <p className="text-sm text-gray-500">
          Todo en un solo lugar · Contratos claros · Suscripciones mensuales
        </p>
      </div>
    </section>
  );
}
