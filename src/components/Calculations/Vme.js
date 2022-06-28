import React, { useEffect, useState } from "react";

const Vme = ({ data }) => {
  const [bestInvestment, setBestInvestment] = useState("");
  const [bestValue, setBestValue] = useState("")

  useEffect(() => {
    let bestWeightedAverage = 0;
    let tempBestInvestment
    data.map((row) => {
      let totalRowWeightedAverage = 0;
      let currentInv = "";
      let currentValue
      row.map((investment) => {

        totalRowWeightedAverage +=
          (investment.value * parseFloat(investment.scene)) / 100;

        currentInv = investment.inv;
      })
      if (bestWeightedAverage < totalRowWeightedAverage) {
        bestWeightedAverage = totalRowWeightedAverage;
        setBestInvestment(currentInv)
        setBestValue(totalRowWeightedAverage)
        tempBestInvestment = currentInv
      } else if (bestWeightedAverage === totalRowWeightedAverage) {
        setBestInvestment(tempBestInvestment + ', ' + currentInv)
        tempBestInvestment = tempBestInvestment + ', ' + currentInv
      }
    })
  }, [data]);

  return <>{bestInvestment} ({bestValue})</>;
};

export default Vme;
