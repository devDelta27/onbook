import { Check, X, Zap, Target, Heart } from "lucide-react";

const CompetitiveSection = () => {
  const comparisons = [
    {
      feature: "Diseñado para tu sector",
      miturno: "Creado específicamente para clínicas, salones y gimnasios",
      others: "Herramientas genéricas para cualquier tipo de cita",
      miturnoIcon: Check,
      othersIcon: X
    },
    {
      feature: "Soporte local",
      miturno: "Atención en español, en tu zona horaria, conocemos tu mercado",
      others: "Soporte genérico, sin conocimiento del mercado local",
      miturnoIcon: Check,
      othersIcon: X
    },
    {
      feature: "Integración WhatsApp",
      miturno: "Recordatorios automáticos por WhatsApp nativo",
      others: "Funcionalidades limitadas o costosas integraciones",
      miturnoIcon: Check,
      othersIcon: X
    },
    {
      feature: "Escalabilidad",
      miturno: "Crece contigo: desde 1 usuario hasta empresas multi-sede",
      others: "Planes rígidos que no se adaptan a tu crecimiento",
      miturnoIcon: Check,
      othersIcon: X
    },
    {
      feature: "Precio justo",
      miturno: "Precios transparentes, sin sorpresas ni contratos largos",
      others: "Costos ocultos, contratos anuales obligatorios",
      miturnoIcon: Check,
      othersIcon: X
    }
  ];

  return (
    <section className="section-padding section-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-section-title mb-6 text-white">
            <span className="text-accent">OnBook</span> vs. la competencia
          </h2>
          <p className="text-section-subtitle text-white/80">
            No somos una herramienta genérica. Somos la solución diseñada 
            específicamente para tu tipo de negocio.
          </p>
        </div>

        {/* MiTurno Advantages */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="h-10 w-10 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Especializado</h3>
            <p className="text-white/80">
              Creado para clínicas, salones y gimnasios. Cada función pensada para tu sector.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Zap className="h-10 w-10 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Flexible</h3>
            <p className="text-white/80">
              Se adapta a tu crecimiento. Desde profesionales independientes hasta cadenas.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Heart className="h-10 w-10 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Con soporte local</h3>
            <p className="text-white/80">
              Atención personalizada en español, en tu zona horaria, conocemos tu mercado.
            </p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/5 backdrop-blur rounded-3xl overflow-hidden">
            {/* Header */}
            <div className="grid md:grid-cols-3 gap-4 p-8 border-b border-white/10">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white/80">Característica</h3>
              </div>
              <div className="text-center">
                <div className="bg-accent/20 rounded-xl p-4">
                  <h3 className="text-xl font-bold text-accent">OnBook</h3>
                  <p className="text-sm text-white/80">by ONCORP.io</p>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white/80">Otros sistemas</h3>
              </div>
            </div>

            {/* Comparison Rows */}
            {comparisons.map((comparison, index) => (
              <div 
                key={index}
                className="grid md:grid-cols-3 gap-4 p-6 border-b border-white/5 last:border-b-0"
              >
                <div className="text-white font-medium">
                  {comparison.feature}
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-success/20 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-success" />
                  </div>
                  <p className="text-sm text-white/90">{comparison.miturno}</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-destructive/20 rounded-full flex items-center justify-center mt-0.5">
                    <X className="h-4 w-4 text-destructive" />
                  </div>
                  <p className="text-sm text-white/60">{comparison.others}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
       
      </div>
    </section>
  );
};

export default CompetitiveSection;