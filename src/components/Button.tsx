import React, { ReactElement } from 'react'

import { IComponentProps } from '../models/commonProps'

interface IProps extends IComponentProps {
  isCapture?: boolean
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void
  theme?: string
  size?: 'small' | 'medium' | 'large'
  children: React.ReactNode
}

function Button({ children, onClick }: IProps): ReactElement {
  return (
    <button tw="text-key-200" onClick={onClick}>
      {children}
    </button>
  )
}
export default Button
