import styled, { css } from 'styled-components'
// interface
import IStyleProps from 'styleProps'

const List = styled.ul<IStyleProps>`
  ${({ paddingX, paddingY, theme }) => css`
    padding-top: ${paddingY && theme.paddings[paddingY]};
    padding-bottom: ${paddingY && theme.paddings[paddingY]};
    padding-left: ${paddingX && theme.paddings[paddingX]};
    padding-right: ${paddingX && theme.paddings[paddingX]};
  `}
  border: 1px solid black;
`

export default {
  List,
}
