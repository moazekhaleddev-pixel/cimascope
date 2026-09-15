import { Link } from 'react-router-dom';
import styles from './Logo.module.css'
export default function Logo() {
  return (
    <Link to="/cimascope/home" className={styles.logo}>
      <img src="/assets/logo.png" alt="logo" width={50} height={35}/>
      <span>cima</span>scope
    </Link>
  );
}