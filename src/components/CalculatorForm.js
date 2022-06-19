import styles from "./CalculatorForm.module.css";

const CalculatorForm = ({ setScenarios, setInvestments }) => {
  const makeScenarios = (e) => {
    const data = e.target.value?.split(",")?.map((v) => v.trim());
    setScenarios({ total: data.length, data });
  };

  const makeInvestments = (e) => {
    const data = e.target.value?.split(",")?.map((v) => v.trim());
    setInvestments({ total: data.length, data });
  };

  return (
    <>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <input
          className={styles.input}
          type="string"
          placeholder="Probabilidade dos cenários Ex: 12%, 25%..."
          onChange={makeScenarios}
        />
        <input
          className={styles.input}
          type="string"
          placeholder="Investimetos Ex: Inv1, Inv2..."
          onChange={makeInvestments}
        />
        <input className={styles.button} type="submit" value="Gerar tabela" />
      </form>
    </>
  );
};

export default CalculatorForm;
