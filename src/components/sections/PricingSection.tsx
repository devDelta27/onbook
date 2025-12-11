import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Star, ArrowRight, Phone, Loader2 } from "lucide-react";
import { getPaddleInstance } from "@/lib/paddle";
import { useNavigate } from "react-router-dom";

const PricingSection = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Inicializamos Paddle apenas carga la página
  useEffect(() => {
    getPaddleInstance();
  }, []);

  // Función para abrir el checkout
  const handleCheckout = async (priceId: string) => {
    setLoading(true);
    try {
      const paddle = await getPaddleInstance();
      
      if (paddle) {
        paddle.Checkout.open({
          items: [{ priceId: priceId, quantity: 1 }],
          // Después de pagar, Paddle nos avisa aquí
          settings: {
            successUrl: window.location.origin + "/success", // Redirige a tu página de éxito
          }
        });
      }
    } catch (error) {
      console.error("Error abriendo checkout:", error);
    } finally {
      setLoading(false);
    }
  };

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
      cta: "Suscribirse",
      popular: false,
      // ⚠️ PEGA AQUÍ EL PRICE ID DE PADDLE (Empieza con pri_...)
      paddlePriceId: "pri_01kc2gp152pa0fyrnnyeay71cd" 
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
      cta: "Suscribirse",
      popular: true,
      // ⚠️ PEGA AQUÍ EL PRICE ID DE PADDLE DEL PLAN PRO
      paddlePriceId: "pri_01kc2gp152pa0fyrnnyeay71cd"
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
            Pago seguro internacional. Aceptamos tarjetas de crédito y débito sin crear cuenta.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`pricing-card flex flex-col justify-between ${plan.popular ? 'featured' : ''}`}
            >
              <div>
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

                  {/* Lógica de Botones */}
                  <div className="min-h-[50px]">
                    {plan.paddlePriceId ? (
                      <Button 
                        className={`w-full ${plan.popular ? 'btn-hero' : 'bg-primary hover:bg-primary/90'}`}
                        disabled={loading}
                        onClick={() => handleCheckout(plan.paddlePriceId!)}
                      >
                        {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                        {plan.cta}
                        {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
                      </Button>
                    ) : (
                      <Button 
                        className={`w-full ${plan.popular ? 'btn-hero' : 'bg-primary hover:bg-primary/90'}`}
                        onClick={() => window.location.href = "mailto:ventas@onbook.oncorp.io"}
                      >
                        {plan.cta}
                        <Phone className="ml-2 h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  
                  {plan.paddlePriceId && (
                    <p className="text-xs text-neutral-400 mt-3 flex items-center justify-center gap-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Procesado seguro por Paddle
                    </p>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
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
              <h4 className="font-semibold text-lg mb-1">Garantía de Satisfacción</h4>
              <p className="text-muted-foreground">
                Cancela tu suscripción en cualquier momento con un solo clic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;