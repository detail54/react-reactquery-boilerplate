# react-reactQuery-boilerplat

> - react v18.2.0
> - react-router-dom v6.3.0
> - react-query v3.39.1
> - axios v0.27.2
> - styled-components v5.3.5
> - styled-normalize v8.0.7

## directory structure

```

```

## server state

- axios를 사용하여 api 통신한다.<br />
  instance 객체를 생성하여 기본 설정값을 세팅 해 놓고 import 해서 사용.

```tsx
// src/config/axios.ts
const api: AxiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json',
    'X-Access-Token': 'access-token',
  },
  timeout: 10000,
})
```

- react-query를 사용하여 server state관리.<br />
  QueryClient의 기본설정 세팅하여 모든 hook에 설정 적용되도록 함.<br />
  useErrorBoundary를 true로 설정하여 호출한 곳 에서 직접 에러를 처리하도록 함.

```ts
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
```

- error처리를 react-query에게 맡길경우 위에 설정한 useErrorBoundary를 false로 변경해야 할 필요가 있음. <br />
  그래서 error 콜백을 넘겨줄 때에만 useErrorBoundary를 false로 변경처리 하기위해 useQuery를 한번 더 감싸서 onError가 있을 경우에만 변경되도록 처리한다.
- 이때 파라미터로 url, params를 받아오고 만들어놓은 get함수를 호출하는 콜백을 queryFn 값으로 넘겨준다.

```tsx
// src/hooks/useReactQuery.ts
const get = async <T,>({
  queryKey,
}: Omit<QueryFunctionContext<TQueryKey>, 'meta'>): Promise<T> => {
  const [url, params] = queryKey
  const { data } = await api.get<T>(url, { ...params })

  return data
}

export const useQuery = <T,>(
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
```

## style

1. <strong>pattern</strong>

   > - common components의 경우 atomic pattern을 적용하여<br /><br />
   >   | src/components/atoms <br />
   >   | src/components/molecules <br />
   >   | src/components/organisms <br />
   >   | src/components/templates <br /><br />
   >   이렇게 4가지로 구분하였으며, 각 디렉터리에 요소들을 분리하기 위해서 추가로 하위 디렉터리를 만들어 구분한다.

2. <strong>Theme</strong>

   > - src/ThemeRight.ts: DefaultTheme를 기준으로하여 기본 테마에 적용할 스타일 값 선언.
   > - src/ThemeDark.ts: DefaultTheme를 기준으로하여 다크 테마에 적용할 스타일 값 선언.

3. <strong>style props interface</strong>

> - src/styled.d.ts 에서 모든 style관련된 타입을 선언.

4. <strong>GlobalStyle</strong>

> - src/GlobalStyle.ts: 전역 스타일. 기본적으로 적용해 놓을 스타일 작성.

5. <strong>create styled components</strong>

> - 같은 Elements type 의 components를 여러개 만들 경우 basic style을 가지고 있는 compnenet를 만들어 하위에서 상속받아서 사용.
> - basic styled components는 generic에 IStyleProps interface를 상속받은 interface를 넣고, props들을 열거하여 theme와 그 외 props값을 같이 사용할 수 있게 한다.<br />

https://github.com/detail54/react-reactquery-boilerplate/blob/fb36ce06a1ac6b66b9553877a96701955f1373b2/src/components/atoms/button/Button.styles.ts#L1-L42
