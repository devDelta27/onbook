import { Star, Quote, TrendingUp, Users, MapPin } from "lucide-react";
import testimonialsImage from "@/assets/testimonials-hero.jpg";

const SocialProofSection = () => {
  const testimonials = [
    {
      name: "Dr. María Rodríguez",
      role: "Directora Clínica Salud Total",
      location: "San José, Costa Rica",
      quote: "Redujimos nuestras cancelaciones en un 30% en el primer mes. Los recordatorios automáticos por WhatsApp fueron un cambio total.",
      rating: 5
    },
    {
      name: "Carlos Mendoza",
      role: "Propietario Salón Elite",
      location: "Guatemala City, Guatemala",
      quote: "Ahorramos más de 10 horas semanales solo en coordinación. Ahora mi equipo se enfoca en lo que realmente importa: nuestros clientes.",
      rating: 5
    },
    {
      name: "Ana Lucia Santos",
      role: "Gerente Spa Relax",
      location: "San Salvador, El Salvador",
      quote: "Los reportes de ingresos me permitieron identificar mis servicios más rentables. Aumenté mis ganancias un 25% en tres meses.",
      rating: 5
    }
  ];

  const stats = [
    {
      icon: Users,
      number: "2,500+",
      label: "Citas agendadas mensualmente"
    },
    {
      icon: TrendingUp,
      number: "$1.2M+",
      label: "En reservas procesadas"
    },
    {
      icon: MapPin,
      number: "6",
      label: "Países de Centroamérica"
    }
  ];

  const clientLogos = [
    "Clínica Salud Total",
    "Salón Elite",
    "Spa Relax",
    "Centro Médico Integral",
    "Gimnasio Fitness Pro",
    "Estética Bella"
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-section-title mb-6">
            Ellos ya lo lograron
          </h2>
          <p className="text-section-subtitle">
            Únete a los cientos de negocios en Centroamérica que ya transformaron 
            su operación con <span className="font-semibold text-accent">OnBook</span>
          </p>
        </div>

        {/* Hero Testimonials Image */}
        <div className="mb-16">
          <div className="relative max-w-3xl mx-auto">
            <img 
              src={testimonialsImage}
              alt="Clientes satisfechos con OnBook"
              className="w-full rounded-3xl shadow-elegant"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl"></div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-elevated text-center">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-warning text-warning" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <Quote className="h-8 w-8 text-accent/20 mx-auto mb-4" />
                <p className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author */}
              <div>
                <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                <p className="text-xs text-accent font-medium mt-1">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-primary text-white rounded-3xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Números que hablan por sí solos
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-accent" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="text-white/80">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Client Logos */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-8 text-muted-foreground">
            Confían en OnBook
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-60">
            {clientLogos.map((client, index) => (
              <div 
                key={index}
                className="bg-neutral-100 rounded-lg p-4 text-center font-medium text-sm text-neutral-600"
              >
                {client}
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex justify-center items-center gap-8 mt-16 pt-8 border-t border-neutral-200">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-success rounded-full"></div>
            </div>
            Datos protegidos SSL
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
            </div>
            Integración con Stripe
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
            </div>
            Certificado Google
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;