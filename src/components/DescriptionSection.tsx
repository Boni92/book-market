
import { Card, CardContent } from "@/components/ui/card";

const DescriptionSection = () => {
  return (
    <section id="descripción" className="bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center">Sobre el Libro</h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Card className="bg-book-accent border-none shadow-lg">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-serif font-bold mb-4 text-book-dark">Sinopsis</h3>
                <p className="text-book-dark/80 mb-6">
                  "Tu Camino Hacia el Éxito" es una poderosa guía que te llevará a través de un viaje transformador 
                  para descubrir y potenciar tus capacidades innatas. Este libro te ayudará a identificar tus 
                  verdaderas pasiones y objetivos, proporcionándote las herramientas necesarias para enfrentar 
                  obstáculos con confianza y determinación.
                </p>
                <p className="text-book-dark/80">
                  A través de historias inspiradoras, ejercicios prácticos y consejos basados en investigación, 
                  este libro te muestra cómo establecer y alcanzar metas significativas, superar la procrastinación, 
                  y desarrollar hábitos que te conducirán naturalmente hacia el éxito.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4 text-book-dark">¿Por qué leer este libro?</h3>
            <ul className="space-y-4">
              {[
                "Descubrirás cómo identificar y eliminar creencias limitantes que te impiden avanzar",
                "Aprenderás técnicas probadas para establecer metas efectivas y planes de acción realizables",
                "Desarrollarás la mentalidad necesaria para perseverar ante los desafíos y convertir los obstáculos en oportunidades",
                "Encontrarás estrategias para mantener la motivación y disciplina a largo plazo",
                "Te equiparás con herramientas prácticas para gestionar tu tiempo y energía de manera óptima"
              ].map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-book-secondary font-bold mr-2">✓</span>
                  <span className="text-book-dark/80">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DescriptionSection;
