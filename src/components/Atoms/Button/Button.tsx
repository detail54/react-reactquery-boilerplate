import React from 'react'
import { TColor, TFontColor, TSize } from 'styleProps'
import Buttons from './Button.styles'

export type ButtonType = 'BasicButton' | 'RoundButton'

interface IProps {
  type?: ButtonType
  size: TSize
  fontColor?: TFontColor
  bgColor?: TColor
  text: string
  onClick: () => void
}

const Button: React.FC<IProps> = ({
  type = 'BasicButton',
  size,
  fontColor,
  bgColor,
  text,
  onClick,
}) => {
  const ButtonEl = Buttons[type]
  return (
    <ButtonEl
      onClick={onClick}
      size={size}
      fontColor={fontColor}
      bgColor={bgColor}
    >
      {text}
    </ButtonEl>
  )
}

Button.defaultProps = {
  type: 'BasicButton',
  fontColor: 'black',
  bgColor: 'white',
}

export default Button
