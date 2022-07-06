import React, { useEffect, useState } from "react";

const Vme = ({ data }) => {
  const [bestInvestment, setBestInvestment] = useState("");
  const[bestValue, setBestValue] = useState("");

  useEffect(() => {
    let tempBestInvestment
    let bestWeightedAverage = -999999999999;
    data.map((row) => {
      let totalRowWeightedAverage = 0;
      let currentInv = "";
      row.map((investment) => {
        totalRowWeightedAverage +=
          (investment.value * parseFloat(investment.scene)) / 100;

        currentInv = investment.inv;
      });
      if (bestWeightedAverage < totalRowWeightedAverage) {
        bestWeightedAverage = totalRowWeightedAverage;
        //console.log("Maior média ponderada atual->", bestWeightedAverage);
        setBestInvestment(currentInv)
        setBestValue(bestWeightedAverage)
        tempBestInvestment = currentInv
      } else if (bestWeightedAverage === totalRowWeightedAverage) {
        setBestInvestment(tempBestInvestment + ', ' + currentInv)
        tempBestInvestment = tempBestInvestment + ', ' + currentInv
      }
      //console.log("Valor total da linha->", totalRowWeightedAverage);
    });
  }, [data]);

  return <>{bestInvestment} ({bestValue})</>;
};

export default Vme;
