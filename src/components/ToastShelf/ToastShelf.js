import React from "react";

import Toast from "../Toast";
import { ToastContext } from "../ToastProvider/ToastProvider";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toasts, handleDismissToast } =
    React.useContext(ToastContext);

  return (
    <ol className={styles.wrapper}>
      <li className={styles.toastWrapper}>
        {toasts.map((toast) => {
          return (
            <Toast
              variant={toast.variant}
              message={toast.message}
              key={toast.id}
              handleDismissToast={handleDismissToast}
              id={toast.id}
            />
          );
        })}
      </li>
    </ol>
  );
}

export default ToastShelf;
