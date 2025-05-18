import React from 'react';
import { Tag, Clipboard, BarChart, Cloud, Smartphone, Database, Leaf, Activity } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="caracteristicas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Características Detalladas
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conozca cómo AgroQR revoluciona la forma en que monitoreamos y gestionamos cultivos individuales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-green-200">
            <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <Tag className="h-7 w-7 text-green-600" />
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Identificación Única
            </h3>
            
            <p className="text-gray-600 mb-4">
              Cada planta o parcela recibe un código QR o etiqueta NFC resistente a condiciones climáticas adversas.
            </p>
            
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Códigos QR autoadhesivos de alta durabilidad</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Enlaces directos al historial completo</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Acceso instantáneo con cualquier smartphone</span>
              </li>
            </ul>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-green-200">
            <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <Clipboard className="h-7 w-7 text-blue-600" />
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Registro de Eventos
            </h3>
            
            <p className="text-gray-600 mb-4">
              Captura cada intervención para crear un historial completo del ciclo de vida de cada planta.
            </p>
            
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Riego con cantidad y frecuencia</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Aplicación de fertilizantes y tratamientos</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Podas y mantenimiento programado</span>
              </li>
            </ul>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-green-200">
            <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <Activity className="h-7 w-7 text-purple-600" />
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Diagnóstico por IA
            </h3>
            
            <p className="text-gray-600 mb-4">
              Análisis de imágenes mediante inteligencia artificial para detectar problemas fitosanitarios.
            </p>
            
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Detección temprana de enfermedades</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Identificación de deficiencias nutricionales</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Recomendaciones de tratamiento personalizadas</span>
              </li>
            </ul>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-green-200">
            <div className="bg-yellow-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <BarChart className="h-7 w-7 text-yellow-600" />
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Análisis Avanzado
            </h3>
            
            <p className="text-gray-600 mb-4">
              Visualización de datos y análisis estadístico para optimizar la producción agrícola.
            </p>
            
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Gráficos de rendimiento por sector</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Comparativas entre temporadas</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Correlación entre tratamientos y resultados</span>
              </li>
            </ul>
          </div>

          {/* Feature 5 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-green-200">
            <div className="bg-red-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <Smartphone className="h-7 w-7 text-red-600" />
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Acceso Multiplataforma
            </h3>
            
            <p className="text-gray-600 mb-4">
              Acceda a toda la información desde cualquier dispositivo, en el campo o en la oficina.
            </p>
            
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Aplicación móvil para Android e iOS</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Interfaz web responsiva</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Funcionamiento offline con sincronización</span>
              </li>
            </ul>
          </div>

          {/* Feature 6 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-green-200">
            <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <Leaf className="h-7 w-7 text-green-600" />
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Agricultura Sostenible
            </h3>
            
            <p className="text-gray-600 mb-4">
              Optimización de recursos para una producción más eficiente y respetuosa con el medio ambiente.
            </p>
            
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Reducción del uso de agua</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Optimización de fertilizantes</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Menor impacto ambiental</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="bg-blue-50 rounded-xl p-8 max-w-4xl border-l-4 border-blue-500">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Nivel de Avance
            </h3>
            <p className="text-gray-700 mb-4">
              Actualmente nos encontramos en fase de diseño conceptual y validación preliminar con agricultores de la Región de Los Lagos.
            </p>
            <div className="bg-white p-4 rounded-lg">
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <Database className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Tecnologías</h4>
                    <p className="text-sm text-gray-600">React, Node.js, PostgreSQL</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <Cloud className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Tiempo estimado</h4>
                    <p className="text-sm text-gray-600">MVP en 30-60 días</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;