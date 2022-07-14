import React from 'react'
import styles from './ListarRelatórios.module.css'
import { useNavigate } from "react-router-dom";

const ListarRelatórios = () => {

  const navigate = useNavigate();

  const teste = ["Relatório 1", "Relatório 2", "Relatório 3", 
  "Relatório 4", "Relatório 5", "Relatório 6", "Relatório 7", "Relatório 8"]

  return (
    <div className={styles.grid}>
      {teste.map((summary, index) => {
        return (
          <div className={styles.summary}>{summary}</div>
        )
      } )}

      <div className={styles.addSummary} onClick={() => {
        navigate("/calculator")
      }}>+</div>

    </div>
  )
}

export default ListarRelatórios