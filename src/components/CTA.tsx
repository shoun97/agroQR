import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side: Form */}
            <div className="p-8 lg:p-12 bg-white">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Solicite una Demo
              </h2>
              <p className="text-gray-600 mb-8">
                Complete el formulario y un especialista lo contactará para mostrarle cómo AgroQR puede transformar su producción agrícola.
              </p>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500" 
                    placeholder="Ingrese su nombre"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Correo electrónico
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500" 
                    placeholder="correo@ejemplo.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Teléfono
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500" 
                    placeholder="+56 9 XXXX XXXX"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje (opcional)
                  </label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500" 
                    placeholder="Cuéntenos sobre su producción agrícola"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white font-medium py-3 px-6 rounded-md hover:from-green-700 hover:to-green-800 transition-colors flex items-center justify-center"
                >
                  Solicitar Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
            
            {/* Right Side: Info */}
            <div className="p-8 lg:p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">
                ¿Qué esperar?
              </h2>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-white/20 rounded-full p-1 mr-3">
                    <Check className="h-5 w-5" />
                  </div>
                  <span>Demostración personalizada según su tipo de cultivo</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-white/20 rounded-full p-1 mr-3">
                    <Check className="h-5 w-5" />
                  </div>
                  <span>Análisis de necesidades específicas para su producción</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-white/20 rounded-full p-1 mr-3">
                    <Check className="h-5 w-5" />
                  </div>
                  <span>Ejemplo práctico de implementación con etiquetas QR</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-white/20 rounded-full p-1 mr-3">
                    <Check className="h-5 w-5" />
                  </div>
                  <span>Presupuesto y cronograma de implementación</span>
                </li>
              </ul>
              
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">
                  Entregables del Prototipo
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                    <span>Mockups o demo funcional web/app</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                    <span>Etiquetas QR y manual de uso</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                    <span>Base de datos simple para demo</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                    <span>Reporte de análisis y métricas de impacto</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;