import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Play, Image as ImageIcon, ExternalLink } from "lucide-react";
import { useState } from "react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Content" },
    { id: "guy-trips", name: "Guy Trip Highlights" },
    { id: "signature-holes", name: "Signature Hole Flyovers" },
    { id: "walkthroughs", name: "Hole-by-Hole Walkthroughs" }
  ];

  // Placeholder content - will be replaced with actual media
  const galleryItems = [
    {
      id: 1,
      type: "video",
      category: "guy-trips",
      title: "Pebble Beach Guy Trip 2024",
      thumbnail: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=400&h=300&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 2,
      type: "video",
      category: "signature-holes",
      title: "TPC Sawgrass 17th Hole Flyover",
      thumbnail: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=300&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 3,
      type: "image",
      category: "signature-holes",
      title: "Augusta National 12th Hole",
      thumbnail: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
      fullImage: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=800&fit=crop",
    },
    {
      id: 4,
      type: "video",
      category: "walkthroughs",
      title: "Pebble Beach Full Course Walkthrough",
      thumbnail: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=400&h=300&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 5,
      type: "image",
      category: "guy-trips",
      title: "Kiawah Island Group Shot",
      thumbnail: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=300&fit=crop",
      fullImage: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&h=800&fit=crop",
    },
    {
      id: 6,
      type: "video",
      category: "signature-holes",
      title: "Bethpage Black 4th Hole",
      thumbnail: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    }
  ];

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const [lightboxItem, setLightboxItem] = useState<any>(null);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Our Work
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of stunning aerial golf photography and videography. 
            From intimate guy trips to championship courses, see how we capture golf from above.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="transition-smooth"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredItems.map((item) => (
            <Card 
              key={item.id} 
              className="group cursor-pointer hover:shadow-strong transition-spring bg-gradient-subtle border-border/50 hover:border-primary/20 overflow-hidden"
              onClick={() => setLightboxItem(item)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={item.thumbnail} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-spring"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                  {item.type === "video" ? (
                    <Play className="h-12 w-12 text-white" />
                  ) : (
                    <ImageIcon className="h-12 w-12 text-white" />
                  )}
                </div>
                <Badge 
                  variant="secondary" 
                  className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm"
                >
                  {item.type === "video" ? "Video" : "Photo"}
                </Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-smooth">
                  {item.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-fairway p-12 rounded-2xl shadow-medium">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Inspired? Let's capture your course next.
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to showcase your golf course or capture your next golf adventure? 
            Let's discuss how we can create stunning aerial content for you.
          </p>
          <Button asChild variant="premium" size="lg">
            <Link to="/quote">Request a Quote</Link>
          </Button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxItem(null)}
        >
          <div className="max-w-4xl w-full max-h-full">
            {lightboxItem.type === "video" ? (
              <div className="aspect-video">
                <iframe
                  src={lightboxItem.videoUrl}
                  title={lightboxItem.title}
                  className="w-full h-full rounded-lg"
                  allowFullScreen
                />
              </div>
            ) : (
              <img 
                src={lightboxItem.fullImage} 
                alt={lightboxItem.title}
                className="w-full h-auto max-h-full object-contain rounded-lg"
              />
            )}
            <div className="text-center mt-4">
              <h3 className="text-white text-xl font-semibold">{lightboxItem.title}</h3>
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-2 bg-white/10 border-white/20 text-white hover:bg-white/20"
                onClick={() => setLightboxItem(null)}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;