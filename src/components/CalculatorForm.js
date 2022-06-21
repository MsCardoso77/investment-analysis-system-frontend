import { useRef } from "react";
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
            state: { tableResult: investmentSceneData.current },
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
        <div className="d-flex justify-content-center align-items-center">
          <input
            type="radio"
            id="incerteza"
            name="environment"
            value="incerteza"
          />
          <label className="p-2" style={{ marginRight: "10px" }} for="html">
            Incerteza
          </label>
          <input type="radio" id="risco" name="environment" value="risco" />
          <label className="p-2" for="css">
            Risco
          </label>
        </div>
        <CalculatorTable
          scenarios={scenarios}
          investments={investments}
          investmentSceneData={investmentSceneData}
        />
        <button className={styles.button} type="submit">
          calcular
        </button>
      </form>
    </>
  );
};

export default CalculatorForm;
