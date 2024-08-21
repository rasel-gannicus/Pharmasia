"use client";
import Link from "next/link";
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NavLink from "@/utils/Navlink/NavLink";
import PrivateRoute from "@/utils/Route Protection/PrivateRoute";
import { ToastContainer } from "react-toastify";
import { useCart } from "@/utils/Hooks/useCart";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "@/utils/firebase.init";
import { useWishlist } from "@/utils/Hooks/useWishlist";
import { FaRegHeart } from "react-icons/fa";
import MobileMenu from "./Menubar/MobileMenu";
import DesktopMenu from "./Menubar/DesktopMenu";

function UserDashboardNavbar({ children }: { children: React.ReactNode }) {
  const [user, loading] = useAuthState(auth);

  // --- checking how many items are in cart
  let cartQuantity = useCart(user?.email, false);

  //   --- getting wishlist data from mongodb with redux
  const wishlist: any = useWishlist();
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        {/* ------------ Desktop Menu Here ---------------- */}
        <DesktopMenu cartQuantity={cartQuantity} wishlist={wishlist} />
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          {/* ------------ Mobile Menu Here ---------------- */}

          <MobileMenu cartQuantity={cartQuantity} wishlist={wishlist} />

          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        {children}
      </div>
      <ToastContainer />
    </div>
  );
}
export default PrivateRoute(UserDashboardNavbar);

{
  //   <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
  //   <div className="flex items-center">
  //     <h1 className="text-lg font-semibold md:text-2xl">Inventory</h1>
  //   </div>
  //   <div
  //     className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
  //     x-chunk="dashboard-02-chunk-1"
  //   >
  //   </div>
  // </main>
}
