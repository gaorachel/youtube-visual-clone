import React from "react";
import classNames from "classnames";
import styles from "./Button.module.css";

export function FullRoundedButton({ onClick, className, buttonText }) {
  return (
    <button onClick={onClick} className={classNames(styles.fullRoundedButton, className)}>
      {buttonText}
    </button>
  );
}
