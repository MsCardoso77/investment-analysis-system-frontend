import Table from "react-bootstrap/Table";
import Poe from "./Calculations/Poe";
import Veip from "./Calculations/Veip";
import Vme from "./Calculations/Vme";
import styles from "./RiskEnvironment.module.css";

const RiskEnvironment = ({ data }) => {
  return (
    <div className={styles.environmentContainer}>
      <h1>AMBIENTE DE RISCO</h1>
      <Table striped bordered hover size="sm" variant="dark">
        <thead>
          <tr>
            <th className="text-center" colSpan={data[0].length+1}>
              DADOS DE ENTRADA
            </th>
          </tr>
          <tr>
            <th></th>
            {data[0].map((row, index) => {
              return (
                <th
                  key={Math.round(Math.random() * 10000)}
                  className="text-center"
                >
                  C{index + 1} ({row.scene})
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => {
            return (
              <tr key={Math.round(Math.random() * 10000)}>
                <td
                  key={Math.round(Math.random() * 10000)}
                  className="text-center"
                >
                  INV{index + 1}
                </td>
                {row.map((investment) => {
                  return (
                    <td
                      key={Math.round(Math.random() * 10000)}
                      className="text-center"
                    >
                      {investment.value}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>

      <Table striped bordered hover size="sm" variant="dark">
        <thead>
          <tr>
            <th className="text-center" colSpan={6}>
              RESULTADOS
            </th>
          </tr>
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
            <td className="text-center">
              {" "}
              <Vme data={data} />{" "}
            </td>
            <td className="text-center">
              {" "}
              <Poe data={data} />{" "}
            </td>

            <td className="text-center">
              <Veip data={data} />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default RiskEnvironment;
