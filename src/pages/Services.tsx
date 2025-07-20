import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Baby, 
  Sparkles, 
  Heart,
  Pill, 
  User, 
  Calendar,
  MessageCircle,
  Clock,
  CheckCircle,
  Stethoscope,
  Shield,
  Star,
  Users,
  Target,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      id: "child",
      icon: Baby,
      title: "Child Treatments",
      description: "Specialized homeopathic care for children's health issues",
      details: [
        "Recurring cold and cough",
        "Digestive disorders",
        "Behavioral problems",
        "Growth and development issues",
        "Allergies and skin conditions",
        "Sleep disorders",
        "Immune system strengthening"
      ],
      approach: "Gentle, safe remedies specifically designed for children's delicate systems. We focus on building natural immunity and addressing root causes without harmful side effects.",
      duration: "Treatment varies from 2-6 months depending on the condition"
    },
    {
      id: "skin",
      icon: Sparkles,
      title: "Skin Treatments",
      description: "Comprehensive treatment for various skin conditions",
      details: [
        "Eczema and dermatitis",
        "Psoriasis",
        "Acne and pimples",
        "Allergic reactions",
        "Fungal infections",
        "Hair loss and dandruff",
        "Chronic skin conditions"
      ],
      approach: "Holistic skin treatment that addresses internal imbalances causing external symptoms. We focus on long-term healing rather than temporary relief.",
      duration: "Improvement visible in 4-8 weeks, complete treatment 3-8 months"
    },
    {
      id: "general",
      icon: Stethoscope,
      title: "General Care",
      description: "Complete family healthcare and preventive medicine",
      details: [
        "Fever and infections",
        "Headaches and migraines",
        "Digestive problems",
        "Respiratory conditions",
        "Joint and muscle pain",
        "Stress and anxiety",
        "Preventive healthcare"
      ],
      approach: "Comprehensive healthcare focusing on prevention and treating common ailments naturally. We provide family-centered care for all age groups.",
      duration: "Acute conditions: 1-2 weeks, Chronic conditions: 2-6 months"
    },
    {
      id: "piles",
      icon: Target,
      title: "Piles Treatment",
      description: "Effective homeopathic treatment for hemorrhoids and piles",
      details: [
        "Internal and external piles",
        "Bleeding hemorrhoids",
        "Anal fissures",
        "Rectal pain and itching",
        "Chronic constipation",
        "Post-surgical care",
        "Prevention of recurrence"
      ],
      approach: "Non-surgical treatment approach that provides long-lasting relief. Our remedies address both symptoms and underlying causes to prevent recurrence.",
      duration: "Relief in 2-4 weeks, complete healing in 2-4 months"
    },
    {
      id: "gynaec",
      icon: User,
      title: "Gynaec Problems",
      description: "Women's health and gynecological conditions",
      details: [
        "Menstrual irregularities",
        "PCOD/PCOS",
        "Infertility issues",
        "Menopausal symptoms",
        "Recurrent UTIs",
        "Leucorrhea",
        "Pregnancy care support"
      ],
      approach: "Gentle, hormone-balancing treatment for women's health issues. We provide comprehensive care throughout different life stages with natural remedies.",
      duration: "Menstrual issues: 3-6 months, Chronic conditions: 6-12 months"
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Safe & Natural",
      description: "No side effects, suitable for all age groups including pregnant women and children"
    },
    {
      icon: Users,
      title: "Experienced Doctor",
      description: "Dr. Ujwala Gavhane with B.H.M.S qualification and years of clinical experience"
    },
    {
      icon: Target,
      title: "Root Cause Treatment",
      description: "We treat the underlying cause, not just the symptoms for lasting relief"
    },
    {
      icon: Award,
      title: "Personalized Care",
      description: "Individualized treatment plans based on each patient's unique constitution"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <div className="medical-gradient text-white py-20">
        <div className="medical-container">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Medical Services
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Comprehensive homeopathic and general medical care for all your health needs. 
              We specialize in natural healing methods that are safe, effective, and without side effects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/appointment">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Consultation
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary"
                onClick={() => window.open("https://wa.me/917387053508", "_blank")}
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp Inquiry
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="medical-section">
        <div className="medical-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="medical-card hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.details.slice(0, 3).map((detail, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                    <p className="text-xs text-gray-500 mt-2">+ {service.details.length - 3} more conditions</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Detailed Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Detailed Service Information</h2>
            <Tabs defaultValue="child" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-8">
                {services.map((service) => (
                  <TabsTrigger key={service.id} value={service.id} className="text-xs sm:text-sm">
                    <service.icon className="h-4 w-4 mr-2" />
                    <span className="hidden sm:inline">{service.title}</span>
                    <span className="sm:hidden">{service.title.split(' ')[0]}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {services.map((service) => (
                <TabsContent key={service.id} value={service.id}>
                  <Card className="medical-card">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-2xl">
                        <service.icon className="h-8 w-8 text-primary" />
                        {service.title}
                      </CardTitle>
                      <p className="text-gray-600 text-lg">{service.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Conditions We Treat:</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {service.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                              <span className="text-sm">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-semibold mb-2 flex items-center">
                            <Heart className="h-5 w-5 text-primary mr-2" />
                            Our Approach
                          </h4>
                          <p className="text-sm text-gray-700">{service.approach}</p>
                        </div>

                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-semibold mb-2 flex items-center">
                            <Clock className="h-5 w-5 text-green-600 mr-2" />
                            Treatment Duration
                          </h4>
                          <p className="text-sm text-gray-700">{service.duration}</p>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link to="/appointment" className="flex-1">
                          <Button className="w-full">
                            <Calendar className="h-4 w-4 mr-2" />
                            Book Consultation
                          </Button>
                        </Link>
                        <Button 
                          variant="outline" 
                          className="flex-1"
                          onClick={() => window.open(`https://wa.me/917387053508?text=I need consultation for ${service.title}. Please provide more information.`, "_blank")}
                        >
                          <MessageCircle className="h-4 w-4 mr-2" />
                          WhatsApp Inquiry
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white medical-section">
        <div className="medical-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Shushrut Clinic?</h2>
            <p className="text-xl text-gray-600">Experience the difference of personalized homeopathic care</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {whyChooseUs.map((feature, index) => (
              <Card key={index} className="medical-card text-center">
                <CardContent className="pt-8">
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Treatment Process */}
          <Card className="medical-card">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Our Treatment Process</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Initial Consultation</h3>
                  <p className="text-sm text-gray-600">Detailed case taking and symptom analysis</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Diagnosis</h3>
                  <p className="text-sm text-gray-600">Constitutional analysis and remedy selection</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">Treatment</h3>
                  <p className="text-sm text-gray-600">Personalized homeopathic medicine prescription</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">4</span>
                  </div>
                  <h3 className="font-semibold mb-2">Follow-up</h3>
                  <p className="text-sm text-gray-600">Regular monitoring and treatment adjustment</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Pricing & Packages */}
      <div className="medical-section">
        <div className="medical-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Consultation Packages</h2>
            <p className="text-xl text-gray-600">Affordable healthcare for everyone</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="medical-card relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-orange-500 text-white px-4 py-1">FREE</Badge>
              </div>
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-xl">First Consultation</CardTitle>
                <div className="text-3xl font-bold text-primary">₹0</div>
                <p className="text-sm text-gray-600">Initial assessment session</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Detailed case taking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Initial remedy selection
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Health counseling
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="medical-card">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Follow-up Consultation</CardTitle>
                <div className="text-3xl font-bold text-primary">₹200</div>
                <p className="text-sm text-gray-600">Regular monitoring visits</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Progress assessment
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Treatment adjustment
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Lifestyle guidance
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="medical-card">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Emergency Consultation</CardTitle>
                <div className="text-3xl font-bold text-primary">₹300</div>
                <p className="text-sm text-gray-600">Urgent medical attention</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Immediate consultation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Quick relief remedies
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    24/7 WhatsApp support
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="medical-gradient text-white medical-section">
        <div className="medical-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your Healing Journey Today
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Experience safe, natural, and effective homeopathic treatment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/appointment">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Calendar className="h-5 w-5 mr-2" />
                Book Free Consultation
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;