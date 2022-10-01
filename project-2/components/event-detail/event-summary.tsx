import classes from "./event-summary.module.css";

interface AppProps {
  title: string;
}

function EventSummary({ title }: AppProps) {
  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
}

export default EventSummary;
