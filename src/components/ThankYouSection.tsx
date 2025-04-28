
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const ThankYouSection = () => {
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
          <h3 className="text-2xl font-bold mb-4">Descarga tu Libro</h3>
          <p className="mb-6">
            Haz clic en el botón de abajo para descargar tu copia digital en formato PDF:
          </p>
          
          <Button className="bg-white text-book-primary hover:bg-white/90 flex items-center gap-2">
            <Download size={18} />
            Descargar Libro (PDF)
          </Button>
          
          <div className="mt-8 pt-8 border-t border-white/20 text-sm">
            <p>
              Si tienes algún problema con la descarga, por favor contacta con nosotros a través 
              de nuestro correo de soporte: <span className="underline">soporte@milibrodigital.com</span>
            </p>
          </div>
        </div>
        
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4">Recursos Adicionales</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="text-xl font-bold mb-2">Material Complementario</h4>
              <p className="mb-4">
                Accede a ejercicios adicionales y herramientas para potenciar tu aprendizaje.
              </p>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Acceder a Material
              </Button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="text-xl font-bold mb-2">Comunidad de Lectores</h4>
              <p className="mb-4">
                Únete a nuestra comunidad para compartir experiencias con otros lectores.
              </p>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Unirse a la Comunidad
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouSection;
