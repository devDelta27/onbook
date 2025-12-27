import { Button } from "@/components/ui/button";
import FooterSection from "@/components/sections/FooterSection";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="gap-2 pl-0 hover:bg-transparent hover:text-accent">
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Button>
        </Link>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
    <h1 className="text-3xl font-bold mb-8">Política de Reembolso</h1>
    <p className="mb-4">En OnBook, queremos que estés satisfecho con nuestro servicio.</p>
    <h2 className="text-xl font-semibold mt-6 mb-2">1. Periodo de Garantía</h2>
    <p className="mb-4 text-neutral-600">
      Ofrecemos una garantía de satisfacción de 7 días. Si el servicio no cumple con tus expectativas, puedes solicitar un reembolso completo dentro de los primeros 7 días de tu primera suscripción.
    </p>
    <h2 className="text-xl font-semibold mt-6 mb-2">2. Proceso de Solicitud</h2>
    <p className="mb-4 text-neutral-600">
      Para solicitar un reembolso, escribe a contacto@oncorp.io con los detalles de tu cuenta.
    </p>
    <h2 className="text-xl font-semibold mt-6 mb-2">3. Excepciones</h2>
    <p className="mb-4 text-neutral-600">
      No se emitirán reembolsos por meses ya utilizados después del periodo de garantía inicial.
    </p>
  </div>

      <FooterSection />
    </main>
  );
};

export default PrivacyPolicy;