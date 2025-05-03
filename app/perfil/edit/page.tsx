'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EditPerfilPage() {
  const router = useRouter();

  // Estados locales (temporalmente)
  const [nombre, setNombre] = useState("Carlos Gómez");
  const [fechaNacimiento, setFechaNacimiento] = useState("1995-04-10");
  const [altura, setAltura] = useState("175");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí se guardaría en Firebase
    console.log({ nombre, fechaNacimiento, altura });

    router.push("/perfil");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-2xl font-bold mb-6">Editar perfil</h1>
      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-sm">
        <input
          type="text"
          placeholder="Nombre completo"
          className="w-full border rounded px-3 py-2"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="date"
          className="w-full border rounded px-3 py-2"
          value={fechaNacimiento}
          onChange={(e) => setFechaNacimiento(e.target.value)}
        />
        <input
          type="number"
          placeholder="Altura en cm"
          className="w-full border rounded px-3 py-2"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Guardar cambios
        </button>
        <button
          type="button"
          className="w-full bg-gray-300 text-black py-2 rounded hover:bg-gray-400 transition"
          onClick={() => router.push("/perfil")}
        >
          Cancelar
        </button>
      </form>
    </div>
  );
}
