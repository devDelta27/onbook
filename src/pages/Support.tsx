import { Button } from "@/components/ui/button";
import FooterSection from "@/components/sections/FooterSection";
import { ArrowLeft, BookOpen, Video, MessageCircle, Mail } from "lucide-react";
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
            <Button variant="outline" className="w-full" onClick={() => window.open('https://wa.me/504XXXXXXXX', '_blank')}>Abrir WhatsApp</Button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Mail className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-bold mb-2">Soporte Email</h3>
            <p className="text-neutral-500 mb-4 text-sm">Para consultas técnicas o de facturación.</p>
            <Button variant="outline" className="w-full" onClick={() => window.location.href = 'mailto:soporte@onbook.oncorp.io'}>Enviar correo</Button>
          </div>
        </div>

        {/* Sección de Tutoriales (Placeholder) */}
        <section id="tutorials" className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-neutral-900">Primeros Pasos</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-video bg-neutral-200 rounded-xl flex items-center justify-center relative group cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg z-10">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-black border-b-[10px] border-b-transparent ml-1"></div>
              </div>
              <span className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-md text-sm">Tutorial 1: Configura tus horarios</span>
            </div>
            <div className="aspect-video bg-neutral-200 rounded-xl flex items-center justify-center relative group cursor-pointer overflow-hidden">
               <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
               <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg z-10">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-black border-b-[10px] border-b-transparent ml-1"></div>
              </div>
              <span className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-md text-sm">Tutorial 2: Agrega servicios</span>
            </div>
          </div>
        </section>

        {/* Sección API */}
        <section id="api" className="bg-neutral-900 text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold mb-4">¿Eres desarrollador?</h2>
          <p className="text-neutral-400 mb-8 max-w-2xl mx-auto">
            OnBook cuenta con una API robusta para integraciones personalizadas. Actualmente el acceso está limitado a planes empresariales.
          </p>
          <Button className="bg-accent hover:bg-accent/90 text-white">Solicitar documentación API</Button>
        </section>
      </div>

      <FooterSection />
    </main>
  );
};

export default Support;