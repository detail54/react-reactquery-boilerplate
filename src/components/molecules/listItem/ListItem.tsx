import React from 'react'
// interface
import { ColorType, FontColorType, SizeType } from 'styleProps'
import Button, { ButtonType } from 'components/atoms/button/Button'
// components
import Text from 'components/atoms/text/Text'
// styles
import ListItems from './ListItem.styles'

type ListItemType =
  | 'ListItem'
  | 'NumberListItem'
  | 'ButtonListItem'
  | 'NumberAndButtonListItem'

interface IProps {
  type: ListItemType
  paddingX?: SizeType<'zero'>
  paddingY: SizeType<'zero'>
  fontColor?: FontColorType
  bgColor?: ColorType
  itemNumber?: number
  content: string | number
  button?: ButtonType
  buttonSize?: SizeType
  buttonText?: string
  onClick?: () => void
}

const ListItem: React.FC<IProps> = ({
  type,
  paddingX,
  paddingY,
  fontColor,
  bgColor,
  itemNumber = 0,
  content,
  button,
  buttonSize = 'md',
  buttonText = 'no buttonText',
  onClick = () => {
    // eslint-disable-next-line no-alert
    alert('no onClick attribute')
  },
}) => {
  const ListItemEl = ListItems[type]
  const numberEl = (type === 'NumberListItem' ||
    type === 'NumberAndButtonListItem') && <Text text={itemNumber} />
  const buttonEl = (type === 'ButtonListItem' ||
    type === 'NumberAndButtonListItem') && (
    <Button
      type={button}
      size={buttonSize}
      text={buttonText}
      onClick={onClick}
    />
  )

  return (
    <ListItemEl
      paddingX={paddingX}
      paddingY={paddingY}
      fontColor={fontColor}
      bgColor={bgColor}
    >
      {numberEl}
      <Text text={content} fontColor={fontColor} />
      {buttonEl}
    </ListItemEl>
  )
}

ListItem.defaultProps = {
  paddingX: undefined,
  fontColor: undefined,
  bgColor: undefined,
  itemNumber: undefined,
  button: undefined,
  buttonSize: undefined,
  buttonText: undefined,
  onClick: undefined,
}

export default ListItem
