/* eslint-disable no-undef */
import styles from "./Login.module.css";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";

const Login = () => {
  const handleCallbackResponse = async (response) => {
    const userObject = jwt_decode(response.credential);
    try {
      console.log("register");
      const result = await axios.post("http://localhost:3333/user/register", {
        email: userObject.email,
        password: userObject.sub,
        name: userObject.name,
      });
      console.log("data login result", result.data);
      sessionStorage.setItem("id_user", result.data?.id);
    } catch (err) {
      console.log("login");
      const result = await axios.post("http://localhost:3333/user/login", {
        email: userObject.email,
        password: userObject.sub,
        name: userObject.name,
      });
      console.log("data register result", result.data);
      sessionStorage.setItem("id_user", result.data?.id);
    }
  };

  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        "64145929529-au1ruabftskgmtdjeak5pn1q8abc5fej.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);
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
        <div id="signInDiv"></div>
      </div>
    </div>
  );
};

export default Login;
