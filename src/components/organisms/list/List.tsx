import React, { useId } from 'react'
// conponents & type
import ListItem, {
  ListItemType,
  IListItemProps,
} from 'components/molecules/listItem/ListItem'
import { FontColorType, ColorType, SizeType } from 'styleProps'
// style
import Lists from './List.styles'

type ListTypee = 'List'

interface IProps {
  type: ListTypee
  listItemType: ListItemType
  bgColor?: ColorType
  fontColor?: FontColorType
  paddingX?: SizeType<'zero'>
  paddingY?: SizeType<'zero'>
  contents: IListItemProps[]
}

const List: React.FC<IProps> = ({
  type,
  listItemType,
  bgColor,
  fontColor,
  paddingX = 'zero',
  paddingY = 'zero',
  contents,
}) => {
  const ListEl = Lists[type]
  const basicListItem = contents.map((content) => (
    <ListItem
      key={useId()}
      type={listItemType}
      paddingX={content.paddingX}
      paddingY={content.paddingY ? content.paddingY : 'zero'}
      fontColor={fontColor}
      bgColor={bgColor}
      itemNumber={content.itemNumber}
      content={content.content}
      button={content.button}
      buttonSize={content.buttonSize}
      buttonText={content.buttonText}
      onClick={content.onClick}
      buttonClick={content.buttonClick}
    />
  ))
  return (
    <ListEl paddingX={paddingX} paddingY={paddingY}>
      {basicListItem}
    </ListEl>
  )
}

List.defaultProps = {
  bgColor: undefined,
  fontColor: undefined,
  paddingX: undefined,
  paddingY: undefined,
}

export default List
