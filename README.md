# react-reactQuery-boilerplat

```
  - react  v18.2.0
  - react-router-dom  v6.3.0
  - styled-components  v5.3.5
  - styled-normalize  v8.0.7
```

## style pattern

1. Theme

   > - src/ThemeDark.ts: 다크 테마에 적용할 스타일 값 선언
   > - src/ThemeRight.ts: 기본 테마에 적용할 스타일 값 선언
   > -

2. GlobalStyle

   > - src/GlobalStyle.ts: 전역 스타일. 기본적으로 적용해 놓을 스타일 작성.

3. Style props interface

   > - src/styleProps.ts: Theme와 각 components의 style에 적용할 interface 선언.

4. pattern
   > - 같은 Elements type 의 components를 여러개 만들 경우 basic style을 만들어 각 styled components에 적용.
   > - basic style은 props로 받아올 데이터를 선언해 놓은 인터페이스를 generic으로 사용하여 theme와 그 외 props값을 같이 사용할 수 있게 한다.<br />
   >   (현재 theme의 경우 any타입인 상태여서 theme의 Key값에 자동완성으로 접근 할 수없는 상태라서 보완이 필요 하다)

```ts
// basic style
const defaultButtonStyle = css<IButtonStyleProps>`
  ${({ size, fontColor, bgColor, theme }) => css`
    width: ${theme.buttonWidth[size]};
    height: ${theme.buttonHeight[size]};
    color: ${fontColor ? theme.fontColors[fontColor] : theme.fontColors.base};
    background-color: ${bgColor ? theme.colors[bgColor] : theme.colors.white};
  `}
`

const BasicButton = styled.button`
  ${defaultButtonStyle}
`

const RoundButton = styled.button`
  ${defaultButtonStyle}
  border: 1px solid black;
  border-radius: ${(props) => props.theme.calcRem(10)};
`
```
