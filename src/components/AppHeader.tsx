import { ReactNode } from 'react'
import { Url } from 'next/dist/shared/lib/router/router'
import { useRouter } from 'next/router'
import Link from 'next/link'
import AppContainer from './AppContainer'
import AppThemeToggle from './AppThemeToggle'
import GithubIcon from './icons/GithubIcon'

export interface AppHeaderProps {
  //
}

const AppHeader = (): JSX.Element => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-sm dark:bg-transparent">
      <AppContainer>
        <div className="flex flex-row flex-nowrap justify-between sm:items-center py-3 sm:py-6">
          <div className="flex flex-col space-y-3">
            <AppLogo />

            <div className="block sm:hidden">
              <ul className="flex space-x-5 sm:space-x-6 md:space-x-8 text-sm">
                <NavLists />
              </ul>
            </div>
          </div>

          <div className="flex sm:divide-x sm:divide-solid dark:divide-slate-600 space-x-4 md:space-x-8">
            <div className="hidden sm:block">
              <ul className="flex space-x-4 sm:space-x-6 md:space-x-8 text-md">
                <NavLists />
              </ul>
            </div>

            <div className="ml-4 pl-4 md:ml-6 md:pl-6 mt-1 sm:mt-auto">
              <div className="flex space-x-5">
                <AppThemeToggle />

                <a
                  href="https://github.com/jppacinos/jppdev"
                  target="__blank"
                  rel="noreferrer external"
                  aria-label="jhon peter github"
                >
                  <GithubIcon className="svg-icon dark:fill-slate-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </AppContainer>
    </header>
  )
}

export default AppHeader

//

function AppLogo(): JSX.Element {
  return (
    <div className="font-semibold text-2xl" style={{ fontFamily: 'sans-serif' }}>
      <Link href="/" className="dark:text-white/90">
        jpp<span className="text-blue-500 dark:text-blue-400">dev</span>
      </Link>
    </div>
  )
}

function NavLists(): JSX.Element {
  return (
    <>
      <li>
        <AppNavLink href="/">Home</AppNavLink>
      </li>
      <li>
        <AppNavLink href="/about">About</AppNavLink>
      </li>
      <li>
        <AppNavLink href="/projects">Projects</AppNavLink>
      </li>
    </>
  )
}

function AppNavLink({ children, href }: { children: ReactNode; href: Url }): JSX.Element {
  const router = useRouter()

  return (
    <Link
      href={href}
      className={`btn-primary ${router.pathname == href ? 'btn-primary-active' : ''}`.trimEnd()}
    >
      {children}
    </Link>
  )
}
