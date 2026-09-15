import styles from './Geners.module.css';

export default function Geners({ geners, bgColor }) {
  return (
    <div className={styles.geners} style={{ "--gener-bg": bgColor }}>
      {geners?.map((name) => (
        <span key={name}>{name}</span>
      ))}
    </div>
  );
}
