import styles from "../styles/card.module.css"

type CardProps = {
    headPercent: string,
    headText: string
    description: string
}

export const Card = (props: CardProps) => {
    return (
        <article className={styles.card}>
            <header className={styles.head}>
                <h3 className={styles.headText}>{props.headText}</h3>
                <p className={styles.headPercent} aria-label={`${props.headText} value`}>{props.headPercent}</p>
            </header>
            <p className={styles.description}>{props.description}</p>
        </article>
    )
}
