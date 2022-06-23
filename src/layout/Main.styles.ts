import styled from 'styled-components'

const MainEl = styled.main`
  width: 100vw;
  display: block;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.fontColors.themeColor};
`

export default MainEl
