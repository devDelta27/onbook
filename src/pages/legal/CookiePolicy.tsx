import { Button } from "@/components/ui/button";
import FooterSection from "@/components/sections/FooterSection";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CookiePolicy = () => {
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
        <h1 className="text-4xl font-bold mb-2 text-primary">Política de Cookies</h1>

        <div className="space-y-8 text-neutral-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">1. ¿Qué son las cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, tablet o móvil) cuando visitas sitios web. Se utilizan ampliamente para hacer que los sitios web funcionen de manera más eficiente, así como para proporcionar información a los propietarios del sitio.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">2. ¿Cómo utilizamos las cookies?</h2>
            <p className="mb-4">En OnBook utilizamos cookies para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mantener tu sesión activa mientras navegas.</li>
              <li>Recordar tus preferencias y configuraciones.</li>
              <li>Analizar cómo utilizas nuestro sitio para mejorar su rendimiento (analítica).</li>
              <li>Mejorar la seguridad y velocidad del sitio.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">3. Tipos de cookies que usamos</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-primary">Cookies Esenciales</h3>
                <p>Necesarias para que el sitio web funcione correctamente. No se pueden desactivar.</p>
              </div>
              <div>
                <h3 className="font-medium text-primary">Cookies de Rendimiento</h3>
                <p>Nos ayudan a entender cómo interactúan los visitantes con el sitio web, recopilando información de forma anónima.</p>
              </div>
              <div>
                <h3 className="font-medium text-primary">Cookies Funcionales</h3>
                <p>Permiten recordar tus preferencias para ofrecer una experiencia más personalizada.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">4. Gestión de cookies</h2>
            <p>
              Puedes controlar y/o eliminar las cookies según desees. Puedes borrar todas las cookies que ya están en tu ordenador y puedes configurar la mayoría de los navegadores para que eviten su colocación. Sin embargo, si haces esto, es posible que tengas que ajustar manualmente algunas preferencias cada vez que visites un sitio.
            </p>
          </section>
        </div>
      </div>

      <FooterSection />
    </main>
  );
};

export default CookiePolicy;