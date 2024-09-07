import {
  Home,
  LineChart,
  Menu,
  Package,
  ShoppingCart,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NavLink from "@/utils/Navlink/NavLink";
import { FaRegHeart } from "react-icons/fa";
import CommonMenu from "./Common Menu bar for both Desktop & Mobile/CommonMenu";

const MobileMenu = ({ cartQuantity, wishlist }: any) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex flex-col justify-center items-center"
      >
        <nav className="grid gap-2 text-lg font-medium">
          <CommonMenu props={{cartQuantity, wishlist}} />
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
