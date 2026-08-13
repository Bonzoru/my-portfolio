import Icon from './Icon';
import useTheme from '../hooks/useTheme';

/**
 * Theme toggle. Renders the icon of the theme it will switch *to*, which is
 * the convention users read fastest, and announces the target in its label.
 */
export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const next = theme === 'dark' ? 'light' : 'dark';

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
    >
      <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
    </button>
  );
}
