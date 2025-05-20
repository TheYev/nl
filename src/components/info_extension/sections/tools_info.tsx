import styles from "../styles/tools_info.module.css"

interface toolsInfoProps {
    head: string,
    desciption: string
    onClick: () => void
}

export const ToolsInfo = (props: toolsInfoProps) => {
    return (
        <div className={styles.toolsInfo} onClick={props.onClick}>
            <h2 className={styles.header}>
                {props.head}
            </h2>
            <div>
                <p>{props.desciption}</p>
            </div>
        </div>
    )
}