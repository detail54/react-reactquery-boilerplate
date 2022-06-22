import React from 'react'
import ReactDOM from 'react-dom/client'
// styles
import { ThemeProvider } from 'styled-components'
import DefaultTheme from './DefaultTheme'
import GlobalStyle from './GlobalStyle'
import App from './App'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)

reportWebVitals()
