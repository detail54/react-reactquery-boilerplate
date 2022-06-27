import styled from 'styled-components'

const FooterEl = styled.footer`
  width: 100vw;
  position: fixed;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.black_1};
  color: ${({ theme }) => theme.fontColors.white};
`

export default FooterEl
