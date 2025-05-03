'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/perfil");
    } catch (err: any) {
      setError("No se pudo registrar el usuario.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-2xl font-bold mb-6">Crear cuenta</h1>
      <form onSubmit={handleRegister} className="space-y-4 w-full max-w-sm">
        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded px-3 py-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="w-full border rounded px-3 py-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          Registrarse
        </button>
        <p className="text-sm text-center">
          ¿Ya tienes cuenta? <a href="/login" className="text-blue-600 underline">Inicia sesión</a>
        </p>
      </form>
    </div>
  );
}
