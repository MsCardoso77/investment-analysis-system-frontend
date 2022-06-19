// import { Table } from "react-bootstrap";

import { useEffect, useState } from "react";

const CalculatorTable = ({ scenarios, investments }) => {
  const [sceneInvestment, setSceneInvestment] = useState([]);

  useEffect(() => {
    // [[0,0,0], [0,0,0], [0,0,0]]
    // Array();
    if (investments?.data && scenarios?.data) {
      const data = [];
      investments.data.map((inv) => {
        console.log("inv ->", inv);
        if (inv) {
          const rows = [];

          scenarios.data.map((scene) => {
            if (scene) {
              console.log("scene ->", scene);
              rows.push({
                scene,
                inv,
                value: 0,
              });
            }
          });
          data.push(rows);
        }
      });
      setSceneInvestment(data);
    }
  }, [scenarios, investments]);

  return (
    <>
      {!!sceneInvestment.length && (
        <table>
          <tr>
            <th></th>
            {scenarios.data.map((scene) => (
              <th>{scene}</th>
            ))}
          </tr>

          {sceneInvestment.map((rows, index) => {
            const data = rows.map((row) => (
              <td>
                <div contenteditable="true">{row.value}</div>
              </td>
            ));
            const createTableRow = () => (
              <tr>
                <td>{investments.data[index]}</td>
                {data}
              </tr>
            );
            return createTableRow();
          })}
        </table>
      )}
    </>
  );
};

export default CalculatorTable;
