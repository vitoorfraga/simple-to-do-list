import Link, { LinkProps } from 'next/link'
import { PropsWithChildren, ReactNode } from 'react'

interface NavLinkProps extends PropsWithChildren<LinkProps> {
  children: ReactNode
}

export const NavLink = ({ children, ...rest }: NavLinkProps) => {
  return (
    <Link
      className="border-[2px] border-slate-600 w-full flex gap-3 p-2 rounded-md hover:bg-slate-600 transition-colors ease-linear"
      {...rest}
    >
      {children}
    </Link>
  )
}
