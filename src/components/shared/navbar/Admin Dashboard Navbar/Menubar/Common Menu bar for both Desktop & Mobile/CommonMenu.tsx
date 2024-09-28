import { Home, LineChart, Package, ShoppingCart, Users } from "lucide-react";
import NavLink from "@/utils/Navlink/NavLink";
import { FaRegHeart } from "react-icons/fa";
import { RiMedicineBottleLine } from "react-icons/ri";
import { useState } from "react";
import AddProductModal from "@/components/Dashboard/Admin Dashboard/All Products/Modal/AddProductModal";

export const menuForAdmin = (handleLinkClick: any) => {
  return (
    <div className="">
      <NavLink
        href="/admin/dashboard"
        className="flex items-center gap-3 [&.active]:bg-red-800 [&.active]:text-white rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        onClick={handleLinkClick}
      >
        <Home className="h-4 w-4" />
        Dashboard
      </NavLink>

      <NavLink
        href="/admin/orders"
        className="flex items-center gap-3 [&.active]:bg-red-800 [&.active]:text-white rounded-lg px-3 py-2 text-primary transition-all hover:text-primary"
        onClick={handleLinkClick}
      >
        <Package className="h-4 w-4" />
        Manage Orders
      </NavLink>

      <NavLink
        href="/admin/allProducts"
        className="flex items-center gap-3 [&.active]:bg-red-800 [&.active]:text-white rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        onClick={handleLinkClick}
      >
        <RiMedicineBottleLine className="h-4 w-4" />
        Manage Products
      </NavLink>

      <NavLink
        href="/admin/userList"
        className="flex items-center gap-3 [&.active]:bg-red-800 [&.active]:text-white rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        onClick={handleLinkClick}
      >
        <Users className="h-4 w-4" />
        Manage Users
      </NavLink>
    </div>
  );
};

const CommonMenu = ({ props, setOpen }: any) => {
  const { cartQuantity, wishlist } = props;

  const [isAddProductOpen, setIsAddProductOpen] = useState(false);

  // Function to handle the link click and close the menu
  const handleLinkClick = () => {
    setOpen(false); // Close the menu
  };
  return (
    <div className="flex flex-col justify-between min-h-[80vh] ">
      {
        menuForAdmin(handleLinkClick)
      }

      <AddProductModal
        isAddProductOpen={isAddProductOpen}
        setIsAddProductOpen={setIsAddProductOpen}
      />
    </div>
  );
};

export default CommonMenu;
