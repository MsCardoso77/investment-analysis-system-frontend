import React, { useEffect, useState } from "react";

const Veip = ({ data }) => {
  const [bestInvestment, setBestInvestment] = useState("");

  useEffect(() => {
    let highestValue = 0;
    let weightedPerfectInformation = 0;
    data.forEach((row, index) => {
      console.log("INDEX->", index)
      if (highestValue < row.value){
        highestValue = row.value
      }
    });
  }, [data]);

  return <>{bestInvestment}</>;
};

export default Veip;
