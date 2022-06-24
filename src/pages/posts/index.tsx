import React from 'react'
// hook
import { useQuery } from 'hooks/useReactQuery'
// api
import { getPosts, IPost } from 'api/posts'
// error
import { AxiosError } from 'axios'
// styles
import PostsEl from './index.styles'

const Posts: React.FC = () => {
  const errors = (error: AxiosError) => {
    console.log(error)
  }

  const { data, error, isLoading, isError } = useQuery<IPost[], 'posts'>({
    queryFn: getPosts,
  })

  console.log('data::', data)
  console.log('error:::', error)
  console.log('isLoading:::', isLoading)
  console.log('isError:::', isError)

  return <PostsEl>posts</PostsEl>
}

export default Posts
