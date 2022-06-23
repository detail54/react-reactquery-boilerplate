import styled from 'styled-components'

const AppWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: block;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.fontColors.basic};
`

export default AppWrap
