import React from 'react';
import { Check, X } from 'lucide-react';

const plans = [
  {
    name: 'Plan Esencial',
    price: '10', // Precio basado en tu imagen
    currency: '$',
    description: 'Para profesionales independientes.',
    features: [
      '1 Usuario / 1 Sede',
      'Citas y Clientes Ilimitados',
      'Notificaciones por Email',
      'Cupones y Campos Personalizados',
      'Sync Calendario (Solo Apple)',
      'Reviews y Calificaciones'
    ],
    notIncluded: [
      'WhatsApp',
      'Pagos en línea',
      'Reservas Grupales'
    ],
    // REEMPLAZA CON TU LINK DE SHOPIFY PARA EL PLAN DE $10
    shopifyUrl: 'https://b22dma-ds.myshopify.com/products/plan-esencial?utm_source=copyToPasteBoard&utm_medium=product-links&utm_content=web',
    highlight: false,
    buttonText: 'Comenzar'
  },
  {
    name: 'Plan Pro',
    price: '14',
    currency: '$',
    description: 'El estándar para clínicas y negocios.',
    features: [
      'Hasta 5 Usuarios / 1 Sede',
      'Todo lo del Esencial',
      'Integración WhatsApp',
      'Pagos (Stripe / PayPal)',
      'Reservas Grupales y Recurrentes',
      'Sync Google Calendar / Outlook',
      'Integración Zoom / Google Meet'
    ],
    notIncluded: [
      'API y Webhooks',
      'Zapier',
      'Facebook Pixel'
    ],
    // REEMPLAZA CON TU LINK DE SHOPIFY PARA EL PLAN DE $14
    shopifyUrl: 'https://b22dma-ds.myshopify.com/products/plan-pro?utm_source=copyToPasteBoard&utm_medium=product-links&utm_content=web',
    highlight: true,
    buttonText: 'Obtener Pro'
  },
  {
    name: 'Plan Enterprise',
    price: '20',
    currency: '$',
    description: 'Automatización total y sin límites.',
    features: [
      'Usuarios Ilimitados',
      'Sedes Múltiples',
      'Todo lo del Pro',
      'API y Webhooks',
      'Automatización con Zapier',
      'Facebook Pixel',
      'Días Especiales / Feriados'
    ],
    notIncluded: [],
    // REEMPLAZA CON TU LINK DE SHOPIFY PARA EL PLAN DE $20
    shopifyUrl: 'https://b22dma-ds.myshopify.com/products/plan-enterprise?utm_source=copyToPasteBoard&utm_medium=product-links&utm_content=web',
    highlight: false,
    buttonText: 'Comenzar' // O "Comprar Enterprise"
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Planes flexibles para cada etapa
          </h2>
          <p className="text-xl text-gray-600">
            Elige la potencia que tu negocio necesita hoy.
          </p>
        </div>

        {/* Grid ajustado para 3 columnas en pantallas grandes (lg:grid-cols-3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden border-2 flex flex-col ${
                plan.highlight ? 'border-blue-600 transform md:-translate-y-4 z-10' : 'border-transparent'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  RECOMENDADO
                </div>
              )}
              
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6 text-sm h-10">{plan.description}</p>
                
                <div className="flex items-baseline mb-8">
                  <span className="text-5xl font-extrabold text-gray-900">
                    {plan.currency}{plan.price}
                  </span>
                  <span className="text-gray-600 ml-2">/mes</span>
                </div>

                <div className="space-y-4 mb-8">
                  {/* Características Incluidas */}
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                  
                  {/* Características NO Incluidas (Visualmente atenuadas) */}
                  {plan.notIncluded.map((feature) => (
                    <div key={feature} className="flex items-start opacity-50">
                      <X className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-500 text-sm line-through">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Botón al final del card */}
              <div className="p-8 pt-0 mt-auto">
                <a 
                  href={plan.shopifyUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-4 px-6 rounded-xl font-bold transition-all duration-200 ${
                    plan.highlight
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            * Todos los planes incluyen actualizaciones de seguridad y soporte técnico.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;