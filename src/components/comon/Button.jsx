import styles from "./Button.module.css";
export default function Button({ children, customClass = "", onclick ,type}) {
  return (
    <button type={type} className={`${styles.btn} ${customClass}`} onClick={onclick}>
      {children}
    </button>
  );
}
