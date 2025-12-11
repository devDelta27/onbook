import { initializePaddle, Paddle } from "@paddle/paddle-js";

// Variable para guardar la instancia de Paddle y no cargarla dos veces
let paddleInstance: Paddle | undefined;

export const getPaddleInstance = async () => {
  if (paddleInstance) return paddleInstance;

  try {
    paddleInstance = await initializePaddle({
      // ⚠️ REEMPLAZA ESTO CON TU CLIENT TOKEN DE PADDLE SANDBOX
      token: "test_54b5ece5a02b3673844baf0f2c4", 
      
      environment: "sandbox", // Cambia a "production" cuando vayas en vivo
      
      eventCallback: (event) => {
        // Esto sirve para ver en la consola qué está pasando
        console.log("Evento Paddle:", event);
      },
      checkout: {
        settings: {
          displayMode: "overlay", // Abre una ventana bonita encima de tu web
          theme: "light",
          locale: "es", // Pone el checkout en español
        }
      }
    });

    return paddleInstance;
  } catch (error) {
    console.error("Error al iniciar Paddle:", error);
    return undefined;
  }
};