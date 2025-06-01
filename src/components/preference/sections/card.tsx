import styles from "../styles/card.module.css"

type CardProps = {
    headPercent: string,
    headText: string
    description: string
}

export const Card = (props: CardProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.head}>
                <h2 className={styles.headText}>{props.headText}</h2>
                <h2 className={styles.headPercent}>{props.headPercent}</h2>
            </div>
            <p className={styles.description}>{props.description}</p>
        </div>
    )
}