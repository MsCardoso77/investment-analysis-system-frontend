import styles from './Login.module.css'
import googleLogin from './googleLogin.svg'

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <h1 className={styles.bannerTitle}>Ana<span className={styles.bannerTitleSpan}>Dec</span></h1>
        <p className={styles.bannerParagraph}>Análise de Decisão <br/> aplicada a Investimentos</p>
      </div>
      <div className={styles.login}>
        <h1 className={styles.loginTitle}>Faça a sua análise</h1>
        <button className={styles.loginButton}><img className={styles.loginGoogleImage} src={googleLogin} alt="Sign in with Google" /></button>
      </div>
    </div>
  )
}

export default Login