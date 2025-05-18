import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Leaf className="h-8 w-8 text-green-600 mr-2" />
            <span className="text-xl font-bold text-gray-800">
              <span className="text-green-600">Agro</span>
              <span className="text-blue-500">QR</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#problema" className="text-gray-700 hover:text-green-600 transition-colors">Problema</a>
            <a href="#solucion" className="text-gray-700 hover:text-green-600 transition-colors">Solución</a>
            <a href="#caracteristicas" className="text-gray-700 hover:text-green-600 transition-colors">Características</a>
            <a href="#beneficios" className="text-gray-700 hover:text-green-600 transition-colors">Beneficios</a>
            <a href="#contacto" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
              Contacto
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-2">
            <div className="flex flex-col space-y-4">
              <a 
                href="#problema" 
                className="text-gray-700 hover:text-green-600 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Problema
              </a>
              <a 
                href="#solucion" 
                className="text-gray-700 hover:text-green-600 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Solución
              </a>
              <a 
                href="#caracteristicas" 
                className="text-gray-700 hover:text-green-600 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Características
              </a>
              <a 
                href="#beneficios" 
                className="text-gray-700 hover:text-green-600 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Beneficios
              </a>
              <a 
                href="#contacto" 
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors inline-block"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;