import { DefaultTheme } from 'styled-components'

const calcRem = (size: number) => `${size / 16}rem`

const fontSizes = {
  xsm: calcRem(13.6),
  sm: calcRem(13.6),
  base: calcRem(16),
  lg: calcRem(19.2),
  xl: calcRem(20),
  xxl: calcRem(24),
  xxx: calcRem(32),
  titleSize: calcRem(48),
}

const breakPoint = {
  xs: '0',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
}

export const colors = {
  black_1: '#393939',
  black_2: '#2F2F2F',
  black_3: '#212121',
  black_4: '#000000',
  navy_1: '#2D3F64',
  navy_2: '#253557',
  navy_3: '#1A2A4D',
  navy_4: '#14213D',
  orange_1: '#FFBF55',
  orange_2: '#FFB742',
  orange_3: '#FFB02F',
  orange_4: '#FCA311',
  grey_1: '#F6F6F6',
  grey_2: '#F0F0F0',
  grey_3: '#EAEAEA',
  grey_4: '#E5E5E5',
  white: '#fff',
}

const backgroundColor = '#b8b8b8'

const theme: DefaultTheme = {
  fontSizes,
  breakPoint,
  colors,
  backgroundColor,
}

export default theme
