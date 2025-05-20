import Image from "next/image"
import styles from "./styles/footer.module.css"
import { Urls } from "@/utils/Urls"

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_header}>
                <div className={styles.access}>
                    <p className={styles.access_text}>Beta access is limited — <br />grab your spot today</p>
                    <a href={Urls.GET_EARLY_ACCESS}>
                        <button className={styles.access_bttn}>Get Early Access</button>
                    </a>
                </div>

            </div>

            <p className={styles.description}>No credit card required. Cancel anytime. Start growing your income with less effort.</p>
            
            <Image
                src="/footer.svg"
                width={196}
                height={196}
                alt="IMG"
            />
            <p className={styles.resume}>© 2025 Neurolover</p>

            
        </footer>
    )
}