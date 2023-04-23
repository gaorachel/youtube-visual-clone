import styles from "./Chip.module.css";
import classNames from "classnames";

export function Chip({ className, chipText }) {
  return <button className={classNames(styles.chip, className)}>{chipText}</button>;
}
