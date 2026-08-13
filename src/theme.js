/**
 * Theme resolution.
 *
 * The <html data-theme> attribute is set by the inline script in index.html
 * before first paint, so the page never flashes the wrong theme. This module
 * reads and updates that same source of truth.
 *
 * Three states are possible in storage:
 *   'light' / 'dark' -> an explicit user choice, which wins over the OS.
 *   absent           -> follow prefers-color-scheme, live.
 */

export const STORAGE_KEY = 'theme';

const query = () =>
  typeof window !== 'undefined' && window.matchMedia
    ? window.matchMedia('(prefers-color-scheme: dark)')
    : null;

export function systemTheme() {
  return query()?.matches ? 'dark' : 'light';
}

export function storedTheme() {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === 'light' || v === 'dark' ? v : null;
  } catch {
    // Private mode or blocked storage: fall back to the OS preference.
    return null;
  }
}

export function resolveTheme() {
  return storedTheme() ?? systemTheme();
}

export function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', theme === 'dark' ? '#0b0d12' : '#ffffff');
}

export function persistTheme(theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Non-fatal: the theme still applies for this page view.
  }
}

/** Subscribe to OS changes. Only relevant while no explicit choice is stored. */
export function watchSystemTheme(onChange) {
  const mq = query();
  if (!mq) return () => {};
  const handler = (e) => onChange(e.matches ? 'dark' : 'light');
  mq.addEventListener('change', handler);
  return () => mq.removeEventListener('change', handler);
}
