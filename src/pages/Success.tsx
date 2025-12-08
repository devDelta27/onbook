import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-10 w-10 text-green-600" />
        </div>
        
        <h1 className="text-3xl font-bold text-neutral-900 mb-4">
          ¡Pago recibido con éxito!
        </h1>
        
        <p className="text-neutral-600 mb-8 leading-relaxed">
          Bienvenido a OnBook. Hemos recibido tu suscripción correctamente.
          <br /><br />
          <strong>¿Qué sigue?</strong><br />
          Nuestro equipo está configurando tu entorno seguro. Recibirás un correo con tus credenciales de acceso en menos de 24 horas.
        </p>

        <Link to="/">
          <Button className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-6 text-lg rounded-xl">
            Volver al inicio
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Success;