import React from 'react'
// interface
import { TFontColor } from 'styleProps'
// styles
import Texts from './Text.styles'

type TText = 'Text' | 'BoldText'

interface IProps {
  type?: TText
  fontColor?: TFontColor
  text: string | number | undefined
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
