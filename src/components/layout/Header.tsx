import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import fullLogo from "@/assets/coolweb-logo-full.webp";
import LanguageSelector from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navLinks = [
    { href: "/", label: t("header.home") },
    { href: "/services", label: t("header.services") },
    { href: "/portfolio", label: t("header.portfolio") },
    { href: "/about", label: t("header.about") },
    { href: "/contact", label: t("header.contact") },
  ];

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
          <Link to="/">
            <img
              src={fullLogo}
              alt="COOLWEB Studio"
              className="h-8"
            />
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

          {/* Desktop: Language Selector + CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <LanguageSelector />
            <Button
              asChild
              className="bg-navy text-primary-foreground font-semibold uppercase text-sm tracking-wider px-5 py-2 btn-swipe-navy"
            >
              <Link to="/contact">{t("header.getStarted")}</Link>
            </Button>
          </div>

          {/* Mobile: Language Selector + Burger */}
          <div className="flex lg:hidden items-center gap-1">
            <LanguageSelector variant="mobile" />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground hover:bg-primary/20 hover:text-primary">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">{t("header.openMenu")}</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-navy border-none [&>button]:text-white">
                <div className="flex flex-col gap-4 mt-4">
                  <Link
                    to="/"
                    onClick={() => setIsOpen(false)}
                  >
                    <img src={fullLogo} alt="COOLWEB Studio" className="h-8 brightness-0 invert" />
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
                      {t("header.getStarted")}
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
