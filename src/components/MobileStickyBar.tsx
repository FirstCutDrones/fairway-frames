import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Phone, MessageCircle } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { trackButtonClick } from "@/lib/analytics";

const MobileStickyBar = () => {
  const isMobile = useIsMobile();
  const location = useLocation();
  
  // Don't show on quote page or if not mobile
  if (!isMobile || location.pathname === '/quote') {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-t border-border shadow-strong">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center gap-3">
          <Button 
            asChild 
            variant="premium" 
            className="flex-1 h-12 text-base font-semibold"
            onClick={() => trackButtonClick('Mobile CTA Get Quote', 'Sticky Bar')}
          >
            <Link to="/quote" className="flex items-center justify-center gap-2">
              <Phone className="h-4 w-4" />
              Get a Quote
            </Link>
          </Button>
          
          <Button 
            variant="outline" 
            size="icon" 
            className="h-12 w-12 flex-shrink-0"
            onClick={() => {
              trackButtonClick('Mobile CTA Chat', 'Sticky Bar');
              // Open chat widget or contact form
              window.open('mailto:info@firstcutdrones.com?subject=Quick Question', '_blank');
            }}
          >
            <MessageCircle className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileStickyBar;