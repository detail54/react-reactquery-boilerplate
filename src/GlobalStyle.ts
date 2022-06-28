import { createGlobalStyle, DefaultTheme } from 'styled-components'

export default createGlobalStyle<{ theme: DefaultTheme }>`
  body {
    font-size: 1rem;
    margin: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.fontColors.themeColor};
    
    #root {
      display: block;
    }
  }
  section, article, header, main, footer, nav, span, div, ul, ol, li, a, h1, h2, h3, h4, h5, h6, button, p {
    display: flex;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
  }
  
  ul, ol {
    list-style: none;
  }
  a {
    color: black;
    text-decoration: none;
  }
  button {
    cursor: pointer;
  }
  span, div, li, button {
    align-items: center;
    justify-content: center;
  }
`
