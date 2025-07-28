import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Camera, MapPin, Video, Star, Quote } from "lucide-react";
import heroImage from "@/assets/hero-golf-course.jpg";

const Homepage = () => {
  const services = [
    {
      icon: Video,
      title: "Trip Footage",
      description: "Capture your group's golf vacation from the sky with custom edits and music."
    },
    {
      icon: Camera,
      title: "Signature Hole Flyovers",
      description: "Cinematic drone flyovers perfect for course websites and social media."
    },
    {
      icon: MapPin,
      title: "Full Course Packages",
      description: "Hole-by-hole aerial walkthroughs with professional editing and graphics."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Your Golf Game,<br />
            <span className="bg-gradient-premium bg-clip-text text-transparent">
              From a New Perspective
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
            Professional drone videography for golf courses, guy trips, and signature hole experiences.
          </p>
          
          <Button asChild variant="hero" size="lg" className="text-lg px-8 py-4 h-auto">
            <Link to="/quote">Get a Quote</Link>
          </Button>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Elevating Golf Through Aerial Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            First Cut Drones specializes in capturing the beauty and precision of golf from above. 
            Our state-of-the-art drone technology and cinematic expertise deliver stunning aerial 
            footage that showcases golf courses, memorable moments, and signature holes like never before.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            Our Services
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-strong transition-spring bg-gradient-subtle border-border/50 hover:border-primary/20 text-center">
                <CardHeader className="pb-4">
                  <div className="mx-auto bg-gradient-premium p-4 rounded-xl shadow-medium group-hover:shadow-glow transition-spring w-fit">
                    <service.icon className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground mt-4">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="premium" size="lg">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-fairway">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            What Our Clients Say
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Placeholder testimonials - to be updated later */}
            <Card className="bg-background/80 backdrop-blur-sm shadow-medium border-border/50">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-accent mb-4" />
                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  "The aerial footage of our annual golf trip was absolutely incredible. 
                  First Cut Drones captured moments we never could have imagined."
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex text-accent">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground ml-2">
                    — Golf Trip Organizer
                  </span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-background/80 backdrop-blur-sm shadow-medium border-border/50">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-accent mb-4" />
                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  "Professional, creative, and delivered exactly what we needed for our course marketing. 
                  The signature hole flyover is pure cinema."
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex text-accent">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground ml-2">
                    — Course Director
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Capture Your Golf Experience?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can create stunning aerial footage for your golf course, 
            event, or next guy trip.
          </p>
          <Button asChild variant="premium" size="lg" className="text-lg px-8 py-4 h-auto">
            <Link to="/quote">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Homepage;