import Link from "next/link";
import { Home, Menu, Package2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import logo from "@/assets/img/cap 2.png";
import { FaCartPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import NavLink from "@/utils/Navlink/NavLink";
import {
    Bell,
    LineChart,
    Package,
    ShoppingCart,
    Users,
  } from "lucide-react";
  
  import { Badge } from "@/components/ui/badge";
  import { FaRegHeart } from "react-icons/fa";
  import { useRouter } from "next/navigation";

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
      <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
          <NavLink
            href="#"
            className="flex items-center gap-3 [&.active]:bg-[#1C8674] [&.active]:text-white rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
          >
            <Home className="h-4 w-4" />
            Dashboard
          </NavLink>
          <NavLink
            href="/user/cart"
            className="flex items-center gap-3 [&.active]:bg-[#1C8674] [&.active]:text-white rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
          >
            <ShoppingCart className="h-4 w-4" />
            Cart
            {cartQuantity > 0 && (
              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                {cartQuantity}
              </Badge>
            )}
          </NavLink>
          <NavLink
            href="#"
            className="flex items-center gap-3 [&.active]:bg-[#1C8674] [&.active]:text-white rounded-lg px-3 py-2 text-primary transition-all hover:text-primary"
          >
            <Package className="h-4 w-4" />
            Products{" "}
          </NavLink>

          <NavLink
            href="/user/wishlist"
            className="flex items-center gap-3 [&.active]:bg-[#1C8674] [&.active]:text-white rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
          >
            <FaRegHeart className="h-4 w-4" />
            Wish List
            {wishlist.length > 0 && (
              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                {wishlist.length}
              </Badge>
            )}
          </NavLink>

          <NavLink
            href="#"
            className="flex items-center gap-3 [&.active]:bg-[#1C8674] [&.active]:text-white rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
          >
            <Users className="h-4 w-4" />
            Customers
          </NavLink>

          <NavLink
            href="#"
            className="flex items-center gap-3 [&.active]:bg-[#1C8674] [&.active]:text-white rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
          >
            <LineChart className="h-4 w-4" />
            Analytics
          </NavLink>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
