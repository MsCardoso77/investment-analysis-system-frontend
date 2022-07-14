import Table from "react-bootstrap/Table";
import styles from "./UncertaintyEnvironment.module.css";
import MaxiMax from "./Calculations/MaxiMax";
import MaxiMin from "./Calculations/MaxiMin";
import LaPlace from "./Calculations/LaPlace";
import Hurwicz from "./Calculations/Hurwicz";
import MiniMax from "./Calculations/MiniMax";

const UncertaintyEnvironment = ({data}) => {

/* const [bestValue, setBestValue] = useState('') */

  return (
    <div className={styles.environmentContainer}>
      <h1>AMBIENTE DE INCERTEZA</h1>
      <Table striped bordered hover size="sm" variant="dark">
          <thead>
              <tr>
                <th className="text-center" colSpan={data[0].length+1}>DADOS DE ENTRADA</th>
              </tr>
              <tr>
                <th></th>
                {data[0].map((row, index) => {    
                  return (
                    <th key={Math.round(Math.random() * 10000)} className="text-center">C{index+1} ({row.scene})</th>
                  )
                })}
              </tr>
          </thead>
          <tbody>
          {data.map((row, index) => {
            return (
              <tr key={Math.round(Math.random() * 10000)}>
                <td key={Math.round(Math.random() * 10000)} className="text-center">INV{index+1}</td>
                {row.map((investment) => {
                  return (
                    <td key={Math.round(Math.random() * 10000)} className="text-center">{investment.value}</td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </Table>

      <Table striped bordered hover size="sm" variant="dark">
        <thead>
          <tr>
           <th className="text-center" colSpan={6}>RESULTADOS</th>
          </tr>
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
            <td className="text-center"> <LaPlace data={data} /> </td>
            <td className="text-center"><Hurwicz data={data} /> </td>
            <td className="text-center"><MiniMax data={data} /></td>
          </tr>
        </tbody>
      </Table>
    
    </div>
  )
}

export default UncertaintyEnvironment