import { StyleBadge } from './style'

type Props = {
  children: React.ReactNode
  status?: 'success' | 'warning' | 'error' | 'info' | 'default'
  statusColor?:
    | 'blue'
    | 'green'
    | 'red'
    | 'yellow'
    | 'purple'
    | 'indigo'
    | 'pink'
    | 'gray'
  disableBulletPoint?: boolean
}

export const Badge = (props: Props) => {
  return <StyleBadge {...props}>{props.children}</StyleBadge>
}
