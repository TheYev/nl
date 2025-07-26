"use client";

import { memo, useState, useEffect } from "react";
import Link from "next/link";
import cx from "classnames";
import styles from "./styles/header.module.css";

// Константи
const TEXT = {
  logoAlt: "NeuroLover Logo",
  signUp: "Sign Up",
  mobileMenuOpen: "Open mobile menu",
  mobileMenuClose: "Close mobile menu",
} as const;

const NAV_LINKS = [
  { label: "Plugin", href: "/" },
  { label: "Legal", href: "/" },
  { label: "Pricing", href: "/" },
] as const;

// Основний компонент
export const Header = memo(() => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Блокування скролу при відкритому мобільному меню
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.position = "";
      document.body.style.width = "";
    }

    return () => {
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [isMobileMenuOpen]);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main navigation">
        <Link
          href="/"
          tabIndex={0}
          aria-label={TEXT.logoAlt}
          className={styles.logo_link}
        >
          <img
            src="/logo.svg"
            alt={TEXT.logoAlt}
            className={styles.logo}
            width={120}
            height={40}
          />
        </Link>

        <div className={styles.nav_links}>
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              className={styles.header_bttn}
              aria-label={link.label}
              type="button"
            >
              {link.label}
            </button>
          ))}
          <button
            className={cx(styles.header_bttn, styles.header_bttn_sign_up)}
            aria-label={TEXT.signUp}
            type="button"
          >
            {TEXT.signUp}
          </button>
        </div>

        <button
          className={styles.mobile_menu_button}
          onClick={handleToggleMobileMenu}
          aria-label={isMobileMenuOpen ? TEXT.mobileMenuClose : TEXT.mobileMenuOpen}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          type="button"
        >
          <img
            src="/mob_menu.svg"
            alt=""
            className={styles.mobile_menu_icon}
            width={24}
            height={24}
          />
        </button>
      </nav>

      {/* Мобільне меню */}
      {isMobileMenuOpen && (
        <div
          className={styles.mobile_fullscreen_menu}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
        >
          <div className={styles.mobile_menu_overlay} onClick={handleCloseMobileMenu} />
          <div
            className={styles.mobile_menu_content}
            aria-label="Mobile navigation"
          >
            <button
              className={styles.mobile_menu_close}
              onClick={handleCloseMobileMenu}
              aria-label={TEXT.mobileMenuClose}
              type="button"
            >
              <img
                src="/close.svg"
                alt=""
                className={styles.close_icon}
                width={24}
                height={24}
              />
            </button>

            <div className={styles.mobile_nav_links}>
              {NAV_LINKS.map((link) => (
                <button
                  key={link.label}
                  className={styles.mobile_nav_link}
                  onClick={handleCloseMobileMenu}
                  aria-label={link.label}
                  type="button"
                >
                  {link.label}
                </button>
              ))}
              <button
                className={cx(styles.mobile_nav_link, styles.mobile_sign_up)}
                onClick={handleCloseMobileMenu}
                aria-label={TEXT.signUp}
                type="button"
              >
                {TEXT.signUp}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
});

Header.displayName = "Header";
