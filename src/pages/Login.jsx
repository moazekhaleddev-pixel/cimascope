import LoginForm from '../features/login/components/LoginForm'
import styles from './Login.module.css'
export default function Login() {
  return (
    <main className={styles.login}>
      <LoginForm/>
    </main>
  )
}
