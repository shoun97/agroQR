import React, { useEffect, useState, useRef } from 'react';
import { TrendingUp, ShieldCheck, Droplet, Recycle } from 'lucide-react';

const Benefits: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
      title: "Mayor eficiencia operacional",
      description: "Reduzca costos y mejore la productividad con un seguimiento preciso de cada unidad de cultivo.",
      stats: "Hasta 25% de aumento en productividad",
      color: "from-green-400 to-green-600"
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
      title: "Reducción de pérdidas",
      description: "Detecte problemas tempranamente antes de que afecten significativamente a su producción.",
      stats: "Disminución del 30% en pérdidas por enfermedades",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <Droplet className="h-8 w-8 text-cyan-600" />,
      title: "Uso responsable del agua",
      description: "Optimice el riego según las necesidades reales de cada planta o sector de su cultivo.",
      stats: "Ahorro de hasta 20% en consumo de agua",
      color: "from-cyan-400 to-cyan-600"
    },
    {
      icon: <Recycle className="h-8 w-8 text-yellow-600" />,
      title: "Transformación digital",
      description: "Digitalice completamente su operación agrícola con una solución moderna e intuitiva.",
      stats: "Gestión 100% digitalizada en 3-6 meses",
      color: "from-yellow-400 to-yellow-600"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="beneficios" className="py-20 bg-gradient-to-br from-green-50 to-blue-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Impacto y Beneficios
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Adoptar AgroQR para su producción agrícola trae múltiples ventajas para su negocio y el medio ambiente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-500 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`h-2 bg-gradient-to-r ${benefit.color}`}></div>
              <div className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                      {benefit.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {benefit.description}
                    </p>
                    <div className="bg-gray-50 py-2 px-4 rounded-lg inline-block">
                      <span className="font-semibold text-gray-700">{benefit.stats}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
              Testimonios de Agricultores
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-green-600">JM</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Juan Martínez</h4>
                    <p className="text-sm text-gray-600">Productor de Berries, Puerto Varas</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "El seguimiento individualizado nos ha permitido identificar qué sectores de la plantación necesitan mayor atención, optimizando nuestros recursos y mejorando la calidad de nuestra producción."
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-blue-600">CP</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Carolina Pérez</h4>
                    <p className="text-sm text-gray-600">Cooperativa Agrícola, Osorno</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "La digitalización de nuestros procesos con AgroQR nos ha dado una visión completamente nueva de nuestra operación. Ahora podemos tomar decisiones basadas en datos concretos."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;