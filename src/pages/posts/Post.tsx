import React from 'react'
// hooks
import usePost from 'hooks/usePost'
// lib
import { useMatch } from 'react-router-dom'

const Post: React.FC = () => {
  const id = Number(useMatch('posts/:id')?.params.id)

  const { getPost } = usePost()
  const { data: postData, isLoading, error, isError } = getPost(id)

  return <div>{postData?.body}</div>
}

export default Post
