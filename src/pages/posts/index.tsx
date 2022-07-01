import React from 'react'
// components & type
import { IListItemProps } from 'components/molecules/listItem/ListItem'
import Board from 'components/templates/board/Board'
import LinkButton from 'components/atoms/button/LinkButton'
// lib
import { Link } from 'react-router-dom'
// hooks
import usePost from 'hooks/usePost'
// styles
import PostsMain from './index.styles'

const Posts: React.FC = () => {
  const { getPosts } = usePost()
  const { data: postsData, isLoading, error, isError } = getPosts()

  const contents: IListItemProps[] | undefined = postsData?.map(
    (content, index) => ({
      type: 'NumberListItem',
      content: <Link to={`/posts/${content.id}`}>{content.title}</Link>,
      paddingY: 'md',
      itemNumber: index + 1,
    }),
  )

  return (
    <PostsMain>
      <Board
        type='BasicBoard'
        headerText='Posts'
        contents={contents}
        height={500}
        isLoading={isLoading}
      />
      <LinkButton size='md' text='Add post' link='add' marginY='sm' />
    </PostsMain>
  )
}

export default Posts
