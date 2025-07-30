import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi' | 'mr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    services: "Services", 
    contact: "Contact",
    appointment: "Appointment",
    
    // Header
    whatsapp: "WhatsApp",
    call: "Call",
    
    // Home Section
    welcomeTitle: "Welcome to Shushrut Clinic",
    welcomeSubtitle: "Expert Homeopathic Care by Dr. Ujwala Gavhane (BHMS)",
    heroDescription: "Experience the gentle healing power of homeopathy with personalized treatment plans tailored to your unique health needs.",
    freeConsultation: "FREE FIRST CONSULTATION",
    bookAppointment: "Book Appointment",
    callNow: "Call Now",
    
    // About Section
    aboutTitle: "About Dr. Ujwala Gavhane",
    aboutDescription: "Dr. Ujwala Gavhane is a qualified BHMS practitioner with extensive experience in homeopathic medicine, dedicated to providing holistic healthcare solutions.",
    
    // Services Section
    servicesTitle: "Our Services",
    childTreatment: "Child Treatment",
    skinTreatment: "Skin Treatment", 
    generalTreatment: "General Treatment",
    pilesTreatment: "Piles Treatment",
    gynaecTreatment: "Gynaec Treatment",
    
    // Contact Section
    contactTitle: "Contact Us",
    getInTouch: "Get in Touch",
    clinicAddress: "Clinic Address",
    operatingHours: "Operating Hours",
    phoneNumbers: "Phone Numbers",
    
    // Forms
    fullName: "Full Name",
    email: "Email",
    phone: "Phone",
    message: "Message",
    sendMessage: "Send Message",
    selectDate: "Select Date",
    selectTime: "Select Time",
    appointmentType: "Appointment Type",
    
    // Common
    submit: "Submit",
    close: "Close",
    selectLanguage: "Select Language"
  },
  hi: {
    // Navigation
    home: "होम",
    about: "परिचय",
    services: "सेवाएं",
    contact: "संपर्क",
    appointment: "अपॉइंटमेंट",
    
    // Header
    whatsapp: "व्हाट्सऐप",
    call: "कॉल करें",
    
    // Home Section
    welcomeTitle: "शुश्रुत क्लिनिक में आपका स्वागत है",
    welcomeSubtitle: "डॉ. उज्ज्वला गवहाणे (BHMS) द्वारा विशेषज्ञ होम्योपैथिक देखभाल",
    heroDescription: "आपकी अनूठी स्वास्थ्य आवश्यकताओं के अनुरूप व्यक्तिगत उपचार योजनाओं के साथ होम्योपैथी की कोमल उपचार शक्ति का अनुभव करें।",
    freeConsultation: "पहली परामर्श मुफ्त",
    bookAppointment: "अपॉइंटमेंट बुक करें",
    callNow: "अभी कॉल करें",
    
    // About Section
    aboutTitle: "डॉ. उज्ज्वला गवहाणे के बारे में",
    aboutDescription: "डॉ. उज्ज्वला गवहाणे एक योग्य BHMS चिकित्सक हैं जिनके पास होम्योपैथिक चिकित्सा में व्यापक अनुभव है, समग्र स्वास्थ्य सेवा समाधान प्रदान करने के लिए समर्पित हैं।",
    
    // Services Section
    servicesTitle: "हमारी सेवाएं",
    childTreatment: "बच्चों का इलाज",
    skinTreatment: "त्वचा का इलाज",
    generalTreatment: "सामान्य इलाज",
    pilesTreatment: "बवासीर का इलाज",
    gynaecTreatment: "स्त्री रोग इलाज",
    
    // Contact Section
    contactTitle: "संपर्क करें",
    getInTouch: "संपर्क में रहें",
    clinicAddress: "क्लिनिक का पता",
    operatingHours: "समय",
    phoneNumbers: "फोन नंबर",
    
    // Forms
    fullName: "पूरा नाम",
    email: "ईमेल",
    phone: "फोन",
    message: "संदेश",
    sendMessage: "संदेश भेजें",
    selectDate: "तारीख चुनें",
    selectTime: "समय चुनें",
    appointmentType: "अपॉइंटमेंट प्रकार",
    
    // Common
    submit: "जमा करें",
    close: "बंद करें",
    selectLanguage: "भाषा चुनें"
  },
  mr: {
    // Navigation
    home: "होम",
    about: "आमच्याबद्दल",
    services: "सेवा",
    contact: "संपर्क",
    appointment: "भेटीची वेळ",
    
    // Header
    whatsapp: "व्हाट्सअप",
    call: "कॉल करा",
    
    // Home Section
    welcomeTitle: "शुश्रुत क्लिनिकमध्ये आपले स्वागत आहे",
    welcomeSubtitle: "डॉ. उज्ज्वला गवहाणे (BHMS) यांची तज्ञ होमिओपॅथिक काळजी",
    heroDescription: "आपल्या अनन्य आरोग्य गरजांनुसार वैयक्तिक उपचार योजनांसह होमिओपॅथीच्या सौम्य उपचार शक्तीचा अनुभव घ्या।",
    freeConsultation: "पहिला सल्ला विनामूल्य",
    bookAppointment: "भेटीची वेळ बुक करा",
    callNow: "आत्ता कॉल करा",
    
    // About Section
    aboutTitle: "डॉ. उज्ज्वला गवहाणे यांच्याबद्दल",
    aboutDescription: "डॉ. उज्ज्वला गवहाणे हे योग्य BHMS चिकित्सक आहेत ज्यांना होमिओपॅथिक औषधात विस्तृत अनुभव आहे, समग्र आरोग्य सेवा समाधान प्रदान करण्यासाठी समर्पित आहेत।",
    
    // Services Section
    servicesTitle: "आमच्या सेवा",
    childTreatment: "मुलांचा उपचार",
    skinTreatment: "त्वचेचा उपचार",
    generalTreatment: "सामान्य उपचार",
    pilesTreatment: "मूळव्याधीचा उपचार",
    gynaecTreatment: "स्त्रीरोग उपचार",
    
    // Contact Section
    contactTitle: "संपर्क करा",
    getInTouch: "संपर्कात रहा",
    clinicAddress: "क्लिनिकचा पत्ता",
    operatingHours: "वेळापत्रक",
    phoneNumbers: "फोन नंबर",
    
    // Forms
    fullName: "पूर्ण नाव",
    email: "ईमेल",
    phone: "फोन",
    message: "संदेश",
    sendMessage: "संदेश पाठवा",
    selectDate: "तारीख निवडा",
    selectTime: "वेळ निवडा",
    appointmentType: "भेटीचा प्रकार",
    
    // Common
    submit: "सबमिट करा",
    close: "बंद करा",
    selectLanguage: "भाषा निवडा"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};