import { useCallback, useEffect, useState } from 'react'

export type ThemeMode = 'light' | 'dark'

export const storageKey = 'app-theme'

export function getLocalTheme() {
  const theme = window.localStorage.getItem(storageKey)

  // prefers color scheme
  if (!theme) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  // use local storage
  return 'dark' === theme.toLowerCase() ? 'dark' : 'light'
}

export function useTheme() {
  const [isTheme, setIsTheme] = useState<ThemeMode>('light')

  const setTheme = useCallback((theme: ThemeMode, cache = true) => {
    if (theme === 'dark') {
      document.documentElement.classList.remove('light')
      document.documentElement.classList.add('dark')
    } else {
      // light mode
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
    }

    if (cache) window.localStorage.setItem(storageKey, theme)

    setIsTheme(theme)
  }, [])

  useEffect(() => {
    setTheme(getLocalTheme())
  }, [setTheme])

  return [isTheme, setTheme] as const
}

export default useTheme
