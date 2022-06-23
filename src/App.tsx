import React, { useState } from 'react'
// layout
import Header from 'layout/Header'
import Main from 'layout/Main'
import Footer from 'layout/Footer'
// styles
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './GlobalStyle'
import RightTheme from './ThemeRight'
import DarkTheme from './ThemeDark'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  const changeThemeButtonText = isDarkMode ? 'right mode' : 'dark mode'

  const onChangeTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <ThemeProvider theme={isDarkMode ? DarkTheme : RightTheme}>
      <GlobalStyle />
      <Header
        changeThemeButtonText={changeThemeButtonText}
        onChangeTheme={onChangeTheme}
      />
      <Main />
      <Footer />
    </ThemeProvider>
  )
}

export default App
