import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Camera, 
  MapPin, 
  Clock, 
  ArrowRight,
  Star,
  Mountain,
  Users,
  Settings
} from "lucide-react";
import { trackButtonClick } from "@/lib/analytics";

const Blog = () => {
  const featuredPosts = [
    {
      id: "signature-holes-arizona",
      title: "Top 5 Signature Holes in Arizona",
      excerpt: "Discover the most breathtaking golf holes in Arizona that deserve aerial documentation. From desert landscapes to mountain vistas.",
      category: "Golf Destinations",
      readTime: "8 min read",
      image: "/api/placeholder/600/400",
      featured: true,
      tags: ["Arizona", "Golf Courses", "Signature Holes"]
    },
    {
      id: "hiring-drone-operator",
      title: "What to Know Before Hiring a Golf Drone Operator",
      excerpt: "Essential questions to ask and what to expect when commissioning aerial golf videography for your course or event.",
      category: "Golf Business",
      readTime: "6 min read",
      image: "/api/placeholder/600/400",
      featured: true,
      tags: ["Business", "Drone Services", "Golf Marketing"]
    },
    {
      id: "behind-the-scenes-flyover",
      title: "Behind the Scenes: How We Film a Signature Hole Flyover",
      excerpt: "Take a look at our process from planning to post-production for creating cinematic golf course flyovers.",
      category: "Behind the Scenes",
      readTime: "5 min read",
      image: "/api/placeholder/600/400",
      featured: true,
      tags: ["Behind the Scenes", "Video Production", "Drone Filming"]
    }
  ];

  const blogPosts = [
    {
      id: "planning-drone-golf-trip",
      title: "Tips for Planning a Drone-Covered Golf Trip",
      excerpt: "Make your next golf vacation unforgettable with professional aerial documentation. Planning tips and best practices.",
      category: "Golf Travel",
      readTime: "7 min read",
      image: "/api/placeholder/400/300",
      tags: ["Golf Travel", "Trip Planning", "Aerial Video"]
    },
    {
      id: "golf-course-marketing-video",
      title: "How Aerial Video Transforms Golf Course Marketing",
      excerpt: "Case studies showing the impact of professional drone footage on course bookings and social media engagement.",
      category: "Marketing",
      readTime: "9 min read",
      image: "/api/placeholder/400/300",
      tags: ["Marketing", "ROI", "Golf Business"]
    },
    {
      id: "drone-safety-golf-courses",
      title: "Drone Safety and Regulations for Golf Courses",
      excerpt: "Understanding FAA regulations and safety protocols for commercial drone operations at golf facilities.",
      category: "Safety & Regulations",
      readTime: "6 min read",
      image: "/api/placeholder/400/300",
      tags: ["Safety", "Regulations", "FAA"]
    },
    {
      id: "best-golf-holes-drone-video",
      title: "What Makes a Golf Hole Perfect for Drone Video?",
      excerpt: "Landscape features, design elements, and visual characteristics that create stunning aerial golf footage.",
      category: "Course Design",
      readTime: "5 min read",
      image: "/api/placeholder/400/300",
      tags: ["Course Design", "Cinematography", "Golf Architecture"]
    }
  ];

  const categories = [
    { name: "Golf Destinations", icon: MapPin, count: 8 },
    { name: "Behind the Scenes", icon: Camera, count: 6 },
    { name: "Golf Business", icon: Settings, count: 12 },
    { name: "Golf Travel", icon: Mountain, count: 5 },
    { name: "Marketing", icon: Users, count: 9 }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <BookOpen className="h-16 w-16 mx-auto mb-6 text-accent" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Golf & Drone <br />
              <span className="bg-gradient-premium bg-clip-text text-transparent">
                Content Hub
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              Expert insights on golf course marketing, drone videography, and creating 
              unforgettable aerial experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-gradient-subtle border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant="outline"
                className="flex items-center gap-2 h-auto py-3 px-4 hover:bg-primary/10 hover:border-primary/20"
                onClick={() => trackButtonClick(`Category: ${category.name}`, 'Categories')}
              >
                <category.icon className="h-4 w-4" />
                {category.name}
                <Badge variant="secondary" className="ml-1 text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Featured Articles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              In-depth guides and insights from our experience in golf course aerial videography.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {featuredPosts.map((post, index) => (
              <Card 
                key={post.id} 
                className="group hover:shadow-strong transition-spring cursor-pointer overflow-hidden"
                onClick={() => trackButtonClick(`Featured Post: ${post.title}`, 'Featured Articles')}
              >
                <div className="aspect-video bg-gradient-subtle relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary/90 text-primary-foreground">
                      Featured
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge variant="secondary" className="mb-2">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full justify-between group-hover:bg-primary/10 transition-colors"
                  >
                    Read Article
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Recent Articles
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card 
                key={post.id} 
                className="group hover:shadow-medium transition-spring cursor-pointer"
                onClick={() => trackButtonClick(`Blog Post: ${post.title}`, 'Recent Articles')}
              >
                <div className="aspect-[4/3] bg-gradient-subtle rounded-t-lg" />
                
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {post.tags.slice(0, 2).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full justify-between text-sm"
                  >
                    Read More
                    <ArrowRight className="h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <Star className="h-12 w-12 mx-auto mb-6 text-accent" />
            <h2 className="text-3xl font-bold mb-6">
              Stay Updated on Golf & Drone Insights
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Get the latest tips, course spotlights, and industry insights delivered 
              to your inbox monthly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button 
                asChild 
                variant="premium" 
                size="lg" 
                className="text-lg px-8 py-4 h-auto"
                onClick={() => trackButtonClick('Newsletter Signup', 'Newsletter CTA')}
              >
                <Link to="/quote">Subscribe for Updates</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;