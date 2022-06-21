import styles from "./CalculatorTable.module.css";
import Table from "react-bootstrap/Table";

import { useEffect, useState } from "react";

const CalculatorTable = ({ scenarios, investments, investmentSceneData }) => {
  const [sceneInvestment, setSceneInvestment] = useState([]);

  useEffect(() => {
    if (investments?.data && scenarios?.data) {
      const data = [];
      investments.data.map((inv, i) => {
        console.log("inv ->", inv);
        if (inv) {
          const rows = [];
          scenarios.data.map((scene, j) => {
            if (scene) {
              console.log("scene ->", scene);
              // Basically create a matrix that have all table field data, log data to have a clue
              rows.push({
                _id_row: i + 1,
                _id_col: j + 1,
                scene,
                inv,
                value: 0,
              });
            }
          });
          data.push(rows);
        }
      });
      console.log("data ->", data);
      setSceneInvestment(data);
      investmentSceneData.current = data;
    }
  }, [scenarios, investments]);

  return (
    <>
      {!!sceneInvestment.length && (
        <div className={styles.tableContainer}>
          <Table striped bordered hover size="sm" variant="dark">
            <thead>
              <tr>
                <th></th>
                {scenarios.data.map((scene) => (
                  <th className="text-center">{scene}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sceneInvestment.map((rows, index) => {
                const data = rows.map((row) => (
                  <td
                    key={Math.round(Math.random() * 10000)}
                    className="text-center"
                  >
                    <div
                      contenteditable="true"
                      row={row?._id_row}
                      col={row?._id_col}
                      onInput={(e) => {
                        investmentSceneData.current =
                          investmentSceneData.current.map((inv) =>
                            inv.map((data) => {
                              const row = parseInt(
                                e.target.getAttribute("row")
                              );
                              const col = parseInt(
                                e.target.getAttribute("col")
                              );
                              if (
                                row === data._id_row &&
                                col === data._id_col
                              ) {
                                return {
                                  ...data,
                                  value: parseFloat(e.target.textContent),
                                };
                              }
                              return data;
                            })
                          );
                        return;
                      }}
                    >
                      {row.value}
                    </div>
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
            </tbody>
          </Table>
        </div>
      )}
    </>
  );
};

export default CalculatorTable;
