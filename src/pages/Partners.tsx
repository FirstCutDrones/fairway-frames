import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Building2, 
  Users, 
  Trophy, 
  Camera, 
  Globe, 
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight
} from "lucide-react";
import { trackButtonClick } from "@/lib/analytics";

const Partners = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Tee Time Bookings",
      description: "Stunning aerial footage drives 40% more online bookings and social media engagement."
    },
    {
      icon: Globe,
      title: "Enhanced Digital Presence",
      description: "Professional content for websites, social media, and marketing materials."
    },
    {
      icon: Users,
      title: "Member Experience",
      description: "Create memorable experiences that increase member retention and referrals."
    },
    {
      icon: Trophy,
      title: "Competitive Advantage",
      description: "Stand out from other courses with cinematic-quality promotional content."
    }
  ];

  const packages = [
    {
      title: "Signature Hole Package",
      price: "Starting at $1,200",
      features: [
        "3-5 signature hole flyovers",
        "Professional editing & color grading",
        "4K resolution delivery",
        "Web and social media licensing",
        "Raw footage included"
      ],
      recommended: false
    },
    {
      title: "Full Course Showcase",
      price: "Starting at $3,500",
      features: [
        "All 18 holes aerial coverage",
        "Clubhouse and amenities footage",
        "Multiple delivery formats",
        "Commercial licensing rights",
        "Social media content package",
        "Behind-the-scenes content"
      ],
      recommended: true
    },
    {
      title: "Resort Partnership",
      price: "Custom Pricing",
      features: [
        "Multiple course coverage",
        "Seasonal content updates",
        "Event documentation",
        "Staff training sessions",
        "Ongoing content partnership",
        "Priority booking"
      ],
      recommended: false
    }
  ];

  const licensingRights = [
    "Website homepage and marketing pages",
    "Social media platforms (unlimited posts)",
    "Print advertising and brochures",
    "Trade show and event displays",
    "Email marketing campaigns",
    "Third-party booking platforms"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Building2 className="h-16 w-16 mx-auto mb-6 text-accent" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Golf Course <br />
              <span className="bg-gradient-premium bg-clip-text text-transparent">
                Partner Program
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              Elevate your course marketing with professional aerial videography. 
              Custom packages for golf courses, resorts, and hospitality groups.
            </p>
            <Button 
              asChild 
              variant="premium" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto"
              onClick={() => trackButtonClick('Partner Program CTA', 'Hero Section')}
            >
              <Link to="/quote">Discuss Partnership</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Why Partner With First Cut Drones?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our partnerships drive measurable results for golf courses through 
              premium aerial content that showcases your property like never before.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center group hover:shadow-strong transition-spring">
                <CardHeader className="pb-4">
                  <div className="mx-auto bg-gradient-premium p-4 rounded-xl shadow-medium group-hover:shadow-glow transition-spring w-fit">
                    <benefit.icon className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground mt-4">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Partnership Packages
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Volume discounts available for multiple courses and seasonal partnerships.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`relative ${pkg.recommended ? 'ring-2 ring-primary shadow-glow' : ''} hover:shadow-strong transition-spring`}
              >
                {pkg.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-premium text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-bold text-foreground">
                    {pkg.title}
                  </CardTitle>
                  <div className="text-2xl font-bold text-primary mt-2">
                    {pkg.price}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    asChild 
                    variant={pkg.recommended ? "premium" : "outline"} 
                    className="w-full mt-6"
                    onClick={() => trackButtonClick(`${pkg.title} Package`, 'Packages Section')}
                  >
                    <Link to="/quote" className="flex items-center justify-center gap-2">
                      Get Started
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Licensing Rights Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Camera className="h-12 w-12 mx-auto text-primary mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Commercial Licensing Rights
              </h2>
              <p className="text-lg text-muted-foreground">
                Full commercial usage rights included with all partnership packages.
              </p>
            </div>

            <Card className="bg-gradient-subtle border-border/50">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      What's Included:
                    </h3>
                    <ul className="space-y-3">
                      {licensingRights.map((right, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">
                            {right}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-background/50 rounded-lg p-6">
                    <h4 className="font-semibold text-foreground mb-3">
                      Licensing Benefits:
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• No additional usage fees</li>
                      <li>• Perpetual license for purchased content</li>
                      <li>• Multiple format delivery (4K, 1080p, mobile)</li>
                      <li>• Raw footage included</li>
                      <li>• Brand guidelines compliance</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Elevate Your Course Marketing?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss a custom partnership that showcases your golf course 
            and drives real business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              variant="premium" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto"
              onClick={() => trackButtonClick('Start Partnership', 'CTA Section')}
            >
              <Link to="/quote">Start Partnership</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto border-white/20 text-white hover:bg-white/10"
              onClick={() => trackButtonClick('View Gallery', 'CTA Section')}
            >
              <Link to="/gallery">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;