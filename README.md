# react-reactQuery-boilerplat

```
  - react  v18.2.0
  - react-router-dom  v6.3.0
  - react-query  v3.39.1
  - axios  v0.27.2
  - styled-components  v5.3.5
  - styled-normalize  v8.0.7
```

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

// src/api/posts.ts
const getPosts = async (): Promise<IPost[]> => {
  const { data: posts } = await api.get(API_URL.posts)

  return posts
}
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
- react-query의 useQuery는 4가지의 generic을 받는다.<br />
  여기서 TData는 TQueryFnData와 같게 설정해놓고, TError의 경우 AxiosError로 세팅해 놓았다.<br />
  그래서 만들어놓은 useQuery hook을 실제로 호출 할 때에는 TQueryFnData인 매칭할 데이터 타입과 TQueryKey인 key값만 generic으로 넘겨주고 parameter에는 options객체 안에 api호출 함수인 queryFn과 onError등 을 넣어주면 된다.<br />
  - TQueryFnData = unknown,<br />
  - TError = unknown,<br />
  - TData = TQueryFnData,<br />
  - TQueryKey extends QueryKey = QueryKey<br />

```tsx
// src/hooks/useQuery.ts
import { AxiosError } from 'axios'
import {
  useQuery as useQueryOrigin,
  UseQueryOptions,
  UseQueryResult,
} from 'react-query'

type QueryKey = string | readonly unknown[]

const useQuery = <T, K extends QueryKey>(
  options?: UseQueryOptions<T, AxiosError, T, K>,
): UseQueryResult<T, AxiosError> => {
  const onError = options && options.onError

  return useQueryOrigin<T, AxiosError, T, K>({
    ...options,
    useErrorBoundary: !onError,
  })
}

export default useQuery
```

## style

1. pattern

   > - common components의 경우 atomic pattern을 적용하여<br /><br />
   >   | src/components/atoms <br />
   >   | src/components/molecules <br />
   >   | src/components/organisms <br />
   >   | src/components/templates <br /><br />
   >   이렇게 4가지로 구분하였으며, 각 디렉터리에 요소들을 분리하기 위해서 추가로 하위 디렉터리를 만들어 구분한다.

2. Theme

   > - src/ThemeDark.ts: 다크 테마에 적용할 스타일 값 선언
   > - src/ThemeRight.ts: 기본 테마에 적용할 스타일 값 선언

3. GlobalStyle

   > - src/GlobalStyle.ts: 전역 스타일. 기본적으로 적용해 놓을 스타일 작성.

4. Style props interface

   > - src/styleProps.ts: Theme와 각 components의 style에 적용할 interface 선언.

5. create styled components
   > - 같은 Elements type 의 components를 여러개 만들 경우 basic styled components를 만들어 상속받아서 사용.
   > - basic styled components는 props로 받아올 데이터를 선언해 놓은 인터페이스를 generic넣고, props들을 열거하여 theme와 그 외 props값을 같이 사용할 수 있게 한다.<br />
   > - (현재 theme의 경우 any타입인 상태여서 theme의 Key값에 자동완성으로 접근 할 수없는 상태라서 보완이 필요 하다)

```ts
// basic style
const Button = styled.button<IButtonStyleProps>`
  ${({ size, fontColor, bgColor, theme }) => css`
    width: ${theme.buttonWidth[size]};
    height: ${theme.buttonHeight[size]};
    color: ${fontColor ? theme.fontColors[fontColor] : theme.fontColors.base};
    background-color: ${bgColor ? theme.colors[bgColor] : theme.colors.white};
  `}
`

const BasicButton = styled(Button)`
  border: 1px solid black;
`

const RoundButton = styled(Button)`
  border: 1px solid black;
  border-radius: ${(props) => props.theme.calcRem(10)};
`
```
