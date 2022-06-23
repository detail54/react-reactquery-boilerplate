import React from 'react'
import { ColorType, FontColorType, SizeType } from 'styleProps'
import Buttons from './Button.styles'

type ButtonType = 'BasicButton' | 'RoundButton'

interface IProps {
  type?: ButtonType
  size: SizeType
  fontColor?: FontColorType
  bgColor?: ColorType
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
  fontColor: 'basic',
  bgColor: 'white',
}

export default Button
