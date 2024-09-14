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
import { RiMedicineBottleFill } from "react-icons/ri";
import { MdOutlineFavorite } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import { useAppDispatch } from "@/utils/Redux/hooks";
import { activeModal } from "@/utils/Redux/features/modal/modalSlice";
import { IoMdKey, IoMdLogIn } from "react-icons/io";

export const DropDownNavbar = ({ props }: { props: any }) => {
  const { userState } = props;
  const { displayName, email, photoURL } = userState;

  const dispatch = useAppDispatch();

  function handleLogout() {
    dispatch(activeModal(false));
    // getProduct(email) ;
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
        <DropdownMenuLabel>{displayName || "Your Account"}</DropdownMenuLabel>
        <DropdownMenuLabel className="text-slate-300">
          {email || "Login to see details"}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <Link href="/user/dashboard">
          <DropdownMenuItem className="cursor-pointer flex justify-start items-center gap-2 text-slate-500">
            <FaUser />
            Profile
          </DropdownMenuItem>
        </Link>

        <Link href="/user/cart">
          <DropdownMenuItem className="cursor-pointer  flex justify-start items-center gap-2 text-slate-500">
            <FaShoppingCart />
            Cart
          </DropdownMenuItem>
        </Link>

        <Link href="/user/cart">
          <DropdownMenuItem className="cursor-pointer  flex justify-start items-center gap-2 text-slate-500">
            <RiMedicineBottleFill />
            Orders
          </DropdownMenuItem>
        </Link>

        <Link href="/user/cart">
          <DropdownMenuItem className="cursor-pointer  flex justify-start items-center gap-2 text-slate-500">
            <MdOutlineFavorite />
            Wishlist
          </DropdownMenuItem>
        </Link>

        <Link href="/user/cart">
          <DropdownMenuItem className="cursor-pointer  flex justify-start items-center gap-2 text-slate-500">
            <FaStar />
            Reviews
          </DropdownMenuItem>
        </Link>

        <DropdownMenuSeparator />
        {!email ? (
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
