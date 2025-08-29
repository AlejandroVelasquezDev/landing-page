import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="bg-base-200 text-base-content font-sans">
      {/* Hero Section */}
      <section className="hero min-h-screen bg-white px-8 py-16 flex flex-col lg:flex-row items-center justify-between">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold text-[#1e40af] mb-4">Nunca más pierdas un cliente por no responder a tiempo</h1>
          <p className="text-lg mb-6">Creamos chatbots inteligentes que atienden a tus clientes 24/7 mientras tú duermes</p>
          <button className="btn btn-success text-white text-lg">Obtén tu chatbot gratis</button>
        </div>
        <div className="mockup">
          <img src="/images/chatbot-mockup.png" alt="Chatbot en acción" className="max-w-md rounded-xl shadow-lg" />
        </div>
      </section>

      {/* Pain Points */}
      <section className="px-8 py-12 bg-gray-100">
        <h2 className="text-3xl font-bold mb-6 text-center">¿Te suena familiar?</h2>
        <ul className="space-y-4 text-lg max-w-3xl mx-auto">
          <li>✗ Pierdes clientes porque no respondes fuera del horario laboral</li>
          <li>✗ Tu equipo está saturado respondiendo las mismas preguntas básicas</li>
          <li>✗ La competencia te supera con respuestas más rápidas</li>
          <li>✗ No tienes presencia digital profesional que genere confianza</li>
        </ul>
      </section>

      {/* Solution */}
      <section className="px-8 py-12 bg-white">
        <h2 className="text-3xl font-bold mb-4 text-center">La solución que tu negocio necesita</h2>
        <p className="text-center mb-8 max-w-2xl mx-auto">
          Entendemos lo frustrante que es perder oportunidades por no tener presencia digital. Por eso creamos chatbots que trabajan por ti.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div>🚀 <strong>Respuesta instantánea</strong><br /> Atiende clientes 24/7 sin descanso</div>
          <div>💰 <strong>Más ventas</strong><br /> Convierte visitantes en clientes mientras no estás</div>
          <div>⏰ <strong>Ahorra tiempo</strong><br /> Automatiza respuestas repetitivas</div>
          <div>📈 <strong>Crece tu negocio</strong><br /> Presencia profesional que genera confianza</div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-8 py-12 bg-gray-100">
        <h2 className="text-3xl font-bold mb-6 text-center">Tu chatbot listo en 3 pasos simples</h2>
        <div className="timeline timeline-vertical">
          <div className="timeline-item">
            <div className="timeline-start">1</div>
            <div className="timeline-middle">
              <div className="badge badge-primary">Análisis</div>
            </div>
            <div className="timeline-end">Analizamos tu negocio y entendemos tus clientes</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-start">2</div>
            <div className="timeline-middle">
              <div className="badge badge-success">Diseño</div>
            </div>
            <div className="timeline-end">Creamos conversaciones que venden</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-start">3</div>
            <div className="timeline-middle">
              <div className="badge badge-warning">Activación</div>
            </div>
            <div className="timeline-end">Tu asistente virtual empieza a trabajar</div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-8 py-12 bg-white">
        <h2 className="text-3xl font-bold mb-6 text-center">Resultados reales de negocios como el tuyo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card bg-base-100 shadow-md p-6">
            <p>“Desde que usamos el chatbot, nuestras conversiones aumentaron un 50% y el equipo de soporte tiene más tiempo libre.”</p>
            <div className="mt-4 flex items-center gap-4">
              <img src="/images/laura.jpg" className="w-12 h-12 rounded-full" />
              <div>
                <strong>Laura Gómez</strong><br />
                Fundadora de EcoModa
              </div>
            </div>
          </div>
          <div className="card bg-base-100 shadow-md p-6">
            <p>“Reducimos el tiempo de atención en un 80% y nuestros clientes están más satisfechos que nunca.”</p>
            <div className="mt-4 flex items-center gap-4">
              <img src="/images/jose.jpg" className="w-12 h-12 rounded-full" />
              <div>
                <strong>José Martínez</strong><br />
                CEO de TechNova
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-8 py-12 bg-gray-100">
        <h2 className="text-3xl font-bold mb-6 text-center">Todo lo que necesitas incluido</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>📱 WhatsApp, Facebook, Instagram, sitio web</div>
          <div>🧠 Respuestas personalizadas por industria</div>
          <div>📊 Panel de estadísticas</div>
          <div>🛠️ Soporte técnico y actualizaciones gratis</div>
        </div>
      </section>

      {/* Guarantee & Urgency */}
      <section className="px-8 py-12 bg-white text-center">
        <h2 className="text-2xl font-bold mb-4">30 días de prueba gratis o te devolvemos tu dinero</h2>
        <p className="text-lg mb-4 text-red-600 font-semibold">Solo 10 chatbots disponibles este mes</p>
        <button className="btn btn-warning text-white text-lg">Quiero mi chatbot ahora</button>
      </section>

      {/* Final CTA */}
      <section className="px-8 py-16 bg-[#1e40af] text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Deja de perder clientes hoy mismo</h2>
        <p className="text-lg mb-6">Vende mientras duermes. Haz que tu marca luzca tan profesional como una gran empresa.</p>
        <button className="btn btn-success text-white text-lg">Empezar ahora</button>
      </section>
    </div>
  )
}

export default App