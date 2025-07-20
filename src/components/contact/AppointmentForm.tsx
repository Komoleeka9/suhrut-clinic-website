import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, User, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function AppointmentForm() {
  const [appointmentData, setAppointmentData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    timeSlot: "",
    service: "",
    urgency: "",
    symptoms: "",
    notes: ""
  });
  const { toast } = useToast();

  const timeSlots = [
    "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM",
    "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM"
  ];

  const services = [
    "General Consultation",
    "Child Treatment",
    "Skin Treatment",
    "Piles Treatment",
    "Gynaec Problems",
    "Homeopathic Medicine Consultation",
    "Follow-up Appointment",
    "Emergency Consultation"
  ];

  const urgencyLevels = [
    "Routine", "Urgent", "Emergency"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message for appointment
    const whatsappMessage = `*🏥 APPOINTMENT REQUEST*\n\n👤 *Patient Details:*\nName: ${appointmentData.name}\nPhone: ${appointmentData.phone}\nEmail: ${appointmentData.email}\n\n📅 *Appointment Details:*\nPreferred Date: ${appointmentData.date}\nTime Slot: ${appointmentData.timeSlot}\nService: ${appointmentData.service}\nUrgency: ${appointmentData.urgency}\n\n🩺 *Medical Information:*\nSymptoms: ${appointmentData.symptoms}\nAdditional Notes: ${appointmentData.notes}\n\n*Please confirm appointment availability.*`;
    
    const whatsappUrl = `https://wa.me/917387053508?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Create email for appointment
    const emailSubject = `Appointment Request - ${appointmentData.name} - ${appointmentData.date}`;
    const emailBody = `APPOINTMENT REQUEST\n\nPatient Details:\nName: ${appointmentData.name}\nPhone: ${appointmentData.phone}\nEmail: ${appointmentData.email}\n\nAppointment Details:\nPreferred Date: ${appointmentData.date}\nTime Slot: ${appointmentData.timeSlot}\nService: ${appointmentData.service}\nUrgency Level: ${appointmentData.urgency}\n\nMedical Information:\nSymptoms: ${appointmentData.symptoms}\nAdditional Notes: ${appointmentData.notes}\n\nPlease confirm appointment availability and send confirmation details.`;
    
    const emailUrl = `mailto:umgavhane@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open both WhatsApp and email
    window.open(whatsappUrl, '_blank');
    window.open(emailUrl, '_blank');
    
    toast({
      title: "Appointment Request Sent!",
      description: "Your appointment request has been sent via WhatsApp and email. We'll confirm your appointment shortly.",
    });
    
    // Reset form
    setAppointmentData({
      name: "", email: "", phone: "", date: "", timeSlot: "", 
      service: "", urgency: "", symptoms: "", notes: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setAppointmentData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAppointmentData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Card className="medical-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-6 w-6 text-primary" />
          Book an Appointment
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Fill out the form below and we'll confirm your appointment via WhatsApp and email.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="font-semibold flex items-center gap-2">
              <User className="h-4 w-4" />
              Personal Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="apt-name" className="block text-sm font-medium mb-2">
                  Full Name *
                </label>
                <Input
                  id="apt-name"
                  name="name"
                  value={appointmentData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="apt-phone" className="block text-sm font-medium mb-2">
                  Phone Number *
                </label>
                <Input
                  id="apt-phone"
                  name="phone"
                  type="tel"
                  value={appointmentData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="apt-email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <Input
                id="apt-email"
                name="email"
                type="email"
                value={appointmentData.email}
                onChange={handleInputChange}
                placeholder="Enter your email (optional)"
              />
            </div>
          </div>

          {/* Appointment Details */}
          <div className="space-y-4">
            <h3 className="font-semibold flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Appointment Details
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="apt-date" className="block text-sm font-medium mb-2">
                  Preferred Date *
                </label>
                <Input
                  id="apt-date"
                  name="date"
                  type="date"
                  value={appointmentData.date}
                  onChange={handleInputChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Preferred Time *
                </label>
                <Select value={appointmentData.timeSlot} onValueChange={(value) => handleChange("timeSlot", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((slot) => (
                      <SelectItem key={slot} value={slot}>
                        <Clock className="h-4 w-4 mr-2" />
                        {slot}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Service Required *
                </label>
                <Select value={appointmentData.service} onValueChange={(value) => handleChange("service", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Urgency Level *
                </label>
                <Select value={appointmentData.urgency} onValueChange={(value) => handleChange("urgency", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select urgency" />
                  </SelectTrigger>
                  <SelectContent>
                    {urgencyLevels.map((level) => (
                      <SelectItem key={level} value={level}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Medical Information */}
          <div className="space-y-4">
            <h3 className="font-semibold flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Medical Information
            </h3>
            
            <div>
              <label htmlFor="symptoms" className="block text-sm font-medium mb-2">
                Current Symptoms or Concerns *
              </label>
              <Textarea
                id="symptoms"
                name="symptoms"
                value={appointmentData.symptoms}
                onChange={handleInputChange}
                required
                placeholder="Please describe your symptoms or health concerns..."
                rows={3}
              />
            </div>
            
            <div>
              <label htmlFor="notes" className="block text-sm font-medium mb-2">
                Additional Notes
              </label>
              <Textarea
                id="notes"
                name="notes"
                value={appointmentData.notes}
                onChange={handleInputChange}
                placeholder="Any additional information or special requests..."
                rows={2}
              />
            </div>
          </div>
          
          <Button type="submit" className="w-full" size="lg">
            <Calendar className="h-4 w-4 mr-2" />
            Request Appointment
          </Button>
          
          <div className="text-center text-sm text-muted-foreground">
            <p>📱 Request will be sent via WhatsApp: +91-7387053508</p>
            <p>📧 And email: umgavhane@gmail.com</p>
            <p className="mt-2 font-medium">We'll confirm your appointment within 24 hours.</p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}