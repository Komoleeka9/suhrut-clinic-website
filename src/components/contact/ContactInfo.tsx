import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export function ContactInfo() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/917387053508", "_blank");
  };

  const handlePhoneClick = (number: string) => {
    window.open(`tel:${number}`, "_blank");
  };

  const handleEmailClick = () => {
    window.open("mailto:umgavhane@gmail.com", "_blank");
  };

  return (
    <div className="space-y-6">
      {/* Quick Contact */}
      <Card className="medical-card">
        <CardHeader>
          <CardTitle className="text-xl">Quick Contact</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button 
            onClick={handleWhatsAppClick}
            className="w-full bg-green-600 hover:bg-green-700 text-white"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            WhatsApp Us: +91-7387053508
          </Button>
          
          <div className="grid grid-cols-1 gap-2">
            <Button 
              variant="outline" 
              onClick={() => handlePhoneClick("+918888547482")}
              className="w-full justify-start"
            >
              <Phone className="h-4 w-4 mr-2" />
              +91-8888547482
            </Button>
            <Button 
              variant="outline" 
              onClick={() => handlePhoneClick("+917387053508")}
              className="w-full justify-start"
            >
              <Phone className="h-4 w-4 mr-2" />
              +91-7387053508
            </Button>
          </div>
          
          <Button 
            variant="outline" 
            onClick={handleEmailClick}
            className="w-full justify-start"
          >
            <Mail className="h-4 w-4 mr-2" />
            umgavhane@gmail.com
          </Button>
        </CardContent>
      </Card>

      {/* Clinic Hours */}
      <Card className="medical-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            Clinic Hours
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">Monday - Friday</span>
              <span>10:30 AM - 1:30 PM</span>
            </div>
            <div className="flex justify-between">
              <span></span>
              <span>6:00 PM - 9:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Saturday</span>
              <span>10:30 AM - 1:30 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Sunday</span>
              <span className="text-red-600">Closed</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Address */}
      <Card className="medical-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            Clinic Address
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed">
            Shushrut Clinic<br />
            Near Smita Patil School<br />
            Yashodeep Chowk, Warje<br />
            Pune - 411058<br />
            Maharashtra, India
          </p>
          <Button 
            variant="outline" 
            className="w-full mt-4"
            onClick={() => window.open("https://maps.google.com/?q=Shushrut+Clinic+Near+Smita+Patil+School+Yashodeep+Chowk+Warje+Pune+411058", "_blank")}
          >
            <MapPin className="h-4 w-4 mr-2" />
            View on Google Maps
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}