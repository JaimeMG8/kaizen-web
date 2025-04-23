import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "../components/ui/navbar"; // o usa @ si está bien configurado

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kaizen Fitness Center",
  description: "Entrena. Mejora. Evoluciona.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
