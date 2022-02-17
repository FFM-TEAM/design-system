import React from 'react'
import tw, { styled } from 'twin.macro'

import Icon from '../Icon'

export type buttonProps = {
  /** BUTTON TYPE */
  variant?: 'primary' | 'unfilled' | 'text'
  /** BUTTON SIZE */
  size?: 'sm' | 'md' | 'lg'
  /** BUTTON ICON */
  isIcon?: boolean
  /** BUTTON 활성화 */
  disabled?: boolean
  [x: string]: any
}

const buttonSize = {
  sm: tw`px-3 text-base h-8`,
  md: tw`px-4 text-lg h-10`,
  lg: tw`px-5 text-lg h-12`,
}

const buttonVariant = {
  primary: tw`bg-key-200 shadow text-white hover:bg-opacity-90 hover:text-white disabled:bg-gray-500   disabled:border-gray-900 `,
  unfilled: tw`bg-transparent border border-solid  border-key-200 text-key-200 hover:text-key-500 hover:border-key-500`,
  text: tw`bg-transparent text-key-200 hover:text-key-100 active:bg-key-900 active:text-key-100`,
}

const buttonBase = tw`flex items-center border-none rounded focus:outline-none focus:border-blue-600 cursor-pointer disabled:cursor-not-allowed`

const svgBase = tw`fill-current  mr-2.5`
const getStyle = ({ variant = 'primary', size = 'md' }: buttonProps) => ({
  ...buttonBase,
  ...svgBase,
  ...buttonVariant[variant],
  ...buttonSize[size],
})

const StyledButton = styled.button<buttonProps>(getStyle)

export default function Button({
  variant = 'primary',
  size = 'lg',
  isIcon = false,
  children,
  disabled = false,
  ...props
}: buttonProps) {
  return (
    <StyledButton disabled={disabled} variant={variant} size={size} {...props}>
      {isIcon && <Icon css={svgBase} name="symbol" />}
      {children}
    </StyledButton>
  )
}
