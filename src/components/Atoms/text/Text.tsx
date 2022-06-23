import React from 'react'
// styles
import Texts from './Text.styles'

type TextType = 'Text' | 'BoldText'

interface IProps {
  type?: TextType
  text: string
}

const Text: React.FC<IProps> = ({ type = 'Text', text }) => {
  const TextEl = Texts[type]
  return <TextEl>{text}</TextEl>
}

Text.defaultProps = {
  type: 'Text',
}

export default Text
