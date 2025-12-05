import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const FooterSection = () => {
  const footerLinks = {
    producto: [
      { name: "Características", href: "#features" },
      { name: "Precios", href: "#pricing" },
      { name: "Demo en vivo", href: "#demo" },
      { name: "Integraciones", href: "#integrations" }
    ],
    soporte: [
      { name: "Centro de ayuda", href: "#help" },
      { name: "Tutoriales", href: "#tutorials" },
      { name: "API Docs", href: "#api" },
      { name: "Estado del sistema", href: "#status" }
    ],
        legal: [
      { name: "Términos de uso", href: "#terms" },
      { name: "Política de privacidad", href: "#privacy" },
      { name: "Cookies", href: "#cookies" },
      
    ]
  };

 

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-neutral-800">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">¿Quieres más consejos para hacer crecer tu negocio?</h3>
            <p className="text-neutral-400 mb-8">
              Recibe semanalmente estrategias exclusivas, casos de éxito y tips para optimizar tu operación
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button className="bg-accent hover:bg-accent/90 px-6 py-3 rounded-xl font-semibold">
                Suscribirse
              </Button>
            </div>
            <p className="text-xs text-neutral-500 mt-3">
              No spam. Te puedes desuscribir cuando quieras.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-accent mb-2">OnBook</h2>
              <p className="text-sm text-neutral-400">by ONCORP.io</p>
            </div>
            <p className="text-neutral-400 mb-6 leading-relaxed">
              La plataforma de agendamiento más confiable de Centroamérica. 
              Automatiza tu operación y enfócate en hacer crecer tu negocio.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm text-neutral-400">
                <Mail className="h-4 w-4 text-accent" />
                hola@onbook.oncorp.io
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-400">
                <Phone className="h-4 w-4 text-accent" />
                +506 2200-3040
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-400">
                <MapPin className="h-4 w-4 text-accent" />
                Tegucigalpa, Honduras
              </div>
            </div>

            {/* Social Links */}
            
          </div>

          {/* Links Sections */}
          <div className="grid md:grid-cols-4 gap-8 md:col-span-4">
            <div>
              <h4 className="font-semibold mb-4">Producto</h4>
              <ul className="space-y-3">
                {footerLinks.producto.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-neutral-400 hover:text-accent transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Soporte</h4>
              <ul className="space-y-3">
                {footerLinks.soporte.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-neutral-400 hover:text-accent transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

           

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-neutral-400 hover:text-accent transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-neutral-400">
              © 2024 OnBook by ONCORP.io. Todos los derechos reservados.
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-xs text-neutral-500">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                Todos los sistemas operando normalmente
              </div>
              <div className="text-xs text-neutral-500">
                Versión 2.1.0
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;