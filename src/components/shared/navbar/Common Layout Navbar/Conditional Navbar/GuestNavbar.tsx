import Link from "next/link";
import { CircleUser, Menu, Package2, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/assets/img/injection.png";
import { DropDownNavbar } from "./Responsive Menu/Desktop Menu/DropDownNavbar";
import IconMenu from "./Icon menu bar/IconMenu";
import { commonMenuForDesktop } from "./Responsive Menu/Desktop Menu/CommonMenuDesktop";

const GuestNavbar = () => {
  const urlPath = usePathname();
  const isHomePage = urlPath === "/";

  return (
    <header
      className={`absolute left-0 right-0 z-50 top-0 flex h-16 items-center gap-4  px-4 md:px-6 ${
        !isHomePage && ""
      }`}
    >
      <nav className="hidden w-full flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6  relative">
        {commonMenuForDesktop()}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="flex flex-col justify-center items-center min-h-[90vh] gap-6 text-lg font-medium ">
            {commonMenuForDesktop()}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="xl:flex hidden w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </div>
        </form>
        {/* <IconMenu props={{ wishlist : [], cartQuantity : [], email : '' }} /> */}

        
        {/* --- user submenu --- */}
        <DropDownNavbar props={{ userState : {} }} />
      </div>
    </header>
  );
};

export default GuestNavbar;
