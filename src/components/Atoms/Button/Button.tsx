import React from 'react'
import Buttons from './Button.styles'
import { SizeType, FontColorType, ColorType } from '../../../styleProps'

type ButtonType = 'BasicButton' | 'RoundButton'

interface IProps {
  type: ButtonType
  size: SizeType
  fontColor?: FontColorType
  bgColor?: ColorType
  text: string
  onClick: () => void
}

const Button: React.FC<IProps> = ({
  type,
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
  fontColor: 'basic',
  bgColor: 'white',
}

export default Button
