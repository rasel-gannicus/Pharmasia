import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import userImage from "@/assets/img/smile.png";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { RiMedicineBottleFill, RiMedicineBottleLine } from "react-icons/ri";
import { MdOutlineFavorite } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import { useAppDispatch } from "@/utils/Redux/hooks";
import { activeModal } from "@/utils/Redux/features/modal/modalSlice";
import { IoMdKey, IoMdLogIn } from "react-icons/io";
import { Home, LineChart, Package, ShoppingCart, Users } from "lucide-react";
import NavLink from "@/utils/Navlink/NavLink";

export const DropDownNavbar = ({ props }: { props: any }) => {
  const { userState } = props;

  const dispatch = useAppDispatch();

  function handleLogout() {
    dispatch(activeModal(false));
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="secondary"
          size="icon"
          className="rounded-full overflow-hidden"
        >
          {/* <CircleUser className="h-5 w-5" /> */}
          {userState?.photoURL ? (
            <Image
              alt="user image"
              width={30}
              height={30}
              style={{ width: "100%" }}
              src={userState?.photoURL}
            />
          ) : (
            <Image alt="user image" src={userImage} />
          )}
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>
          {userState?.displayName || "Your Account"}
        </DropdownMenuLabel>
        <DropdownMenuLabel className="text-slate-300">
          {userState?.email || "Login to see details"}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div>
          <NavLink
            href="/admin/dashboard"
            className="flex items-center gap-3  rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
          >
            <Home className="h-4 w-4" />
            Dashboard
          </NavLink>

          <NavLink
            href="/admin/orders"
            className="flex items-center gap-3  rounded-lg px-3 py-2 text-primary transition-all hover:text-primary"
          >
            <Package className="h-4 w-4" />
            Manage Orders
          </NavLink>

          <NavLink
            href="/admin/allProducts"
            className="flex items-center gap-3  rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
          >
            <RiMedicineBottleLine className="h-4 w-4" />
            Manage Products
          </NavLink>

          <NavLink
            href="/admin/userList"
            className="flex items-center gap-3  rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
          >
            <Users className="h-4 w-4" />
            Manage Users
          </NavLink>
        </div>

        <DropdownMenuSeparator />
        {!userState?.email ? (
          <DropdownMenuItem>
            <Link
              className="bg-[#488EAF] px-3 rounded py-2 flex justify-center items-center gap-1 text-white me-2 "
              href="/authentication/login"
            >
              <IoMdLogIn />
              Login
            </Link>
            <Link
              className="bg-[#FB714C] px-3 rounded py-2 flex justify-center items-center gap-1 text-white "
              href="/authentication/register"
            >
              <IoMdKey className="text-lg" />
              Register
            </Link>
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem>
            <Button onClick={handleLogout} className="bg-pink-600">
              Logout
            </Button>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
