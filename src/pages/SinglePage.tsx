import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { LocationMap } from "@/components/contact/LocationMap";
import { AppointmentForm } from "@/components/contact/AppointmentForm";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Heart, 
  Stethoscope, 
  Clock, 
  MapPin, 
  Phone, 
  Star,
  Baby,
  Sparkles,
  Activity,
  Zap,
  Users,
  Calendar
} from "lucide-react";

export default function SinglePage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Navigation />
      
      {/* Home Section */}
      <section id="home" className="pt-16">
        <div className="medical-container py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-6 py-3 bg-orange-500 text-white rounded-lg text-sm font-bold shadow-lg">
                ⭐ {t('freeConsultation')}
              </div>
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  {t('welcomeTitle')}
                </h1>
                <p className="text-xl text-primary font-semibold mb-4">
                  {t('welcomeSubtitle')}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t('heroDescription')}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => {
                    const element = document.getElementById('appointment');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  {t('bookAppointment')}
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => window.open("tel:+917387053508", "_blank")}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  {t('callNow')}
                </Button>
              </div>
            </div>
            
            <div className="lg:text-right">
              <div className="bg-white rounded-2xl shadow-2xl p-8 inline-block">
                <div className="w-64 h-64 bg-gradient-to-br from-primary/20 to-blue-100 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <Stethoscope className="h-20 w-20 text-primary mx-auto mb-4" />
                    <p className="text-sm text-gray-600">Dr. Ujwala Gavhane</p>
                    <p className="text-xs text-gray-500">BHMS Specialist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="medical-container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {t('aboutTitle')}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('aboutDescription')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Expert Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Personalized homeopathic treatments with years of experience in holistic healing.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Patient-Centered</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Every treatment plan is tailored to your individual health needs and lifestyle.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Proven Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Successful treatment outcomes with gentle, natural healing methods.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="medical-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {t('servicesTitle')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive homeopathic care for all ages with specialized treatments for various conditions.
            </p>
          </div>

          <Tabs defaultValue="child" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="child">{t('childTreatment')}</TabsTrigger>
              <TabsTrigger value="skin">{t('skinTreatment')}</TabsTrigger>
              <TabsTrigger value="general">{t('generalTreatment')}</TabsTrigger>
              <TabsTrigger value="piles">{t('pilesTreatment')}</TabsTrigger>
              <TabsTrigger value="gynaec">{t('gynaecTreatment')}</TabsTrigger>
            </TabsList>

            <TabsContent value="child" className="mt-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Baby className="h-8 w-8 text-primary" />
                    <div>
                      <CardTitle>Child Treatment</CardTitle>
                      <CardDescription>Gentle care for growing minds and bodies</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Conditions Treated:</h4>
                      <ul className="text-sm space-y-1 text-gray-600">
                        <li>• Recurring colds and infections</li>
                        <li>• Digestive issues</li>
                        <li>• Behavioral concerns</li>
                        <li>• Sleep disorders</li>
                        <li>• Allergies and skin conditions</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Our Approach:</h4>
                      <ul className="text-sm space-y-1 text-gray-600">
                        <li>• Safe, natural remedies</li>
                        <li>• Constitutional treatment</li>
                        <li>• Immunity building</li>
                        <li>• Holistic development support</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="skin" className="mt-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-8 w-8 text-primary" />
                    <div>
                      <CardTitle>Skin Treatment</CardTitle>
                      <CardDescription>Natural healing for healthy, glowing skin</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Conditions Treated:</h4>
                      <ul className="text-sm space-y-1 text-gray-600">
                        <li>• Eczema and dermatitis</li>
                        <li>• Psoriasis</li>
                        <li>• Acne and pimples</li>
                        <li>• Fungal infections</li>
                        <li>• Chronic skin allergies</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Treatment Duration:</h4>
                      <p className="text-sm text-gray-600 mb-3">3-6 months for chronic conditions</p>
                      <h4 className="font-semibold mb-2">Benefits:</h4>
                      <ul className="text-sm space-y-1 text-gray-600">
                        <li>• No side effects</li>
                        <li>• Long-lasting results</li>
                        <li>• Addresses root cause</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Add other service tabs similarly... */}
          </Tabs>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="medical-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {t('contactTitle')}
            </h2>
            <p className="text-lg text-gray-600">{t('getInTouch')}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
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
      <section id="appointment" className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="medical-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Book Your {t('appointment')}
            </h2>
            <p className="text-lg text-gray-600">
              Schedule your consultation with Dr. Ujwala Gavhane
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <AppointmentForm />
          </div>
        </div>
      </section>
    </div>
  );
}