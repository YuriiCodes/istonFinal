import { useEffect, useRef } from 'react';

export const useTimeout = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef<() => void>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const cb = () => savedCallback.current?.();

    if (delay !== null) {
      const id = setTimeout(cb, delay);
      return () => clearTimeout(id);
    }
  }, [delay]);
};
