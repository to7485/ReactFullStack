import styles from "./Card.module.css";

export default function Card({
  title,
  content,
  variant = "default",
  highlight = false,
  fullWidth = false,
}) {
  const className = [
    styles.card,
    styles[variant],          // default / danger
    highlight && styles.highlight,
    fullWidth && styles.fullWidth,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={className}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.content}>{content}</p>
    </div>
  );
}
