import Link from "next/link";
import NavLink2 from "@/utils/Navlink/NavLink2";

const commonLinkClasses = "transition-colors hover:text-foreground [&.active]:font-bold";

export const commonMenuForDesktop = (setOpen: any) => {
  return  <>
  <Link  href="/" className={commonLinkClasses}>
    Home
  </Link>
  <NavLink2 onClick={()=>{setOpen(false)}} href="/products" className={commonLinkClasses}>
    Products
  </NavLink2>
  <NavLink2 onClick={()=>{setOpen(false)}} href="/flash-sale" className={commonLinkClasses}>
    Flash Sale
  </NavLink2>
  <NavLink2 onClick={()=>{setOpen(false)}} href="/contact" className={commonLinkClasses}>
    Contact
  </NavLink2>
  <NavLink2 onClick={()=>{setOpen(false)}} href="/aboutUs" className={commonLinkClasses}>
    About Us
  </NavLink2>
</>
}
const CommonMenuDesktop = ({ setOpen }: any) => {
    
  return commonMenuForDesktop(setOpen);
};

export default CommonMenuDesktop;
