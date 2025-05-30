import Image from "next/image"
import styles from "./styles/intro.module.css"
import { Urls } from "@/utils/Urls"

export const Intro = () => {
    return (
        <div className={styles.intro}>
            <Image
                src="block_1.svg"
                alt="Woman"
                width={580}
                height={580}
                className={styles.image}
            />

            <div className={styles.info_block}>
                <h1 className={styles.head}>Turn More Chats into Cash — AI Messaging for OnlyFans& Fansly</h1>
                <p className={styles.info}>Trusted by top 1% creators to boost revenue and save time. Our AI assistant keeps fans engaged, increases tips, and drives sales — all through seamless Chrome extension integration.</p>
                <div className={styles.bttn_info}>
                    <a href={Urls.GET_EARLY_ACCESS}>
                        <button className={styles.bttn}>Get Early Access</button>
                    </a>
                    <p className={styles.bttn_description}>Beta access is limited — reserve your spot now.</p>
                </div>
            </div>
        </div>
    )
}