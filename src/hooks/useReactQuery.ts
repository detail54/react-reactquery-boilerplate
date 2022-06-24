import { AxiosError } from 'axios'
import {
  useQuery as useQueryOrigin,
  UseQueryOptions,
  UseQueryResult,
  useMutation as useMutationOrigin,
  UseMutationOptions,
  UseMutationResult,
  MutationFunction,
  MutationKey,
} from 'react-query'

type TQueryKey = string | readonly unknown[]

export const useQuery = <T, K extends TQueryKey>(
  options?: UseQueryOptions<T, AxiosError, T, K>,
): UseQueryResult<T, AxiosError> => {
  const onError = options && options.onError

  return useQueryOrigin<T, AxiosError, T, K>({
    ...options,
    useErrorBoundary: !onError,
  })
}

export const useMutation = <T, V, C>(
  mutationKey: MutationKey,
  mutationFn: MutationFunction<T, V>,
  options?: Omit<
    UseMutationOptions<T, AxiosError, V, C>,
    'mutationKey' | 'mutationFn'
  >,
): UseMutationResult<T, AxiosError, V, C> => {
  const onError = options && options.onError

  return useMutationOrigin<T, AxiosError, V, C>(mutationFn, {
    ...options,
    mutationKey,
    useErrorBoundary: !onError,
  })
}
