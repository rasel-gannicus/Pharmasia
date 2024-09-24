"use client";
// Importing necessary components and utilities
import PrivateRoute from "@/utils/Route Protection/PrivateRoute";
import { ToastContainer } from "react-toastify";
import { useCart } from "@/utils/Hooks/useCart";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "@/utils/firebase.init";
import { useWishlist } from "@/utils/Hooks/useWishlist";
import { DropDownNavbar } from "../Common Layout Navbar/Conditional Navbar/Responsive Menu/Desktop Menu/DropDownNavbar";
import CommonMenuDesktop from "../Common Layout Navbar/Conditional Navbar/Responsive Menu/Desktop Menu/CommonMenuDesktop";
import DesktopMenu from "./Menubar/DesktopMenu";
import MobileMenu from "./Menubar/MobileMenu";

// Functional component for the Admin Dashboard Navbar
function AdminDashboardNavbar({ children }: { children: React.ReactNode }) {
  // Using the useAuthState hook to get the current user and loading state
  const [user, loading] = useAuthState(auth);

  // --- checking how many items are in cart using the custom useCart hook
  let cartQuantity = useCart(user?.email, false);

  //   --- getting wishlist data from mongodb with redux using the custom useWishlist hook
  const wishlist: any = useWishlist();

  // Returning the JSX for the Admin Dashboard Navbar
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[240px_1fr] ">
      {/* Sidebar for desktop view */}
      <div className="hidden border-r bg-muted/40 md:block ">
        {/* ------------ Desktop Menu Here ---------------- */}
        <DesktopMenu cartQuantity={cartQuantity} wishlist={wishlist} />
      </div>
      {/* Main content area */}
      <div className="flex flex-col">
        {/* Header section */}
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          {/* ------------ Mobile Menu Here ---------------- */}

          <MobileMenu cartQuantity={cartQuantity} wishlist={wishlist} />

          {/* Common menu items for desktop view */}
          <div className="w-full flex-1 flex gap-3 text-sm lg:text-balance font-semibold text-gray-500">
            <CommonMenuDesktop />
          </div>
          {/* --- dropdown menu when user will click 'user picture at the top right corner' */}
          <DropDownNavbar props={{ userState: user }} />
        </header>
        {/* Content passed as children to the component will be rendered here */}
        {children}
      </div>
      {/* Toast container for displaying notifications */}
      <ToastContainer />
    </div>
  );
}
// Exporting the component wrapped with the PrivateRoute component for authentication
export default PrivateRoute(AdminDashboardNavbar);
