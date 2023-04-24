import React from "react";
import classNames from "classnames";
import styles from "./Button.module.css";

export function FullRoundedButton({ children, ...props }) {
  return (
    <button {...props} className={classNames(styles.fullRoundedButton, props.className)}>
      {children}
    </button>
  );
}
