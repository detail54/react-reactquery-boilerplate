import useApiError from 'hooks/useApiError'
import { QueryClient } from 'react-query'

const { handleError } = useApiError()

export default new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      useErrorBoundary: true,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
    mutations: {
      useErrorBoundary: true,
    },
  },
})
