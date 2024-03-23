'use client'

import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

export interface AppNavLinkProps extends LinkProps {
  children: React.ReactNode
}

const AppNavLink = ({ href, ...rest }: AppNavLinkProps): JSX.Element => {
  const pathname = usePathname()

  return (
    <Link
      href={href}
      className={`btn-primary ${pathname === href ? 'btn-primary-active' : ''}`.trimEnd()}
      {...rest}
    />
  )
}

export default AppNavLink
