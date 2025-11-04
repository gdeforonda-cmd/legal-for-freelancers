export default function Contact() {
  return (
    <section id="contacto" className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-emerald-900 mb-4">Contacto</h2>
        <p className="text-gray-600 mb-6">
          Contame tu caso y te digo cuál es el camino más rápido para resolverlo.
        </p>
        <a
          href="https://wa.me/5491153873068?text=Hola%2C%20vengo%20desde%20la%20web%20y%20quiero%20hacer%20una%20consulta."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 font-medium"
        >
          Escribir por WhatsApp
        </a>
      </div>
    </section>
  );
}
