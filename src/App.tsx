import React, { useState } from 'react'
import Header from 'layout/Header'
import Main from 'layout/Main'
import Footer from 'layout/Footer'
import { ThemeProvider } from 'styled-components'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import queryClient from './config/reactQuery'
import GlobalStyle from './GlobalStyle'
import RightTheme from './ThemeRight'
import DarkTheme from './ThemeDark'

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  const changeThemeButtonText = isDarkMode ? 'right mode' : 'dark mode'

  const onChangeTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={isDarkMode ? DarkTheme : RightTheme}>
        <GlobalStyle />
        <Header
          changeThemeButtonText={changeThemeButtonText}
          onChangeTheme={onChangeTheme}
        />
        <Main />
        <Footer />
      </ThemeProvider>
      <ReactQueryDevtools
        initialIsOpen={false}
        position='bottom-right'
        panelProps={{ className: 'devtools' }}
      />
    </QueryClientProvider>
  )
}

export default App
