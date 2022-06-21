import { useState } from "react";
import CalculatorForm from "../../components/CalculatorForm";
import styles from "./Calculator.module.css";

const Calculator = () => {
  const [scenarios, setScenarios] = useState([]);
  const [investments, setInvestments] = useState([]);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Insira os dados</h1>
      <CalculatorForm
        scenarios={scenarios}
        investments={investments}
        setScenarios={setScenarios}
        setInvestments={setInvestments}
      />
    </div>
  );
};

export default Calculator;
