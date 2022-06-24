import React from 'react'
// lib
import { Link } from 'react-router-dom'
// components
import ListItem from 'components/molecules/listItem/ListItem'
// styles
import HomeMain from './index.styles'

const Home: React.FC = () => {
  const onClick = () => {
    alert('hello')
  }
  return (
    <HomeMain>
      <Link to='/posts'>/posts</Link>
      <ListItem
        type='ListItem'
        paddingY='zero'
        bgColor='grey_4'
        content='basic list item'
      />
      <ListItem
        type='NumberListItem'
        paddingY='xs'
        bgColor='navy_1'
        content='number list item. (no itemNumber attribute)'
      />
      <ListItem
        type='NumberListItem'
        paddingY='sm'
        bgColor='orange_1'
        content='number list item. (has itemNumber attribute)'
        itemNumber={3}
      />
      <ListItem
        type='ButtonListItem'
        paddingY='md'
        content='button list item (no button text attribute, has onClick attribute, no paddingX)'
        onClick={onClick}
      />
      <ListItem
        type='NumberAndButtonListItem'
        paddingX='lg'
        paddingY='lg'
        content='number with buttonn list item (has onClick, no itemNumber, has paddingX)'
        onClick={onClick}
      />
      <ListItem
        type='NumberAndButtonListItem'
        paddingX='sm'
        paddingY='xl'
        content='number with buttonn list item (no onClick, has itemNumber, has paddingX)'
        itemNumber={6}
      />
    </HomeMain>
  )
}

export default Home
