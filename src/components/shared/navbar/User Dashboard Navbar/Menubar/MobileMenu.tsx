import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import CommonMenu from "./Common Menu bar for both Desktop & Mobile/CommonMenu";
import { useState } from "react";

const MobileMenu = ({ cartQuantity, wishlist }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
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
          <CommonMenu
            props={{ cartQuantity, wishlist }}
            setOpen={setOpen} // Close menu when a link is clicked
          />
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
