import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Shield, Star } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary via-primary to-accent text-white overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full animate-float"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-accent/20 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/10 rounded-full animate-float" style={{ animationDelay: "4s" }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-6 py-2 mb-8">
            <Clock className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium">Tu transformación empieza hoy</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Un solo paso.{" "}
            <span className="bg-gradient-to-r from-accent to-success bg-clip-text text-transparent">
              El cambio total.
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Deja de perder tiempo y dinero. Empieza hoy a gestionar tu negocio 
            de forma inteligente y a liberar tu potencial.
          </p>

          {/* Benefits List */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 bg-white/10 rounded-xl p-4">
              <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="h-4 w-4 text-success" />
              </div>
              <span className="text-sm font-medium">Setup en 15 minutos</span>
            </div>

            <div className="flex items-center gap-3 bg-white/10 rounded-xl p-4">
              <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="h-4 w-4 text-accent" />
              </div>
              <span className="text-sm font-medium">Datos 100% seguros</span>
            </div>

            <div className="flex items-center gap-3 bg-white/10 rounded-xl p-4">
              <div className="w-8 h-8 bg-warning/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Star className="h-4 w-4 text-warning" />
              </div>
              <span className="text-sm font-medium">Soporte premium</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-bold px-8 py-4 rounded-xl group shadow-2xl"
            >
              Solicita una demo gratuita
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="ghost" 
              className="text-white border-2 border-white/30 hover:bg-white/10 font-semibold px-8 py-4 rounded-xl"
            >
              Ver precios
            </Button>
          </div>

          {/* Trust Message */}
          <p className="text-white/70 text-lg font-medium">
            No lo dejes para mañana.{" "}
            <span className="text-accent font-semibold">Tu negocio te lo agradecerá.</span>
          </p>

          {/* Urgency Element */}
          <div className="mt-12 bg-warning/20 border border-warning/30 rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-3 h-3 bg-warning rounded-full animate-pulse"></div>
              <h3 className="text-xl font-semibold text-warning">¡Oferta especial por tiempo limitado!</h3>
              <div className="w-3 h-3 bg-warning rounded-full animate-pulse"></div>
            </div>
            <p className="text-white/90">
              Primeros 100 clientes reciben 3 meses de Plan Pro por el precio del Esencial
            </p>
            <div className="text-sm text-warning font-medium mt-2">
              ⏰ Solo quedan 23 cupos disponibles
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;