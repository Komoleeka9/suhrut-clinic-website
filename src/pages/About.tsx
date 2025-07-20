import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Award, 
  Heart, 
  Users, 
  Clock, 
  Star,
  Stethoscope,
  BookOpen,
  MessageCircle,
  Calendar
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <div className="medical-gradient text-white py-20">
        <div className="medical-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About Dr. Ujwala Gavhane
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                Dedicated to providing compassionate homeopathic and general medical care
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <Badge className="bg-white text-primary text-sm px-3 py-1">
                  B.H.M.S Qualified
                </Badge>
                <Badge className="bg-white text-primary text-sm px-3 py-1">
                  Homeopathic Specialist
                </Badge>
                <Badge className="bg-white text-primary text-sm px-3 py-1">
                  General Physician
                </Badge>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
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
                  WhatsApp
                </Button>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Stethoscope className="h-16 w-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Dr. Ujwala Gavhane</h3>
                <p className="text-blue-100 text-lg">B.H.M.S</p>
                <p className="text-blue-100">Homeopathic & General Physician</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Doctor's Qualifications & Experience */}
      <div className="medical-section">
        <div className="medical-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="medical-card text-center">
              <CardContent className="pt-8">
                <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Education</h3>
                <p className="text-gray-600 mb-3">Bachelor of Homeopathic Medicine and Surgery (B.H.M.S)</p>
                <p className="text-sm text-gray-500">Recognized by Central Council of Homeopathy</p>
              </CardContent>
            </Card>

            <Card className="medical-card text-center">
              <CardContent className="pt-8">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Specialization</h3>
                <p className="text-gray-600 mb-3">Homeopathic Medicine & General Practice</p>
                <p className="text-sm text-gray-500">Expert in natural healing and holistic treatment</p>
              </CardContent>
            </Card>

            <Card className="medical-card text-center">
              <CardContent className="pt-8">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Experience</h3>
                <p className="text-gray-600 mb-3">Years of Clinical Practice</p>
                <p className="text-sm text-gray-500">Treating patients of all age groups</p>
              </CardContent>
            </Card>
          </div>

          {/* About Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Medical Philosophy</h2>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg leading-relaxed">
                  At Shushrut Clinic, we believe in the power of natural healing and personalized care. 
                  Dr. Ujwala Gavhane combines traditional homeopathic wisdom with modern medical 
                  knowledge to provide comprehensive healthcare solutions.
                </p>
                <p>
                  Our approach focuses on treating the whole person, not just the symptoms. We take 
                  time to understand each patient's unique constitution, lifestyle, and health goals 
                  to create customized treatment plans that promote long-term wellness.
                </p>
                <p>
                  With a B.H.M.S degree and extensive clinical experience, Dr. Gavhane specializes 
                  in treating a wide range of conditions using safe, effective homeopathic remedies 
                  alongside conventional medical care when needed.
                </p>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Heart className="h-5 w-5 text-red-500 mr-2" />
                  Our Commitment to You
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-2" />
                    Personalized treatment plans for every patient
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-2" />
                    Safe, natural healing methods without side effects
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-2" />
                    Comprehensive care for acute and chronic conditions
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-2" />
                    Patient education and lifestyle counseling
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              {/* Why Choose Homeopathy */}
              <Card className="medical-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-6 w-6 text-primary" />
                    Why Choose Homeopathy?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold">Natural & Safe</h4>
                        <p className="text-sm text-gray-600">No harmful side effects, suitable for all ages</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold">Holistic Approach</h4>
                        <p className="text-sm text-gray-600">Treats the root cause, not just symptoms</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold">Individualized Treatment</h4>
                        <p className="text-sm text-gray-600">Customized remedies for each patient</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold">Long-term Results</h4>
                        <p className="text-sm text-gray-600">Builds immunity and prevents recurrence</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Clinic Features */}
              <Card className="medical-card">
                <CardHeader>
                  <CardTitle>Clinic Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-sm">Flexible appointment timings</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">WhatsApp consultation available</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart className="h-4 w-4 text-red-500" />
                      <span className="text-sm">Emergency consultation support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-sm">Family healthcare plans</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Free Consultation Banner */}
              <Card className="medical-card bg-gradient-to-r from-orange-100 to-orange-50 border-orange-200">
                <CardContent className="pt-6 text-center">
                  <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full mb-4">
                    <span className="font-bold">FREE FIRST CONSULTATION</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Experience our personalized homeopathic care with a complimentary initial consultation
                  </p>
                  <Link to="/appointment">
                    <Button className="bg-orange-500 hover:bg-orange-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Free Consultation
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Patient Testimonials */}
      <div className="bg-white medical-section">
        <div className="medical-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Patients Say</h2>
            <p className="text-xl text-gray-600">Real experiences from our valued patients</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                condition: "Skin Treatment",
                testimonial: "Dr. Gavhane's homeopathic treatment completely cured my chronic skin condition. Her approach is gentle yet very effective.",
                rating: 5
              },
              {
                name: "Rajesh Patil",
                condition: "General Care",
                testimonial: "Excellent care and personal attention. The doctor takes time to understand the problem and provides the best treatment.",
                rating: 5
              },
              {
                name: "Sunita Desai",
                condition: "Child Treatment",
                testimonial: "My child's recurring health issues were resolved completely with Dr. Gavhane's treatment. Highly recommended!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="medical-card">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.testimonial}"</p>
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
            Ready to Experience Natural Healing?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Schedule your consultation with Dr. Ujwala Gavhane today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/appointment">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Calendar className="h-5 w-5 mr-2" />
                Book Appointment
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

export default About;