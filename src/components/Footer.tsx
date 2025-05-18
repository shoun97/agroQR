import React from 'react';
import { Leaf, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <Leaf className="h-8 w-8 text-green-400 mr-2" />
              <span className="text-2xl font-bold">
                <span className="text-green-400">Agro</span>
                <span className="text-blue-400">QR</span>
              </span>
            </div>
            
            <p className="text-gray-400 mb-6">
              Transformando la agricultura mediante tecnología innovadora y accesible para productores de todos los tamaños.
            </p>
            
            <div className="flex space-x-3">
              <a href="#" className="bg-gray-800 hover:bg-gray-700 transition-colors p-2 rounded-full">
                <Linkedin size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-700 transition-colors p-2 rounded-full">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-700 transition-colors p-2 rounded-full">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-700 transition-colors p-2 rounded-full">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#problema" className="text-gray-400 hover:text-green-400 transition-colors">
                  Problema
                </a>
              </li>
              <li>
                <a href="#solucion" className="text-gray-400 hover:text-green-400 transition-colors">
                  Solución
                </a>
              </li>
              <li>
                <a href="#caracteristicas" className="text-gray-400 hover:text-green-400 transition-colors">
                  Características
                </a>
              </li>
              <li>
                <a href="#beneficios" className="text-gray-400 hover:text-green-400 transition-colors">
                  Beneficios
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-green-400 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">
              Servicios
            </h3>
            <ul className="space-y-3">
              <li className="text-gray-400">Implementación de AgroQR</li>
              <li className="text-gray-400">Capacitación a equipos agrícolas</li>
              <li className="text-gray-400">Consultoría de digitalización</li>
              <li className="text-gray-400">Desarrollo de módulos personalizados</li>
              <li className="text-gray-400">Soporte técnico continuo</li>
              <li className="text-gray-400">Análisis de datos agrícolas</li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                <span className="text-gray-400">Puerto Montt, Región de Los Lagos, Chile</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-green-400 mr-2" />
                <span className="text-gray-400">+56 9 1234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-green-400 mr-2" />
                <span className="text-gray-400">contacto@agroqr.cl</span>
              </li>
            </ul>
            
            <div className="mt-6 bg-gray-800 p-4 rounded-lg">
              <h4 className="font-medium text-gray-300 mb-2">Suscríbase a nuestro newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Su correo electrónico" 
                  className="bg-gray-700 text-white px-3 py-2 rounded-l-md flex-grow focus:outline-none focus:ring-1 focus:ring-green-400"
                />
                <button className="bg-green-600 hover:bg-green-700 transition-colors px-4 py-2 rounded-r-md">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">
              © 2025 AgroQR. Todos los derechos reservados.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-400 transition-colors">
                Términos y Condiciones
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400 transition-colors">
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;