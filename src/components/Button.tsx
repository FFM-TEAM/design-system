import React, { ReactNode } from 'react'
import tw, { css } from 'twin.macro'

import { IComponentProps } from '../models/commonProps'

export type ButtonVariants = 'outline' | 'filled' | 'text'
export interface ButtonProps extends IComponentProps {
  variant?: ButtonVariants
  children?: ReactNode
  className?: string
  disabled?: boolean
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void
}

export const ButtonStyle = (props: ButtonProps) => css`
  ${tw`w-40 outline-none p-2 text-center rounded bg-blue-500 text-white`}
  cursor: pointer;
  ${props.variant === 'outline' &&
  css`
    ${tw`border-2 bg-opacity-0 bg-red-100`}
    &:hover,&:focus {
      ${tw`bg-opacity-10`}
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
    }
  `}

  ${props.variant === 'text' &&
  css`
    ${tw`hocus:underline bg-opacity-0 rounded-none`}
  `}
  ${(props.variant ?? 'filled') === 'filled' &&
  css`
    ${tw`text-white hocus:ring-2 bg-opacity-80`}
    ${props.disabled && tw`bg-opacity-60 text-opacity-70`}
  `}
  ${props.disabled && tw`pointer-events-none`}
`

/** Button component. */
export function Button(props: ButtonProps) {
  return (
    <>
      <button
        css={ButtonStyle(props)}
        className={props.className}
        onClick={props.onClick}
      ></button>
    </>
  )
}
