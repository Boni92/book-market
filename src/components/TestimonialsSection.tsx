
import { Card, CardContent } from "@/components/ui/card";

const testimonialsData = [
  {
    id: 1,
    name: "María García",
    role: "Emprendedora",
    content: "Este libro cambió por completo mi perspectiva sobre el éxito. Los ejercicios prácticos me ayudaron a identificar mis verdaderas pasiones y a establecer metas claras que antes parecían inalcanzables.",
    avatar: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    role: "Gerente de Proyectos",
    content: "Una lectura esencial para cualquier profesional. Las estrategias de gestión del tiempo y productividad han transformado mi día a día, permitiéndome alcanzar un mejor equilibrio entre mi vida personal y profesional.",
    avatar: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Laura Martínez",
    role: "Estudiante Universitaria",
    content: "Como estudiante, este libro me dio herramientas que no se enseñan en la universidad. Los métodos para superar la procrastinación y desarrollar disciplina han sido fundamentales para mi desarrollo académico.",
    avatar: "/placeholder.svg"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container-custom">
        <h2 className="section-title text-center mb-12">Lo que dicen nuestros lectores</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonialsData.map((testimonial) => (
            <Card key={testimonial.id} className="bg-gradient-to-br from-white to-book-accent/30 border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-book-dark">{testimonial.name}</h3>
                    <p className="text-sm text-book-dark/70">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <svg className="h-6 w-6 text-book-secondary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                <p className="text-book-dark/80 italic">
                  {testimonial.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
