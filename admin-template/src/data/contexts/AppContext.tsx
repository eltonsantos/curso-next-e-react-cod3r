import { createContext, useEffect, useState } from "react";

// type Tema = 'dark' | ''

interface AppContextProps {
  theme?: string
  changeTheme?: () => void
}

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props) {
  const [theme, setTheme] = useState('dark')

  function changeTheme() {
    const newTheme = theme === '' ? 'dark' : ''
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  useEffect(() => {
    const saveTheme = localStorage.getItem('theme')
    setTheme(saveTheme)
  }, [])

  return (
    <AppContext.Provider value={{
      theme,
      changeTheme
    }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContext