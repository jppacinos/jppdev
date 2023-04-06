import useTheme from '@/hooks/useTheme'
import MoonIcon from './icons/MoonIcon'
import SunIcon from './icons/SunIcon'

export interface AppThemeToggleProps {
  //
}

const AppThemeToggle = (): JSX.Element => {
  const [theme, setTheme] = useTheme()
  const nextTheme = theme === 'dark' ? 'light' : 'dark'

  return (
    <button onClick={() => setTheme(nextTheme)} aria-label="Theme change">
      {theme !== 'dark' ? (
        <MoonIcon className="svg-icon dark:fill-slate-300" />
      ) : (
        <SunIcon className="svg-icon dark:fill-slate-300" />
      )}
    </button>
  )
}

export default AppThemeToggle
