import {
  useQuery as useQueryOrigin,
  UseQueryOptions,
  UseQueryResult,
  useMutation as useMutationOrigin,
  UseMutationOptions,
  UseMutationResult,
  MutationFunction,
  MutationKey,
  QueryFunctionContext,
} from 'react-query'
import api from '../config/axios'

type TQueryKey = [string, object | undefined]

const get = async <T>({
  queryKey,
}: Omit<QueryFunctionContext<TQueryKey>, 'meta'>): Promise<T> => {
  const [url, params] = queryKey
  const { data } = await api.get<T>(url, { ...params })

  return data
}

export const useQuery = <T>(
  url: string,
  parmas?: object,
  options?: Omit<UseQueryOptions<T, Error, T, TQueryKey>, 'queryKey'>,
): UseQueryResult<T, Error> => {
  const onError = options && options.onError

  return useQueryOrigin<T, Error, T, TQueryKey>(
    [url, parmas],
    ({ queryKey }) => get<T>({ queryKey }),
    {
      enabled: !!url,
      useErrorBoundary: !onError,
      ...options,
    },
  )
}

export const useMutation = <T, V, C>(
  mutationKey: MutationKey,
  mutationFn: MutationFunction<T, V>,
  options?: Omit<
    UseMutationOptions<T, Error, V, C>,
    'mutationKey' | 'mutationFn'
  >,
): UseMutationResult<T, Error, V, C> => {
  const onError = options && options.onError

  return useMutationOrigin<T, Error, V, C>(mutationFn, {
    ...options,
    mutationKey,
    useErrorBoundary: !onError,
  })
}
