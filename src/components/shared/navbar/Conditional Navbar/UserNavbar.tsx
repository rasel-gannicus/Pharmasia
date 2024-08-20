import Link from "next/link";
import userImage from "@/assets/img/smile.png";
import { CircleUser, Menu, Package2, Search, Users } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/assets/img/cap 2.png";
import { useAppDispatch, useAppSelector } from "@/utils/Redux/hooks";
import { activeModal } from "@/utils/Redux/features/modal/modalSlice";
import { useGetProductCartQuery } from "@/utils/Redux/features/products/productsApi";
import { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { useCart } from "@/utils/Custom Function/checkingCart";

const UserNavbar = () => {
  const urlPath = usePathname();
  const isHomePage = urlPath === "/";

  const userState = useAppSelector((state) => state.userSlice.user);
  const { displayName, email, photoURL } = userState;

  // --- checking how many items are in cart
  let cart = useCart(email, false);

  const dispatch = useAppDispatch();

  function handleLogout() {
    dispatch(activeModal(false));
    // getProduct(email) ;
  }
  return (
    <header
      className={`absolute left-0 right-0 z-50 top-0 flex h-16 items-center gap-4  px-4 md:px-6 `}
    >
      <nav className="hidden  flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6  relative">
        <Link href="/" className="flex justify-center items-center gap-3">
          <Image
            alt="Logo for Navbar"
            src={logo}
            className="rounded-sm max-w-80 w-12 absolute left-0 -top-7 -rotate-[20deg] "
          />
        </Link>
        <Link href="/" className=" transition-colors hover:text-foreground">
          Home
        </Link>
        <Link href="#" className=" transition-colors hover:text-foreground">
          Orders
        </Link>
        <Link href="#" className=" transition-colors hover:text-foreground">
          Products
        </Link>
        <Link
          href="/dashboard"
          className=" transition-colors hover:text-foreground"
        >
          Admin
        </Link>

        {/* --- cart --- */}
        {cart > 0 && (
          <Link
            href="/user/cart"
            className=" transition-colors hover:text-foreground hover:bg-slate-200 text-white hover:text-black bg-[#1C8674] py-2 px-3 relative  rounded flex gap-1 justify-between items-center"
          >
            <FaCartPlus className="text-lg " />
            Cart
            <span className="bg-red-600 w-5 h-5 text-center text-white rounded-full absolute -right-2 -bottom-2">
              {cart}
            </span>
          </Link>
        )}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium ">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Package2 className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <Link href="#" className="hover:text-foreground">
              Dashboard
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground "
            >
              Orders
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Products
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Customers
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Analytics
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </div>
        </form>

        {/* --- user submenu --- */}
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
            <DropdownMenuLabel>{displayName || "John Wick"}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Button onClick={handleLogout} className="bg-pink-600">
                Logout
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default UserNavbar;
