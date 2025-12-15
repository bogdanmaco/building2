import { User, Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const MobileBottomDock = () => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-buildings-blue-dark z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.25)]">
      <div className="flex items-center justify-around py-3 px-4">
        <Link 
          to="/cont" 
          className="flex flex-col items-center gap-1 text-primary-foreground hover:text-accent transition-colors"
        >
          <User size={24} />
          <span className="text-xs font-medium">Cont</span>
        </Link>
        <Link 
          to="/favorite" 
          className="flex flex-col items-center gap-1 text-primary-foreground relative hover:text-accent transition-colors"
        >
          <Heart size={24} />
          <span className="absolute -top-1 right-0 translate-x-2 bg-accent text-accent-foreground text-[10px] w-5 h-5 flex items-center justify-center font-bold">
            0
          </span>
          <span className="text-xs font-medium">Favorite</span>
        </Link>
        <Link 
          to="/cos" 
          className="flex flex-col items-center gap-1 text-primary-foreground relative hover:text-accent transition-colors"
        >
          <ShoppingCart size={24} />
          <span className="absolute -top-1 right-0 translate-x-2 bg-accent text-accent-foreground text-[10px] w-5 h-5 flex items-center justify-center font-bold">
            0
          </span>
          <span className="text-xs font-medium">Coș</span>
        </Link>
      </div>
    </div>
  );
};

export default MobileBottomDock;
