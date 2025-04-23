import React from "react";

function useEsacpeKey(callback) {
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        callback();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [callback]);
  return <div>useEsacpeKey</div>;
}

export default useEsacpeKey;
