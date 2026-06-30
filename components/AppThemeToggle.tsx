'use client'
import React, { useEffect, useState } from "react";
import { useTheme } from 'next-themes'

import MoonIcon from './icons/MoonIcon'
import SunIcon from './icons/SunIcon'
import ThemeLightDarkIcon from './icons/ThemeLightDarkIcon'

const themes = ['system', 'light', 'dark']

export interface AppThemeToggleProps {
  //
}

const AppThemeToggle = (): React.ReactElement | null => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  function renderIcon() {
    if (theme === 'system') return <ThemeLightDarkIcon className="svg-icon dark:fill-slate-300" />

    if (theme === 'dark') {
      return <SunIcon className="svg-icon dark:fill-slate-300" />
    } else {
      return <MoonIcon className="svg-icon dark:fill-slate-300" />
    }
  }

  function handleNextTheme() {
    const currentIndex = themes.indexOf(theme || 'system')
    const nextIndex = (currentIndex + 1) % themes.length
    setTheme(themes[nextIndex])
  }

  return (
    <button onClick={handleNextTheme} aria-label="Theme change">
      {renderIcon()}
    </button>
  )
}

export default AppThemeToggle
