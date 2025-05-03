'use client';

import { useEffect, useState } from 'react';

type Registro = {
  fecha: string;
  peso: number;
  grasa: number;
  musculo: number;
};

export default function PerfilPage() {
  const [edad, setEdad] = useState<number | null>(null);

  const fechaNacimiento = '1995-04-10';
  const altura = 175;
  const nombre = 'Carlos Gómez';

  const registros: Registro[] = [
    { fecha: '2024-01-01', peso: 75, grasa: 18, musculo: 35 },
    { fecha: '2024-02-01', peso: 74, grasa: 17.5, musculo: 35.5 },
    { fecha: '2024-03-01', peso: 73, grasa: 17, musculo: 36 },
    { fecha: '2024-04-01', peso: 72.5, grasa: 16.8, musculo: 36.5 },
  ];

  useEffect(() => {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edadCalculada = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
      edadCalculada--;
    }
    setEdad(edadCalculada);
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center">Perfil de {nombre}</h1>

      <div className="text-right">
        <a href="/perfil/edit" className="text-blue-600 underline text-sm">
          Editar perfil
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm border rounded-xl p-4 shadow">
        <p><strong>Fecha de nacimiento:</strong> {fechaNacimiento}</p>
        <p><strong>Edad:</strong> {edad ?? '-'}</p>
        <p><strong>Altura:</strong> {altura} cm</p>
        <p><strong>Email:</strong> (se puede mostrar con Firebase más adelante)</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Evolución corporal</h2>
        <table className="w-full text-sm border rounded-xl overflow-hidden shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 text-left">Fecha</th>
              <th className="p-2 text-left">Peso (kg)</th>
              <th className="p-2 text-left">% Grasa</th>
              <th className="p-2 text-left">Masa muscular (kg)</th>
            </tr>
          </thead>
          <tbody>
            {registros.map((r, i) => (
              <tr key={i} className="border-t">
                <td className="p-2">{r.fecha}</td>
                <td className="p-2">{r.peso}</td>
                <td className="p-2">{r.grasa}</td>
                <td className="p-2">{r.musculo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
