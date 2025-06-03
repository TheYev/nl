import Image from "next/image"
import styles from "./styles/footer.module.css"
import { Urls } from "@/utils/Urls"

export const Footer = () => {
    const logos: { [key: string]: string } = {
        "/footer/discord.svg": Urls.DISCORD,
        "/footer/instagram.svg": Urls.INSTAGRAM,
        "/footer/reddit.svg": Urls.REDDIT,
        "/footer/x.svg": Urls.X,
        "/footer/telegram.svg": Urls.TELEGRAM
    }

    return (
        <footer className={styles.footer}>

            <div className={styles.image}>
                <Image
                    src="/footer/footer.svg"
                    width={214}
                    height={214}
                    alt="Woman"
                />

                <div className={styles.images_midle}>
                    {Object.entries(logos).map(([iconPath, href], index) => (
                        <a
                            key={index}
                            href={href}
                        >
                            <Image
                                src={iconPath}
                                width={20}
                                height={20}
                                alt="Social icon"
                            />
                        </a>
                    ))}
                </div>

                <div className={styles.info_desciption_midle}>
                    <div className={styles.resume}>
                        <p className={styles.company_name}>© 2025 Neurolover</p>
                    </div>
                </div>

            </div>

            <div className={styles.info}>
                <div className={styles.footer_header}>
                    <div className={styles.access}>
                        <p className={styles.access_text}>Beta access is limited — grab your spot today</p>
                        <a href={Urls.GET_EARLY_ACCESS}>
                            <button className={styles.access_bttn}>Get Early Access</button>
                        </a>
                    </div>

                    <p className={styles.description}>No credit card required. Cancel anytime. Start growing your income with less effort.</p>
                </div>

                <div className={styles.social}>
                    <div className={styles.info_desciption}>
                        <div className={styles.resume}>
                            <p className={styles.company_name}>© 2025 Neurolover</p>
                        </div>
                    </div>

                    <div className={styles.link}>
                        <a className={styles.links}>Privacy Policy</a>
                        <a className={styles.links}>Terms Of Service</a>
                        <a className={styles.links}>Contact Us</a>
                    </div>

                    <div className={styles.images}>
                        {Object.entries(logos).map(([iconPath, href], index) => (
                            <a
                                key={index}
                                href={href}
                            >
                                <Image
                                    src={iconPath}
                                    width={20}
                                    height={20}
                                    alt="Social icon"
                                />
                            </a>
                        ))}
                    </div>

                </div>
            </div>

        </footer>
    )
}