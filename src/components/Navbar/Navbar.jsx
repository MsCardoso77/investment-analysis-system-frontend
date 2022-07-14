import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <a href="/">Relatórios</a>
      <a href="/calculator">Calculator</a>
      <div
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
