import styles from '@/styles/button.module.css'
import Link from 'next/link'

interface ButtonProps {
  children: JSX.Element[] | JSX.Element | string
  href?: any
  type?: 'button' | 'submit' | 'reset' | undefined
}

function Button({ children, href, type }: ButtonProps) {
  if (href) {
    return (
      <Link href={href}>
        <a className={styles.button}>{children}</a>
      </Link>
    )
  }

  return (
    <button className={styles.buttonOutline} type={type || 'button'}>
      {children}
    </button>
  )
}

export default Button
