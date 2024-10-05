import React from 'react'
import { Calendar, Coffee, ChevronRight } from 'lucide-react'

export default function EnhancedMinimalistMentoringDonation() {
  return (
    <section className="text-gray-100 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Mentoría y Apoyo
        </h2>
        
        <div className="space-y-12">
          {/* Mentoring Section */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-500 hover:scale-105">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-blue-400">Asesoramiento Personalizado</h3>
              <Calendar className="w-8 h-8 text-blue-400" />
            </div>
            <p className="mb-8 text-gray-300 text-lg leading-relaxed">
              Agenda una sesión de mentoría para resolver dudas y superar obstáculos en tu proyecto. Juntos, llevaremos tus habilidades al siguiente nivel.
            </p>
            <a
              href="https://calendly.com/your-calendly-link"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              Reservar Sesión
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          {/* Donation Section */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-500 hover:scale-105">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-yellow-400">Apoya mi Trabajo</h3>
              <Coffee className="w-8 h-8 text-yellow-400" />
            </div>
            <p className="mb-8 text-gray-300 text-lg leading-relaxed">
              Si mi contenido te ha sido útil, considera invitarme a un café. Tu apoyo me ayuda a seguir creando recursos valiosos para la comunidad.
            </p>
            <a
              href="https://www.buymeacoffee.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              Invitar un Café
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}