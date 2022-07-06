import styles from "./Login.module.css";
import googleLogin from "./googleLogin.svg";
import GoogleLogin from "react-google-login";

const Login = () => {
  const responseSuccessGoogle = (data) => {
    console.log("success", data);
  };
  const responseErrorGoogle = (data) => {
    console.log("error", data);
  };
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <h1 className={styles.bannerTitle}>
          Ana<span className={styles.bannerTitleSpan}>Dec</span>
        </h1>
        <p className={styles.bannerParagraph}>
          Análise de Decisão <br /> aplicada a Investimentos
        </p>
      </div>
      <div className={styles.login}>
        <h1 className={styles.loginTitle}>Faça a sua análise</h1>
        <GoogleLogin
          clientId="239413194410-k7b6lucsr99ug3vpf12f5sepr34dfi20.apps.googleusercontent.com"
          buttonText="Login com google"
          onSuccess={responseSuccessGoogle}
          onFailure={responseErrorGoogle}
        />
      </div>
    </div>
  );
};

export default Login;
