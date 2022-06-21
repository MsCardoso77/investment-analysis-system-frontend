import Table from "react-bootstrap/Table";
import styles from "./UncertaintyEnvironment.module.css";
import MaxiMax from "./Calculations/MaxiMax";
import MaxiMin from "./Calculations/MaxiMin";

const UncertaintyEnvironment = ({data}) => {

/* const [bestValue, setBestValue] = useState('') */

  return (
    <div className={styles.environmentContainer}>
      <h1>AMBIENTE DE INCERTEZA - RESULTADOS</h1>
      <Table striped bordered hover size="sm" variant="dark">
        <thead>
          <tr>
            <th className="text-center">Critério</th>
            <th className="text-center">MaxiMax</th>
            <th className="text-center">MaxiMin</th>
            <th className="text-center">LaPlace</th>
            <th className="text-center">Hurwicz</th>
            <th className="text-center">MiniMax</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="text-center">Melhor Investimento</th>
            <td className="text-center"> <MaxiMax data={data} /> </td>
            <td className="text-center"> <MaxiMin data={data} /> </td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
          </tr>
        </tbody>
      </Table>
    
    </div>
  )
}

export default UncertaintyEnvironment