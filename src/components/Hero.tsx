import React from 'react';
import { QrCode, Smartphone, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 md:pr-8 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              <span className="text-green-600">Monitoreo Inteligente</span> de Cultivos Individualizados
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              Transforme su producción agrícola con un sistema de seguimiento preciso mediante códigos QR para cada planta o árbol.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#contacto"
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition-colors flex items-center justify-center sm:justify-start"
              >
                Comenzar ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              
              <a
                href="#como-funciona"
                className="border border-blue-500 text-blue-500 hover:bg-blue-50 font-medium py-3 px-6 rounded-md transition-colors flex items-center justify-center sm:justify-start"
              >
                Cómo funciona
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center relative">
            <div className="bg-white p-6 rounded-2xl shadow-xl max-w-md relative z-10 transform hover:scale-105 transition-transform duration-300">
              <div className="relative mb-6">
                <img 
                  src="https://images.pexels.com/photos/1001990/pexels-photo-1001990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Cultivo de árboles frutales con etiquetas QR" 
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-blue-500 p-3 rounded-lg shadow-md">
                  <QrCode className="h-10 w-10 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Trazabilidad Completa</h3>
              
              <p className="text-gray-600 mb-4">
                Registre riego, fertilización, estado fitosanitario y crecimiento de cada planta con un simple escaneo.
              </p>
              
              <div className="flex items-center text-sm text-blue-600">
                <Smartphone className="h-5 w-5 mr-2" />
                Disponible en web y móvil
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 w-72 h-72 bg-green-200 rounded-full opacity-20 -top-10 -left-10" />
            <div className="absolute -z-10 w-48 h-48 bg-blue-200 rounded-full opacity-30 bottom-10 right-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;