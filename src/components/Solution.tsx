import React, { useState } from 'react';
import { QrCode, Calendar, ImagePlus, BarChart4 } from 'lucide-react';

const Solution: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const solutions = [
    {
      icon: <QrCode className="h-6 w-6" />,
      title: "Etiquetado con QR/NFC",
      description: "Cada árbol o unidad productiva recibe un código único que almacena su historial completo y permite actualizaciones en tiempo real.",
      image: "https://images.pexels.com/photos/6476776/pexels-photo-6476776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Registro de eventos clave",
      description: "Documente cada actividad: riego, poda, aplicación de fertilizantes e inspecciones, creando un historial detallado para cada cultivo.",
      image: "https://images.pexels.com/photos/3912448/pexels-photo-3912448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      icon: <ImagePlus className="h-6 w-6" />,
      title: "Captura de imágenes para IA",
      description: "Tome fotos de hojas o frutos para análisis mediante inteligencia artificial, permitiendo diagnóstico temprano de enfermedades.",
      image: "https://images.pexels.com/photos/3544088/pexels-photo-3544088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      icon: <BarChart4 className="h-6 w-6" />,
      title: "Dashboard centralizado",
      description: "Visualice todos sus datos en un panel intuitivo que muestra tendencias, alertas y recomendaciones personalizadas.",
      image: "https://images.pexels.com/photos/7947403/pexels-photo-7947403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <section id="solucion" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nuestra Solución
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            AgroQR transforma la gestión agrícola mediante un enfoque digital centrado en cada planta o cultivo individual.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="bg-white p-1 rounded-xl shadow-lg">
              <img
                src={solutions[activeTab].image}
                alt={solutions[activeTab].title}
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
                {solutions.map((solution, index) => (
                  <button
                    key={index}
                    className={`py-4 px-2 flex flex-col items-center text-center transition-colors ${
                      activeTab === index
                        ? 'bg-green-50 text-green-600 border-b-2 border-green-500'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setActiveTab(index)}
                  >
                    <div className={`p-2 rounded-full mb-2 ${
                      activeTab === index ? 'bg-green-100' : 'bg-gray-100'
                    }`}>
                      {solution.icon}
                    </div>
                    <span className="text-sm font-medium">{solution.title}</span>
                  </button>
                ))}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {solutions[activeTab].title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {solutions[activeTab].description}
                </p>
                <a
                  href="#caracteristicas"
                  className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors"
                >
                  Ver más detalles
                  <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;