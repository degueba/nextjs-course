import Link from 'next/link'
import {
  StyledButtonDefault,
  StyledButtonOutlined,
  StyledButtonPrimary,
  StyledButtonSlim,
} from './style'

type To = {
  pathname?: string
  search?: string
  state?: Object
}

type Props = {
  target?: string
  href?: string
  to?: string | To
  children: React.ReactNode
  disabled?: boolean
  isLoading?: boolean
  size?: 'small' | 'medium' | 'large' | 'extra-large'
}

const handleLinkWrapping = (Component: any, props: Props) => {
  const { href, to, target, children, disabled, isLoading, ...rest } = props
  const button = (
    <Component disabled={disabled || isLoading} {...rest}>
      {children}
    </Component>
  )

  if (href) {
    return (
      <Link href={href} target={target || '_blank'}>
        {button}
      </Link>
    )
  }

  return button
}

export const ButtonDefault = (props: Props) =>
  handleLinkWrapping(StyledButtonDefault, props)

export const ButtonPrimary = (props: Props) =>
  handleLinkWrapping(StyledButtonPrimary, props)

export const ButtonSlim = (props: Props) =>
  handleLinkWrapping(StyledButtonSlim, props)

export const ButtonOutlined = (props: Props) =>
  handleLinkWrapping(StyledButtonOutlined, props)
