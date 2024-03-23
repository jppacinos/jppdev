'use client'

import { ThemeMode, useTheme } from '@/lib/theme'
import MoonIcon from './icons/MoonIcon'
import SunIcon from './icons/SunIcon'
import ThemeLightDarkIcon from './icons/ThemeLightDarkIcon'

let index = 0
let themes: ThemeMode[] = ['auto', 'light', 'dark']

export interface AppThemeToggleProps {
  //
}

const AppThemeToggle = (): JSX.Element => {
  const { mode, setMode } = useTheme()

  function renderIcon() {
    if (mode === 'auto') return <ThemeLightDarkIcon className="svg-icon dark:fill-slate-300" />

    if (mode === 'dark') {
      return <SunIcon className="svg-icon dark:fill-slate-300" />
    } else {
      return <MoonIcon className="svg-icon dark:fill-slate-300" />
    }
  }

  function handleNextTheme() {
    index = (index + 1) % themes.length
    setMode(themes[index])
  }

  return (
    <button onClick={handleNextTheme} aria-label="Theme change">
      {renderIcon()}
    </button>
  )
}

export default AppThemeToggle
