import styles from "../styles/banner.module.css"

interface bannerProps {
    head: string,
    subHead: string,
    description: string,
    imgPath: string,
}

export const Banner = (props: bannerProps) => {
    return (
        <div
            className={styles.banner}
            style={{
                backgroundImage: `url(${props.imgPath})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
            <div className={styles.main}>
                <h1 className={styles.head}>{props.head}</h1>
                <h2 className={styles.subHead}>{props.subHead}</h2>
                <p className={styles.description}>{props.description}</p>
            </div>
        </div>
    )
}