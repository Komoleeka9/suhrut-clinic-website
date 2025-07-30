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
      <section id="home" className="medical-gradient text-white py-20">
        <div className="medical-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {t('hero.title')}
              </h1>
              <h2 className="text-2xl md:text-3xl text-blue-100 mb-4">
                {t('hero.doctor')}
              </h2>
              <p className="text-lg text-blue-100 mb-6">
                {t('hero.qualification')}
              </p>
              <p className="text-xl mb-8">
                {t('hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-gray-100"
                  onClick={() => scrollToSection('appointment')}
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  {t('hero.book_appointment')}
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-primary"
                  onClick={() => window.open("https://wa.me/917387053508", "_blank")}
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  {t('hero.whatsapp_us')}
                </Button>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 text-white px-8 py-4 rounded-lg inline-block mb-6 transform rotate-0 shadow-lg">
                <span className="font-bold text-lg">{t('hero.free_consultation')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="medical-section">
        <div className="medical-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="medical-card text-center">
              <CardContent className="pt-6">
                <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">{t('contact.call_us')}</h3>
                <p className="text-sm text-gray-600 mb-3">+91-8888547482</p>
                <p className="text-sm text-gray-600">+91-7387053508</p>
              </CardContent>
            </Card>
            
            <Card className="medical-card text-center">
              <CardContent className="pt-6">
                <MessageCircle className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">{t('contact.whatsapp')}</h3>
                <p className="text-sm text-gray-600 mb-3">{t('contact.quick_consultation')}</p>
                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                  {t('contact.message_now')}
                </Button>
              </CardContent>
            </Card>
            
            <Card className="medical-card text-center">
              <CardContent className="pt-6">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">{t('contact.location')}</h3>
                <p className="text-sm text-gray-600">{t('contact.near_school')}</p>
                <p className="text-sm text-gray-600">{t('contact.warje_pune')}</p>
              </CardContent>
            </Card>
            
            <Card className="medical-card text-center">
              <CardContent className="pt-6">
                <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">{t('contact.hours')}</h3>
                <p className="text-sm text-gray-600">{t('contact.hours_weekday')}</p>
                <p className="text-sm text-gray-600">{t('contact.hours_evening')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white medical-section">
        <div className="medical-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('nav.about')}</h2>
            <p className="text-xl text-gray-600">Meet Dr. Ujwala Gavhane - Your Trusted Homeopathic Physician</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Dr. Ujwala Gavhane (B.H.M.S)</h3>
              <p className="text-gray-700 mb-6">
                Dr. Ujwala Gavhane is a qualified homeopathic physician with a Bachelor of Homeopathic Medicine and Surgery (B.H.M.S) degree. With years of clinical experience, she specializes in providing natural, safe, and effective treatments for patients of all ages.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Award className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Qualifications</h4>
                    <p className="text-gray-600">Bachelor of Homeopathic Medicine and Surgery (B.H.M.S)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Experience</h4>
                    <p className="text-gray-600">Years of clinical practice treating diverse medical conditions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Philosophy</h4>
                    <p className="text-gray-600">Holistic approach to healing mind, body, and spirit</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="medical-card">
                <CardContent className="p-6">
                  <Shield className="h-8 w-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-2">Safe & Natural Treatment</h4>
                  <p className="text-gray-600">Homeopathic medicines are natural, safe, and without side effects, suitable for all age groups including infants and pregnant women.</p>
                </CardContent>
              </Card>
              <Card className="medical-card">
                <CardContent className="p-6">
                  <Star className="h-8 w-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-2">Personalized Care</h4>
                  <p className="text-gray-600">Each patient receives individualized treatment based on their unique symptoms, constitution, and medical history.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="medical-section">
        <div className="medical-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('services.title')}</h2>
            <p className="text-xl text-gray-600">{t('services.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
              <Card key={index} className="medical-card hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <service.icon className={`h-8 w-8 ${service.color} mb-4`} />
                  <h3 className="font-semibold text-lg mb-3">{service.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
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
              onClick={() => scrollToSection('appointment')}
            >
              {t('services.view_all')}
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white medical-section">
        <div className="medical-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('choose.title')}</h2>
            <p className="text-xl text-gray-600">{t('choose.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <Card key={index} className="medical-card text-center">
                <CardContent className="pt-8">
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="medical-section">
        <div className="medical-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('testimonials.title')}</h2>
            <p className="text-xl text-gray-600">{t('testimonials.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <Card key={index} className="medical-card">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.condition}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white medical-section">
        <div className="medical-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('nav.contact')}</h2>
            <p className="text-xl text-gray-600">Get in touch with us for any queries or concerns</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <ContactInfo />
              <LocationMap />
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section id="appointment" className="medical-section">
        <div className="medical-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('nav.appointment')}</h2>
            <p className="text-xl text-gray-600">Schedule your consultation with Dr. Ujwala Gavhane</p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <AppointmentForm />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="medical-gradient text-white medical-section">
        <div className="medical-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100"
              onClick={() => scrollToSection('appointment')}
            >
              <Calendar className="h-5 w-5 mr-2" />
              {t('cta.book_now')}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={() => scrollToSection('contact')}
            >
              <Phone className="h-5 w-5 mr-2" />
              {t('cta.contact_us')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SinglePage;