export type SizeType<T = string> = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | T
export type FontSizeType =
  | 'xxs'
  | 'xs'
  | 'small'
  | 'base'
  | 'large'
  | 'xl'
  | 'xxl'
  | 'xxxl'
  | 'titleSize'
export type FontWeightType = 100 | 200 | 300 | 400 | 500 | 600
export type FontColorType = 'themeColor' | 'grey' | 'white' | 'black'
export type ColorType =
  | 'black_1'
  | 'black_2'
  | 'black_3'
  | 'black_4'
  | 'navy_1'
  | 'navy_2'
  | 'navy_3'
  | 'navy_4'
  | 'orange_1'
  | 'orange_2'
  | 'orange_3'
  | 'orange_4'
  | 'grey_1'
  | 'grey_2'
  | 'grey_3'
  | 'grey_4'
  | 'white'

export default interface IStyleProps {
  fontColor?: FontColorType
  fontSize?: FontSizeType
  fontWeight?: FontWeightType
  bgColor?: ColorType
  mediaSize?: SizeType
  marginX?: SizeType<'zero'>
  marginY?: SizeType<'zero'>
  paddingX?: SizeType<'zero'>
  paddingY?: SizeType<'zero'>
}

export interface IButtonStyleProps extends IStyleProps {
  size: SizeType
}
