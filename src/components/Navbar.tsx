"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const nav = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/servicios" },
  { name: "Planes", href: "/planes" },
  { name: "Preguntas", href: "/preguntas" },
  { name: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white/90 backdrop-blur border-b fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-xl font-semibold text-emerald-900">EADF</a>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((i) => (
            <a key={i.name} href={i.href} className="text-gray-700 hover:text-emerald-900">
              {i.name}
            </a>
          ))}
          <a
            href="https://wa.me/5491153873068"
            target="_blank" rel="noopener noreferrer"
          >
            <Button>Contactar ahora</Button>
          </a>
        </nav>

        <button className="md:hidden text-gray-700" onClick={() => setOpen((v) => !v)}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white">
          {nav.map((i) => (
            <a key={i.name} href={i.href} className="block px-6 py-3 text-gray-700 hover:bg-gray-50">
              {i.name}
            </a>
          ))}
          <a
            href="https://wa.me/5491153873068"
            target="_blank" rel="noopener noreferrer"
            className="block px-6 py-3 text-emerald-800 font-semibold"
          >
            Contactar ahora
          </a>
        </div>
      )}
    </header>
  );
}
