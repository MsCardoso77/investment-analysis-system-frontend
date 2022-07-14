import React, { useState, useEffect } from "react";
import styles from "./ListarRelatórios.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ListarRelatórios = () => {
  const [summaries, setSummaries] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const id_user = sessionStorage.getItem("id_user");
    axios
      .get(`http://localhost:3333/summary/${id_user}`)
      .then(({ data }) => setSummaries(data));
  }, []);

  const goToSummary = (summary) => [
    navigate("/summary", {
      state: {
        tableResult: summary.table_data,
        environment: summary.environment,
      },
    }),
  ];

  return (
    <div className={styles.grid}>
      {summaries?.map((summary, index) => {
        console.log("summary", summary);
        return (
          <div
            key={index}
            className={styles.summary}
            onClick={() => goToSummary(summary)}
          >
            {summary?.name || "Investimento"}
          </div>
        );
      })}

      <div
        className={styles.addSummary}
        onClick={() => {
          navigate("/calculator");
        }}
      >
        +
      </div>
    </div>
  );
};

export default ListarRelatórios;
