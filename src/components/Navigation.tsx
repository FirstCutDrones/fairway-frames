import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { name: "Gallery", path: "/gallery" },
    { name: "Services", path: "/services" },
    { name: "Partners", path: "/partners" },
    { name: "Blog", path: "/blog" },
    { name: "Quote", path: "/quote" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-smooth">
            <div className="bg-gradient-premium p-2 rounded-lg shadow-medium">
              <Camera className="h-6 w-6 text-accent-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">First Cut Drones</h1>
              <p className="text-xs text-muted-foreground">Premium Golf Videography</p>
            </div>
          </Link>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-smooth hover:text-primary ${
                  location.pathname === item.path
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild variant="premium" size="sm">
              <Link to="/quote">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button asChild variant="premium" size="sm">
              <Link to="/quote">Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;