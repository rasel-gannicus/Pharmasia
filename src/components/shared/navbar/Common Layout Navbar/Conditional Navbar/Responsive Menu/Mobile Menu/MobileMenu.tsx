import { Home, Menu, Package2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import CommonMenuDesktop from "../Desktop Menu/CommonMenuDesktop";
import { useState } from "react";

const MobileMenu = ({ cartQuantity, wishlist }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen} >
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav className="flex flex-col  gap-10 items-center justify-center min-h-screen px-2  font-medium lg:px-4">
          <CommonMenuDesktop setOpen={setOpen} // Close menu when a link is clicked  
          />
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
