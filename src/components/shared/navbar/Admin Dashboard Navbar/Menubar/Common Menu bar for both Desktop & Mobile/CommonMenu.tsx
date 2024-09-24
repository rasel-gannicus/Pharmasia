import { Home, LineChart, Package, ShoppingCart, Users } from "lucide-react";
import NavLink from "@/utils/Navlink/NavLink";
import { FaRegHeart } from "react-icons/fa";
import { RiMedicineBottleLine } from "react-icons/ri";

const CommonMenu = ({ props, setOpen }: any) => {
  const { cartQuantity, wishlist } = props;

  // Function to handle the link click and close the menu
  const handleLinkClick = () => {
    setOpen(false); // Close the menu
  };
  return (
    <>
      <NavLink
        href="/admin/dashboard"
        className="flex items-center gap-3 [&.active]:bg-[#1C8674] [&.active]:text-white rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        onClick={handleLinkClick}
      >
        <Home className="h-4 w-4" />
        Dashboard
      </NavLink>

      <NavLink
        href="/admin/orders"
        className="flex items-center gap-3 [&.active]:bg-[#1C8674] [&.active]:text-white rounded-lg px-3 py-2 text-primary transition-all hover:text-primary"
        onClick={handleLinkClick}
      >
        <Package className="h-4 w-4" />
        Orders
      </NavLink>

      <NavLink
        href="/admin/allProducts"
        className="flex items-center gap-3 [&.active]:bg-[#1C8674] [&.active]:text-white rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        onClick={handleLinkClick}
      >
        <RiMedicineBottleLine className="h-4 w-4" />
        Products
      </NavLink>

      <NavLink
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
      </NavLink>
    </>
  );
};

export default CommonMenu;
