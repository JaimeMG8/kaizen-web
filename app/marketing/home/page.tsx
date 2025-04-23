export default function HomeMarketing() {
    return (
      <div className="p-8 space-y-16">
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Entrena. Mejora. Evoluciona.</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            En Kaizen Fitness Center te ayudamos a transformar tu cuerpo y tu salud mediante entrenamiento personalizado y grupos reducidos.
          </p>
          <a
            href="https://wa.me/34600000000"
            target="_blank"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition"
          >
            Reserva tu plaza
          </a>
        </section>
  
        <section className="grid gap-6 md:grid-cols-3">
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="font-semibold text-lg mb-2">Entrenamiento Personal</h2>
            <p className="text-sm text-gray-600">Programas individualizados según tus objetivos y condición física.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="font-semibold text-lg mb-2">Grupos Reducidos</h2>
            <p className="text-sm text-gray-600">Máximo 6 personas por sesión para un seguimiento de calidad.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="font-semibold text-lg mb-2">Valoración Inicial</h2>
            <p className="text-sm text-gray-600">Analizamos tu punto de partida antes de empezar a entrenar.</p>
          </div>
        </section>
      </div>
    );
  }
  