import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.navbar}>

      <a className={styles.title} href="/">Ana<span>Dec</span></a>
      <a className={styles.navbarText} href="/">Relatórios</a>
      <a className={styles.navbarText} href="/calculator">Calculator</a>
      <div className={styles.navbarText}
        onClick={() => {
          sessionStorage.clear();
          navigate("/login");
        }}
      >
        Sair
      </div>
      
    </div>
  );
};

export default Navbar;
