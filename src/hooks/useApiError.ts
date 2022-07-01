import { useCallback } from 'react'
import { AxiosError } from 'axios'
import defaultErrorHandlers from './api/defaultErrorHandlers'

const useApiError = (handlers?: Record<number | string, () => void>) => {
  const handleError = useCallback(
    (error: AxiosError) => {
      const httpStatus = error.response?.status || 0
      const handler = handlers || defaultErrorHandlers

      if (httpStatus) {
        handler[httpStatus]()
      } else {
        defaultErrorHandlers.default()
      }
    },
    [handlers],
  )

  return { handleError }
}

export default useApiError
