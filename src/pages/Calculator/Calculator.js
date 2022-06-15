import { useState } from "react";
import CalculatorForm from "../../components/CalculatorForm";
import CalculatorTable from "../../components/CalculatorTable";
import styles from "./Calculator.module.css";

const Calculator = () => {
  const [numberOfScenarios, setNumberOfScenarios] = useState(0);
  const [numberOfInvestments, setNumberOfInvestments] = useState(0);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Insira os dados</h1>
      <CalculatorForm
        setNumberOfScenarios={setNumberOfScenarios}
        setNumberOfInvestments={setNumberOfInvestments}
      />
      <CalculatorTable
        numberOfScenarios={numberOfScenarios}
        numberOfInvestments={numberOfInvestments}
      />
    </div>
  );
};

export default Calculator;
