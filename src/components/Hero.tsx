import { Button } from "./ui/button";
import gonzaloPhoto from "../assets/ImagenHero.jpg"; // asegurate de guardar la foto ahí

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative bg-gray-50 pt-32 pb-16 flex flex-col-reverse md:flex-row items-center justify-end px-6 md:px-16"
    >
      {/* Texto y CTA */}
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 leading-tight mb-4">
          La única solución legal integral para operar con EE.UU.
        </h1>

        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Creada para emprendedores, empresas y trabajadores remotos de LATAM.
        </p>

        {/* Fila 1 */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-4">
          <a
            href="https://wa.me/5491153873068?text=Hola%2C%20quiero%20crear%20una%20empresa%20en%20EE.UU."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="text-lg px-8 py-3.5">
              Quiero crear una empresa en EE.UU.
            </Button>
          </a>

          <a
            href="https://wa.me/5491153873068?text=Hola%2C%20quiero%20iniciar%20un%20reclamo%20en%20EE.UU."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="text-lg px-8 py-3.5">
              Quiero iniciar un reclamo en EE.UU.
            </Button>
          </a>
        </div>

        {/* Fila 2 */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-8">
          <a
            href="https://wa.me/5491153873068?text=Hola%2C%20necesito%20un%20contrato%20a%20medida."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" className="text-lg px-8 py-3.5">
              Necesito un contrato
            </Button>
          </a>

          <a
            href="https://wa.me/5491153873068?text=Hola%2C%20quiero%20revisar%20mi%20contrato."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" className="text-lg px-8 py-3.5">
              Revisar mi contrato
            </Button>
          </a>
        </div>

        <p className="text-sm text-gray-500">
          Abogado especializado · Todo en un solo lugar · Contratos claros · Suscripciones mensuales
        </p>
      </div>

      {/* Imagen */}
      <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
        <img
          src={gonzaloPhoto}
          alt="Gonzalo de Foronda"
          className="w-72 md:w-96 rounded-2xl shadow-lg object-cover"
        />
      </div>
    </section>
  );
}
