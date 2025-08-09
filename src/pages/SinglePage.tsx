import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Phone, MessageCircle, MapPin, Clock, Star, Heart, Shield, Users, Award, Sparkles, Baby, User } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { LocationMap } from "@/components/contact/LocationMap";
import { AppointmentForm } from "@/components/contact/AppointmentForm";

const SinglePage = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <section id="home" className="medical-gradient text-white py-12 md:py-20">
        <div className="medical-container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                {t('hero.title')}
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl text-blue-100 mb-3 md:mb-4">
                {t('hero.doctor')}
              </h2>
              <p className="text-base md:text-lg text-blue-100 mb-4 md:mb-6">
                {t('hero.qualification')}
              </p>
              <p className="text-lg md:text-xl mb-6 md:mb-8">
                {t('hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-white/30 z-10 relative text-sm md:text-base"
                  onClick={() => scrollToSection('appointment')}
                >
                  <Calendar className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                  {t('hero.book_appointment')}
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-primary hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-white/30 z-10 relative text-sm md:text-base"
                  onClick={() => window.open("https://wa.me/917387053508", "_blank")}
                >
                  <MessageCircle className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                  {t('hero.whatsapp_us')}
                </Button>
              </div>
            </div>
            <div className="text-center order-first lg:order-last">
              <div className="bg-orange-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg inline-block mb-4 md:mb-6 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300">
                <span className="font-bold text-base md:text-lg">{t('hero.free_consultation')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="medical-section py-8 md:py-16">
        <div className="medical-container px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">{t('services.title')}</h2>
            <p className="text-lg md:text-xl text-gray-600 px-4">{t('services.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
            {[
              { 
                name: t('services.child'), 
                desc: t('services.child_desc'),
                icon: Baby,
                color: "text-pink-600"
              },
              { 
                name: t('services.skin'), 
                desc: t('services.skin_desc'),
                icon: Sparkles,
                color: "text-purple-600"
              },
              { 
                name: t('services.general'), 
                desc: t('services.general_desc'),
                icon: User,
                color: "text-blue-600"
              },
              { 
                name: t('services.piles'), 
                desc: t('services.piles_desc'),
                icon: Shield,
                color: "text-green-600"
              },
              { 
                name: t('services.gynaec'), 
                desc: t('services.gynaec_desc'),
                icon: Heart,
                color: "text-red-600"
              }
            ].map((service, index) => (
              <Card key={index} className="medical-card hover:shadow-xl transition-all duration-300 hover:scale-105 transform hover:bg-gradient-to-br hover:from-blue-50/50 hover:to-white hover:shadow-primary/20">
                <CardContent className="pt-4 md:pt-6 p-4 md:p-6">
                  <service.icon className={`h-6 w-6 md:h-8 md:w-8 ${service.color} mb-3 md:mb-4 transition-transform duration-300 hover:scale-110`} />
                  <h3 className="font-semibold text-base md:text-lg mb-2 md:mb-3">{service.name}</h3>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              variant="outline"
              className="hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/30 z-10 relative border-2 hover:border-primary text-sm md:text-base hover:bg-gradient-to-r hover:from-primary/5 hover:to-primary/10"
              onClick={() => scrollToSection('appointment')}
            >
              {t('services.view_all')}
            </Button>
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section id="appointment" className="bg-white medical-section py-8 md:py-16">
        <div className="medical-container px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">{t('nav.appointment')}</h2>
            <p className="text-lg md:text-xl text-gray-600 px-4">Schedule your consultation with Dr. Ujwala Gavhane</p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <AppointmentForm />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="medical-section py-8 md:py-16">
        <div className="medical-container px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">{t('nav.contact')}</h2>
            <p className="text-lg md:text-xl text-gray-600 px-4">Get in touch with us for any queries or concerns</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6 md:space-y-8">
              <ContactInfo />
              <LocationMap />
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="bg-white medical-section py-8 md:py-16">
        <div className="medical-container px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <Card className="medical-card text-center hover:shadow-xl transition-all duration-300 hover:scale-105 transform hover:bg-gradient-to-br hover:from-blue-50/50 hover:to-white hover:shadow-primary/25">
              <CardContent className="pt-4 md:pt-6 px-3 md:px-6">
                <Phone className="h-6 w-6 md:h-8 md:w-8 text-primary mx-auto mb-2 md:mb-3 transition-transform duration-300 hover:scale-110" />
                <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">{t('contact.call_us')}</h3>
                <p className="text-xs md:text-sm text-gray-600 mb-1 md:mb-3">+91-8888547482</p>
                <p className="text-xs md:text-sm text-gray-600">+91-7387053508</p>
              </CardContent>
            </Card>
            
            <Card className="medical-card text-center hover:shadow-xl transition-all duration-300 hover:scale-105 transform hover:bg-gradient-to-br hover:from-green-50/50 hover:to-white hover:shadow-green-500/25">
              <CardContent className="pt-4 md:pt-6 px-3 md:px-6">
                <MessageCircle className="h-6 w-6 md:h-8 md:w-8 text-green-600 mx-auto mb-2 md:mb-3 transition-transform duration-300 hover:scale-110" />
                <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">{t('contact.whatsapp')}</h3>
                <p className="text-xs md:text-sm text-gray-600 mb-2 md:mb-3">{t('contact.quick_consultation')}</p>
                <Button size="sm" className="bg-green-600 hover:bg-green-700 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-500/30 z-10 relative text-xs md:text-sm">
                  {t('contact.message_now')}
                </Button>
              </CardContent>
            </Card>
            
            <Card className="medical-card text-center hover:shadow-xl transition-all duration-300 hover:scale-105 transform hover:bg-gradient-to-br hover:from-blue-50/50 hover:to-white hover:shadow-primary/25">
              <CardContent className="pt-4 md:pt-6 px-3 md:px-6">
                <MapPin className="h-6 w-6 md:h-8 md:w-8 text-primary mx-auto mb-2 md:mb-3 transition-transform duration-300 hover:scale-110" />
                <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">{t('contact.location')}</h3>
                <p className="text-xs md:text-sm text-gray-600">{t('contact.near_school')}</p>
                <p className="text-xs md:text-sm text-gray-600">{t('contact.warje_pune')}</p>
              </CardContent>
            </Card>
            
            <Card className="medical-card text-center hover:shadow-xl transition-all duration-300 hover:scale-105 transform hover:bg-gradient-to-br hover:from-blue-50/50 hover:to-white hover:shadow-primary/25">
              <CardContent className="pt-4 md:pt-6 px-3 md:px-6">
                <Clock className="h-6 w-6 md:h-8 md:w-8 text-primary mx-auto mb-2 md:mb-3 transition-transform duration-300 hover:scale-110" />
                <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">{t('contact.hours')}</h3>
                <p className="text-xs md:text-sm text-gray-600">{t('contact.hours_weekday')}</p>
                <p className="text-xs md:text-sm text-gray-600">{t('contact.hours_evening')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="medical-section py-8 md:py-16">
        <div className="medical-container px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">{t('nav.about')}</h2>
            <p className="text-lg md:text-xl text-gray-600 px-4">Meet Dr. Ujwala Gavhane - Your Trusted Homeopathic Physician</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Dr. Ujwala Gavhane (B.H.M.S)</h3>
              <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
                Dr. Ujwala Gavhane is a qualified homeopathic physician with a Bachelor of Homeopathic Medicine and Surgery (B.H.M.S) degree. With years of clinical experience, she specializes in providing natural, safe, and effective treatments for patients of all ages.
              </p>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start space-x-3 text-left hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-transparent p-3 rounded-lg transition-all duration-300 hover:shadow-md">
                  <Award className="h-5 w-5 md:h-6 md:w-6 text-primary mt-1 flex-shrink-0 transition-transform duration-300 hover:scale-110" />
                  <div>
                    <h4 className="font-semibold text-sm md:text-base">Qualifications</h4>
                    <p className="text-gray-600 text-xs md:text-sm">Bachelor of Homeopathic Medicine and Surgery (B.H.M.S)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 text-left hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-transparent p-3 rounded-lg transition-all duration-300 hover:shadow-md">
                  <Users className="h-5 w-5 md:h-6 md:w-6 text-primary mt-1 flex-shrink-0 transition-transform duration-300 hover:scale-110" />
                  <div>
                    <h4 className="font-semibold text-sm md:text-base">Experience</h4>
                    <p className="text-gray-600 text-xs md:text-sm">Years of clinical practice treating diverse medical conditions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 text-left hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-transparent p-3 rounded-lg transition-all duration-300 hover:shadow-md">
                  <Heart className="h-5 w-5 md:h-6 md:w-6 text-primary mt-1 flex-shrink-0 transition-transform duration-300 hover:scale-110" />
                  <div>
                    <h4 className="font-semibold text-sm md:text-base">Philosophy</h4>
                    <p className="text-gray-600 text-xs md:text-sm">Holistic approach to healing mind, body, and spirit</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4 md:space-y-6">
              <Card className="medical-card hover:shadow-xl transition-all duration-300 hover:scale-105 transform hover:bg-gradient-to-br hover:from-blue-50/50 hover:to-white hover:shadow-primary/20">
                <CardContent className="p-4 md:p-6">
                  <Shield className="h-6 w-6 md:h-8 md:w-8 text-primary mb-2 md:mb-3 transition-transform duration-300 hover:scale-110" />
                  <h4 className="font-semibold mb-2 text-sm md:text-base">Safe & Natural Treatment</h4>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">Homeopathic medicines are natural, safe, and without side effects, suitable for all age groups including infants and pregnant women.</p>
                </CardContent>
              </Card>
              <Card className="medical-card hover:shadow-xl transition-all duration-300 hover:scale-105 transform hover:bg-gradient-to-br hover:from-blue-50/50 hover:to-white hover:shadow-primary/20">
                <CardContent className="p-4 md:p-6">
                  <Star className="h-6 w-6 md:h-8 md:w-8 text-primary mb-2 md:mb-3 transition-transform duration-300 hover:scale-110" />
                  <h4 className="font-semibold mb-2 text-sm md:text-base">Personalized Care</h4>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">Each patient receives individualized treatment based on their unique symptoms, constitution, and medical history.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white medical-section py-8 md:py-16">
        <div className="medical-container px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">{t('choose.title')}</h2>
            <p className="text-lg md:text-xl text-gray-600 px-4">{t('choose.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {[
              {
                icon: Star,
                title: t('choose.expert'),
                desc: t('choose.expert_desc')
              },
              {
                icon: Clock,
                title: t('choose.flexible'),
                desc: t('choose.flexible_desc')
              },
              {
                icon: MessageCircle,
                title: t('choose.whatsapp'), 
                desc: t('choose.whatsapp_desc')
              },
              {
                icon: Phone,
                title: t('choose.emergency'),
                desc: t('choose.emergency_desc')
              }
            ].map((feature, index) => (
              <Card key={index} className="medical-card text-center hover:shadow-xl transition-all duration-300 hover:scale-105 transform hover:bg-gradient-to-br hover:from-blue-50/50 hover:to-white hover:shadow-primary/20">
                <CardContent className="pt-6 md:pt-8 p-4 md:p-6">
                  <feature.icon className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-primary mx-auto mb-3 md:mb-4 transition-transform duration-300 hover:scale-110" />
                  <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3">{feature.title}</h3>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="medical-section py-8 md:py-16">
        <div className="medical-container px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">{t('testimonials.title')}</h2>
            <p className="text-lg md:text-xl text-gray-600 px-4">{t('testimonials.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {[
              {
                name: "Priya Sharma",
                condition: "Skin Treatment",
                text: "Dr. Gavhane's treatment completely cured my chronic skin condition. Highly recommend!"
              },
              {
                name: "Rajesh Patil", 
                condition: "General Care",
                text: "Excellent care and personal attention. The doctor really listens to your concerns."
              },
              {
                name: "Sunita Desai",
                condition: "Child Treatment", 
                text: "My child's health issues were resolved naturally. Very satisfied with the treatment."
              }
            ].map((testimonial, index) => (
              <Card key={index} className="medical-card hover:shadow-xl transition-all duration-300 hover:scale-105 transform hover:bg-gradient-to-br hover:from-yellow-50/30 hover:to-white hover:shadow-yellow-500/15">
                <CardContent className="pt-4 md:pt-6 p-4 md:p-6">
                  <div className="flex items-center mb-2 md:mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 md:h-4 md:w-4 text-yellow-500 fill-current transition-transform duration-300 hover:scale-110" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-3 md:mb-4 italic text-xs md:text-sm leading-relaxed">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-sm md:text-base">{testimonial.name}</p>
                    <p className="text-xs md:text-sm text-gray-600">{testimonial.condition}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="medical-gradient text-white medical-section py-8 md:py-16">
        <div className="medical-container text-center px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 text-blue-100 px-4">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-white/30 z-10 relative text-sm md:text-base"
              onClick={() => scrollToSection('appointment')}
            >
              <Calendar className="h-4 w-4 md:h-5 md:w-5 mr-2" />
              {t('cta.book_now')}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-white/30 z-10 relative text-sm md:text-base"
              onClick={() => window.open("https://wa.me/917387053508", "_blank")}
            >
              <MessageCircle className="h-4 w-4 md:h-5 md:w-5 mr-2" />
              WhatsApp Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SinglePage;