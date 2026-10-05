'use client'

import { createContext, useContext } from 'react'

const ThemeContext = createContext({ dark: true, setDark: () => {} })

export function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value={{ dark: true, setDark: () => {} }}>
      <div className="dark min-h-screen bg-[#07070d] text-zinc-100">{children}</div>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
