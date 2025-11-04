// src/components/PricingPlans.jsx
export default function PricingPlans() {
  return (
    <section id="planes" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <header className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Suscripción mensual (tu “seguro legal”)
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Para que siempre tengas a mano un abogado que conoce tu caso. Si un mes no usás, no perdés — el crédito se acumula.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-4">
          {/* Essential */}
          <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="bg-emerald-700 text-white px-6 py-4">
              <h3 className="text-xl font-semibold">Essential</h3>
              <p className="text-sm mt-1">USD 9/mes</p>
            </div>
            <div className="px-6 py-6 space-y-3 text-sm text-gray-700">
              <p>• 1 consulta o revisión mensual.</p>
              <p>• Chat directo con tu abogado.</p>
              <p className="text-xs text-gray-400 pt-2">
                Ideal para freelancers que quieren respaldo puntual.
              </p>
              <a
                href="https://wa.me/5491153873068?text=Hola%2C%20quiero%20contratar%20el%20Plan%20Essential."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-emerald-700 font-semibold hover:underline"
              >
                Quiero este plan →
              </a>
            </div>
          </div>

          {/* Pro */}
          <div className="border rounded-xl overflow-hidden shadow-md ring-2 ring-emerald-600/50">
            <div className="bg-emerald-800 text-white px-6 py-4">
              <h3 className="text-xl font-semibold">Pro</h3>
              <p className="text-sm mt-1">USD 19/mes</p>
            </div>
            <div className="px-6 py-6 space-y-3 text-sm text-gray-700">
              <p>• 2 revisiones mensuales.</p>
              <p>• 1 contrato nuevo cada 6 meses.</p>
              <p>• Descuento en reclamos y servicios adicionales.</p>
              <p className="text-xs text-gray-400 pt-2">
                Perfecto para quienes trabajan seguido con empresas de EE.UU.
              </p>
              <a
                href="https://wa.me/5491153873068?text=Hola%2C%20quiero%20contratar%20el%20Plan%20Pro."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-emerald-700 font-semibold hover:underline"
              >
                Quiero este plan →
              </a>
            </div>
          </div>

          {/* Premium */}
          <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="bg-gray-900 text-white px-6 py-4">
              <h3 className="text-xl font-semibold">Premium</h3>
              <p className="text-sm mt-1">USD 39/mes</p>
            </div>
            <div className="px-6 py-6 space-y-3 text-sm text-gray-700">
              <p>• Consultas ilimitadas.</p>
              <p>• 2 contratos nuevos cada 6 meses.</p>
              <p>• Respuesta prioritaria en menos de 24 hs.</p>
              <p className="text-xs text-gray-400 pt-2">
                Ideal para agencias o freelancers que manejan varios clientes.
              </p>
              <a
                href="https://wa.me/5491153873068?text=Hola%2C%20quiero%20contratar%20el%20Plan%20Premium."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-emerald-700 font-semibold hover:underline"
              >
                Quiero este plan →
              </a>
            </div>
          </div>

          {/* Business */}
          <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="bg-emerald-950 text-white px-6 py-4">
              <h3 className="text-xl font-semibold">Business</h3>
              <p className="text-sm mt-1">USD 49/mes</p>
            </div>
            <div className="px-6 py-6 space-y-3 text-sm text-gray-700">
              <p>• 3 revisiones mensuales.</p>
              <p>• 1 contrato nuevo cada 2 meses.</p>
              <p>• Soporte prioritario + asesoría extendida.</p>
              <p>• Ideal para empresas con LLC operando en EE.UU.</p>
              <p className="text-xs text-gray-400 pt-2">
                Incluye soporte legal directo y créditos acumulables.
              </p>
              <a
                href="https://wa.me/5491153873068?text=Hola%2C%20quiero%20contratar%20el%20Plan%20Business."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-emerald-700 font-semibold hover:underline"
              >
                Quiero este plan →
              </a>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          Todo lo que pagás puede usarse como crédito en otros servicios.
        </p>
      </div>
    </section>
  );
}

