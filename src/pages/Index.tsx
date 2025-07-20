import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Phone, MessageCircle, MapPin, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <div className="medical-gradient text-white py-20">
        <div className="medical-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Shushrut Clinic
              </h1>
              <h2 className="text-2xl md:text-3xl text-blue-100 mb-4">
                Dr. Ujwala Gavhane
              </h2>
              <p className="text-lg text-blue-100 mb-6">
                (B.H.M.S) Homeopathic & General Physician
              </p>
              <p className="text-xl mb-8">
                Professional homeopathic and general medical care with over years of experience in treating various conditions naturally and effectively.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/appointment">
                  <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                    <Calendar className="h-5 w-5 mr-2" />
                    Book Appointment
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-primary"
                  onClick={() => window.open("https://wa.me/917387053508", "_blank")}
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  WhatsApp Us
                </Button>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 text-white px-6 py-3 rounded-full inline-block mb-6 transform rotate-12">
                <span className="font-bold">FREE FIRST CONSULTATION</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Contact Section */}
      <div className="medical-section">
        <div className="medical-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="medical-card text-center">
              <CardContent className="pt-6">
                <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-sm text-gray-600 mb-3">+91-8888547482</p>
                <p className="text-sm text-gray-600">+91-7387053508</p>
              </CardContent>
            </Card>
            
            <Card className="medical-card text-center">
              <CardContent className="pt-6">
                <MessageCircle className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <p className="text-sm text-gray-600 mb-3">Quick consultation</p>
                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                  Message Now
                </Button>
              </CardContent>
            </Card>
            
            <Card className="medical-card text-center">
              <CardContent className="pt-6">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-sm text-gray-600">Near Smita Patil School</p>
                <p className="text-sm text-gray-600">Warje, Pune</p>
              </CardContent>
            </Card>
            
            <Card className="medical-card text-center">
              <CardContent className="pt-6">
                <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Clinic Hours</h3>
                <p className="text-sm text-gray-600">Mon-Fri: 10:30-1:30</p>
                <p className="text-sm text-gray-600">6:00-9:00 PM</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white medical-section">
        <div className="medical-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Facilities</h2>
            <p className="text-xl text-gray-600">Comprehensive medical care for all your health needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Child Treatments",
              "Skin Treatments", 
              "General Care",
              "Piles",
              "Gynaec Problems"
            ].map((service, index) => (
              <Card key={index} className="medical-card">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 bg-accent rounded-full mr-3"></div>
                    <h3 className="font-semibold text-lg">{service}</h3>
                  </div>
                  <p className="text-gray-600">
                    Professional homeopathic treatment with personalized care and attention.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="medical-gradient text-white medical-section">
        <div className="medical-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Healing Journey?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Book your consultation today and experience natural, effective healthcare
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/appointment">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Calendar className="h-5 w-5 mr-2" />
                Book Appointment Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <Phone className="h-5 w-5 mr-2" />
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
