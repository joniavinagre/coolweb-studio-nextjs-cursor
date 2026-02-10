import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.webp";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-navy text-primary-foreground relative">
      {/* Curved wave top edge */}
      <div className="absolute -top-[60px] left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0 0L48 10C96 20 192 40 288 50C384 60 480 60 576 55C672 50 768 40 864 35C960 30 1056 30 1152 35C1248 40 1344 50 1392 55L1440 60V120H0Z" className="fill-navy" />
        </svg>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 pt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="COOLWEB Studio" className="h-9 w-9" />
              <span className="font-bold text-lg text-primary-foreground">
                COOL<span className="text-primary">WEB</span>
              </span>
            </Link>
           <p className="font-body leading-relaxed max-w-xs text-sm text-primary-foreground">
              We create stunning websites and boost your online presence.
            </p>
          </div>

          {/* Navigation */}
          <div>
           <h3 className="font-bold text-base uppercase tracking-wider mb-4">Navigation</h3>
            <div className="flex flex-col gap-2">
             <Link to="/" className="text-primary-foreground hover:text-primary text-sm transition-colors">Home</Link>
             <Link to="/services" className="text-primary-foreground hover:text-primary text-sm transition-colors">Services</Link>
             <Link to="/portfolio" className="text-primary-foreground hover:text-primary text-sm transition-colors">Portfolio</Link>
             <Link to="/about" className="text-primary-foreground hover:text-primary text-sm transition-colors">About</Link>
             <Link to="/contact" className="text-primary-foreground hover:text-primary text-sm transition-colors">Contact</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
           <h3 className="font-bold text-base uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-2">
             <li className="flex items-center gap-2 text-primary-foreground text-sm">
                <Mail className="w-4 h-4 text-primary" />
                hello@coolwebstudio.com
              </li>
             <li className="flex items-center gap-2 text-primary-foreground text-sm">
                <Phone className="w-4 h-4 text-primary" />
                +1 (555) 123-4567
              </li>
             <li className="flex items-center gap-2 text-primary-foreground text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                Serving clients worldwide
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4">
         <p className="text-primary-foreground/40 text-sm text-center">
            © {currentYear} COOLWEB Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;