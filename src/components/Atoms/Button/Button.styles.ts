import styled, { css } from 'styled-components'
import { IButtonStyleProps } from '../../../styleProps'

const defaultButtonStyle = css<IButtonStyleProps>`
  ${({
    size,
    fontColor,
    bgColor,
    marginX,
    marginY,
    paddingX,
    paddingY,
    theme,
  }) => css`
    width: ${theme.buttonWidth[size]};
    height: ${theme.buttonHeight[size]};
    color: ${fontColor ? theme.fontColors[fontColor] : theme.fontColors.base};
    background-color: ${bgColor ? theme.colors[bgColor] : theme.colors.white};
    padding-top: ${paddingY && theme.paddings[paddingY]};
    padding-bottom: ${paddingY && theme.paddings[paddingY]};
    padding-left: ${paddingX && theme.paddings[paddingX]};
    padding-right: ${paddingX && theme.paddings[paddingX]};
    margin-top: ${marginY && theme.margins[marginY]};
    margin-bottom: ${marginY && theme.margins[marginY]};
    margin-left: ${marginX && theme.margins[marginX]};
    margin-right: ${marginX && theme.margins[marginX]};
  `}
`

const BasicButton = styled.button`
  ${defaultButtonStyle}
`

const RoundButton = styled.button`
  ${defaultButtonStyle}
  border: 1px solid black;
  border-radius: ${(props) => props.theme.calcRem(10)};
`

export default {
  BasicButton,
  RoundButton,
}
