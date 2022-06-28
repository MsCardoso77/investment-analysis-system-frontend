import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CalculatorForm.module.css";
import CalculatorTable from "./CalculatorTable";

const CalculatorForm = ({
  scenarios,
  investments,
  setScenarios,
  setInvestments,
}) => {
  const navigate = useNavigate();
  const investmentSceneData = useRef(null);
  const [environment, setEnvironment] = useState("Incerteza");
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
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          console.log("onSubmit -> ", investmentSceneData);
          // need an id in future
          navigate("/summary", {
            state: { tableResult: investmentSceneData.current, environment },
          });
        }}
      >
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
        <div
          className="d-flex justify-content-center align-items-center"
          onChange={(e) => setEnvironment(e.target.value)}
        >
          <input
            type="radio"
            id="incerteza"
            name="environment"
            value="Incerteza"
            checked
            defaultCheck={environment === "Incerteza"}
          />
          <label
            className="p-2"
            style={{ marginRight: "10px", color: "#d9d9d9" }}
            for="html"
          >
            Incerteza
          </label>
          <input
            type="radio"
            id="risco"
            name="environment"
            value="Risco"
            defaultCheck={environment === "Risco"}
          />
          <label
            className="p-2"
            for="css"
            style={{ marginRight: "10px", color: "#d9d9d9" }}
          >
            Risco
          </label>
        </div>
        <CalculatorTable
          scenarios={scenarios}
          investments={investments}
          investmentSceneData={investmentSceneData}
        />
        <button className={styles.button} type="submit">
          Calcular
        </button>
      </form>
    </>
  );
};

export default CalculatorForm;
