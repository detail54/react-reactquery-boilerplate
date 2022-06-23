import React from 'react'
// interface
import { FontColorType } from 'styleProps'
// styles
import Texts from './Text.styles'

type TextType = 'Text' | 'BoldText'

interface IProps {
  type?: TextType
  fontColor?: FontColorType
  text: string | number
}

const Text: React.FC<IProps> = ({ type = 'Text', fontColor, text }) => {
  const TextEl = Texts[type]
  return <TextEl fontColor={fontColor}>{text}</TextEl>
}

Text.defaultProps = {
  type: undefined,
  fontColor: undefined,
}

export default Text
