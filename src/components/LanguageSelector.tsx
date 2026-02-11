import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LanguageSelectorProps {
  variant?: "default" | "mobile";
}

const LanguageSelector = ({ variant = "default" }: LanguageSelectorProps) => {
  const { language, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "gap-1 font-extrabold uppercase tracking-wider text-xs px-2",
            variant === "mobile"
              ? "text-foreground hover:bg-primary/20 hover:text-primary"
              : "text-foreground hover:bg-primary/20 hover:text-primary"
          )}
        >
          <Globe className="h-4 w-4" />
          {language.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-card border border-border z-[100] min-w-[100px]">
        <DropdownMenuItem
          onClick={() => setLanguage("en")}
          className={cn(
            "cursor-pointer font-semibold text-sm",
            language === "en" && "text-primary"
          )}
        >
          🇬🇧 English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage("es")}
          className={cn(
            "cursor-pointer font-semibold text-sm",
            language === "es" && "text-primary"
          )}
        >
          🇪🇸 Español
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
