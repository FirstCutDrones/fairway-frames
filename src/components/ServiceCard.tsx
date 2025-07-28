import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  icon: LucideIcon;
}

const ServiceCard = ({ title, description, price, icon: Icon }: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-strong transition-spring bg-gradient-subtle border-border/50 hover:border-primary/20">
      <CardHeader className="text-center pb-4">
        <div className="mx-auto bg-gradient-premium p-4 rounded-xl shadow-medium group-hover:shadow-glow transition-spring w-fit">
          <Icon className="h-8 w-8 text-accent-foreground" />
        </div>
        <CardTitle className="text-xl font-bold text-foreground mt-4">{title}</CardTitle>
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