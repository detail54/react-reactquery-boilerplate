import React, { useState } from 'react'
// hooks
import usePost from 'hooks/usePost'
// lib
import { useNavigate } from 'react-router-dom'
// styles
import AddPostForm from 'components/templates/form/AddPostForm'
import PostsMain from './index.styles'

const WritePost: React.FC = () => {
  const navigate = useNavigate()

  const { addPost } = usePost()
  const mutationAdd = addPost((oldData, newData) => [...oldData, newData])

  const [title, setTitle] = useState<string>('')
  const [body, setBody] = useState<string>('')
  const userId = 1

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
  }

  const onChangeBody = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBody(e.currentTarget.value)
  }

  const onSubmit = async () => {
    try {
      await mutationAdd.mutateAsync({
        title,
        body,
        userId,
      })
      navigate(-1)
    } catch (e) {
      navigate('/posts')
    }
  }

  return (
    <PostsMain>
      <AddPostForm
        title={title}
        body={body}
        onChangeTitle={onChangeTitle}
        onChangeBody={onChangeBody}
        onSubmit={onSubmit}
      />
    </PostsMain>
  )
}

export default React.memo(WritePost)
