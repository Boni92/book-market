
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import ThankYouSection from "@/components/ThankYouSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { toast } from "@/components/ui/sonner";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { createClient } from "@supabase/supabase-js";
import { CheckCircle, AlertTriangle } from "lucide-react";

const Success = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [verifying, setVerifying] = useState(true);
  const [paymentStatus, setPaymentStatus] = useState<"success" | "pending" | "error" | null>(null);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    const verifyPayment = async () => {
      const sessionId = searchParams.get("session_id");
      
      if (!sessionId) {
        setPaymentStatus("error");
        toast.error("No se pudo verificar el pago. Falta el identificador de sesión.");
        setVerifying(false);
        return;
      }
      
      try {
        // Inicializamos el cliente de Supabase
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
        const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
        
        if (!supabaseUrl || !supabaseAnonKey) {
          throw new Error("Faltan variables de entorno de Supabase");
        }
        
        const supabase = createClient(supabaseUrl, supabaseAnonKey);
        
        // Verificamos el estado del pago
        const { data, error } = await supabase.functions.invoke('verify-payment', {
          body: { sessionId }
        });
        
        if (error) throw error;
        
        if (data?.status === "complete" || data?.status === "paid") {
          setPaymentStatus("success");
          toast.success("¡Pago confirmado! Gracias por tu compra.");
        } else {
          setPaymentStatus("pending");
          toast.warning("Pago en proceso. Te notificaremos cuando se confirme.");
        }
      } catch (error) {
        console.error("Error verificando el pago:", error);
        setPaymentStatus("error");
        toast.error("Error al verificar el pago. Por favor, contacta con soporte.");
      } finally {
        setVerifying(false);
      }
    };
    
    verifyPayment();
  }, [searchParams]);

  return (
    <div className="min-h-screen">
      <Header />
      
      {verifying && (
        <div className="pt-32 pb-16 text-center">
          <div className="animate-pulse">
            <p className="text-xl">Verificando tu pago...</p>
          </div>
        </div>
      )}
      
      {!verifying && paymentStatus === "error" && (
        <div className="pt-32 pb-16 container-custom max-w-3xl">
          <Alert variant="destructive">
            <AlertTriangle className="h-5 w-5" />
            <AlertTitle>Problema con la verificación</AlertTitle>
            <AlertDescription>
              No pudimos verificar tu pago. Si has realizado el pago correctamente, 
              por favor contacta con nuestro equipo de soporte para ayudarte.
            </AlertDescription>
          </Alert>
          
          <div className="mt-8 text-center">
            <button 
              onClick={() => navigate("/")}
              className="bg-book-primary text-white py-2 px-6 rounded-lg font-medium hover:bg-book-primary/90"
            >
              Volver al inicio
            </button>
          </div>
        </div>
      )}
      
      {!verifying && (paymentStatus === "success" || paymentStatus === "pending") && (
        <div className="pt-20">
          {paymentStatus === "pending" && (
            <div className="container-custom max-w-3xl mb-8">
              <Alert>
                <AlertTriangle className="h-5 w-5" />
                <AlertTitle>Pago en proceso</AlertTitle>
                <AlertDescription>
                  Tu pago está siendo procesado. Te enviaremos un correo electrónico cuando se confirme.
                </AlertDescription>
              </Alert>
            </div>
          )}
          
          {paymentStatus === "success" && (
            <div className="container-custom max-w-3xl mb-8">
              <Alert className="border-green-500 bg-green-50">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <AlertTitle className="text-green-700">¡Pago confirmado!</AlertTitle>
                <AlertDescription className="text-green-600">
                  Tu pago ha sido procesado correctamente. ¡Disfruta de tu compra!
                </AlertDescription>
              </Alert>
            </div>
          )}
          
          <ThankYouSection />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Success;
