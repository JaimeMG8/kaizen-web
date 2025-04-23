'use client';

import { useState } from "react";

type Evento = {
  dia: string;
  hora: string;
  cliente: string;
  descripcion: string;
};

const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
const horas = ["09:00", "10:00", "11:00", "12:00", "13:00", "17:00", "18:00", "19:00", "20:00"];

export default function Agenda() {
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [form, setForm] = useState<Evento>({
    dia: "Lunes",
    hora: "09:00",
    cliente: "",
    descripcion: "",
  });

  const agregarEvento = () => {
    if (!form.cliente || !form.descripcion) return;
    setEventos([...eventos, form]);
    setForm({ ...form, cliente: "", descripcion: "" });
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Agenda semanal</h1>

      <div className="grid gap-4 md:grid-cols-4">
        <select
          className="border rounded-lg p-2"
          value={form.dia}
          onChange={(e) => setForm({ ...form, dia: e.target.value })}
        >
          {dias.map((d) => (
            <option key={d}>{d}</option>
          ))}
        </select>

        <select
          className="border rounded-lg p-2"
          value={form.hora}
          onChange={(e) => setForm({ ...form, hora: e.target.value })}
        >
          {horas.map((h) => (
            <option key={h}>{h}</option>
          ))}
        </select>

        <input
          className="border rounded-lg p-2"
          placeholder="Nombre del cliente"
          value={form.cliente}
          onChange={(e) => setForm({ ...form, cliente: e.target.value })}
        />
        <input
          className="border rounded-lg p-2"
          placeholder="Descripción"
          value={form.descripcion}
          onChange={(e) => setForm({ ...form, descripcion: e.target.value })}
        />
      </div>

      <button
        onClick={agregarEvento}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Agregar evento
      </button>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-4">
        {dias.map((dia) => (
          <div key={dia} className="bg-gray-100 rounded-xl p-4 shadow">
            <h2 className="font-semibold text-lg mb-2">{dia}</h2>
            {horas.map((hora) => {
              const evento = eventos.find((e) => e.dia === dia && e.hora === hora);
              return (
                <div key={hora} className="mb-2">
                  <div className="text-sm font-medium">{hora}</div>
                  {evento ? (
                    <div className="bg-white rounded p-2 shadow text-sm">
                      <strong>{evento.cliente}</strong>
                      <p>{evento.descripcion}</p>
                    </div>
                  ) : (
                    <div className="text-gray-400 text-xs">Disponible</div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
