import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 1rem;
    margin: 0;
    width: 100vw;
    height: 100vh;
    
    #root {
      display: block;
    }
  }
  section, article, header, main, footer, nav, div, ul, ol, li, a, h1, h2, h3, h4, h5, h6, button, p {
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
  div, li, button {
    align-items: center;
    justify-content: center;
  }
`

export default GlobalStyle
