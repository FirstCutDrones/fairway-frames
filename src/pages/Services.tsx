import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Video, Users, HardDrive, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

// Service images
import serviceDrone from "@/assets/service-drone.jpg";
import serviceCourse from "@/assets/service-course.jpg";
import serviceGroup from "@/assets/service-group.jpg";
import serviceRaw from "@/assets/service-raw.jpg";

const Services = () => {
  const services = [
    {
      title: "Signature Hole Flyover",
      description: "A cinematic drone flyover of a specific golf hole, perfect for course websites and social media. Professional editing with music and graphics included.",
      price: "$250",
      icon: Camera,
      image: serviceDrone,
    },
    {
      title: "Full Course Package",
      description: "Hole-by-hole aerial walkthroughs with professional editing, music, graphics, and optional narration. Complete course showcase for marketing and events.",
      price: "$2,000",
      icon: Video,
      image: serviceCourse,
    },
    {
      title: "Guy Trip Highlights",
      description: "Capture your group's golf vacation from the sky with custom edits, music, and memorable moments. Perfect for preserving those special golf getaways.",
      price: "$800",
      icon: Users,
      image: serviceGroup,
    },
    {
      title: "Raw Drone Footage Only",
      description: "Just the unedited 4K aerial clips, delivered digitally. Perfect for clients who prefer to handle their own editing and post-production.",
      price: "$300",
      icon: HardDrive,
      image: serviceRaw,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional drone videography services tailored for golf courses, events, and experiences. 
            Choose from our packages or let us create something custom for your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              price={service.price}
              icon={service.icon}
              image={service.image}
            />
          ))}
        </div>

        {/* Custom Requests */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-gradient-hero text-white border-primary-light/20 shadow-strong">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto bg-gradient-premium p-4 rounded-xl shadow-glow w-fit">
                <Sparkles className="h-8 w-8 text-accent-foreground" />
              </div>
              <CardTitle className="text-2xl font-bold mt-4">Custom Requests</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-white/90 leading-relaxed mb-6 text-lg">
                Need something special? We can tailor packages to your specific needs. From tournament coverage 
                to corporate events, golf course grand openings to promotional content - we'll work with you 
                to create the perfect aerial experience.
              </p>
              <Button asChild variant="premium" size="lg">
                <Link to="/quote">Discuss Custom Project</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Process Section */}
        <div className="bg-gradient-subtle p-12 rounded-2xl shadow-medium mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Our Process
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-premium p-4 rounded-xl shadow-medium w-fit mx-auto mb-4">
                <span className="text-2xl font-bold text-accent-foreground">1</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Consultation</h3>
              <p className="text-muted-foreground">We discuss your vision, location, and specific requirements.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-premium p-4 rounded-xl shadow-medium w-fit mx-auto mb-4">
                <span className="text-2xl font-bold text-accent-foreground">2</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Capture</h3>
              <p className="text-muted-foreground">Professional drone operation with 4K recording and multiple angles.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-premium p-4 rounded-xl shadow-medium w-fit mx-auto mb-4">
                <span className="text-2xl font-bold text-accent-foreground">3</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Deliver</h3>
              <p className="text-muted-foreground">Edited content delivered within 5-7 business days.</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">What equipment do you use?</h3>
                <p className="text-muted-foreground">We use professional-grade drones capable of 4K video recording, with stabilized gimbals and high-quality lenses for cinematic results.</p>
              </CardContent>
            </Card>
            
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">How long does editing take?</h3>
                <p className="text-muted-foreground">Most projects are delivered within 5-7 business days. Rush orders can be accommodated for an additional fee.</p>
              </CardContent>
            </Card>
            
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Do you have insurance and licenses?</h3>
                <p className="text-muted-foreground">Yes, we are fully licensed and insured for commercial drone operations. We handle all permits and regulatory compliance.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project and receive a detailed quote. 
            We'll work with you to create stunning aerial content that exceeds your expectations.
          </p>
          <Button asChild variant="hero" size="lg" className="text-lg px-8 py-4 h-auto">
            <Link to="/quote">Request Your Quote</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;