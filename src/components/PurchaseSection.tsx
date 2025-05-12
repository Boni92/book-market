
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/sonner";
import { createClient } from "@supabase/supabase-js";

const PurchaseSection = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  const handleStripePurchase = async () => {
    setIsLoading(true);
    try {
      // Inicializamos el cliente de Supabase con las variables de entorno
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
      
      // Validamos que las variables de entorno estén configuradas
      if (!supabaseUrl || !supabaseAnonKey) {
        throw new Error("Faltan variables de entorno de Supabase");
      }
      
      console.log("Conectando a Supabase:", supabaseUrl);
      
      // Creamos el cliente de Supabase con opciones para manejar CORS
      const supabase = createClient(supabaseUrl, supabaseAnonKey, {
        auth: {
          persistSession: true
        }
      });
      
      // Invocamos la función Edge con el nombre correcto según la URL: create-payment
      console.log("Invocando función create-payment");
      const { data, error } = await supabase.functions.invoke('create-payment', {
        body: { 
          priceId: "price_1RLSLHRwduV6mlsL1YDvuIMa", // ID del precio proporcionado
          productName: "Mi Libro Digital"
        }
      });
      
      if (error) {
        console.error("Error desde función Edge:", error);
        
        // Mensaje específico para error de CORS
        if (error.message && error.message.includes("Failed to send a request")) {
          toast.error("Error de CORS: No se puede conectar con las funciones de Supabase. Por favor, configura los encabezados CORS en tu función Edge.");
          
          console.log("SOLUCIÓN: Necesitas configurar tu función Edge de Supabase para permitir solicitudes CORS desde tu dominio.");
          console.log("Agrega los siguientes encabezados en tu función Edge:");
          console.log(`
const corsHeaders = {
  "Access-Control-Allow-Origin": "*", // O específicamente "https://libro-digital-venta.lovable.app"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Al inicio de tu función:
if (req.method === "OPTIONS") {
  return new Response(null, { headers: corsHeaders });
}

// En todas las respuestas:
return new Response(JSON.stringify({ ... }), {
  headers: { ...corsHeaders, "Content-Type": "application/json" },
  status: 200,
});
          `);
          throw new Error("Error de CORS. Revisa la consola para la solución.");
        }
        throw error;
      }
      
      console.log("Respuesta de create-payment:", data);
      
      // Redirigimos al usuario a la URL de checkout de Stripe
      if (data?.url) {
        toast.success("Redirigiendo a la pasarela de pago...");
        console.log("Redirigiendo a URL de Stripe:", data.url);
        window.location.href = data.url;
      } else {
        throw new Error("No se recibió la URL de checkout en la respuesta");
      }
    } catch (error) {
      console.error("Error procesando el pago:", error);
      toast.error(`Error al procesar el pago: ${error instanceof Error ? error.message : "Por favor revisa la consola para más detalles"}`);
    } finally {
      setIsLoading(false);
    }
  };
  
  const paymentOptions = [
    {
      id: "paypal",
      name: "PayPal",
      description: "Pago seguro y rápido con PayPal",
      icon: "https://cdn.cdnlogo.com/logos/p/19/paypal.svg",
      buttonText: "Comprar con PayPal",
      actionUrl: "#", // Replace with actual PayPal checkout URL
      color: "bg-[#0070BA]"
    },
    {
      id: "mercadopago",
      name: "MercadoPago",
      description: "Múltiples opciones de pago con MercadoPago",
      icon: "https://logodownload.org/wp-content/uploads/2019/06/mercado-pago-logo-0.png",
      buttonText: "Pagar con MercadoPago",
      actionUrl: "#", // Replace with actual MercadoPago checkout URL
      color: "bg-[#00B1EA]"
    },
    {
      id: "stripe",
      name: "Stripe",
      description: "Pago seguro con tarjeta de crédito/débito",
      icon: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
      buttonText: "Pagar con Tarjeta",
      action: handleStripePurchase,
      color: "bg-[#6772E5]"
    },
    {
      id: "gumroad",
      name: "Gumroad",
      description: "Descarga instantánea a través de Gumroad",
      icon: "https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/618ea7afd990103829d614ff_gumroad-g.png",
      buttonText: "Comprar en Gumroad",
      actionUrl: "#", // Replace with actual Gumroad URL
      color: "bg-[#FF90E8]"
    },
    {
      id: "amazon",
      name: "Amazon",
      description: "Compra a través de Amazon",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
      buttonText: "Comprar en Amazon",
      actionUrl: "#", // Replace with actual Amazon URL
      color: "bg-[#FF9900]"
    }
  ];

  return (
    <section id="comprar" className="bg-book-accent">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Adquiere Tu Copia Ahora</h2>
          <p className="text-xl text-book-dark/80 max-w-2xl mx-auto">
            Invierte en tu futuro con este recurso invaluable que te guiará 
            paso a paso hacia el éxito que siempre has deseado.
          </p>
          <div className="mt-6">
            <span className="text-3xl font-bold text-book-primary">$19.99 USD</span>
            <span className="text-lg text-book-dark/60 ml-3 line-through">$29.99 USD</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {paymentOptions.map((option) => (
            <Card key={option.id} className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className={`h-2 ${option.color}`}></div>
              <CardContent className="pt-6 text-center">
                <div className="h-16 flex items-center justify-center mb-4">
                  <img 
                    src={option.icon} 
                    alt={`${option.name} logo`} 
                    className="h-10 object-contain" 
                  />
                </div>
                <h3 className="font-bold text-lg mb-2">{option.name}</h3>
                <p className="text-sm text-book-dark/70 mb-6 h-12">
                  {option.description}
                </p>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      {option.actionUrl ? (
                        <a 
                          href={option.actionUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${option.color} text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg w-full block text-center`}
                        >
                          {option.buttonText}
                        </a>
                      ) : (
                        <button 
                          onClick={option.action}
                          disabled={option.id === "stripe" && isLoading}
                          className={`${option.color} text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg w-full ${option.id === "stripe" && isLoading ? "opacity-70 cursor-not-allowed" : ""}`}
                        >
                          {option.id === "stripe" && isLoading ? "Procesando..." : option.buttonText}
                        </button>
                      )}
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Compra segura con {option.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-white rounded-lg shadow-md">
          <h4 className="text-xl font-bold text-book-dark mb-3">Garantía de Satisfacción</h4>
          <p className="text-book-dark/80">
            Estamos seguros de que este libro transformará tu vida. Si por alguna razón no estás completamente
            satisfecho con tu compra, ofrecemos una garantía de devolución del dinero de 30 días.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PurchaseSection;
