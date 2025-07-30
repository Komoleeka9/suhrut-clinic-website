import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
    { code: 'mr', name: 'मराठी', flag: '🇮🇳' }
  ];

  const handleLanguageChange = (langCode: 'en' | 'hi' | 'mr') => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="hidden sm:flex">
          <Globe className="h-4 w-4 mr-1" />
          {languages.find(lang => lang.code === language)?.flag}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{t('selectLanguage')}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-3 py-4">
          {languages.map((lang) => (
            <Button
              key={lang.code}
              variant={language === lang.code ? "default" : "outline"}
              className="justify-start text-left"
              onClick={() => handleLanguageChange(lang.code as 'en' | 'hi' | 'mr')}
            >
              <span className="mr-3 text-lg">{lang.flag}</span>
              <span>{lang.name}</span>
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}