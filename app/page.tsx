import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gray-50">
      <h1 className="text-4xl font-bold mb-4">Bienvenido a Kaizen Fitness Center</h1>
      <p className="text-gray-600 mb-8 max-w-xl">
        Mejora tu cuerpo, tu mente y tu salud con un enfoque consciente, profesional y personalizado. 
        Entrena con nosotros en El Puerto de Santa María.
      </p>
      <div className="space-x-4">
        <Link href="/marketing/home" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition">
          Entrar al sitio
        </Link>
        <Link href="/marketing/contacto" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-50 transition">
          Contacto directo
        </Link>
      </div>
    </div>
  );
}
