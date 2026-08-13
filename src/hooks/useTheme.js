import { useCallback, useEffect, useState } from 'react';
import {
  applyTheme,
  persistTheme,
  resolveTheme,
  storedTheme,
  watchSystemTheme,
} from '../theme';

/**
 * Owns the light/dark theme. Reads the value the pre-paint inline script
 * already resolved, keeps <html data-theme> in sync, and follows the OS
 * preference until the user makes an explicit choice.
 */
export default function useTheme() {
  const [theme, setTheme] = useState(() =>
    typeof document !== 'undefined'
      ? document.documentElement.dataset.theme || resolveTheme()
      : 'light',
  );

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(
    () =>
      watchSystemTheme((next) => {
        // An explicit choice outranks the OS.
        if (!storedTheme()) setTheme(next);
      }),
    [],
  );

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      persistTheme(next);
      return next;
    });
  }, []);

  return { theme, toggle };
}
