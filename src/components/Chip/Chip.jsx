import styles from "./Chip.module.css";
import classNames from "classnames";

export function Chip({ children, ...props}) {
  return <button {...props} className={classNames(styles.chip, props.className)}>{children}</button>;
}
