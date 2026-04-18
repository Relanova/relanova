import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram, ArrowUp, MessageCircle, FileText } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center">
                <span className="font-serif text-secondary-foreground font-bold text-lg">R</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-serif font-bold text-base">Relanova</span>
                <span className="text-primary-foreground/60 text-[10px] tracking-widest uppercase">Human Touch · Connected World</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              Human Touch to a Connected World. Strategische groei via de BRIDGE Methodology™ — ondersteund door MBT Consult & Connect.
            </p>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/in/moniabentahar" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://wa.me/32488285886" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold mb-4 text-base">Navigatie</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", path: "/" },
                { label: "Over Mij", path: "/about" },
                { label: "Diensten", path: "/services" },
                { label: "Cases", path: "/cases" },
                { label: "Blog", path: "/blog" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-primary-foreground/70 hover:text-secondary text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* BRIDGE Services */}
          <div>
            <h4 className="font-serif font-semibold mb-4 text-base">BRIDGE Diensten</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/70">
              <li>B — Business Focus</li>
              <li>R — Relevantie & Realiteit</li>
              <li>I — Identiteit & Inzicht</li>
              <li>D — Design & Richting</li>
              <li>G — Groei & Partnerships</li>
              <li>E — Expansie & Evaluatie</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-semibold mb-4 text-base">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:monia@relanova.be" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-secondary transition-colors">
                  <Mail className="w-4 h-4 shrink-0" />
                  monia@relanova.be
                </a>
              </li>
              <li>
                <a href="tel:+32488285886" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-secondary transition-colors">
                  <Phone className="w-4 h-4 shrink-0" />
                  +32 488 285 886 (WhatsApp)
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/moniabentahar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-secondary transition-colors">
                  <Linkedin className="w-4 h-4 shrink-0" />
                  linkedin.com/in/moniabentahar
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>Vijvedreef 67<br />8710 Sint-Baafs-Vijve, België</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-xs text-center sm:text-left">
            © 2026 Relanova — ondersteund door MBT Consult & Connect · Reg: BE1004.202.297 · BRIDGE Method™ is a registered trademark.
          </p>
          <div className="flex items-center gap-4 text-xs text-primary-foreground/50">
            <Link to="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-secondary transition-colors">Algemene Voorwaarden</Link>
            <button onClick={scrollToTop} aria-label="Scroll to top" className="w-8 h-8 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors">
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
