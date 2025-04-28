
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section 
      id="portada" 
      className="min-h-screen flex items-center relative bg-gradient-to-r from-book-accent to-white pt-16"
    >
      <div className="container-custom grid md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col text-left order-2 md:order-1 animate-fade-in" style={{animationDelay: "0.2s"}}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-book-primary mb-4">
            Tu Camino Hacia el Éxito
          </h1>
          <h2 className="text-xl md:text-2xl text-book-dark mb-6">
            Una guía para transformar tu vida y alcanzar tus metas
          </h2>
          <p className="text-book-dark/70 mb-8 text-lg">
            "Descubre los secretos que cambiarán tu perspectiva y te guiarán hacia el éxito que siempre has deseado"
          </p>
          <div className="flex space-x-4">
            <Button 
              className="btn-primary"
              onClick={() => document.getElementById("comprar")?.scrollIntoView({behavior: "smooth"})}
            >
              Comprar Ahora
            </Button>
            <Button 
              variant="outline"
              className="border-book-primary text-book-primary hover:bg-book-primary/10"
              onClick={() => document.getElementById("descripción")?.scrollIntoView({behavior: "smooth"})}
            >
              Saber Más
            </Button>
          </div>
        </div>
        
        <div className="flex justify-center order-1 md:order-2 animate-fade-in" style={{animationDelay: "0.4s"}}>
          <div className="relative">
            <div className="absolute -inset-4 bg-book-secondary/20 rounded-lg transform rotate-3"></div>
            <img 
              src="/placeholder.svg" 
              alt="Portada del libro" 
              className="w-64 md:w-80 h-auto object-cover rounded-lg shadow-xl transform -rotate-3 relative"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#descripción" className="text-book-primary">
          <ArrowDown size={30} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
