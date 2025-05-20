import styles from '../styles/comment.module.css'

interface commentProps {
    creator: string,
    creatorPosition: string,
    comment: string,
    isActive: boolean,
}

export const Comment = (props: commentProps) => {

    return (
        <div
            className={styles.comment}
            style={{
                borderRadius: '32px',
                gap: '12px',
                backgroundColor: props.isActive ? '#fff' : '#ffffff00',
                border: '3px solid #fff',
                boxShadow: props.isActive ? '0 0 10px rgba(255, 255, 255, 0)' : 'none',

                transform: `${props.isActive ? 'scale(1)' : 'scale(0.8)'}`,
                opacity: '0.8',
                // height: props.isActive ? '266px' : '200px',
                // width: props.isActive ? '630px' : '800px'
            }}
        >
            <div className={styles.head}>
                <h1 className={styles.creator}>{props.creator}</h1>
                <h2 className={styles.creatorPosition}>{props.creatorPosition}</h2>
            </div>
            <p
                className={styles.commentText}
                style={{
                    WebkitLineClamp: 3,
                }}
            >{props.comment}</p>
        </div>
    )
}