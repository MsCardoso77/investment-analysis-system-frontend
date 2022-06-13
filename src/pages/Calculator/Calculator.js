import CalculatorForm from '../../components/CalculatorForm'
import styles from './Calculator.module.css'

const Calculator = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Insira os dados</h1>
      <CalculatorForm />
    </div>
  )
}

export default Calculator