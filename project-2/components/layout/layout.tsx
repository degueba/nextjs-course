import styles from '@/styles/main.module.css'
import MainHeader from './main-header'

interface LayoutProps {
  children: JSX.Element[] | JSX.Element
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <MainHeader />
      <main className={styles.main}>{children}</main>
    </div>
  )
}

export default Layout
