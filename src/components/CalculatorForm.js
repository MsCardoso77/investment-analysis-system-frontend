import styles from './CalculatorForm.module.css'
import CalculatorTable from './CalculatorTable';


const CalculatorForm = () => {

  const makeScenarios = (e) => {
    const numberOfScenarios = e.target.value;
  }

  const makeInvestments = (e) => {
    const numberOfInvestments = e.target.value;
  }

  return (
    <>
      <form className={styles.form}>
        <input className={styles.input} type="number" min="1" placeholder="Quantidade de cenários" onChange={makeScenarios} />
        <input className={styles.input} type="number" min="1" placeholder="Quantidade de investimentos" onChange={makeInvestments} />
        <input className={styles.button} type="submit" value="Gerar tabela" />
      </form>
    </>

  )
}

export default CalculatorForm