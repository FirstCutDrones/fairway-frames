import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  icon: LucideIcon;
  image: string;
}

const ServiceCard = ({ title, description, price, icon: Icon, image }: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-strong transition-spring bg-gradient-subtle border-border/50 hover:border-primary/20 overflow-hidden">
      {/* Service Image with Hover Effect */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-all duration-500 brightness-50 group-hover:brightness-100 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
        <div className="absolute top-4 right-4 bg-gradient-premium p-3 rounded-xl shadow-medium group-hover:shadow-glow transition-spring">
          <Icon className="h-6 w-6 text-accent-foreground" />
        </div>
      </div>
      
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-xl font-bold text-foreground">{title}</CardTitle>
      </CardHeader>
      
      <CardContent className="text-center pb-6">
        <p className="text-muted-foreground leading-relaxed mb-4">{description}</p>
        <div className="text-2xl font-bold text-primary">
          Starting at <span className="text-accent">{price}</span>
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button asChild variant="outline" className="w-full group-hover:border-primary group-hover:text-primary transition-smooth">
          <Link to="/quote">Request Quote</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;