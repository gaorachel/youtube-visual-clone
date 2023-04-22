import styles from "./Chip.module.css";
import classNames from "classnames";

export function Chip({ className, chipText }) {
  return <div className={classNames(styles.chip, className)}>{chipText}</div>;
}
