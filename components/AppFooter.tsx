import LinkedInIcon from './icons/LinkedInIcon'
import GithubIcon from './icons/GithubIcon'
import MailIcon from './icons/MailIcon'

export interface AppFooterProps {
  //
}

const AppFooter = (): JSX.Element => {
  return (
    <ul className="flex align-center space-x-7">
      <li>
        <a
          href="https://www.linkedin.com/in/jppacinos/"
          rel="noreferrer external"
          target="__blank"
          aria-label="jhon peter linkedin"
        >
          <LinkedInIcon className="svg-icon svg-lg" />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/jppacinos/"
          rel="noreferrer external"
          target="__blank"
          aria-label="jhon peter github"
        >
          <GithubIcon className="svg-icon svg-lg" />
        </a>
      </li>
      <li>
        <a
          href="mailto:jppacinos@gmail.com"
          rel="noreferrer external"
          aria-label="jhon peter email"
        >
          <MailIcon className="svg-icon svg-lg" />
        </a>
      </li>
    </ul>
  )
}

export default AppFooter
