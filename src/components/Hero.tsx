

import { Button } from "@/components/ui/button";
import { Wifi, Phone, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-orange-600 flex items-center">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20 p-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/7c142be4-3eda-4a83-bd77-5fd18100104b.png" 
              alt="Puntocom Internet" 
              className="h-12 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#servicios" className="text-white hover:text-orange-300 transition-colors">Servicios</a>
            <a href="#nosotros" className="text-white hover:text-orange-300 transition-colors">Nosotros</a>
            <a href="#cobertura" className="text-white hover:text-orange-300 transition-colors">Cobertura</a>
            <a href="#contacto" className="text-white hover:text-orange-300 transition-colors">Contacto</a>
          </nav>
          
          <div className="flex items-center space-x-4 text-white text-sm">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>+595 21 123 456</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 pt-24 relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-3 mb-6">
            <Wifi className="h-8 w-8 text-orange-400" />
            <span className="text-orange-400 font-semibold text-lg">Internet de Alta Velocidad</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Conecta con el
            <span className="text-orange-400"> Futuro</span>
          </h1>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Ofrecemos conexión a internet ultrarrápida de fibra óptica para hogares y empresas. Velocidad y confiabilidad.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
              Ver Planes
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900 px-8 py-3 text-lg">
              Contactar Ahora
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-400">500+</div>
              <div className="text-white/80">Clientes Satisfechos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400">100%</div>
              <div className="text-white/80">Fibra Óptica</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400">24/7</div>
              <div className="text-white/80">Soporte Técnico</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;

