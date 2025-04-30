
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ThankYouSection from "@/components/ThankYouSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Success = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // En una implementación completa, verificaríamos el estado del pago con Stripe
    // usando una función Edge que verifique el sessionId en los parámetros URL
    
    // También podríamos actualizar el registro del pedido en la base de datos
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <ThankYouSection />
      </div>
      <Footer />
    </div>
  );
};

export default Success;
