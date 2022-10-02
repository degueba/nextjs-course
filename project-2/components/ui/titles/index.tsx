import {
  StyleTitleH1,
  StyleTitleH2,
  StyleTitleH3,
  StyleTitleH4,
  StyleTitleH5,
  StyleTitleH6,
  StyleTitleP,
  StyleTitleSmall,
  StyleTitleSpan,
} from './style'
type Props = {
  children: React.ReactNode
  size?:
    | 'slim'
    | 'small'
    | 'small-medium'
    | 'medium'
    | 'large-medium'
    | 'small-large'
    | 'large'
    | 'extra-large'
  status?: 'success' | 'warning' | 'error'
  fontWeight?: 'normal' | 'lighter' | 'bold' | 'bolder'
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'small'
  color?: string
  disabled?: boolean
}

const handleTitleWrapping = (Component: any, props: Props) => {
  return <Component {...props}>{props.children}</Component>
}

export const Title = (props: Props) => {
  const { as } = props

  const TITLES_TYPES = {
    h1: handleTitleWrapping(StyleTitleH1, props),
    h2: handleTitleWrapping(StyleTitleH2, props),
    h3: handleTitleWrapping(StyleTitleH3, props),
    h4: handleTitleWrapping(StyleTitleH4, props),
    h5: handleTitleWrapping(StyleTitleH5, props),
    h6: handleTitleWrapping(StyleTitleH6, props),
    p: handleTitleWrapping(StyleTitleP, props),
    span: handleTitleWrapping(StyleTitleSpan, props),
    small: handleTitleWrapping(StyleTitleSmall, props),
  }

  return TITLES_TYPES[as || 'span']
}
