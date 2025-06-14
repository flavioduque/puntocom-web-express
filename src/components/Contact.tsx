
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    console.log("Form submitted:", formData);
    
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      info: "+595 985 749827",
      description: "Lunes a Viernes 8:00 - 18:00"
    },
    {
      icon: Mail,
      title: "Email",
      info: "info@puntocominternet.py",
      description: "Respuesta en 24 horas"
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="text-orange-500">Contáctanos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Listo para mejorar tu conexión a internet? Atendemos en todo Paraguay, contáctanos hoy mismo
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Estamos aquí para ayudarte
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-orange-100 rounded-lg">
                        <item.icon className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-orange-600 font-medium">{item.info}</p>
                        <p className="text-sm text-gray-500">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                Solicitar Información
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre completo *
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono *
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+595 21 123 456"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="tu@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Servicio de interés
                  </label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un plan" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hogar-basico">Hogar Básico - 100 Mbps</SelectItem>
                      <SelectItem value="hogar-premium">Hogar Premium - 150 Mbps</SelectItem>
                      <SelectItem value="empresarial">Empresarial - 200 Mbps</SelectItem>
                      <SelectItem value="personalizado">Plan Personalizado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Cuéntanos sobre tus necesidades de conectividad..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-lg py-6">
                  Enviar Solicitud
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
