"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import activeImage from "@/assets/img/capsule.png";
import activeImage2 from "@/assets/img/syringe (1).png";
import Image from "next/image";

export default function NavLink2({
  href,
  exact = false,
  children,
  className,
  ...props
}: any) {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname?.startsWith(href);
  const newClassName = isActive ? `${className} active` : className;

  return (
    <Link href={href} className={newClassName + " group relative"} {...props}>
      {children}
      <Image
        src={activeImage2}
        className=" invisible group-[&.active]:visible rotate-[225deg] top-[5px] absolute w-12 left-[50%] -translate-x-[50%] "
        alt=""
      />
    </Link>
  );
}
