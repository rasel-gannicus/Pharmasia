import Link from "next/link";
import headerLogo from "@/assets/img/pharmasia logo 3.png";
import Image from "next/image";
import NavLink2 from "@/utils/Navlink/NavLink2";

const DesktopMenu = ({ cartQuantity, wishlist }: any) => {
  return (
    <nav className="hidden  flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6  relative">
      {/* <Link href="/" className="flex items-center gap-2 font-semibold ">
        <Image width={370} src={headerLogo} alt="" />
      </Link> */}
      
      <Link
        href="/"
        className=" transition-colors hover:text-foreground [&.active]:font-bold   "
      >
        Home
      </Link>
      <NavLink2
        href="/products"
        className=" transition-colors hover:text-foreground [&.active]:font-bold [&.active]:text-gray-400 "
      >
        Products
      </NavLink2>
      <NavLink2
        href="/contact"
        className=" transition-colors hover:text-foreground [&.active]:font-bold [&.active]:text-gray-400"
      >
        Contact
      </NavLink2>
    </nav>
  );
};

export default DesktopMenu;
