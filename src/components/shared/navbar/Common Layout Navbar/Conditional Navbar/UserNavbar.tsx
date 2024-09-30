import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/utils/Redux/hooks";
import { useCart } from "@/utils/Hooks/useCart";
import { useWishlist } from "@/utils/Hooks/useWishlist";
import DesktopMenu from "./Responsive Menu/Desktop Menu/DesktopMenu";
import MobileMenu from "./Responsive Menu/Mobile Menu/MobileMenu";
import { DropDownNavbar } from "./Responsive Menu/Desktop Menu/DropDownNavbar";
import IconMenu from "./Icon menu bar/IconMenu";

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
        
        <IconMenu props={{ wishlist, cartQuantity, email }} />

        {/* --- user submenu --- */}
        <DropDownNavbar props={{ userState }} />
      </div>
    </header>
  );
};

export default UserNavbar;
