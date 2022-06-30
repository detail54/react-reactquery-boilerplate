import { AxiosResponse } from 'axios'
import {
  useQuery as useQueryOrigin,
  UseQueryOptions,
  UseQueryResult,
  useMutation as useMutationOrigin,
  UseMutationOptions,
  UseMutationResult,
  QueryFunctionContext,
  useQueryClient,
} from 'react-query'
import api from '../utils/axios'

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
      onError,
      useErrorBoundary: !onError,
      ...options,
    },
  )
}

export const useMutation = <T, S>(
  url: string,
  mutationFn: (data: T | S) => Promise<AxiosResponse<S>>,
  params?: object,
  updater?: (oldData: T, newData: S) => T,
  options?: Omit<
    UseMutationOptions<AxiosResponse, Error, T | S>,
    'mutationFn' | 'onMutate' | 'onError' | 'onSettled'
  >,
): UseMutationResult<AxiosResponse, Error, T | S> => {
  const queryClient = useQueryClient()

  return useMutationOrigin<AxiosResponse, Error, T | S>(mutationFn, {
    onMutate: async (data) => {
      await queryClient.cancelQueries([url, params])

      const previousData = queryClient.getQueriesData([url, params])

      queryClient.setQueriesData<T>([url, params], (oldData) => {
        return updater && oldData ? updater(oldData, data as S) : (data as T)
      })

      return previousData
    },
    onError: (_, __, context) => {
      queryClient.setQueryData([url, params], context)
    },
    onSettled: () => {
      queryClient.invalidateQueries([url, params])
    },
    ...options,
  })
}

export const usePostMutation = <T, S>(
  url: string,
  params?: object,
  updater?: (oldData: T, newData: S) => T,
  options?: Omit<
    UseMutationOptions<AxiosResponse, Error, T | S>,
    'mutationFn' | 'onMutate' | 'onError' | 'onSettled'
  >,
): UseMutationResult<AxiosResponse, Error, T | S> => {
  return useMutation<T, S>(
    url,
    (data) => api.post<S>(url, { data, params }),
    params,
    updater,
    options,
  )
}
