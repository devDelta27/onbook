import { Button } from "@/components/ui/button";
import { Check, Star, ArrowRight, Phone } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Plan Esencial",
      subtitle: "Ideal para profesionales independientes",
      price: "$10",
      period: "USD / mes",
      features: [
        "1 usuario incluido",
        "Citas ilimitadas",
        "Sincronización con calendario",
        "Notificaciones básicas",
        "Soporte por email"
      ],
      cta: "Empieza a organizar tu agenda",
      popular: false,
      // PEGA AQUÍ TU ENLACE DE STRIPE DEL PLAN ESENCIAL
      link: "https://buy.stripe.com/test_..." 
    },
    {
      name: "Plan Pro",
      subtitle: "Equipos en crecimiento",
      price: "$18",
      period: "USD / mes",
      features: [
        "5 usuarios incluidos",
        "Recordatorios por WhatsApp",
        "Reportes de ingresos",
        "Control de pagos",
        "Múltiples servicios",
        "Soporte prioritario"
      ],
      cta: "Prueba el plan Pro gratis",
      popular: true,
      // PEGA AQUÍ TU ENLACE DE STRIPE DEL PLAN PRO
      link: "https://buy.stripe.com/test_..." 
    },
   
  ];

  return (
    <section id="pricing" className="section-padding section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-section-title mb-6">
            Elige tu plan. <span className="text-accent">Crece con nosotros</span>
          </h2>
          <p className="text-section-subtitle">
            Sin contratos forzosos. Solo la herramienta que necesitas para escalar tu negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`pricing-card ${plan.popular ? 'featured' : ''}`}
            >
              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">{plan.subtitle}</p>
                
                <div className="mb-6">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>

                <Button 
                  className={`w-full ${plan.popular ? 'btn-hero' : 'bg-primary hover:bg-primary/90'}`}
                  // AQUÍ ESTÁ LA MAGIA: Al hacer clic, abre el link de Stripe
                  onClick={() => window.open(plan.link, '_blank')}
                >
                  {plan.cta}
                  {index === 2 ? (
                    <Phone className="ml-2 h-4 w-4" />
                  ) : (
                    <ArrowRight className="ml-2 h-4 w-4" />
                  )}
                </Button>
              </div>

              {/* Features */}
              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-success/10 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="h-3 w-3 text-success" />
                    </div>
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-accent text-white text-sm font-medium px-4 py-1 rounded-full flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    Más Popular
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl p-6 shadow-card">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center">
              <Check className="h-8 w-8 text-success" />
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-lg mb-1">Garantía de 30 días</h4>
              <p className="text-muted-foreground">
                Si no estás completamente satisfecho, te devolvemos tu dinero
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;