import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import quoteBackground from "@/assets/quote-background.jpg";

const Quote = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serviceType: "",
    eventDate: "",
    location: "",
    notes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.serviceType) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Quote request submitted:", formData);
    
    toast({
      title: "Quote Request Submitted!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      serviceType: "",
      eventDate: "",
      location: "",
      notes: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div 
      className="min-h-screen pt-24 pb-16 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${quoteBackground})` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Get Your Quote
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Ready to capture stunning aerial footage? Tell us about your project and we'll provide 
            a detailed quote tailored to your specific needs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Quote Form */}
          <div className="md:col-span-2">
            <Card className="bg-background/95 backdrop-blur-sm shadow-strong border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Project Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="serviceType">Service Type *</Label>
                    <Select onValueChange={(value) => handleInputChange("serviceType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="signature-hole">Signature Hole Flyover ($250)</SelectItem>
                        <SelectItem value="full-course">Full Course Package ($2,000)</SelectItem>
                        <SelectItem value="guy-trip">Guy Trip Highlights ($800)</SelectItem>
                        <SelectItem value="raw-footage">Raw Drone Footage Only ($300)</SelectItem>
                        <SelectItem value="custom">Custom Request</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="eventDate">Date of Event</Label>
                      <Input
                        id="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => handleInputChange("eventDate", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Golf Course / Location *</Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => handleInputChange("location", e.target.value)}
                        placeholder="Course name and city"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes or Special Requests</Label>
                    <Textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => handleInputChange("notes", e.target.value)}
                      placeholder="Tell us more about your vision, specific shots you want, or any special requirements..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Submit Quote Request
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    * Required fields. We'll get back to you within 24 hours.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-background/95 backdrop-blur-sm shadow-strong border-border/50">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">info@firstcutdrones.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-sm text-muted-foreground">(555) 123-4567</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-hero text-white border-primary-light/20 shadow-strong">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Why Choose First Cut Drones?</h3>
                <ul className="space-y-2 text-sm text-white/90">
                  <li>• Professional licensed drone operators</li>
                  <li>• 4K cinematic quality footage</li>
                  <li>• Fast turnaround times</li>
                  <li>• Fully insured operations</li>
                  <li>• Custom editing and music</li>
                  <li>• Golf course specialists</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;