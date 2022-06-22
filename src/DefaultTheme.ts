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

export const colors = {
  'black-100': '#393939',
  'black-200': '#2F2F2F',
  'black-300': '#212121',
  'black-400': '#000000',
  'navy-100': '#2D3F64',
  'navy-200': '#253557',
  'navy-300': '#1A2A4D',
  'navy-400': '#14213D',
  'orange-100': '#FFBF55',
  'orange-200': '#FFB742',
  'orange-300': '#FFB02F',
  'orange-400': '#FCA311',
  'grey-100': '#F6F6F6',
  'grey-200': '#F0F0F0',
  'grey-300': '#EAEAEA',
  'grey-400': '#E5E5E5',
  white: '#fff',
}

const breakPoint = {
  xs: '0',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
}

const theme: DefaultTheme = {
  colors,
  fontSizes,
  breakPoint,
}

export default theme
