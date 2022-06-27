import React from 'react'
// components & type
import List from 'components/organisms/list/List'
import { IListItemProps } from 'components/molecules/listItem/ListItem'
// styles
import Boards from './Board.styles'

type TBoard = 'BasicBoard'

interface IProps {
  type: TBoard
  headerText?: string
  contents: IListItemProps[] | undefined
  height: number
}

const Board: React.FC<IProps> = ({ type, headerText, contents, height }) => {
  const HeaderEl = Boards.Header
  const BoardEl = Boards[type]
  return (
    <BoardEl height={height}>
      {headerText && <HeaderEl>{headerText}</HeaderEl>}
      <List
        type='List'
        listItemType='NumberListItem'
        contents={contents}
        paddingY='zero'
      />
    </BoardEl>
  )
}

Board.defaultProps = {
  headerText: undefined,
}

export default Board
