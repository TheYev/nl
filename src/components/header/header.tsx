import Image from "next/image"
import styles from "./styles/header.module.css"
import { Urls } from "@/utils/Urls"

export const Header = () => {
    return (
        <header className={styles.header}>
            <Image
                src="/logo.svg"
                width={200}
                height={44}
                alt="Logo"
            />
            <div className={styles.header_nav}>
                <a href={Urls.ABOUT} className={styles.bttn_link}>
                    <button className={styles.header_bttn}>About</button>
                </a>
                <a href={Urls.PRICING} className={styles.bttn_link}>
                    <button className={styles.header_bttn}>Pricing</button>
                </a>
                <a href={Urls.HOW_IT_WORKS} className={styles.bttn_link}>
                    <button className={styles.header_bttn}>How it works</button>
                </a>
            </div>
        </header>
    )
}