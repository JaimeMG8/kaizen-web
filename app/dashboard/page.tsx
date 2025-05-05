'use client';

import Link from "next/link";

export default function Home() {
  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center px-6 text-white"
      style={{ backgroundImage: "url('/portada-kaizen.jpg')" }}
    >
      <div className="bg-black/60 p-8 rounded-2xl max-w-2xl text-center animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Bienvenido a <span className="text-blue-400">Kaizen Fitness Center</span>
        </h1>
        <p className="text-lg text-gray-200 mb-8">
          Entrenamiento personal, grupos reducidos y readaptación en El Puerto de Santa María. 
          Mejora tu cuerpo. Mejora tu vida.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            href="/marketing/home"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition text-base font-medium"
          >
            Entrar al sitio
          </Link>
          <Link
            href="/marketing/contacto"
            className="bg-white text-blue-700 hover:bg-gray-100 px-6 py-3 rounded-xl transition text-base font-medium"
          >
            Contacto directo
          </Link>
        </div>
      </div>
    </div>
  );
}
