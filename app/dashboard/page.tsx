'use client';

import { useState } from "react";

export default function Dashboard() {
  const [clientes, setClientes] = useState([
    { nombre: "Laura Martínez", email: "laura@gmail.com", sesionesRestantes: 5 },
    { nombre: "Carlos Pérez", email: "carlos@gmail.com", sesionesRestantes: 2 },
  ]);

  const [nuevoCliente, setNuevoCliente] = useState({ nombre: "", email: "" });

  const agregarCliente = () => {
    if (!nuevoCliente.nombre || !nuevoCliente.email) return;
    setClientes([...clientes, { ...nuevoCliente, sesionesRestantes: 0 }]);
    setNuevoCliente({ nombre: "", email: "" });
  };

  return (
    <div className="p-6 grid gap-6">
      <h1 className="text-2xl font-bold">Clientes Activos</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {clientes.map((cliente, index) => (
          <div key={index} className="bg-white shadow rounded-2xl p-4">
            <h2 className="font-semibold text-lg">{cliente.nombre}</h2>
            <p className="text-sm text-gray-500">{cliente.email}</p>
            <p className="mt-2">Sesiones restantes: {cliente.sesionesRestantes}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t pt-6">
        <h2 className="text-xl font-semibold mb-2">Añadir nuevo cliente</h2>
        <div className="flex gap-2 flex-col md:flex-row">
          <input
            className="border border-gray-300 px-3 py-2 rounded-xl w-full"
            placeholder="Nombre"
            value={nuevoCliente.nombre}
            onChange={(e) => setNuevoCliente({ ...nuevoCliente, nombre: e.target.value })}
          />
          <input
            className="border border-gray-300 px-3 py-2 rounded-xl w-full"
            placeholder="Email"
            value={nuevoCliente.email}
            onChange={(e) => setNuevoCliente({ ...nuevoCliente, email: e.target.value })}
          />
          <button
            onClick={agregarCliente}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition"
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}
