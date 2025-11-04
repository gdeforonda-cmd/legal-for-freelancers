import { Button } from "./ui/button";

export default function Services() {
  return (
    <section id="servicios" className="bg-white py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-emerald-900 mb-3">
          Servicios diseñados para vos.
        </h2>
        <p className="text-gray-600 mb-14">
          Soluciones legales prácticas para freelancers y empresas de LATAM.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Pack Empresa LATAM */}
          <div className="md:col-span-2 text-left rounded-3xl border border-emerald-200 bg-emerald-50 p-8 shadow-sm hover:shadow transition">
            <h3 className="text-2xl font-semibold text-emerald-900 mb-2">
              Pack Empresa LATAM
            </h3>
            <p className="text-lg text-gray-800">
              Tu empresa en EE. UU., cuenta bancaria y contratos listos para operar en todo el mundo.
            </p>
            <p className="text-gray-700 mt-2">
              En menos de 30 días podés tener tu LLC, cuenta bancaria, contratos a medida y soporte legal.
            </p>

            <ul className="list-disc pl-6 text-gray-700 space-y-1 mt-5 mb-6">
              <li>Creación de la LLC en Estados Unidos.</li>
              <li>Apertura de cuenta bancaria internacional.</li>
              <li>
                Contratos personalizados (Service Agreement, Contractor Agreement, NDA, IP Assignment,
                carta de reclamo + algún contrato a elección tuya).
              </li>
              <li>Soporte legal sin costo por 30 días, con opción a suscripción mensual.</li>
              <li>EIN (Tax ID) y dirección legal.</li>
            </ul>

            <a
              href="https://wa.me/5491153873068?text=Hola%2C%20quiero%20crear%20mi%20empresa%20en%20EE.UU."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="text-lg">
                Quiero crear mi empresa en EE.UU.
              </Button>
            </a>
          </div>

          {/* Revisión y redacción */}
          <div className="text-left rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm hover:shadow transition">
            <h3 className="text-xl font-semibold text-emerald-900 mb-2">
              Revisión y redacción de contratos
            </h3>
            <p className="text-gray-700 mb-6">
              No descanses en la IA. Redactamos tus contratos a medida y protegemos tus intereses.
              Si estás por firmar, te marcamos cláusulas de riesgo y te ayudamos a negociarlas.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/5491153873068?text=Hola%2C%20necesito%20redactar%20un%20contrato%20a%20medida."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline">Necesito un contrato</Button>
              </a>
              <a
                href="https://wa.me/5491153873068?text=Hola%2C%20quiero%20revisar%20mi%20contrato."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline">Quiero revisar mi contrato</Button>
              </a>
            </div>
          </div>

          {/* Reclamo en EE.UU. */}
          <div className="text-left rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm hover:shadow transition">
            <h3 className="text-xl font-semibold text-emerald-900 mb-2">
              Reclamo en EE.UU.
            </h3>
            <p className="text-gray-700 mb-6">
              ¿Tu cliente de EE.UU. no cumplió o te quedó debiendo? Iniciamos tu reclamo directamente en EE.UU. Pagás honorarios solo si recuperás tu dinero.
            </p>
            <a
              href="https://wa.me/5491153873068?text=Hola%2C%20quiero%20iniciar%20un%20reclamo%20en%20EE.UU."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">Quiero iniciar un reclamo en EE.UU.</Button>
            </a>
          </div>

          {/* Planes mensuales */}
          <div className="text-left rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm hover:shadow transition">
            <h3 className="text-xl font-semibold text-emerald-900 mb-2">
              Planes mensuales EADF
            </h3>
            <p className="text-gray-700 mb-6">
              Tu seguro legal todo el año. Consultas, revisiones, confección de contratos y créditos acumulables desde USD 9/mes.
            </p>
            <button
              onClick={() => {
                const el = document.getElementById("planes");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="border border-emerald-700 text-emerald-800 px-5 py-2 rounded-lg hover:bg-emerald-50"
            >
              Ver planes
            </button>
          </div>
        </div>

        {/* Cierre */}
        <div className="mt-14 max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 italic">
            Despejá las trabas legales y sólo dedicate a hacer crecer tu negocio.
          </p>
        </div>
      </div>
    </section>
  );
}
