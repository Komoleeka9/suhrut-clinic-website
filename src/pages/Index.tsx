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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { name: "Child Treatments", desc: "Specialized care for children's health with gentle homeopathic remedies" },
              { name: "Skin Treatments", desc: "Natural healing for eczema, psoriasis, acne and other skin conditions" },
              { name: "General Care", desc: "Complete family healthcare for fever, headaches, and common ailments" },
              { name: "Piles Treatment", desc: "Effective non-surgical treatment for hemorrhoids and related issues" },
              { name: "Gynaec Problems", desc: "Women's health care for menstrual, hormonal, and reproductive issues" }
            ].map((service, index) => (
              <Card key={index} className="medical-card">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 bg-accent rounded-full mr-3"></div>
                    <h3 className="font-semibold text-lg">{service.name}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/services">
              <Button size="lg" variant="outline">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="medical-section">
        <div className="medical-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Shushrut Clinic?</h2>
            <p className="text-xl text-gray-600">Experience the difference of personalized homeopathic care</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Star,
                title: "Expert Care",
                desc: "Dr. Ujwala Gavhane (B.H.M.S) with years of clinical experience"
              },
              {
                icon: Clock,
                title: "Flexible Hours",
                desc: "Morning and evening consultations to fit your schedule"
              },
              {
                icon: MessageCircle,
                title: "WhatsApp Support", 
                desc: "Quick consultation and follow-up support via WhatsApp"
              },
              {
                icon: Phone,
                title: "Emergency Care",
                desc: "Available for urgent medical consultations when needed"
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
      </div>

      {/* Testimonials */}
      <div className="bg-white medical-section">
        <div className="medical-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Patients Say</h2>
            <p className="text-xl text-gray-600">Real experiences from our valued patients</p>
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
