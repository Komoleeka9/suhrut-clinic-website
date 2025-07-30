import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'hi' | 'mr';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.appointment': 'Appointment',
    'nav.whatsapp': 'WhatsApp',
    'nav.call': 'Call',
    'nav.whatsapp_us': 'WhatsApp Us',
    'nav.call_now': 'Call Now',
    
    // Hero Section
    'hero.title': 'Shushrut Clinic',
    'hero.doctor': 'Dr. Ujwala Gavhane',
    'hero.qualification': '(B.H.M.S) Homeopathic & General Physician',
    'hero.description': 'Professional homeopathic and general medical care with over years of experience in treating various conditions naturally and effectively.',
    'hero.book_appointment': 'Book Appointment',
    'hero.whatsapp_us': 'WhatsApp Us',
    'hero.free_consultation': 'FREE FIRST CONSULTATION',
    
    // Quick Contact
    'contact.call_us': 'Call Us',
    'contact.whatsapp': 'WhatsApp',
    'contact.location': 'Location',
    'contact.hours': 'Clinic Hours',
    'contact.quick_consultation': 'Quick consultation',
    'contact.message_now': 'Message Now',
    'contact.near_school': 'Near Smita Patil School',
    'contact.warje_pune': 'Warje, Pune',
    'contact.hours_weekday': 'Mon-Fri: 10:30-1:30',
    'contact.hours_evening': '6:00-9:00 PM',
    
    // Services
    'services.title': 'Our Facilities',
    'services.subtitle': 'Comprehensive medical care for all your health needs',
    'services.child': 'Child Treatments',
    'services.child_desc': 'Specialized care for children\'s health with gentle homeopathic remedies',
    'services.skin': 'Skin Treatments',
    'services.skin_desc': 'Natural healing for eczema, psoriasis, acne and other skin conditions',
    'services.general': 'General Care',
    'services.general_desc': 'Complete family healthcare for fever, headaches, and common ailments',
    'services.piles': 'Piles Treatment',
    'services.piles_desc': 'Effective non-surgical treatment for hemorrhoids and related issues',
    'services.gynaec': 'Gynaec Problems',
    'services.gynaec_desc': 'Women\'s health care for menstrual, hormonal, and reproductive issues',
    'services.view_all': 'View All Services',
    
    // Why Choose Us
    'choose.title': 'Why Choose Shushrut Clinic?',
    'choose.subtitle': 'Experience the difference of personalized homeopathic care',
    'choose.expert': 'Expert Care',
    'choose.expert_desc': 'Dr. Ujwala Gavhane (B.H.M.S) with years of clinical experience',
    'choose.flexible': 'Flexible Hours',
    'choose.flexible_desc': 'Morning and evening consultations to fit your schedule',
    'choose.whatsapp': 'WhatsApp Support',
    'choose.whatsapp_desc': 'Quick consultation and follow-up support via WhatsApp',
    'choose.emergency': 'Emergency Care',
    'choose.emergency_desc': 'Available for urgent medical consultations when needed',
    
    // Testimonials
    'testimonials.title': 'What Our Patients Say',
    'testimonials.subtitle': 'Real experiences from our valued patients',
    
    // CTA
    'cta.title': 'Ready to Start Your Healing Journey?',
    'cta.subtitle': 'Book your consultation today and experience natural, effective healthcare',
    'cta.book_now': 'Book Appointment Now',
    'cta.contact_us': 'Contact Us',
    
    // Language Selector
    'language.english': 'English',
    'language.hindi': 'हिंदी',
    'language.marathi': 'मराठी',
  },
  
  hi: {
    // Navigation
    'nav.home': 'होम',
    'nav.about': 'हमारे बारे में',
    'nav.services': 'सेवाएं',
    'nav.contact': 'संपर्क',
    'nav.appointment': 'अपॉइंटमेंट',
    'nav.whatsapp': 'व्हाट्सऐप',
    'nav.call': 'कॉल करें',
    'nav.whatsapp_us': 'व्हाट्सऐप करें',
    'nav.call_now': 'अभी कॉल करें',
    
    // Hero Section
    'hero.title': 'शुश्रुत क्लिनिक',
    'hero.doctor': 'डॉ. उज्ज्वला गावहाणे',
    'hero.qualification': '(बी.एच.एम.एस) होम्योपैथिक और सामान्य चिकित्सक',
    'hero.description': 'वर्षों के अनुभव के साथ प्राकृतिक और प्रभावी रूप से विभिन्न स्थितियों के इलाज में पेशेवर होम्योपैथिक और सामान्य चिकित्सा देखभाल।',
    'hero.book_appointment': 'अपॉइंटमेंट बुक करें',
    'hero.whatsapp_us': 'व्हाट्सऐप करें',
    'hero.free_consultation': 'पहली सलाह मुफ्त',
    
    // Quick Contact
    'contact.call_us': 'हमें कॉल करें',
    'contact.whatsapp': 'व्हाट्सऐप',
    'contact.location': 'स्थान',
    'contact.hours': 'क्लिनिक समय',
    'contact.quick_consultation': 'त्वरित सलाह',
    'contact.message_now': 'अभी संदेश भेजें',
    'contact.near_school': 'स्मिता पाटिल स्कूल के पास',
    'contact.warje_pune': 'वारजे, पुणे',
    'contact.hours_weekday': 'सोम-शुक्र: 10:30-1:30',
    'contact.hours_evening': '6:00-9:00 शाम',
    
    // Services
    'services.title': 'हमारी सुविधाएं',
    'services.subtitle': 'आपकी सभी स्वास्थ्य आवश्यकताओं के लिए व्यापक चिकित्सा देखभाल',
    'services.child': 'बाल चिकित्सा',
    'services.child_desc': 'कोमल होम्योपैथिक उपचार के साथ बच्चों के स्वास्थ्य की विशेष देखभाल',
    'services.skin': 'त्वचा उपचार',
    'services.skin_desc': 'एक्जिमा, सोरायसिस, मुंहासे और अन्य त्वचा रोगों के लिए प्राकृतिक उपचार',
    'services.general': 'सामान्य देखभाल',
    'services.general_desc': 'बुखार, सिरदर्द और सामान्य बीमारियों के लिए संपूर्ण पारिवारिक स्वास्थ्य सेवा',
    'services.piles': 'बवासीर का इलाज',
    'services.piles_desc': 'बवासीर और संबंधित समस्याओं के लिए प्रभावी गैर-सर्जिकल उपचार',
    'services.gynaec': 'महिला रोग',
    'services.gynaec_desc': 'मासिक धर्म, हार्मोनल और प्रजनन संबंधी समस्याओं के लिए महिला स्वास्थ्य देखभाल',
    'services.view_all': 'सभी सेवाएं देखें',
    
    // Why Choose Us
    'choose.title': 'शुश्रुत क्लिनिक क्यों चुनें?',
    'choose.subtitle': 'व्यक्तिगत होम्योपैथिक देखभाल का अंतर अनुभव करें',
    'choose.expert': 'विशेषज्ञ देखभाल',
    'choose.expert_desc': 'वर्षों के नैदानिक अनुभव के साथ डॉ. उज्ज्वला गावहाणे (बी.एच.एम.एस)',
    'choose.flexible': 'लचीले समय',
    'choose.flexible_desc': 'आपके कार्यक्रम के अनुसार सुबह और शाम की सलाह',
    'choose.whatsapp': 'व्हाट्सऐप सहायता',
    'choose.whatsapp_desc': 'व्हाट्सऐप के माध्यम से त्वरित सलाह और फॉलो-अप सहायता',
    'choose.emergency': 'आपातकालीन देखभाल',
    'choose.emergency_desc': 'जरूरत पड़ने पर तत्काल चिकित्सा सलाह उपलब्ध',
    
    // Testimonials
    'testimonials.title': 'हमारे मरीज़ क्या कहते हैं',
    'testimonials.subtitle': 'हमारे मूल्यवान मरीज़ों के वास्तविक अनुभव',
    
    // CTA
    'cta.title': 'अपनी स्वास्थ्य यात्रा शुरू करने के लिए तैयार हैं?',
    'cta.subtitle': 'आज ही अपनी सलाह बुक करें और प्राकृतिक, प्रभावी स्वास्थ्य सेवा का अनुभव करें',
    'cta.book_now': 'अभी अपॉइंटमेंट बुक करें',
    'cta.contact_us': 'हमसे संपर्क करें',
    
    // Language Selector
    'language.english': 'English',
    'language.hindi': 'हिंदी',
    'language.marathi': 'मराठी',
  },
  
  mr: {
    // Navigation
    'nav.home': 'होम',
    'nav.about': 'आमच्याबद्दल',
    'nav.services': 'सेवा',
    'nav.contact': 'संपर्क',
    'nav.appointment': 'भेटीची वेळ',
    'nav.whatsapp': 'व्हाट्सअप',
    'nav.call': 'कॉल करा',
    'nav.whatsapp_us': 'व्हाट्सअप करा',
    'nav.call_now': 'आता कॉल करा',
    
    // Hero Section
    'hero.title': 'शुश्रुत क्लिनिक',
    'hero.doctor': 'डॉ. उज्ज्वला गावहाणे',
    'hero.qualification': '(बी.एच.एम.एस) होमिओपॅथिक आणि सामान्य चिकित्सक',
    'hero.description': 'अनेक वर्षांच्या अनुभवासह नैसर्गिक आणि प्रभावी पद्धतीने विविध आजारांवर उपचार करणारी व्यावसायिक होमिओपॅथिक आणि सामान्य वैद्यकीय सेवा।',
    'hero.book_appointment': 'भेटीची वेळ बुक करा',
    'hero.whatsapp_us': 'व्हाट्सअप करा',
    'hero.free_consultation': 'पहिला सल्ला मोफत',
    
    // Quick Contact
    'contact.call_us': 'आम्हाला कॉल करा',
    'contact.whatsapp': 'व्हाट्सअप',
    'contact.location': 'स्थान',
    'contact.hours': 'क्लिनिक वेळ',
    'contact.quick_consultation': 'त्वरित सल्ला',
    'contact.message_now': 'आता संदेश पाठवा',
    'contact.near_school': 'स्मिता पाटील स्कूलजवळ',
    'contact.warje_pune': 'वारजे, पुणे',
    'contact.hours_weekday': 'सोम-शुक्र: 10:30-1:30',
    'contact.hours_evening': '6:00-9:00 संध्याकाळी',
    
    // Services
    'services.title': 'आमच्या सुविधा',
    'services.subtitle': 'तुमच्या सर्व आरोग्य गरजांसाठी सर्वांगीण वैद्यकीय सेवा',
    'services.child': 'बाल उपचार',
    'services.child_desc': 'मुलांच्या आरोग्यासाठी सौम्य होमिओपॅथिक उपचारांसह विशेष काळजी',
    'services.skin': 'त्वचा उपचार',
    'services.skin_desc': 'एक्झिमा, सोरायसिस, मुरुम आणि इतर त्वचा विकारांसाठी नैसर्गिक उपचार',
    'services.general': 'सामान्य काळजी',
    'services.general_desc': 'ताप, डोकेदुखी आणि सामान्य आजारांसाठी संपूर्ण कौटुंबिक आरोग्य सेवा',
    'services.piles': 'मूळव्याधीचा इलाज',
    'services.piles_desc': 'मूळव्याधी आणि संबंधित समस्यांसाठी प्रभावी गैर-शस्त्रक्रिया उपचार',
    'services.gynaec': 'स्त्री रोग',
    'services.gynaec_desc': 'मासिक पाळी, हार्मोनल आणि प्रजनन संबंधी समस्यांसाठी महिला आरोग्य सेवा',
    'services.view_all': 'सर्व सेवा पहा',
    
    // Why Choose Us
    'choose.title': 'शुश्रुत क्लिनिक का निवडावे?',
    'choose.subtitle': 'वैयक्तिक होमिओपॅथिक काळजीचा फरक अनुभवा',
    'choose.expert': 'तज्ञ काळजी',
    'choose.expert_desc': 'अनेक वर्षांच्या नैदानिक अनुभवासह डॉ. उज्ज्वला गावहाणे (बी.एच.एम.एस)',
    'choose.flexible': 'लवचिक वेळा',
    'choose.flexible_desc': 'तुमच्या वेळापत्रकानुसार सकाळी आणि संध्याकाळी सल्ला',
    'choose.whatsapp': 'व्हाट्सअप सहाय्य',
    'choose.whatsapp_desc': 'व्हाट्सअपद्वारे त्वरित सल्ला आणि फॉलो-अप सहाय्य',
    'choose.emergency': 'आपत्कालीन काळजी',
    'choose.emergency_desc': 'गरज पडल्यास तत्काळ वैद्यकीय सल्ला उपलब्ध',
    
    // Testimonials
    'testimonials.title': 'आमचे रुग्ण काय म्हणतात',
    'testimonials.subtitle': 'आमच्या मौल्यवान रुग्णांचे खरे अनुभव',
    
    // CTA
    'cta.title': 'तुमचा आरोग्य प्रवास सुरू करण्यास तयार आहात?',
    'cta.subtitle': 'आजच तुमचा सल्ला बुक करा आणि नैसर्गिक, प्रभावी आरोग्य सेवेचा अनुभव घ्या',
    'cta.book_now': 'आता भेटीची वेळ बुक करा',
    'cta.contact_us': 'आमच्याशी संपर्क साधा',
    
    // Language Selector
    'language.english': 'English',
    'language.hindi': 'हिंदी', 
    'language.marathi': 'मराठी',
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
  };

  const t = (key: string): string => {
    return translations[currentLanguage][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
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