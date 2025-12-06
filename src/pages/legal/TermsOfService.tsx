import { Button } from "@/components/ui/button";
import FooterSection from "@/components/sections/FooterSection";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header Simple */}
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="gap-2 pl-0 hover:bg-transparent hover:text-accent">
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Button>
        </Link>
      </div>

      {/* Contenido Legal */}
      <div className="container mx-auto px-4 pb-24 max-w-4xl">
        <h1 className="text-4xl font-bold mb-2 text-primary">Términos de Uso</h1>
        <p className="text-muted-foreground mb-12">Última actualización: Diciembre 2024</p>

        <div className="space-y-8 text-neutral-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">1. Aceptación de los Términos</h2>
            <p>
              Bienvenido a OnBook. Al acceder y utilizar nuestra plataforma, aceptas cumplir y estar legalmente vinculado por los siguientes términos y condiciones. Si no estás de acuerdo con alguno de estos términos, no deberás utilizar nuestros servicios.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">2. Descripción del Servicio</h2>
            <p>
              OnBook proporciona una solución de software como servicio (SaaS) para la gestión, agendamiento y administración de citas para negocios de servicios en Centroamérica. Nos reservamos el derecho de modificar, suspender o discontinuar cualquier aspecto del servicio en cualquier momento.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">3. Cuentas y Seguridad</h2>
            <p>
              Para acceder a ciertas funciones, deberás registrarte y crear una cuenta. Eres responsable de mantener la confidencialidad de tu información de inicio de sesión y de todas las actividades que ocurran bajo tu cuenta.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">4. Pagos y Suscripciones</h2>
            <p>
              El uso de ciertas funciones avanzadas de OnBook requiere una suscripción de pago. Los precios y planes están detallados en nuestra página de precios. Los pagos se facturarán por adelantado de forma mensual o anual y no son reembolsables, salvo disposición contraria en nuestra política de garantía.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">5. Propiedad Intelectual</h2>
            <p>
              Todo el contenido, marcas registradas, logotipos y software presentes en OnBook son propiedad exclusiva de ONCORP.io o sus licenciantes y están protegidos por las leyes de propiedad intelectual internacionales.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">6. Limitación de Responsabilidad</h2>
            <p>
              En la máxima medida permitida por la ley aplicable, OnBook no será responsable por daños indirectos, incidentales, especiales o consecuentes que resulten del uso o la imposibilidad de uso del servicio.
            </p>
          </section>
        </div>
      </div>

      <FooterSection />
    </main>
  );
};

export default TermsOfService;