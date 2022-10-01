import classes from './error-alert.module.css'
interface AppProps {
  children: JSX.Element[] | JSX.Element | string
}
function ErrorAlert({ children }: AppProps) {
  return <div className={classes.alert}>{children}</div>
}

export default ErrorAlert
