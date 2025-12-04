import { Clock, TrendingDown, Eye, AlertTriangle } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: Clock,
      title: "Tiempo perdido",
      description: "Las horas que tu equipo pasa coordinando citas son horas que no dedican a generar más valor.",
      impact: "10+ horas semanales perdidas"
    },
    {
      icon: TrendingDown,
      title: "Ingresos fugados",
      description: "Las cancelaciones de último minuto se convierten en citas vacías que nadie aprovecha.",
      impact: "20-30% pérdidas por no-shows"
    },
    {
      icon: Eye,
      title: "Falta de control",
      description: "Operas a ciegas. Sin datos, no puedes saber si estás creciendo o si estás a punto de estancarte.",
      impact: "Decisiones sin información"
    },
    {
      icon: AlertTriangle,
      title: "El miedo a crecer",
      description: "Expandirte significa más desorden. La gestión manual es un techo de cristal que limita tu potencial.",
      impact: "Crecimiento limitado"
    }
  ];

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-section-title mb-6 text-neutral-900">
            La verdad duele: <span className="text-destructive">el caos te está costando</span>
          </h2>
          <p className="text-section-subtitle">
            ¿Te sientes atrapado gestionando llamadas y mensajes? Cada cita no agendada, 
            cada cancelación, es dinero perdido.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div 
                key={index} 
                className="card-elevated group hover:border-destructive/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-destructive/10 rounded-xl group-hover:bg-destructive/20 transition-colors">
                    <IconComponent className="h-6 w-6 text-destructive" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-neutral-900">
                      {problem.title}
                    </h3>
                    <p className="text-neutral-600 mb-3 leading-relaxed">
                      {problem.description}
                    </p>
                    <div className="inline-flex items-center text-sm font-medium text-destructive bg-destructive/10 px-3 py-1 rounded-full">
                      {problem.impact}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-warning/20 text-warning px-6 py-3 rounded-xl font-medium border border-warning/30">
            <AlertTriangle className="h-5 w-5" />
            ¿Sabes cuánto dinero pierdes al mes por este desorden?
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;