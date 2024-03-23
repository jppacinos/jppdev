import {
  Dispatch,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

export type Theme = 'light' | 'dark'

export type ThemeMode = Theme | 'auto'

export type ThemeContext = {
  mode: ThemeMode
  theme: Theme | undefined
  systemTheme: Theme | undefined
  setMode: Dispatch<SetStateAction<ThemeMode>>
}

export const themeStorageKey = 'app-theme'

export const ThemeContext = createContext<ThemeContext>({
  mode: 'auto',
  theme: undefined,
  systemTheme: undefined,
  setMode: () => {},
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [systemTheme, setSystemTheme] = useState<Theme | undefined>(undefined)
  const [theme, setTheme] = useState<Theme | undefined>(undefined)
  const [mode, _setMode] = useState<ThemeMode>('auto')

  const setMode: Dispatch<SetStateAction<ThemeMode>> = useCallback(
    (action) => {
      _setMode(action)

      if (typeof window === 'undefined') {
        return
      }

      window.localStorage.setItem(
        themeStorageKey,
        typeof action === 'function' ? action(mode) : action
      )
    },
    [mode]
  )

  function handleThemeChange(theme: Theme) {
    if (theme === 'dark') {
      document.documentElement.classList.remove('light')
      document.documentElement.classList.add('dark')
      setTheme('dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
      setTheme('light')
    }
  }

  // Actively listen to system theme changes and update the `systemTheme` state.
  useEffect(() => {
    const matchMedia = window.matchMedia('(prefers-color-scheme: dark)')

    // Set the initial system theme.
    setSystemTheme(matchMedia.matches ? 'dark' : 'light')

    const listener = (event: MediaQueryListEvent) => {
      // Update the system theme state when the media query changes.
      setSystemTheme(event.matches ? 'dark' : 'light')
    }

    matchMedia.addEventListener('change', listener)
    return () => {
      matchMedia.removeEventListener('change', listener)
    }
  }, [])

  // Update the `theme` saved in the localStorage on the client side.
  useEffect(() => {
    const savedTheme = window.localStorage.getItem(themeStorageKey)

    if (savedTheme === null) {
      // If the `systemTheme` is already resolved, we will set the theme to `systemTheme`.
      if (systemTheme !== undefined) setMode(systemTheme)
      return
    }

    // If the saved theme is valid, we will set the theme to the saved theme.
    if (['auto', 'light', 'dark'].includes(savedTheme)) {
      setMode(savedTheme as ThemeMode)
    }
  }, [setMode, systemTheme])

  useEffect(() => {
    // If `systemTheme` is not resolved at the moment, we will do nothing.
    if (systemTheme === undefined) {
      return
    }

    handleThemeChange(mode !== 'auto' ? mode : systemTheme)
  }, [systemTheme, mode])

  return (
    <ThemeContext.Provider value={{ mode, theme, systemTheme, setMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
