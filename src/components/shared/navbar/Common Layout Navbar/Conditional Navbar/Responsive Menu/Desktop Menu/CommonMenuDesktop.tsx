import Link from "next/link";
import NavLink2 from "@/utils/Navlink/NavLink2";

const commonLinkClasses = "transition-colors hover:text-foreground [&.active]:font-bold";

export const commonMenuForDesktop = () => {
  return  <>
  <Link href="/" className={commonLinkClasses}>
    Home
  </Link>
  <NavLink2 href="/products" className={commonLinkClasses}>
    Products
  </NavLink2>
  <NavLink2 href="/flash-sale" className={commonLinkClasses}>
    Flash Sale
  </NavLink2>
  <NavLink2 href="/contact" className={commonLinkClasses}>
    Contact
  </NavLink2>
</>
}
const CommonMenuDesktop = () => {
    
  return commonMenuForDesktop();
};

export default CommonMenuDesktop;
