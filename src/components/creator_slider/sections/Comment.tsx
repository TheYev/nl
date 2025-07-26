import { memo } from "react";
import styles from "../styles/comment.module.css";

// Типи
interface CommentProps {
  creator: string;
  creatorPosition: string;
  comment: string;
  isActive: boolean;
}

// Константи для стилів
const STYLES = {
  borderRadius: "32px",
  gap: "12px",
  border: "3px solid #fff",
  opacity: "0.8",
  webkitLineClamp: 2,
} as const;

// Основний компонент
export const Comment = memo(
  ({ creator, creatorPosition, comment, isActive }: CommentProps) => {
    const containerStyle = {
      borderRadius: STYLES.borderRadius,
      gap: STYLES.gap,
      backgroundColor: isActive ? "#fff" : "#ffffff00",
      border: STYLES.border,
      boxShadow: isActive ? "0 0 10px rgba(255, 255, 255, 0)" : "none",
      transform: isActive ? "scale(1)" : "scale(0.8)",
      opacity: STYLES.opacity,
    };

    const commentTextStyle = {
      WebkitLineClamp: STYLES.webkitLineClamp,
    };

    return (
      <article
        className={styles.comment}
        style={containerStyle}
        aria-live={isActive ? "polite" : undefined}
        aria-label={`Testimonial from ${creator}, ${creatorPosition}`}
      >
        <header className={styles.head}>
          <h2 className={styles.creator}>{creator}</h2>
          <h3 className={styles.creatorPosition}>{creatorPosition}</h3>
        </header>
        <blockquote className={styles.commentText} style={commentTextStyle}>
          {comment}
        </blockquote>
      </article>
    );
  }
);

Comment.displayName = "Comment";
