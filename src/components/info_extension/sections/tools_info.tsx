import { memo } from "react";
import styles from "../styles/tools_info.module.css";

// Типи
interface ToolsInfoProps {
  head: string;
  desciption: string;
  onClick: () => void;
  isActive: boolean;
}

// Основний компонент
export const ToolsInfo = memo(
  ({ head, desciption, onClick, isActive }: ToolsInfoProps) => {
    return (
      <div
        className={`${styles.toolsInfo} ${isActive ? styles.active : ""}`}
        onClick={onClick}
        role="button"
        tabIndex={0}
        aria-pressed={isActive}
        aria-label={`${head} tool option`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onClick();
          }
        }}
      >
        <h2 className={styles.header}>{head}</h2>
        <p className={styles.desciption}>{desciption}</p>
      </div>
    );
  }
);

ToolsInfo.displayName = "ToolsInfo";
