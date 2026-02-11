import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.webp";

const navLinks = [{
  href: "/",
  label: "Home"
}, {
  href: "/services",
  label: "Services"
}, {
  href: "/portfolio",
  label: "Portfolio"
}, {
  href: "/about",
  label: "About"
}, {
  href: "/contact",
  label: "Contact"
}];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
        // Slightly tighter overall header height
        isScrolled ? "py-0" : "py-2"
      )}
    >
      <div className={cn(
        "transition-all duration-500 ease-out",
        isScrolled ? "w-full lg:w-auto lg:container lg:mx-auto lg:px-4" : "container mx-auto px-4"
      )}>
        <nav
          className={cn(
            "flex items-center justify-between px-4 md:px-6 py-2 transition-all duration-500 ease-out",
            isScrolled
              ? "bg-card border-b border-border shadow-sm rounded-none lg:rounded-full lg:floating-header lg:border-none lg:shadow-lg"
              : "floating-header"
          )}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src={logo}
              alt="COOLWEB Studio"
              className="h-8 w-8 group-hover:scale-105 transition-transform"
            />
            <span className="font-bold text-lg text-foreground">
              COOL<span className="text-primary">WEB</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "nav-link-fixed uppercase tracking-wider transition-colors hover:text-primary font-extrabold",
                  isActive(link.href) ? "text-primary" : "text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              asChild
               className="bg-navy text-primary-foreground font-semibold uppercase text-sm tracking-wider px-5 py-2 btn-swipe-navy"
            >
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-foreground hover:bg-primary/20 hover:text-primary">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-navy border-none [&>button]:text-white">
              <div className="flex flex-col gap-4 mt-4">
                <Link
                  to="/"
                  className="flex items-center gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  <img src={logo} alt="COOLWEB Studio" className="h-8 w-8" />
                  <span className="font-bold text-lg text-primary-foreground">
                    COOL<span className="text-primary">WEB</span>
                  </span>
                </Link>

                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "nav-link-fixed font-bold uppercase tracking-wider py-2 px-4 rounded-lg transition-colors",
                        isActive(link.href)
                          ? "bg-primary/20 text-primary"
                          : "text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                <Button
                  asChild
                  className="bg-primary text-primary-foreground font-semibold uppercase text-base tracking-wider mt-2 btn-swipe-primary"
                >
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
};

export default Header;