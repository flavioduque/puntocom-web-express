import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wifi, Home, Building, Smartphone, Shield, Headphones } from "lucide-react";

const Services = () => {
  const plans = [
    {
      name: "Plan Básico",
      speed: "100 Mbps",
      price: "120.000",
      features: [
        "Ideal para 3-4 dispositivos",
        "Streaming en HD",
        "Navegación web rápida",
        "Instalación gratuita"
      ],
      icon: Home,
      popular: false
    },
    {
      name: "Plan Premium",
      speed: "150 Mbps",
      price: "150.000",
      features: [
        "Ideal para 5-7 dispositivos",
        "Streaming 4K",
        "Gaming online",
        "WiFi de alta potencia"
      ],
      icon: Wifi,
      popular: true
    },
    {
      name: "Plan Empresarial",
      speed: "200 Mbps",
      price: "180.000",
      features: [
        "IP fija dedicada",
        "Soporte prioritario",
        "Ancho de banda garantizado",
        "SLA 99.9%"
      ],
      icon: Building,
      popular: false
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Conexión Segura",
      description: "Protección avanzada contra amenazas cibernéticas"
    },
    {
      icon: Headphones,
      title: "Soporte 24/7",
      description: "Atención técnica las 24 horas del día"
    },
    {
      icon: Smartphone,
      title: "App Móvil",
      description: "Gestiona tu cuenta desde tu celular"
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestros <span className="text-orange-500">Servicios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Planes diseñados para satisfacer todas tus necesidades de conectividad
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <Card key={plan.name} className={`relative ${plan.popular ? 'ring-2 ring-orange-500 shadow-xl' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Más Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-4 p-3 bg-purple-100 rounded-full w-fit">
                  <plan.icon className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">{plan.name}</CardTitle>
                <div className="text-center">
                  <span className="text-4xl font-bold text-orange-500">{plan.speed}</span>
                  <div className="text-gray-600 mt-2">
                    <span className="text-2xl font-bold">₲{plan.price}</span>
                    <span className="text-sm">/mes</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${plan.popular ? 'bg-orange-500 hover:bg-orange-600' : 'bg-purple-600 hover:bg-purple-700'}`}
                >
                  Contratar Ahora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto mb-4 p-4 bg-orange-100 rounded-full w-fit">
                <feature.icon className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
