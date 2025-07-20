import { AppointmentForm } from "@/components/contact/AppointmentForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { Calendar, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AppointmentBooking = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header Section */}
      <div className="medical-gradient text-white py-16">
        <div className="medical-container">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Book Your Appointment
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Schedule a consultation with Dr. Ujwala Gavhane for professional homeopathic care
            </p>
          </div>
        </div>
      </div>

      {/* Quick Info Cards */}
      <div className="medical-section">
        <div className="medical-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="medical-card text-center">
              <CardContent className="pt-6">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Easy Scheduling</h3>
                <p className="text-sm text-gray-600">
                  Book appointments for your preferred date and time
                </p>
              </CardContent>
            </Card>
            
            <Card className="medical-card text-center">
              <CardContent className="pt-6">
                <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Quick Confirmation</h3>
                <p className="text-sm text-gray-600">
                  Get appointment confirmation within 24 hours
                </p>
              </CardContent>
            </Card>
            
            <Card className="medical-card text-center">
              <CardContent className="pt-6">
                <CheckCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Professional Care</h3>
                <p className="text-sm text-gray-600">
                  Expert homeopathic and general medical treatment
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <AppointmentForm />
            </div>
            
            <div className="space-y-6">
              <ContactInfo />
              
              {/* Appointment Guidelines */}
              <Card className="medical-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-amber-600" />
                    Appointment Guidelines
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm space-y-2">
                    <p>• Please arrive 15 minutes early for your appointment</p>
                    <p>• Bring any previous medical reports and current medications</p>
                    <p>• For skin conditions, avoid applying creams before visit</p>
                    <p>• Emergency cases will be prioritized</p>
                    <p>• Appointment confirmation will be sent via WhatsApp</p>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Information */}
              <Card className="medical-card">
                <CardHeader>
                  <CardTitle>Payment Methods</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm space-y-2">
                    <p>✓ Cash payments accepted</p>
                    <p>✓ UPI/Digital payments</p>
                    <p>✓ Insurance consultation available</p>
                    <p className="text-xs text-gray-600 mt-3">
                      Please discuss insurance coverage during appointment booking
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBooking;