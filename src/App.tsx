import React, { useState } from 'react'
// styles
import { ThemeProvider } from 'styled-components'
import RightTheme from './ThemeRight'
import DarkTheme from './ThemeDark'
import GlobalStyle from './GlobalStyle'
// components
import Home from './pages/home'
import Button from './components/atoms/button/Button'
import AppWrap from './App.styles'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  const changeThemeButtonText = isDarkMode ? 'right mode' : 'dark mode'

  const changeTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <ThemeProvider theme={isDarkMode ? DarkTheme : RightTheme}>
      <GlobalStyle />
      <AppWrap>
        <Button
          type='RoundButton'
          size='xl'
          bgColor='orange_4'
          text={changeThemeButtonText}
          onClick={changeTheme}
        />
        <Home />
      </AppWrap>
    </ThemeProvider>
  )
}

export default App
