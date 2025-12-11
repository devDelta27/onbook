import { Button } from "@/components/ui/button";
import FooterSection from "@/components/sections/FooterSection";
import { ArrowLeft, Video, MessageCircle, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Support = () => {
  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-neutral-900 text-white pb-24 pt-12">
        <div className="container mx-auto px-4">
          <Link to="/">
            <Button variant="ghost" className="text-neutral-400 hover:text-white gap-2 pl-0 mb-8">
              <ArrowLeft className="h-4 w-4" />
              Volver al inicio
            </Button>
          </Link>
          <h1 className="text-4xl font-bold mb-4">Centro de Ayuda</h1>
          <p className="text-xl text-neutral-400 max-w-2xl">
            Todo lo que necesitas para configurar tu negocio en OnBook y empezar a recibir citas.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-12 pb-24">
        {/* Tarjetas de Navegación */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Video className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold mb-2">Video Tutoriales</h3>
            <p className="text-neutral-500 mb-4 text-sm">Aprende lo básico en menos de 5 minutos.</p>
            <Button variant="outline" className="w-full" onClick={() => document.getElementById('tutorials')?.scrollIntoView({ behavior: 'smooth'})}>Ver videos</Button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <MessageCircle className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-bold mb-2">Chat de Soporte</h3>
            <p className="text-neutral-500 mb-4 text-sm">Habla con nuestro equipo por WhatsApp.</p>
            <Button variant="outline" className="w-full" onClick={() => window.open('https://wa.me/50494217777', '_blank')}>Abrir WhatsApp</Button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Mail className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-bold mb-2">Soporte Email</h3>
            <p className="text-neutral-500 mb-4 text-sm">Para consultas técnicas o de facturación.</p>
            <Button variant="outline" className="w-full" onClick={() => window.location.href = 'mailto:contacto@oncorp.io'}>Enviar correo</Button>
          </div>
        </div>

        {/* Sección de Tutoriales (Videos Reales) */}
        <section id="tutorials" className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-neutral-900">Primeros Pasos y Configuración</h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* VIDEO 1: Configura tus horarios */}
            <div className="aspect-video relative rounded-xl overflow-hidden shadow-xl">
  <iframe
    className="w-full h-full absolute top-0 left-0"
    src="https://www.youtube.com/embed/opexrDP7wVE" // ⬅️ PON AQUÍ TU LINK EMBED
    title="Tutorial 1: Configura tus horarios en OnBook"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  ></iframe>
  <span className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-md text-sm font-medium">1. Configura tus horarios</span>
</div>
            
            {/* VIDEO 2: Agrega servicios */}
            <div className="aspect-video relative rounded-xl overflow-hidden shadow-xl">
              <iframe
    className="w-full h-full absolute top-0 left-0"
    src="https://www.youtube.com/embed/Dl0Rmm_VJfQ" // ⬅️ PON AQUÍ TU LINK EMBED
    title="Tutorial 1: Configura tus horarios en OnBook"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  ></iframe>
              <span className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-md text-sm font-medium">2. Agrega servicios y personal</span>
            </div>

            {/* Puedes seguir agregando más videos aquí */}

          </div>
        </section>

       
      </div>

      <FooterSection />
    </main>
  );
};

export default Support;