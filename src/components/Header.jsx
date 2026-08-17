import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, m } from 'motion/react';
import Icon from './Icon';
import ThemeToggle from './ThemeToggle';
import { navigation, profile, whatsappUrl } from '../data/site';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const [active, setActive] = useState('');
  const toggleRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Track the section in view so the desktop nav reflects position. */
  useEffect(() => {
    const ids = navigation.map((n) => n.href.slice(1));
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // While the hero is on screen no nav item is current: highlighting
        // "About" at scroll position 0 would misreport where the reader is.
        if (window.scrollY < window.innerHeight * 0.45) {
          setActive('');
          return;
        }
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((s) => observer.observe(s));

    // The observer only fires on threshold crossings, so scrolling back into
    // the hero needs its own listener to clear the indicator.
    const onScroll = () => {
      if (window.scrollY < window.innerHeight * 0.45) setActive('');
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  /* Lock scroll and restore focus while the mobile sheet is open. */
  useEffect(() => {
    if (!open) return;
    const toggle = toggleRef.current;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
      toggle?.focus();
    };
  }, [open]);

  return (
    <>
      <header className="site-header" data-stuck={stuck}>
        <div className="shell site-header__inner">
          <a className="brand" href="#top">
            <span className="brand__mark" aria-hidden="true">
              {profile.initials}
            </span>
            <span className="brand__name">
              Surya Aji <span>Andriantoro</span>
            </span>
          </a>

          <nav className="nav" aria-label="Sections">
            <ul className="nav__list">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    className="nav__link"
                    href={item.href}
                    aria-current={active === item.href.slice(1) ? 'true' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__actions">
            <ThemeToggle />

            <a
              className="btn btn--ghost header__cta"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="whatsapp" className="btn__icon" />
              WhatsApp
              <span className="sr-only">(opens in a new tab)</span>
            </a>

            <button
              ref={toggleRef}
              className="nav-toggle"
              type="button"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen(true)}
            >
              <Icon name="menu" />
              <span className="sr-only">Open menu</span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-nav"
            className="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="shell mobile-nav__top">
              <span className="brand">
                <span className="brand__mark" aria-hidden="true">
                  {profile.initials}
                </span>
                <span className="brand__name">Menu</span>
              </span>
              <button
                className="nav-toggle"
                type="button"
                onClick={() => setOpen(false)}
                autoFocus
              >
                <Icon name="close" />
                <span className="sr-only">Close menu</span>
              </button>
            </div>

            <div className="shell mobile-nav__body">
              <ul className="mobile-nav__list">
                {navigation.map((item, i) => (
                  <li key={item.href}>
                    <a
                      className="mobile-nav__link"
                      href={item.href}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                      <span className="mobile-nav__index" aria-hidden="true">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mobile-nav__foot">
                <a
                  className="btn btn--wa"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                >
                  <Icon name="whatsapp" className="btn__icon" />
                  Chat on WhatsApp
                </a>
                <a
                  className="btn btn--ghost"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                >
                  <Icon name="whatsapp" className="btn__icon" />
                  WhatsApp
                </a>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
