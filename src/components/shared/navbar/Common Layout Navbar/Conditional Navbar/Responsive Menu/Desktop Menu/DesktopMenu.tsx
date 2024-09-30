
import { useState } from "react";
import CommonMenuDesktop, { commonMenuForDesktop } from "./CommonMenuDesktop";

const DesktopMenu = ({ cartQuantity, wishlist }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="hidden w-full  flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6  relative items-center justify-start">
      {/* <CommonMenuDesktop /> */}
      {commonMenuForDesktop(setOpen)}

    </nav>
  );
};

export default DesktopMenu;
