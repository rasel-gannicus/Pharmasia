'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function NavLink2({
  href,
  exact = false,
  children,
  className,
  ...props
}: any) {
  const pathname = usePathname()
  const isActive = exact ? pathname === href : pathname?.startsWith(href)
  const newClassName = isActive ? `${className} active` : className

  return (
    <Link href={href} className={newClassName}  {...props}>
      {children}
    </Link>
  )
}