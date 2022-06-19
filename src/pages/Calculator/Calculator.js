import { useState } from "react";
import CalculatorForm from "../../components/CalculatorForm";
import CalculatorTable from "../../components/CalculatorTable";
import styles from "./Calculator.module.css";

const Calculator = () => {
  const [scenarios, setScenarios] = useState({});
  const [investments, setInvestments] = useState({});
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Insira os dados</h1>
      <CalculatorForm
        setScenarios={setScenarios}
        setInvestments={setInvestments}
      />
      <CalculatorTable scenarios={scenarios} investments={investments} />
    </div>
  );
};

export default Calculator;
