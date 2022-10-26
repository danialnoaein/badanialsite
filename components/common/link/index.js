import styles from "./Link.module.css";

const Link = ({ href, emoji, title }) => {
  return (
    <a
      href={href}
      className={`${styles.link}`}
    >
      {emoji ? <span>{emoji}</span> : <span>🔗</span>}
      <span className={`${styles.title}`}>{title}</span>
    </a>
  );
};

export default Link;
