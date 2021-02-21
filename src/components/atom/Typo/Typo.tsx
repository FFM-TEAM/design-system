import React from 'react'
import tw, { styled } from 'twin.macro'

import { ITypoProps } from '../../../models'

export type TypoProps = {
  /** TEXT TYPE */
  text: TextType
} & ITypoProps

type TextType =
  | 'H1'
  | 'H2'
  | 'H3'
  | 'H4'
  | 'H5'
  | 'S1'
  | 'S2'
  | 'S3'
  | 'S4'
  | 'B1'
  | 'B2'
  | 'B3'
  | 'B4'
  | 'B5'
  | 'L1'
  | 'L2'
  | 'L3'
  | 'L4'

/** 기본 속성 */
const baseStyle = tw`font-normal text-gray-900`
/** text 타입에 따른 */
const typeStyle = {
  /** Heading */
  H1: tw`font-black text-8xl`,
  H2: tw`font-black text-7xl`,
  H3: tw`font-black text-6xl`,
  H4: tw`font-black text-5xl`,
  H5: tw`font-black text-4xl`,
  /** Body */
  B1: tw`text-xl`,
  B2: tw`text-lg`,
  B3: tw`text-base`,
  B4: tw`text-sm`,
  B5: tw`text-xs`,
  /** subtitle */
  S1: tw`font-light text-4xxl`,
  S2: tw`font-light text-3xl`,
  S3: tw`font-light text-2xl`,
  S4: tw`font-light text-xl`,
  /** label */
  L1: tw`font-bold text-xl`,
  L2: tw`font-bold text-lg`,
  L3: tw`font-bold text-base`,
  L4: tw`font-bold text-sm`,
}
const getStyle = ({ text }: TypoProps) => ({
  ...baseStyle,
  ...typeStyle[text],
})

const Typography = styled.div<TypoProps>(getStyle)

function Typo({ text, children, style, ...rest }: TypoProps) {
  return (
    <Typography text={text} style={style} {...rest}>
      {children}
    </Typography>
  )
}

export default Typo
