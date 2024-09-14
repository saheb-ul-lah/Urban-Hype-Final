// src/hooks/useEventListener.js
import { useEffect } from 'react';

const useEventListener = (event, handler, element = window) => {
  useEffect(() => {
    element.addEventListener(event, handler);

    return () => {
      element.removeEventListener(event, handler);
    };
  }, [event, handler, element]);
};

export default useEventListener;
