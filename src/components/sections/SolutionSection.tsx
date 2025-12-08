import { Button } from "@/components/ui/button";
import { Clock, TrendingUp, Settings, BarChart3, ArrowRight, ArrowBigDownDash, ArrowBigDown } from "lucide-react";
import dashboardImage from "@/assets/dashboard-preview.jpg";

const SolutionSection = () => {
  const scrollToDemos = () => {
     const demoSection = document.getElementById("demos");
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: "smooth" });
    }
    };
  const benefits = [
    {
      icon: Clock,
      title: "Ahorra tiempo, gana productividad",
      description: "Libera 10+ horas semanales a tu equipo. Automatiza el agendamiento 24/7 y permite que tus clientes reserven por sí mismos.",
      metric: "+10 horas semanales libres"
    },
    {
      icon: TrendingUp,
      title: "Incrementa tus ingresos en un 20%", 
      description: "Reduce las cancelaciones con recordatorios automáticos por WhatsApp y SMS. Permite pagos por adelantado para asegurar tus citas.",
      metric: "+20% ingresos promedio"
    },
    {
      icon: Settings,
      title: "Control total desde un solo lugar",
      description: "Gestiona tus citas, empleados y sedes desde un panel intuitivo. Sin estrés, sin complicaciones.",
      metric: "Todo centralizado"
    },
    {
      icon: BarChart3,
      title: "Toma decisiones inteligentes",
      description: "Accede a reportes claros que te muestran la ocupación, los ingresos y los clientes más valiosos.",
      metric: "Reportes en tiempo real"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-section-title mb-6">
            La solución está aquí
          </h2>
          <p className="text-section-subtitle">
            <span className="font-semibold text-accent">OnBook</span> es la herramienta inteligente 
            que elimina el caos y te entrega el control total.
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="mb-20">
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-success/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white p-2 rounded-3xl shadow-elegant">
              <img 
                src={dashboardImage}
                alt="Panel de control OnBook"
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="card-elevated group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                    <IconComponent className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {benefit.description}
                    </p>
                    <div className="inline-flex items-center text-sm font-medium text-success bg-success/10 px-3 py-1 rounded-full">
                      {benefit.metric}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-accent to-success p-8 rounded-3xl text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para transformar tu negocio?
            </h3>
            <p className="text-xl mb-6 text-white/90">
              Únete a cientos de profesionales que ya automatizaron su éxito
            </p>
            <Button size="lg" 
            onClick={scrollToDemos}
            className="bg-white text-accent hover:bg-white/90 font-semibold group">
              Prueba una demo gratuita
              <ArrowBigDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;