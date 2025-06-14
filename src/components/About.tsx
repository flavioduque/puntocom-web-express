
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Zap, Heart } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Clientes Activos" },
    { icon: Award, value: "5", label: "Años de Experiencia" },
    { icon: Zap, value: "99.9%", label: "Tiempo de Actividad" },
    { icon: Heart, value: "100%", label: "Satisfacción del Cliente" }
  ];

  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Sobre <span className="text-orange-500">Puntocom</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Somos un proveedor de servicios de internet líder en Paraguay, comprometidos con brindar 
              conexiones de alta velocidad y confiabilidad a hogares y empresas en todo el país.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Nuestra misión es conectar a Paraguay con el mundo digital, proporcionando tecnología 
              de vanguardia y un servicio al cliente excepcional que supere las expectativas.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="text-gray-700">Red de fibra óptica de última generación</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="text-gray-700">Soporte técnico especializado 24/7</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="text-gray-700">Precios competitivos y transparentes</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="mx-auto mb-4 p-3 bg-purple-100 rounded-full w-fit">
                    <stat.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <div className="text-3xl font-bold text-orange-500 mb-2">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
