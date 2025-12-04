import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "¿Solo es para clínicas?",
      answer: "No. OnBook es ideal para cualquier negocio de servicios que viva de sus citas: spas, salones de belleza, consultores, gimnasios, clínicas médicas, centros estéticos, y cualquier profesional que maneje citas por horas."
    },
    {
      question: "¿Es difícil de implementar?",
      answer: "Para nada. OnBook es 100% en la nube, no necesitas instalar nada. Te configuras en minutos siguiendo nuestro asistente paso a paso, y empiezas a operar de inmediato. Nuestro equip te acompaña en todo el proceso."
    },
    {
      question: "¿Qué tan seguros están mis datos?",
      answer: "Muy seguros. Usamos protocolos de encriptación SSL de nivel bancario, respaldos automáticos diarios, y servidores certificados. Tus datos y los de tus clientes están protegidos con los más altos estándares de seguridad internacional."
    },
    {
      question: "¿Puedo cancelar cuando quiera?",
      answer: "Sí, no hay contratos de permanencia. Puedes pausar o cancelar tu suscripción cuando lo desees. Si cancelas, mantienes acceso a tus datos por 90 días para que puedas exportar toda tu información."
    },
    {
      question: "¿Funciona en mi teléfono?",
      answer: "Perfectamente. OnBook está optimizado para funcionar en cualquier dispositivo: computadora, tablet, iPhone, Android. Tu agenda siempre contigo, donde la necesites."
    },
    {
      question: "¿Dan soporte en español?",
      answer: "¡Por supuesto! Nuestro equipo de soporte habla español nativo, conoce el mercado centroamericano y está disponible en horarios locales. Ofrecemos soporte por chat, email y videollamada."
    },
    {
      question: "¿Qué pasa si tengo muchas citas?",
      answer: "OnBook está diseñado para escalar contigo. Desde 10 citas al mes hasta miles, el sistema mantiene su velocidad y confiabilidad. Sin límites en el número de citas que puedes agendar."
    },
    {
      question: "¿Puedo conectarlo con mi página web?",
      answer: "Sí, incluimos un widget de reservas que puedes integrar fácilmente en tu sitio web, Facebook, Instagram y WhatsApp Business. Tus clientes pueden agendar directamente desde donde tú estés."
    }
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="h-10 w-10 text-accent" />
          </div>
          <h2 className="text-section-title mb-6">
            ¿Aún tienes dudas?
          </h2>
          <p className="text-section-subtitle">
            Las respuestas que necesitas para tomar la decisión correcta
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-2xl border border-neutral-200 px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-lg py-6 hover:no-underline hover:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Additional Help */}
        <div className="text-center mt-16">
          <div className="bg-neutral-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-3">
              ¿No encuentras tu respuesta?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nuestro equipo de expertos está listo para resolver todas tus dudas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-accent text-white font-semibold px-6 py-3 rounded-xl hover:bg-accent/90 transition-colors">
                Hablar con un experto
              </button>
              <button className="bg-white border border-neutral-200 text-neutral-700 font-medium px-6 py-3 rounded-xl hover:bg-neutral-50 transition-colors">
                Ver más preguntas
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;