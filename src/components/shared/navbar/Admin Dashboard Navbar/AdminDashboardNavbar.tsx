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
import { useGetUserInfoQuery } from "@/utils/Redux/features/user/userApi";
import Loader from "@/utils/Loading Spinner/Loader";
import { useRouter } from "next/navigation";

function AdminDashboardNavbar({ children }: { children: React.ReactNode }) {
  // Using the useAuthState hook to get the current user and loading state from Firebase authentication
  const [user, loading] = useAuthState(auth);

  // --- Using the custom useCart hook to get the number of items in the cart for the current user
  let cartQuantity = useCart(user?.email, false);
  // --- Using the custom useWishlist hook to get the wishlist data from MongoDB for the current user via Redux
  const wishlist: any = useWishlist();

  // Fetching user information using the useGetUserInfoQuery hook based on the user's email
  const {
    data: userInfo, // The fetched user information
    isLoading, // Indicates whether the query is loading
    isError, // Indicates whether an error occurred during the query
    error, // The error object if an error occurred
  } = useGetUserInfoQuery(user?.email);

  // Initializing the router for navigation
  const navigate = useRouter();

  // Display a loading indicator while the user information is being fetched or if the Firebase authentication loading state is true
  if (isLoading)
    return (
      <Loader desc="Checking Admin Authentication ..." /> || (
        <div>Loading...</div>
      )
    );


  // Redirect the user to the user dashboard if their role is not "admin"
  if (userInfo?.role !== "admin") return navigate.push("/user/dashboard");

  // Returning the JSX for the Admin Dashboard Navbar
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[250px_1fr] ">
      {/* Sidebar for desktop view */}
      <div className="hidden border-r bg-muted md:block ">
        {/* ------------ Desktop Menu Here ---------------- */}
        <DesktopMenu cartQuantity={cartQuantity} wishlist={wishlist} />
      </div>
      {/* Main content area */}
      <div className="flex flex-col">
        {/* Header section */}
        <header className="flex h-14 items-center gap-4 border-b bg-muted px-4 lg:h-[60px] lg:px-6">
          {/* ------------ Mobile Menu Here ---------------- */}

          <MobileMenu cartQuantity={cartQuantity} wishlist={wishlist} />

          {/* Common menu items for desktop view */}
          <div className="w-full flex-1 flex gap-3 text-sm lg:text-balance font-semibold text-gray-500">
            {/* <CommonMenuDesktop /> */}
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
