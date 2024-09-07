import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/img/cap 2.png";

const DesktopMenu = ({ cartQuantity, wishlist }: any) => {
  return (
    <nav className="hidden  fl`ex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6  relative">
      <Link href="/" className=" transition-colors hover:text-foreground">
        Home
      </Link>
      <Link href="#" className=" transition-colors hover:text-foreground">
        Orders
      </Link>
      <Link href="#" className=" transition-colors hover:text-foreground">
        Products
      </Link>

      
    </nav>
  );
};

export default DesktopMenu;
