import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [userMessage, setUserMessage] = useState('')

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault()
    const whatsappNumber = "573215480859" // tu número con código de país
    const encodedMessage = encodeURIComponent(userMessage)
    const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    window.open(url, "_blank")
  }

  return (
    <div className="bg-base-200 text-base-content font-sans">
      
      {/* Hero Section */}
      <section className="hero min-h-screen bg-white px-8 py-16 flex flex-col items-start">
        
        {/* Nombre de la página: Solarion 4.0 */}
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-extrabold text-[#1e40af] mb-12 whitespace-nowrap font-['Orbitron']">
          Ascend 4.O
        </h1>
        
        {/* Contenedor principal con el texto a la izquierda y el video a la derecha */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full">
          <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e40af] mb-4">
              Nunca más pierdas un cliente por no responder a tiempo
            </h2>
            <p className="text-lg mb-6">Creamos chatbots inteligentes que atienden a tus clientes 24/7 mientras tú duermes</p>

            <div className="max-w-xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">¿Listo para dejar de perder clientes?</h2>
              <p className="text-lg mb-6">
                Déjanos tu mensaje y uno de nuestros expertos se contactará contigo en menos de 24 horas.
              </p>

              {/* Formulario React adaptado */}
              <form onSubmit={handleWhatsAppSubmit} className="flex flex-col gap-4">
                <textarea
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                  placeholder="Escribe tu mensaje..."
                  required
                  className="border border-gray-300 p-3 rounded-lg w-full"
                />
                <button
                  type="submit"
                  className="bg-[#25D366] text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition"
                >
                  Enviar a WhatsApp
                </button>
              </form>
            </div>
          </div>

          {/* Video */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative pt-[56.25%] w-full h-0 max-w-2xl">
              <video
                className="absolute inset-0 w-full h-full rounded-xl shadow-lg"
                src="./public/video.mp4"
                title="Video de demostración de chatbot"
                controls
              ></video>
            </div>
          </div>
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
