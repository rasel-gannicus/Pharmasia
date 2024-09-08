
import CommonMenuDesktop from "./CommonMenuDesktop";

const DesktopMenu = ({ cartQuantity, wishlist }: any) => {
  return (
    <nav className="hidden  flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6  relative items-center">
      <CommonMenuDesktop />
    </nav>
  );
};

export default DesktopMenu;
