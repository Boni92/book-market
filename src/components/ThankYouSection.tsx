
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ThankYouSection = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-book-primary to-book-dark text-white py-16 px-4">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">¡Gracias por tu Compra!</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Tu inversión en conocimiento es un paso importante hacia el éxito. 
          Estamos seguros de que este libro te proporcionará herramientas valiosas 
          para transformar tu vida.
        </p>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Revisa tu correo electrónico</h3>
          <p className="mb-6">
            Hemos enviado tu libro digital a la dirección de correo electrónico
            que proporcionaste durante la compra.
          </p>
          
          <Button 
            className="bg-white text-book-primary hover:bg-white/90 flex items-center gap-2"
            onClick={() => navigate("/")}
          >
            <Home size={18} />
            Volver a la página principal
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ThankYouSection;
