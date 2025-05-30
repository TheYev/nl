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
                <a href={Urls.PLUGIN} className={styles.bttn_link}>
                    <button className={styles.header_bttn}>Plugin</button>
                </a>
                <a href={Urls.LEGAL} className={styles.bttn_link}>
                    <button className={styles.header_bttn}>Legal</button>
                </a>
                <a href={Urls.PRICING} className={styles.bttn_link}>
                    <button className={styles.header_bttn}>Pricing</button>
                </a>
                <a href={Urls.SING_UP} className={styles.bttn_link}>
                    <button className={styles.header_bttn}>Sing Up</button>
                </a>
            </div>
        </header>
    )
}