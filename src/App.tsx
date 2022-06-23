import React, { useState } from 'react'
// layout
import Header from 'layout/Header'
import Footer from 'layout/Footer'
// styles
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './GlobalStyle'
import RightTheme from './ThemeRight'
import DarkTheme from './ThemeDark'
import AppWrap from './App.styles'
// components
import Home from './pages/home'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  const changeThemeButtonText = isDarkMode ? 'right mode' : 'dark mode'

  const onChangeTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <ThemeProvider theme={isDarkMode ? DarkTheme : RightTheme}>
      <GlobalStyle />
      <AppWrap>
        <Header
          changeThemeButtonText={changeThemeButtonText}
          onChangeTheme={onChangeTheme}
        />
        <Home />
        <Footer />
      </AppWrap>
    </ThemeProvider>
  )
}

export default App
