import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/img/cap 2.png";
import { FaCartPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const DesktopMenu = ({ cartQuantity, wishlist }: any) => {
  return (
    <nav className="hidden  fl`ex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6  relative">
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

      {/* --- wishlist --- */}
      {wishlist?.length > 0 && (
        <Link
          href="/user/wishlist"
          className=" transition-colors hover:text-foreground hover:bg-slate-200 text-white hover:text-black bg-[#4C2857] py-2 px-3 relative  rounded flex gap-1 justify-between items-center"
        >
          <FaHeart className="text-lg " />
          Wishlist
          <span className="bg-red-600 w-5 h-5 text-center text-white rounded-full absolute -right-2 -bottom-2">
            {wishlist?.length}
          </span>
        </Link>
      )}

      {/* --- cart --- */}
      {cartQuantity > 0 && (
        <Link
          href="/user/cart"
          className=" transition-colors hover:text-foreground hover:bg-slate-200 text-white hover:text-black bg-[#1C8674] py-2 px-3 relative  rounded flex gap-1 justify-between items-center"
        >
          <FaCartPlus className="text-lg " />
          Cart
          <span className="bg-red-600 w-5 h-5 text-center text-white rounded-full absolute -right-2 -bottom-2">
            {cartQuantity}
          </span>
        </Link>
      )}
    </nav>
  );
};

export default DesktopMenu;
