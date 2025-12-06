import { Button } from "@/components/ui/button";
import { ExternalLink, Scissors, Stethoscope, Dumbbell, Briefcase } from "lucide-react";

const DemosSection = () => {
  // AQUÍ ES DONDE PONDRÁS LOS LINKS DE TU DASHBOARD DE TRAFFT
  const demos = [
    {
      title: "Clínicas y Salud",
      description: "Gestión de doctores, expedientes y citas recurrentes para pacientes.",
      icon: Stethoscope,
      color: "bg-blue-100 text-blue-600",
      link: "https://gianna.wlbookings.com/" // <- Pega aquí el link de tu cliente "Demo Clínica"
    },
    {
      title: "Salones y Barberías",
      description: "Reservas visuales, selección de estilista y complementos de servicios.",
      icon: Scissors,
      color: "bg-orange-100 text-orange-600",
      link: "#" // <- Link de tu cliente "Demo Barbería"
    },
    {
      title: "Fitness y Deportes",
      description: "Clases grupales, gestión de aforos y entrenadores personales.",
      icon: Dumbbell,
      color: "bg-green-100 text-green-600",
      link: "#" // <- Link de tu cliente "Demo Gym"
    },
    {
      title: "Servicios Profesionales",
      description: "Ideal para abogados, consultores y contadores. Citas virtuales automáticas.",
      icon: Briefcase,
      color: "bg-purple-100 text-purple-600",
      link: "#" // <- Link de tu cliente "Demo Consultoría"
    }
  ];

  return (
    <section id="demos" className="section-padding bg-white relative overflow-hidden">
      {/* Fondo decorativo sutil */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-section-title mb-6">
            Mira cómo funciona <span className="text-accent">en tu industria</span>
          </h2>
          <p className="text-section-subtitle">
            Hemos preparado ejemplos reales para que veas la experiencia que tendrán tus clientes al reservar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {demos.map((demo, index) => {
            const Icon = demo.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white border border-neutral-200 rounded-2xl p-6 hover:border-accent hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-12 h-12 ${demo.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="h-6 w-6" />
                </div>
                
                <h3 className="text-lg font-bold mb-2 text-neutral-900">{demo.title}</h3>
                <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
                  {demo.description}
                </p>

                <Button 
                  className="w-full bg-neutral-50 text-neutral-900 hover:bg-primary hover:text-white border border-neutral-200 group-hover:border-primary/20 transition-all"
                  variant="outline"
                  onClick={() => window.open(demo.link, '_blank')}
                >
                  Ver Demo en Vivo
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DemosSection;