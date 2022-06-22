import Table from "react-bootstrap/Table";
import Poe from "./Calculations/Poe";
import Vme from "./Calculations/Vme";
import styles from "./RiskEnvironment.module.css";

const RiskEnvironment = ({data}) => {
  return (
    <div className={styles.environmentContainer}>
    <h1>AMBIENTE DE RISCO - RESULTADOS</h1>
    <Table striped bordered hover size="sm" variant="dark">
      <thead>
        <tr>
          <th className="text-center">Critério</th>
          <th className="text-center">VME</th>
          <th className="text-center">POE</th>
          <th className="text-center">VEIP</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className="text-center">Melhor Investimento</th>
          <td className="text-center"> <Vme data={data} /> </td>
          <td className="text-center"> <Poe data={data} /> </td>
          <td className="text-center">  </td>
        </tr>
      </tbody>
    </Table>
  
  </div>
  )
}

export default RiskEnvironment