import Link from "next/link";
import NavLink2 from "@/utils/Navlink/NavLink2";

const CommonMenuDesktop = () => {
    
  return (
    <>
      <Link
        href="/"
        className=" transition-colors hover:text-foreground [&.active]:font-bold   "
      >
        Home
      </Link>
      <NavLink2
        href="/products"
        className=" transition-colors  relative hover:text-foreground [&.active]:font-bold [&.active]: "
      >
        Products
      </NavLink2>
      <NavLink2
        href="/contact"
        className=" transition-colors hover:text-foreground [&.active]:font-bold [&.active]:"
      >
        Contact
      </NavLink2>
    </>
  );
};

export default CommonMenuDesktop;
