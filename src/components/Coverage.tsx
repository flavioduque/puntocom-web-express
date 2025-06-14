
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, CheckCircle } from "lucide-react";

const Coverage = () => {
  const cities = [
    "Asunción",
    "Ciudad del Este",
    "San Lorenzo",
    "Luque",
    "Capiatá",
    "Lambaré",
    "Fernando de la Mora",
    "Nemby",
    "Mariano Roque Alonso",
    "Villa Elisa",
    "Ñemby",
    "Itauguá"
  ];

  return (
    <section id="cobertura" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestra <span className="text-orange-500">Cobertura</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expandimos constantemente nuestra red para llegar a más comunidades en Paraguay
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="bg-white shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-xl">
                  <MapPin className="h-6 w-6 text-orange-500" />
                  <span>Ciudades con Cobertura</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {cities.map((city, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-gray-700">{city}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                  <p className="text-sm text-orange-800">
                    <strong>¿Tu zona no aparece?</strong> Contáctanos para conocer nuestros planes de expansión.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-gradient-to-r from-purple-600 to-orange-500 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Expansión Continua</h3>
                <p className="text-white/90 mb-4">
                  Cada mes agregamos nuevas zonas a nuestra red de fibra óptica. 
                  Nuestro objetivo es conectar todo Paraguay con internet de alta velocidad.
                </p>
                <div className="text-3xl font-bold">+15</div>
                <div className="text-white/80">Nuevas zonas este año</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Solicitar Cobertura
                </h3>
                <p className="text-gray-600 mb-4">
                  Si tu zona no tiene cobertura aún, déjanos tus datos y te contactaremos 
                  cuando llegue la fibra óptica a tu área.
                </p>
                <div className="flex items-center space-x-2 text-orange-600">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm">Sin costo de reserva</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;
