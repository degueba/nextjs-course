import styles from "@/styles/button.module.css";
import Link from "next/link";

interface ButtonProps {
  children: JSX.Element[] | JSX.Element | string;
  href: any;
}

function Button({ children, href }: ButtonProps) {
  return (
    <Link href={href}>
      <a className={styles.button}>{children}</a>
    </Link>
  );
}

export default Button;
