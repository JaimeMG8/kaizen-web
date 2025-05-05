'use client';

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/perfil");
      } else {
        router.push("/login");
      }
    });
    return () => unsubscribe();
  }, [router]);

  return (
    <div className="h-screen flex items-center justify-center bg-cover bg-center px-6 bg-white">
      <Image
        src="/portada-kaizen.jpg"
        alt="Kaizen Logo"
        width={400}
        height={200}
        className="object-contain"
        priority
      />
    </div>
  );
}
