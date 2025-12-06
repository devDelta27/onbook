import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-chaos-control.jpg";

const HeroSection = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-overlay opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-2 mb-8 animate-fade-up">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Potenciado por ONCORP.io</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-hero mb-6 animate-fade-up">
            Menos caos,{" "}
            <span className="gradient-text">más ingresos</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-hero-sub mb-8 text-white/90 max-w-3xl mx-auto animate-fade-up">
            Olvídate del estrés de agendar citas. Con <span className="font-semibold text-accent">OnBook</span>, 
            automatiza tu operación y enfócate en lo que te hace crecer: tus clientes.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-up">
            <Button 
              size="lg" 
              className="btn-hero group"
              onClick={scrollToPricing} // CAMBIO AQUÍ: Agregamos el evento onClick
            >
              Transforma tu negocio en 15 minutos
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button size="lg" variant="ghost" className="btn-secondary group">
              <Play className="mr-2 h-5 w-5" />
              Ver demo en vivo
            </Button>
          </div>
          
          {/* Trust Badge */}
          <p className="text-sm text-white/70 animate-fade-up">
            ✅ Pruébalo gratis • ✅ Sin tarjeta de crédito • ✅ Configuración en minutos
          </p>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-white/10 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-success/20 rounded-full animate-float" style={{ animationDelay: "4s" }}></div>
    </section>
  );
};

export default HeroSection;