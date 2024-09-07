import React from "react";
import { Package2 } from "lucide-react";
import NavLink from "@/utils/Navlink/NavLink";
import { useRouter } from "next/navigation";
import CommonMenu from "./Common Menu bar for both Desktop & Mobile/CommonMenu";

const DesktopMenu = ({ cartQuantity, wishlist }: any) => {
  const router = useRouter(); 

  return (
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <NavLink href="/" className="flex items-center gap-2 font-semibold">
          <Package2 className="h-6 w-6" />
          <button onClick={() => router.push("/")} className="">
            Pharmasia
          </button>
        </NavLink>
        {/* <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
          <Bell className="h-4 w-4" />
          <span className="sr-only">Toggle notifications</span>
        </Button> */}
      </div>
      <div className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
          <CommonMenu props={{ cartQuantity, wishlist }} />
        </nav>
      </div>
    </div>
  );
};

export default DesktopMenu;
