'use client';

import {
  Dumbbell,
  Users,
  ActivitySquare,
  SearchCheck
} from "lucide-react";

export default function Servicios() {
  const servicios = [
    {
      icono: <Dumbbell size={32} />,
      titulo: "Entrenamiento Personal",
      texto: "Programa adaptado a tu nivel y objetivos. Ideal si buscas atención 100% personalizada.",
    },
    {
      icono: <Users size={32} />,
      titulo: "Grupos Reducidos",
      texto: "Máximo 6 personas por grupo. Entrena en comunidad sin perder calidad.",
    },
    {
      icono: <ActivitySquare size={32} />,
      titulo: "Readaptación / Reeducación",
      texto: "Recupera tu funcionalidad y evita recaídas con un enfoque guiado por el movimiento.",
    },
    {
      icono: <SearchCheck size={32} />,
      titulo: "Valoración Inicial",
      texto: "Analizamos tu postura, movilidad y capacidades antes de empezar cualquier programa.",
    },
  ];

  return (
    <div className="p-8 space-y-12">
      <h1 className="text-3xl font-bold text-center">Nuestros Servicios</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {servicios.map((s, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 flex gap-4 items-start hover:shadow-xl transition"
          >
            <div className="text-blue-600">{s.icono}</div>
            <div>
              <h2 className="text-lg font-semibold">{s.titulo}</h2>
              <p className="text-sm text-gray-600 mt-1">{s.texto}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
  