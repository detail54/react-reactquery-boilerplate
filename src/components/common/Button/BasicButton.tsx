import React from 'react'
import Button from './BasicButton.styles'

interface IProps {
  text: string
}

const BasicButton: React.FC<IProps> = ({ text }) => {
  return <Button>{text}</Button>
}

export default BasicButton
