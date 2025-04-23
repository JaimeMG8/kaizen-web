'use client';

export default function NavBar() {
    return (
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-tight">Kaizen</h1>
        <div className="space-x-4 text-sm">
          <a href="/marketing/home" className="hover:text-blue-600 transition">Inicio</a>
          <a href="/marketing/servicios" className="hover:text-blue-600 transition">Servicios</a>
          <a href="/marketing/contacto" className="hover:text-blue-600 transition">Contacto</a>
        </div>
      </nav>
    );
  }
  