import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { LocationMap } from "@/components/contact/LocationMap";
import { AppointmentForm } from "@/components/contact/AppointmentForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, Calendar, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header Section */}
      <div className="medical-gradient text-white py-16">
        <div className="medical-container">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contact Shushrut Clinic
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Get in touch with Dr. Ujwala Gavhane for professional homeopathic and general medical care
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="medical-section">
        <div className="medical-container">
          <Tabs defaultValue="contact" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="contact" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                <span className="hidden sm:inline">Contact Us</span>
                <span className="sm:hidden">Contact</span>
              </TabsTrigger>
              <TabsTrigger value="appointment" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span className="hidden sm:inline">Book Appointment</span>
                <span className="sm:hidden">Appointment</span>
              </TabsTrigger>
              <TabsTrigger value="location" className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span className="hidden sm:inline">Location</span>
                <span className="sm:hidden">Location</span>
              </TabsTrigger>
              <TabsTrigger value="info" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">Quick Info</span>
                <span className="sm:hidden">Info</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="contact" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <ContactForm />
                </div>
                <div>
                  <ContactInfo />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="appointment" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <AppointmentForm />
                </div>
                <div>
                  <ContactInfo />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="location">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <LocationMap />
                <div className="space-y-6">
                  <ContactInfo />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="info">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ContactInfo />
                <div className="md:col-span-2 lg:col-span-2">
                  <LocationMap />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Emergency Contact Banner */}
      <div className="bg-red-50 border-t border-red-200">
        <div className="medical-container">
          <div className="py-8 text-center">
            <h3 className="text-lg font-semibold text-red-800 mb-2">
              For Medical Emergencies
            </h3>
            <p className="text-red-600 mb-4">
              Call us immediately or visit the nearest emergency hospital
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917387053508"
                className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" />
                Emergency: +91-7387053508
              </a>
              <a
                href="https://wa.me/917387053508?text=EMERGENCY%20-%20Need%20immediate%20medical%20assistance"
                className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                WhatsApp Emergency
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;