'use client';

import { useState } from "react";

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-8 max-w-2xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-center">Contacto</h1>
      <p className="text-center text-gray-600">¿Tienes dudas o quieres reservar una plaza? Escríbenos o usa el botón de WhatsApp.</p>

      <form
        action="https://formspree.io/f/xkgrnvdw" // 👈 Pega tu endpoint aquí
        method="POST"
        className="space-y-4"
      >
        <input
          className="w-full border px-4 py-2 rounded-xl"
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          value={form.nombre}
          onChange={handleChange}
          required
        />
        <input
          className="w-full border px-4 py-2 rounded-xl"
          type="email"
          name="email"
          placeholder="Tu correo electrónico"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          className="w-full border px-4 py-2 rounded-xl"
          name="mensaje"
          rows={4}
          placeholder="¿En qué podemos ayudarte?"
          value={form.mensaje}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl transition"
        >
          Enviar mensaje
        </button>
      </form>

      <div className="text-center pt-4">
        <a
          href="https://wa.me/34600000000"
          target="_blank"
          className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl transition"
        >
          Contactar por WhatsApp
        </a>
      </div>
    </div>
  );
}
