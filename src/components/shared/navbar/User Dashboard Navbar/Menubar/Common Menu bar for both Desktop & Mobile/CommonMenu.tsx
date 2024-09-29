import { Home, LineChart, Package, ShoppingCart, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import NavLink from "@/utils/Navlink/NavLink";
import { FaRegHeart } from "react-icons/fa";

const CommonMenu = ({ props, setOpen }: any) => {
  const { cartQuantity, wishlist } = props;

  // Function to handle the link click and close the menu
  const handleLinkClick = () => {
    setOpen(false); // Close the menu
  };
  return (
    <>
      <NavLink
        href="/user/dashboard"
        className="flex items-center gap-3 [&.active]:bg-[#1C8674] [&.active]:text-white rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        onClick={handleLinkClick}
      >
        <Home className="h-4 w-4" />
        Dashboard
      </NavLink>
      
      <NavLink
        href="/user/cart"
        className="flex items-center gap-3 [&.active]:bg-[#1C8674] [&.active]:text-white rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        onClick={handleLinkClick}
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
        href="/user/orders"
        className="flex items-center gap-3 [&.active]:bg-[#1C8674] [&.active]:text-white rounded-lg px-3 py-2 text-primary transition-all hover:text-primary"
        onClick={handleLinkClick}
      >
        <Package className="h-4 w-4" />
        Orders
      </NavLink>

      <NavLink
        href="/user/wishlist"
        className="flex items-center gap-3 [&.active]:bg-[#1C8674] [&.active]:text-white rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        onClick={handleLinkClick}
      >
        <FaRegHeart className="h-4 w-4" />
        Wish List
        {wishlist.length > 0 && (
          <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
            {wishlist.length}
          </Badge>
        )}
      </NavLink>

      {/* <NavLink
        href="#"
        className="flex items-center gap-3 [&.active]:bg-[#1C8674] [&.active]:text-white rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        onClick={handleLinkClick}
      >
        <Users className="h-4 w-4" />
        Customers
      </NavLink>

      <NavLink
        href="#"
        className="flex items-center gap-3 [&.active]:bg-[#1C8674] [&.active]:text-white rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        onClick={handleLinkClick}
      >
        <LineChart className="h-4 w-4" />
        Analytics
      </NavLink> */}
    </>
  );
};

export default CommonMenu;
