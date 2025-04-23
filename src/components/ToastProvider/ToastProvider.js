import React from "react";
import useEsacpeKey from "../../hooks/useEsacpeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const handleEscape = React.useCallback(() => {
    setToasts([]);
  });
  useEsacpeKey(handleEscape);

  function handleAddToast(variant, message) {
    const newToast = {
      variant: variant,
      message: message,
      id: crypto.randomUUID(),
    };

    const nextToasts = [...toasts, newToast];
    setToasts(nextToasts);
  }

  function handleDismissToast(id) {
    const nextToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });

    setToasts(nextToasts);
  }

  const [toasts, setToasts] = React.useState([]);
  return (
    <ToastContext.Provider
      value={{ toasts, setToasts, handleAddToast, handleDismissToast }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
