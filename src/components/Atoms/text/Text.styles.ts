import styled, { css } from 'styled-components'
import IStyleProps from 'styleProps'

const Text = styled.span<IStyleProps>`
  ${({ fontColor, fontSize, theme }) => css`
    font-size: ${fontSize ? theme.fontSizes[fontSize] : theme.fontSizes.base};
    color: ${fontColor ? theme.fontColors[fontColor] : theme.fontColors.base};
  `}
`

const BoldText = styled(Text)`
  font-weight: ${({ theme }) => theme.fontWeight.xl};
`

export default {
  Text,
  BoldText,
}
