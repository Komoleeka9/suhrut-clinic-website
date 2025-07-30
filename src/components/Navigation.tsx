import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, MessageCircle } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { name: t('home'), path: "home" },
    { name: t('about'), path: "about" },
    { name: t('services'), path: "services" },
    { name: t('contact'), path: "contact" },
    { name: t('appointment'), path: "appointment" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="medical-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => scrollToSection('home')} className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">SC</span>
            </div>
            <div>
              <h1 className="font-bold text-lg text-gray-900">Shushrut Clinic</h1>
              <p className="text-xs text-gray-600">Dr. Ujwala Gavhane</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => scrollToSection(item.path)}
                className="text-sm font-medium transition-colors hover:text-primary text-gray-600"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Quick Contact & Mobile Menu */}
          <div className="flex items-center space-x-2">
            <LanguageSwitcher />
            <Button
              size="sm"
              className="hidden sm:flex bg-green-600 hover:bg-green-700"
              onClick={() => window.open("https://wa.me/917387053508", "_blank")}
            >
              <MessageCircle className="h-4 w-4 mr-1" />
              {t('whatsapp')}
            </Button>
            
            <Button
              size="sm"
              variant="outline"
              className="hidden sm:flex"
              onClick={() => window.open("tel:+917387053508", "_blank")}
            >
              <Phone className="h-4 w-4 mr-1" />
              {t('call')}
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="md:hidden">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.path}
                      onClick={() => scrollToSection(item.path)}
                      className="text-lg font-medium transition-colors hover:text-primary text-gray-600 text-left"
                    >
                      {item.name}
                    </button>
                  ))}
                  
                  <div className="pt-4 border-t space-y-2">
                    <Button
                      className="w-full bg-green-600 hover:bg-green-700"
                      onClick={() => {
                        window.open("https://wa.me/917387053508", "_blank");
                        setIsOpen(false);
                      }}
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      {t('whatsapp')}
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => {
                        window.open("tel:+917387053508", "_blank");
                        setIsOpen(false);
                      }}
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      {t('call')}
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}