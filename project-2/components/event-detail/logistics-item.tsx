import classes from "./logistics-item.module.css";

interface AppProps {
  icon: React.FunctionComponent | string;
  children: JSX.Element[] | JSX.Element;
}

function LogisticsItem({ icon: Icon, children }: AppProps) {
  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        <Icon />
      </span>
      <span className={classes.content}>{children}</span>
    </li>
  );
}

export default LogisticsItem;
