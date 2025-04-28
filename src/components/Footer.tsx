
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-book-dark text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">Mi Libro Digital</h3>
            <p className="text-white/70">
              Transformando vidas a través del conocimiento y la sabiduría compartida.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <span>contacto@milibrodigital.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-white/10 text-center text-white/60">
          <p>© {currentYear} Mi Libro Digital. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
