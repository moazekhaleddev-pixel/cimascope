import styles from "./Title.module.css";

export default function Title({ name }) {
  return <h2 className={styles.tilte}>{name}</h2>;
}
