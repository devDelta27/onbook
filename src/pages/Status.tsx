import { Button } from "@/components/ui/button";
import FooterSection from "@/components/sections/FooterSection";
import { CheckCircle, ArrowLeft, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

const Status = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="gap-2 pl-0">
            <ArrowLeft className="h-4 w-4" /> Volver
          </Button>
        </Link>
      </div>

      <div className="container mx-auto px-4 pb-24 max-w-3xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Estado del Sistema</h1>
          <Button variant="outline" size="sm" className="gap-2" onClick={() => window.location.reload()}>
            <RefreshCw className="h-4 w-4" /> Actualizar
          </Button>
        </div>

        {/* Status Banner */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-12 flex items-start gap-4">
          <CheckCircle className="h-8 w-8 text-green-600 flex-shrink-0" />
          <div>
            <h2 className="text-xl font-bold text-green-800 mb-1">Todos los sistemas operativos</h2>
            <p className="text-green-700">OnBook está funcionando con normalidad. No hay incidentes reportados en las últimas 24 horas.</p>
          </div>
        </div>

        {/* Detalles */}
        <div className="space-y-4">
          {[
            "API de Reservas",
            "Panel de Control (Dashboard)",
            "Notificaciones WhatsApp",
            "Procesamiento de Pagos",
            "Sincronización de Calendarios"
          ].map((service, i) => (
            <div key={i} className="flex items-center justify-between p-4 border rounded-lg bg-card">
              <span className="font-medium">{service}</span>
              <span className="flex items-center gap-2 text-sm text-green-600 font-medium">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Operativo
              </span>
            </div>
          ))}
        </div>
      </div>

      <FooterSection />
    </main>
  );
};

export default Status;