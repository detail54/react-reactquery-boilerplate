import React, { useState } from 'react'
// styles
import { ThemeProvider } from 'styled-components'
import DefaultTheme from './DefaultTheme'
import DarkTheme from './DarkTheme'
import GlobalStyle from './GlobalStyle'
// components
import Home from './pages/home'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)
  return (
    <ThemeProvider theme={isDarkMode ? DarkTheme : DefaultTheme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  )
}

export default App
