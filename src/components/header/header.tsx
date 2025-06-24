"use client";
import cx from "classnames";
import { useState } from "react";
import Image from "next/image";
import styles from "./styles/header.module.css";
import { Urls } from "@/utils/Urls";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Image src="/logo.svg" width={200} height={44} alt="Logo" />

      <nav className={styles.header_nav}>
        <a href={Urls.PLUGIN} className={styles.bttn_link}>
          <button className={styles.header_bttn}>Plugin</button>
        </a>
        <a href={Urls.PRICING} className={styles.bttn_link}>
          <button className={styles.header_bttn}>Pricing</button>
        </a>
        <button className={cx(styles.header_bttn, styles.header_bttn_sign_up)}>
          Sign Up
        </button>
      </nav>

      {/* mobile */}
      <div
        className={styles.mobile_menu_icon}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <Image src="/mob_menu.svg" width={12} height={12} alt="Menu" />
      </div>

      {menuOpen && (
        <nav className={styles.mobile_dropdown}>
          <a href={Urls.PLUGIN} className={styles.dropdown_link}>
            Plugin
          </a>
          <a href={Urls.LEGAL} className={styles.dropdown_link}>
            Legal
          </a>
          <a href={Urls.PRICING} className={styles.dropdown_link}>
            Pricing
          </a>
          <a href={Urls.SING_UP} className={styles.dropdown_link}>
            Sign Up
          </a>
        </nav>
      )}
    </header>
  );
};
