import { Home, Menu, Package2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import CommonMenuDesktop from "../Desktop Menu/CommonMenuDesktop";

const MobileMenu = ({ cartQuantity, wishlist }: any) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav className="flex flex-col  gap-10 items-center justify-center min-h-screen px-2  font-medium lg:px-4">
          <CommonMenuDesktop />
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
