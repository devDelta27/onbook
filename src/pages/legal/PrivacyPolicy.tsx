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

      <div className="container mx-auto px-4 pb-24 max-w-4xl">
        <h1 className="text-4xl font-bold mb-2 text-primary">Política de Privacidad</h1>

        <div className="space-y-8 text-neutral-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">1. Recopilación de Información</h2>
            <p>
              Recopilamos información que nos proporcionas directamente al crear una cuenta, actualizar tu perfil, o utilizar nuestros servicios de agendamiento. Esto puede incluir tu nombre, correo electrónico, número de teléfono y datos de pago.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">2. Uso de la Información</h2>
            <p>
              Utilizamos la información recopilada para operar, mantener y mejorar nuestros servicios, procesar transacciones, enviar notificaciones relacionadas con el servicio (como recordatorios de citas) y para fines de soporte al cliente.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">3. Protección de Datos</h2>
            <p>
              Implementamos medidas de seguridad técnicas y organizativas apropiadas, incluyendo encriptación SSL de nivel bancario, para proteger tus datos personales contra el acceso no autorizado, la alteración, divulgación o destrucción.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">4. Compartir Información</h2>
            <p>
              No vendemos ni alquilamos tu información personal a terceros. Podemos compartir información con proveedores de servicios de confianza que nos ayudan a operar nuestro negocio (por ejemplo, procesamiento de pagos), siempre bajo estrictos acuerdos de confidencialidad.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">5. Derechos del Usuario</h2>
            <p>
              Tienes derecho a acceder, corregir o eliminar tu información personal en cualquier momento accediendo a la configuración de tu cuenta o contactando a nuestro equipo de soporte.
            </p>
          </section>
        </div>
      </div>

      <FooterSection />
    </main>
  );
};

export default PrivacyPolicy;