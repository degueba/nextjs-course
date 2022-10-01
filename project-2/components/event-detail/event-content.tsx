import classes from "./event-content.module.css";

interface AppProps {
  children: JSX.Element[] | JSX.Element;
}

function EventContent({ children }: AppProps) {
  return <section className={classes.content}>{children}</section>;
}

export default EventContent;
