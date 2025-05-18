import React from 'react';
import { AlertCircle, Droplets, Zap, AlertTriangle } from 'lucide-react';

const Problem: React.FC = () => {
  const problems = [
    {
      icon: <AlertCircle className="h-10 w-10 text-red-500" />,
      title: 'Enfermedades no detectadas',
      description: 'Pérdidas significativas por diagnósticos tardíos de plagas y enfermedades en los cultivos.',
    },
    {
      icon: <Droplets className="h-10 w-10 text-blue-500" />,
      title: 'Riego ineficiente',
      description: 'Sistemas de riego que no consideran las necesidades individuales de cada planta o sector.',
    },
    {
      icon: <Zap className="h-10 w-10 text-yellow-500" />,
      title: 'Uso incorrecto de fertilizantes',
      description: 'Aplicación excesiva o insuficiente sin registros precisos de dosificación y respuesta.',
    },
    {
      icon: <AlertTriangle className="h-10 w-10 text-orange-500" />,
      title: 'Falta de herramientas tecnológicas',
      description: 'Escasez de soluciones accesibles para agricultores que quieren digitalizar su producción.',
    },
  ];

  return (
    <section id="problema" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Problemática Detectada
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            En la Región de Los Lagos, muchas explotaciones agrícolas enfrentan desafíos que podrían resolverse con tecnología accesible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-t-4 border-green-500"
            >
              <div className="mb-4">
                {problem.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {problem.title}
              </h3>
              <p className="text-gray-600">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-red-50 rounded-xl p-8 border-l-4 border-red-500">
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <AlertTriangle className="h-8 w-8 text-red-500" />
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                ¿El resultado?
              </h3>
              <p className="text-lg text-gray-700">
                Menor productividad, mayores costos operativos y uso ineficiente de recursos como agua y fertilizantes. Los agricultores necesitan soluciones que les permitan hacer seguimiento individualizado para optimizar su producción.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;