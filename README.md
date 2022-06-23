# react-reactQuery-boilerplat

```
  - react  v18.2.0
  - react-router-dom  v6.3.0
  - styled-components  v5.3.5
  - styled-normalize  v8.0.7
```

# directory structure

```

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
