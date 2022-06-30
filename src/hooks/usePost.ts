import API_URL from './api/urls'
// interface
import { IPost, IPostBody } from './api/interface'
// hooks
import { useQuery, usePostMutation } from './useReactQuery'

const usePost = () => {
  const getPosts = (onError?: (error: Error) => void) => {
    return useQuery<IPost[]>(API_URL.POSTS, undefined, { onError })
  }

  const getPost = (id: number, onError?: (error: Error) => void) => {
    return useQuery<IPost>(`${API_URL.POSTS}/${id}`, undefined, { onError })
  }

  const addPost = () => {
    return usePostMutation<IPost[], IPostBody>(API_URL.POSTS, undefined)
  }

  return {
    getPosts,
    getPost,
    addPost,
  }
}

export default usePost
