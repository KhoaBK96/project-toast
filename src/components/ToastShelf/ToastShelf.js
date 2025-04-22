import React, { useState } from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, handleDismissToast }) {
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
