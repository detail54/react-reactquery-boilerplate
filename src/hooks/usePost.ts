import API_URL from './api/urls'
// interface
import { IPost } from './api/interface'
// hooks
import { useQuery } from './useReactQuery'

const usePost = () => {
  const getPosts = (onError?: (error: Error) => void) => {
    return useQuery<IPost[]>(API_URL.POSTS, undefined, { onError })
  }

  const getPost = (id: number, onError?: (error: Error) => void) => {
    return useQuery<IPost>(`${API_URL.POSTS}/${id}`, undefined, { onError })
  }

  return {
    getPosts,
    getPost,
  }
}

export default usePost
