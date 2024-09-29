"use client";
import PrivateRoute from "@/utils/Route Protection/PrivateRoute";
import { ToastContainer } from "react-toastify";
import { useCart } from "@/utils/Hooks/useCart";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "@/utils/firebase.init";
import { useWishlist } from "@/utils/Hooks/useWishlist";
import MobileMenu from "./Menubar/MobileMenu";
import DesktopMenu from "./Menubar/DesktopMenu";
import { DropDownNavbar } from "../Common Layout Navbar/Conditional Navbar/Responsive Menu/Desktop Menu/DropDownNavbar";
import CommonMenuDesktop from "../Common Layout Navbar/Conditional Navbar/Responsive Menu/Desktop Menu/CommonMenuDesktop";

function UserDashboardNavbar({ children }: { children: React.ReactNode }) {
  const [user, loading] = useAuthState(auth);

  // --- checking how many items are in cart
  let cartQuantity = useCart(user?.email, false);

  //   --- getting wishlist data from mongodb with redux
  const wishlist: any = useWishlist();
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[240px_1fr] ">
      <div className="hidden border-r bg-muted/40 md:block ">
        {/* ------------ Desktop Menu Here ---------------- */}
        <DesktopMenu cartQuantity={cartQuantity} wishlist={wishlist} />
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          {/* ------------ Mobile Menu Here ---------------- */}

          <MobileMenu cartQuantity={cartQuantity} wishlist={wishlist} />

          <div className="w-full flex-1 flex gap-3 text-sm lg:text-balance font-semibold text-gray-500">
            {/* <CommonMenuDesktop /> */}
          </div>
          {/* --- dropdown menu when user will click 'user picture at the top right corner' */}
          <DropDownNavbar props={{ userState: user }} />
        </header>
        {children}
      </div>
      <ToastContainer />
    </div>
  );
}
export default PrivateRoute(UserDashboardNavbar);
