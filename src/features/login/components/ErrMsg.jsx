import styles from './ErrMsg.module.css'
export default function ErrMsg({children}) {
  return (
    <div className={styles.err}>{children}</div>
  )
}
