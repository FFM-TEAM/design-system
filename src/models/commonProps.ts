export interface IComponentProps {
  isCapturing?: boolean
  className?: string
  style?: Record<string, unknown>
  margin?: [number, number?, number?, number?]
  padding?: [number, number?, number?, number?]
}
export interface ITypoProps {
  style?: React.CSSProperties
  children: React.ReactNode
}
