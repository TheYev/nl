import styles from "../styles/card.module.css"

interface CardProps {
    header: string,
    subHeader: string
    description: string
}

export const Card = (props: CardProps) => {
    return (
        <div className={styles.card}>
            <h2 className={styles.head}>{props.header}</h2>
            <p className={styles.subHead}>{props.subHeader}</p>
            <p className={styles.description}>{props.description}</p>
        </div>
    )
}