import styled from 'styled-components'
// innterface
import { IBoareStyleProps } from 'styleProps'

const Header = styled.h2`
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.navy_1};
  color: ${({ theme }) => theme.colors.white};
`

const Board = styled.section<IBoareStyleProps>`
  flex-direction: column;
  height: ${({ height, theme }) => `${theme.calcRem(height)}`};
  border: 1px solid black;
  overflow: auto;
`

const BasicBoard = styled(Board)`
  flex-direction: column;
`

export default {
  Header,
  BasicBoard,
}
