import React from 'react'
// hook
import { useQuery } from 'hooks/useReactQuery'
// api
import { getPosts, IPost } from 'api/posts'
// error
import { AxiosError } from 'axios'
// components & type
import { IListItemProps } from 'components/molecules/listItem/ListItem'
import Board from 'components/templates/Board'
// styles
import PostsEl from './index.styles'

const Posts: React.FC = () => {
  const onError = (error: AxiosError) => {
    console.log(error)
  }

  const {
    data: postsData,
    error,
    isLoading,
    isError,
  } = useQuery<IPost[], 'posts'>({
    queryFn: getPosts,
    onError,
  })

  const contents: IListItemProps[] | undefined = postsData?.map(
    (content, index) => ({
      type: 'NumberListItem',
      content: content.title,
      paddingY: 'md',
      itemNumber: index + 1,
    }),
  )

  return (
    <PostsEl>
      <Board
        type='BasicBoard'
        headerText='Posts'
        contents={contents}
        height={500}
      />
    </PostsEl>
  )
}

export default Posts
