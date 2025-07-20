import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LocationMap() {
  const openGoogleMaps = () => {
    const address = "Shushrut Clinic Near Smita Patil School Yashodeep Chowk Warje Pune 411058";
    window.open(`https://maps.google.com/?q=${encodeURIComponent(address)}`, "_blank");
  };

  const openDirections = () => {
    const address = "Shushrut Clinic Near Smita Patil School Yashodeep Chowk Warje Pune 411058";
    window.open(`https://maps.google.com/dir/?api=1&destination=${encodeURIComponent(address)}`, "_blank");
  };

  return (
    <Card className="medical-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-6 w-6 text-primary" />
          Find Us
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Embedded Map Placeholder */}
        <div className="aspect-video bg-gray-100 rounded-lg mb-4 relative overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.4!2d73.8067!3d18.4986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDI5JzU1LjAiTiA3M8KwNDgnMjQuMSJF!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Shushrut Clinic Location"
          ></iframe>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Button onClick={openGoogleMaps} variant="outline" className="w-full">
            <MapPin className="h-4 w-4 mr-2" />
            View on Map
          </Button>
          <Button onClick={openDirections} className="w-full">
            <Navigation className="h-4 w-4 mr-2" />
            Get Directions
          </Button>
        </div>
        
        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
          <h4 className="font-semibold text-sm mb-2">Landmarks for Easy Navigation:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Near Smita Patil School</li>
            <li>• Yashodeep Chowk area</li>
            <li>• Warje, Pune</li>
            <li>• Easily accessible by local transport</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}