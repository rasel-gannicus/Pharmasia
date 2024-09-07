import Link from "next/link";
import { usePathname } from "next/navigation";
import {  useAppSelector } from "@/utils/Redux/hooks";
import { useCart } from "@/utils/Hooks/useCart";
import { useWishlist } from "@/utils/Hooks/useWishlist";
import DesktopMenu from "./Responsive Menu/Desktop Menu/DesktopMenu";
import MobileMenu from "./Responsive Menu/Mobile Menu/MobileMenu";
import { FaCartPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DropDownNavbar } from "./Responsive Menu/Desktop Menu/DropDownNavbar";

const UserNavbar = () => {
  const urlPath = usePathname();

  const userState = useAppSelector((state) => state.userSlice.user);
  const { displayName, email, photoURL } = userState;

  // --- checking how many items are in cart
  let cartQuantity = useCart(email, false);

  //   --- getting wishlist data from mongodb with redux
  const wishlist: any = useWishlist();

  return (
    <header
      className={`absolute left-0 right-0 z-50 top-0 flex h-16 items-center gap-4  px-4 md:px-6 `}
    >
      {/* --------------------- Desktop Menu ------------------- */}
      <DesktopMenu cartQuantity={cartQuantity} wishlist={wishlist} />

      {/* --------------------- Mobile Menu ------------------- */}
      <MobileMenu cartQuantity={cartQuantity} wishlist={wishlist} />

      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        {/* <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </div>
        </form> */}
        <div className="ml-auto flex-1 sm:flex-initial">
          <div className="flex  gap-3 justify-center items-center">
            {/* --- wishlist --- */}
            <TooltipProvider delayDuration={300}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/user/wishlist"
                    className=" transition-colors hover:text-foreground hover:bg-white text-white hover:text-black bg-[rgb(76,40,87)] py-2 px-3 relative  rounded flex gap-1 justify-between items-center"
                  >
                    <FaHeart className="text-lg " />

                    {wishlist?.length > 0 && (
                      <span className="bg-red-600 w-5 h-5 text-center flex justify-center items-center text-white rounded-full absolute -right-2 -bottom-2 text-sm">
                        {wishlist?.length}
                      </span>
                    )}
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Wishlist</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* --- cart --- */}
            <TooltipProvider delayDuration={300}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/user/cart"
                    className=" transition-colors hover:text-foreground  hover:bg-white text-white hover:text-black bg-[#1C8674] py-2 px-3 relative  rounded flex gap-1 justify-between items-center"
                  >
                    <FaCartPlus className="text-lg " />

                    {cartQuantity > 0 && (
                      <span className="bg-red-600 w-5 h-5 flex justify-center items-center text-sm text-center text-white rounded-full absolute -right-2 -bottom-2">
                        {cartQuantity}
                      </span>
                    )}
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Cart</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        {/* --- user submenu --- */}
        <DropDownNavbar props={{ userState }} />
      </div>
    </header>
  );
};

export default UserNavbar;
