
import { Card, CardContent } from "@/components/ui/card";

const ChaptersSection = () => {
  const chapters = [
    {
      number: 1,
      title: "Descubriendo tu Propósito",
      description: "Explora técnicas y ejercicios para identificar tus pasiones profundas y definir un propósito de vida que te inspire y te guíe en todas tus decisiones."
    },
    {
      number: 2,
      title: "La Mentalidad del Éxito",
      description: "Aprende a desarrollar una mentalidad orientada al crecimiento, superando limitaciones autoimpuestas y cultivando patrones de pensamiento positivos."
    },
    {
      number: 3,
      title: "Estableciendo Metas Efectivas",
      description: "Domina el arte de establecer metas S.M.A.R.T. y diseña un sistema personalizado para seguir tu progreso y mantener la motivación constante."
    },
    {
      number: 4,
      title: "Superando Obstáculos",
      description: "Descubre estrategias prácticas para identificar, enfrentar y superar los obstáculos que aparezcan en tu camino, convirtiendo los desafíos en oportunidades."
    },
    {
      number: 5,
      title: "Hábitos para el Éxito Duradero",
      description: "Implementa un sistema de hábitos positivos que automatizan el éxito y te permiten avanzar constantemente hacia tus objetivos más importantes."
    },
    {
      number: 6,
      title: "El Poder de las Relaciones",
      description: "Aprende a construir una red de apoyo sólida y a rodearte de personas que potencien tu crecimiento y te impulsen hacia tus metas."
    },
    {
      number: 7,
      title: "Plan de Acción Integral",
      description: "Integra todo lo aprendido en un plan de acción personalizado que te guiará día a día hacia la consecución de tus sueños."
    }
  ];

  return (
    <section id="capítulos" className="bg-gradient-to-b from-white to-book-accent/50">
      <div className="container-custom">
        <h2 className="section-title text-center">Contenido del Libro</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {chapters.map((chapter) => (
            <Card 
              key={chapter.number}
              className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="h-2 bg-gradient-to-r from-book-primary to-book-secondary"></div>
              <CardContent className="pt-6">
                <div className="flex items-center mb-3">
                  <span className="bg-book-primary text-white text-sm font-bold h-6 w-6 rounded-full flex items-center justify-center mr-2">
                    {chapter.number}
                  </span>
                  <h3 className="font-serif font-bold text-xl text-book-dark">
                    {chapter.title}
                  </h3>
                </div>
                <p className="text-book-dark/70 text-sm">
                  {chapter.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-book-dark/80 italic">
            Y mucho más contenido valioso para tu desarrollo personal y profesional...
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChaptersSection;
