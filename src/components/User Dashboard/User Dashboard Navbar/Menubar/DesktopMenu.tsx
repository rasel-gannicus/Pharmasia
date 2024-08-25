import React from "react";
import {
  Bell,
  Home,
  LineChart,
  Package,
  Package2,
  ShoppingCart,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import NavLink from "@/utils/Navlink/NavLink";
import { FaRegHeart } from "react-icons/fa";
import { useRouter } from "next/navigation";

const DesktopMenu = ({ cartQuantity, wishlist }: any) => {
  const router = useRouter();

  return (
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <NavLink href="/" className="flex items-center gap-2 font-semibold">
          <Package2 className="h-6 w-6" />
          <button onClick={() => router.push("/")} className="">
            Pharmasia
          </button>
        </NavLink>
        <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
          <Bell className="h-4 w-4" />
          <span className="sr-only">Toggle notifications</span>
        </Button>
      </div>
      <div className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
          <NavLink
            href="/user/dashboard"
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
      </div>
    </div>
  );
};

export default DesktopMenu;
